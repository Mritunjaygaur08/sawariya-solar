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
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Quick contact</p>
                  <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                    <a
                      href="https://wa.me/917879324402?text=Hello%20Sawariya%20Solar"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-2xl bg-emerald-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400"
                    >
                      <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.52 3.48A11.9 11.9 0 0012 0C5.37 0 .02 5.35.02 12c0 2.12.55 4.2 1.6 6.02L0 24l5.96-1.56A11.95 11.95 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.2-3.48-8.52zm-8.48 17.1c-1.79 0-3.55-.48-5.08-1.4l-.36-.22-3.54.93.94-3.45-.23-.37A9.4 9.4 0 012.6 12.03c0-5.16 4.2-9.36 9.36-9.36 2.5 0 4.84.98 6.61 2.75a9.26 9.26 0 012.75 6.61c0 5.16-4.2 9.36-9.36 9.36zm5.14-7.43c-.28-.14-1.66-.82-1.92-.92-.26-.1-.45-.14-.64.14-.18.28-.68.92-.83 1.11-.15.18-.3.2-.56.07-.26-.14-1.09-.4-2.08-1.28-.77-.68-1.29-1.52-1.44-1.78-.15-.26-.02-.4.12-.54.12-.12.28-.3.42-.45.14-.15.18-.26.28-.44.09-.18.05-.34-.03-.47-.08-.12-.64-1.54-.88-2.12-.23-.56-.47-.48-.64-.49-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.38-.27.31-1.04 1.02-1.04 2.47 0 1.44 1.06 2.84 1.21 3.03.14.18 2.08 3.18 5.06 4.46.71.31 1.26.5 1.69.64.71.24 1.36.21 1.87.13.57-.09 1.66-.68 1.9-1.33.24-.65.24-1.21.17-1.33-.07-.12-.26-.2-.54-.34z" />
                      </svg>
                      WhatsApp us
                    </a>
                    <a
                      href="tel:+917879324402"
                      className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-3 text-sm font-semibold text-white transition hover:border-brand-blue/60"
                    >
                      <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h2l2 5-2 2 4 4 2-2 5 2v2h3" />
                      </svg>
                      Call now
                    </a>
                  </div>
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
