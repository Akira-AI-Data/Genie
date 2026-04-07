import Link from 'next/link';
import { Sparkles, Zap, Shield, MessageSquare } from 'lucide-react';

export default function LandingPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-navy text-white py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-brand-teal flex items-center justify-center">
              <Sparkles className="w-9 h-9 text-white" />
            </div>
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
          <h2 className="text-3xl font-bold text-center mb-4 text-foreground">
            Why Genie?
          </h2>
          <p className="text-center text-muted mb-12 max-w-lg mx-auto">
            Everything you need in an AI assistant, starting free with Pro.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl border border-brand-border-light bg-white">
              <div className="w-10 h-10 rounded-xl bg-brand-teal/10 flex items-center justify-center mb-4">
                <Zap className="w-5 h-5 text-brand-teal" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">
                Lightning Fast
              </h3>
              <p className="text-sm text-muted">
                Get instant responses with no waiting or delays.
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
                Your conversations stay private with enterprise-grade security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Preview */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-foreground mb-8">
            Choose your plan
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-brand-border-light">
              <div className="w-8 h-8 rounded-lg bg-brand-teal/10 flex items-center justify-center mx-auto mb-3">
                <Zap className="w-4 h-4 text-brand-teal" />
              </div>
              <h3 className="font-bold text-lg text-foreground">Pro</h3>
              <p className="text-2xl font-bold text-foreground mt-1">$9.99<span className="text-sm font-normal text-muted">/mo</span></p>
              <p className="text-sm text-muted mt-2">Fast responses for everyday tasks</p>
            </div>
            <div className="p-6 rounded-2xl border-2 border-brand-teal bg-brand-navy text-white relative">
              <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-brand-teal text-brand-navy text-xs font-bold rounded-full">
                Popular
              </div>
              <div className="w-8 h-8 rounded-lg bg-brand-teal/20 flex items-center justify-center mx-auto mb-3">
                <Sparkles className="w-4 h-4 text-brand-teal-light" />
              </div>
              <h3 className="font-bold text-lg">Max</h3>
              <p className="text-2xl font-bold mt-1">$19.99<span className="text-sm font-normal text-brand-text-muted">/mo</span></p>
              <p className="text-sm text-brand-text-muted mt-2">Advanced reasoning & analysis</p>
            </div>
          </div>
          <Link
            href="/pricing"
            className="inline-block mt-8 text-sm text-accent hover:underline font-medium"
          >
            Compare plans in detail &rarr;
          </Link>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-6 bg-brand-navy text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          Ready to get started?
        </h2>
        <p className="text-brand-text-muted mb-8">
          Sign up and start chatting in seconds.
        </p>
        <Link
          href="/login"
          className="inline-block px-8 py-3 rounded-xl text-white font-medium"
          style={{
            background: 'linear-gradient(135deg, #1B52C4, #3BBFB0, #85DDD0)',
          }}
        >
          Start Chatting Free
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
