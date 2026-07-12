"use client";

import { useState, type ChangeEvent, type FormEvent } from 'react';
import { API_BASE } from '@/lib/api';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Submitting...');

    try {
      const response = await fetch(`${API_BASE}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          address: '',
          monthly_bill: '',
          property_type: 'Residential',
          message: form.message
        })
      });

      if (response.ok) {
        setStatus('Your message was sent successfully.');
        setForm({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('Unable to send message. Please try again later.');
      }
    } catch (error) {
      setStatus('Unable to send message. Check your connection and try again.');
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <section className="rounded-3xl bg-slate-900/80 p-10 shadow-soft">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-brand-yellow/80">Contact</p>
              <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl">Get in touch with our solar experts</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Have a question or need a custom solar proposal? Our support team is ready to help with consultations, quotes, and service inquiries.
              </p>
              <div className="mt-10 space-y-6 rounded-3xl border border-white/10 bg-slate-950/80 p-8">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Phone</p>
                  <p className="mt-2 text-white">+78793 24402</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Email</p>
                  <p className="mt-2 text-white">info@sawariyasolar.com</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Office</p>
                  <p className="mt-2 text-white">Khandwa Naka,Indore, Madhya Pradesh</p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-8 shadow-xl">
              <h2 className="text-2xl font-semibold text-white">Send a message</h2>
              <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                <input
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-3 text-white outline-none focus:border-brand-blue/60"
                  required
                />
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-3 text-white outline-none focus:border-brand-blue/60"
                  required
                />
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className="w-full rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-3 text-white outline-none focus:border-brand-blue/60"
                  required
                />
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Message"
                  className="w-full rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-3 text-white outline-none focus:border-brand-blue/60"
                />
                <button type="submit" className="inline-flex w-full items-center justify-center rounded-2xl bg-brand-yellow px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-yellow-300">
                  Send Message
                </button>
                {status && <p className="text-sm text-slate-300">{status}</p>}
              </form>
            </div>
          </div>
          <div className="mt-10 rounded-3xl border border-white/10 bg-slate-950/80 p-8">
            <h2 className="text-2xl font-semibold text-white">Office location</h2>
            <p className="mt-4 text-sm text-slate-500">
              <a
                href="https://maps.app.goo.gl/C9vpxXcDHrmAughA9?g_st=aw"
                target="_blank"
                rel="noreferrer"
                className="font-bold text-brand-blue hover:underline"
              >
                https://maps.app.goo.gl/C9vpxXcDHrmAughA9?g_st=aw
              </a>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
