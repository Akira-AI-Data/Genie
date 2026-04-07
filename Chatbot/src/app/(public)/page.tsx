import Link from 'next/link';
import { Sparkles, Zap, Shield, MessageSquare } from 'lucide-react';

export default function LandingPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-navy text-white py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-brand-teal-light text-sm mb-8">
            <Sparkles className="w-4 h-4" />
            Powered by Claude AI
          </div>
          <h1 className="text-5xl font-bold tracking-tight mb-6">
            Meet <span className="text-brand-teal">Genie</span>
          </h1>
          <p className="text-xl text-brand-text-muted mb-10 max-w-xl mx-auto">
            Your intelligent AI assistant by Akira Data. Fast, precise answers
            for writing, analysis, coding, and more.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/login"
              className="px-8 py-3 rounded-xl text-white font-medium"
              style={{
                background:
                  'linear-gradient(135deg, #1B52C4, #3BBFB0, #85DDD0)',
              }}
            >
              Get Started Free
            </Link>
            <Link
              href="/pricing"
              className="px-8 py-3 rounded-xl border border-white/20 text-white font-medium hover:bg-white/10 transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-brand-bg-light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Why Genie?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl border border-brand-border-light bg-white">
              <div className="w-10 h-10 rounded-xl bg-brand-teal/10 flex items-center justify-center mb-4">
                <Zap className="w-5 h-5 text-brand-teal" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">
                Lightning Fast
              </h3>
              <p className="text-sm text-muted">
                Get instant responses powered by Claude AI. No waiting, no
                delays.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-brand-border-light bg-white">
              <div className="w-10 h-10 rounded-xl bg-brand-teal/10 flex items-center justify-center mb-4">
                <MessageSquare className="w-5 h-5 text-brand-teal" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">
                Natural Conversations
              </h3>
              <p className="text-sm text-muted">
                Chat naturally with context-aware AI that understands your needs.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-brand-border-light bg-white">
              <div className="w-10 h-10 rounded-xl bg-brand-teal/10 flex items-center justify-center mb-4">
                <Shield className="w-5 h-5 text-brand-teal" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">
                Private & Secure
              </h3>
              <p className="text-sm text-muted">
                Your conversations stay private. Enterprise-grade security by
                default.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-6 bg-brand-navy text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          Ready to get started?
        </h2>
        <p className="text-brand-text-muted mb-8">
          Try Genie today. No credit card required.
        </p>
        <Link
          href="/login"
          className="inline-block px-8 py-3 rounded-xl text-white font-medium"
          style={{
            background: 'linear-gradient(135deg, #1B52C4, #3BBFB0, #85DDD0)',
          }}
        >
          Start Chatting
        </Link>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-brand-navy-light text-center">
        <p className="text-sm text-brand-text-secondary">
          &copy; 2026 Akira Data. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
