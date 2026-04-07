import Anthropic from '@anthropic-ai/sdk';
import { NextRequest } from 'next/server';
import { auth } from '@/lib/auth';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return new Response('Unauthorized', { status: 401 });
    }

    const { messages, model } = await req.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return new Response('Messages are required', { status: 400 });
    }

    // Build Anthropic messages format
    const anthropicMessages = messages.map(
      (msg: { role: string; content: string; files?: { type: string; content: string }[] }) => {
        if (msg.files && msg.files.length > 0 && msg.role === 'user') {
          const content: Anthropic.MessageCreateParams['messages'][0]['content'] = [];

          for (const file of msg.files) {
            if (file.type.startsWith('image/')) {
              content.push({
                type: 'image',
                source: {
                  type: 'base64',
                  media_type: file.type as 'image/jpeg' | 'image/png' | 'image/gif' | 'image/webp',
                  data: file.content,
                },
              });
            }
          }

          content.push({ type: 'text', text: msg.content || 'What is in this image?' });
          return { role: msg.role as 'user' | 'assistant', content };
        }

        return { role: msg.role as 'user' | 'assistant', content: msg.content };
      }
    );

    const stream = anthropic.messages.stream({
      model: model || 'claude-sonnet-4-20250514',
      max_tokens: 4096,
      system:
        'You are Genie, an AI assistant by Akira AI Data. You are helpful, harmless, and honest. You provide clear, accurate, and thoughtful responses.',
      messages: anthropicMessages,
    });

    const encoder = new TextEncoder();

    const readableStream = new ReadableStream({
      async start(controller) {
        try {
          for await (const event of stream) {
            if (
              event.type === 'content_block_delta' &&
              event.delta.type === 'text_delta'
            ) {
              const chunk = `data: ${JSON.stringify({ text: event.delta.text })}\n\n`;
              controller.enqueue(encoder.encode(chunk));
            }
          }
          controller.enqueue(encoder.encode('data: [DONE]\n\n'));
          controller.close();
        } catch (error) {
          const errorMessage =
            error instanceof Error ? error.message : 'An error occurred';
          controller.enqueue(
            encoder.encode(`data: ${JSON.stringify({ error: errorMessage })}\n\n`)
          );
          controller.close();
        }
      },
    });

    return new Response(readableStream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
      },
    });
  } catch (error) {
    console.error('Chat API error:', error);
    return new Response('Internal server error', { status: 500 });
  }
}
