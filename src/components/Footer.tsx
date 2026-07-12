"use client";

import Link from 'next/link';
import { useState, type FormEvent } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubscribe = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) {
      setStatus('Please enter your email to subscribe.');
      return;
    }

    setStatus('Thank you! You are subscribed.');
    setEmail('');
  };

  return (
    <footer className="mt-20 border-t border-white/10 bg-slate-950/95 py-12 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <h3 className="text-xl font-semibold text-white">Sawariya Solar</h3>
          <p className="mt-4 text-sm leading-7 text-slate-400">
            Sustainable solar solutions for homes, businesses, and industries. Fast installation, financing support, and long-term maintenance.
          </p>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-[0.24em] text-brand-green">Quick links</h4>
          <div className="mt-5 space-y-3 text-sm">
            <Link href="/about" className="block hover:text-white">About Us</Link>
            <Link href="/services" className="block hover:text-white">Services</Link>
            <Link href="/products" className="block hover:text-white">Products</Link>
            <Link href="/contact" className="block hover:text-white">Contact</Link>
          </div>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-[0.24em] text-brand-blue">Newsletter</h4>
          <p className="mt-5 text-sm leading-7 text-slate-400">Subscribe for solar updates, energy savings tips, and subsidy news.</p>
          <form className="mt-5 flex flex-col gap-3" onSubmit={handleSubscribe}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="w-full rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-3 text-white outline-none focus:border-brand-blue/60"
            />
            <button type="submit" className="rounded-2xl bg-brand-green px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-brand-green/90">
              Subscribe
            </button>
            {status && <p className="text-sm text-slate-400">{status}</p>}
          </form>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl px-4 text-center text-xs text-slate-500 sm:px-6 lg:px-8">
        © 2026 Sawariya Solar. All rights reserved.
      </div>
    </footer>
  );
}
