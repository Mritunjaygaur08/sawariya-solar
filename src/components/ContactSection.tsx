"use client";

import { useState, type ChangeEvent, type FormEvent } from 'react';
import { API_BASE } from '@/lib/api';

export default function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    monthly_bill: '',
    property_type: 'Residential',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Submitting...');

    try {
      const response = await fetch(`${API_BASE}/api/leads`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      });

      if (response.ok) {
        setStatus('Your request was submitted successfully.');
        setForm({
          name: '',
          email: '',
          phone: '',
          address: '',
          monthly_bill: '',
          property_type: 'Residential',
          message: ''
        });
      } else {
        setStatus('Submission failed. Please try again later.');
      }
    } catch (error) {
      setStatus('Unable to submit. Check your connection and try again.');
    }
  };

  return (
    <section id="quote" className="mt-16 rounded-3xl bg-slate-900/80 p-6 shadow-soft sm:p-10">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-brand-green/80">Contact</p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Request a free solar quote</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
            Fill in your details and our solar experts will contact you with a custom proposal and savings estimate.
          </p>
          <div className="mt-10 space-y-4 rounded-3xl border border-white/10 bg-slate-950/80 p-6">
            <div>
              <p className="text-sm font-semibold text-slate-400">Phone</p>
              <p className="text-base text-white">+91 78793 24402</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-400">Email</p>
              <p className="text-base text-white">info@sawariyasolar.com</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-400">Office</p>
              <p className="text-base text-white">Khandwa Naka,Indore, Madhya Pradesh</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-400">Quick contact</p>
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
        <form className="space-y-4 rounded-3xl border border-white/10 bg-slate-950/80 p-6 shadow-inner" onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              type="text"
              placeholder="Name"
              className="rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-3 text-white outline-none focus:border-brand-blue/60"
              required
            />
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              placeholder="Email"
              className="rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-3 text-white outline-none focus:border-brand-blue/60"
              required
            />
          </div>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            type="tel"
            placeholder="Phone Number"
            className="w-full rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-3 text-white outline-none focus:border-brand-blue/60"
            required
          />
          <input
            name="address"
            value={form.address}
            onChange={handleChange}
            type="text"
            placeholder="Address"
            className="w-full rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-3 text-white outline-none focus:border-brand-blue/60"
            required
          />
          <input
            name="monthly_bill"
            value={form.monthly_bill}
            onChange={handleChange}
            type="text"
            placeholder="Monthly Electricity Bill"
            className="w-full rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-3 text-white outline-none focus:border-brand-blue/60"
            required
          />
          <select
            name="property_type"
            value={form.property_type}
            onChange={handleChange}
            className="w-full rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-3 text-white outline-none focus:border-brand-blue/60"
          >
            <option>Residential</option>
            <option>Commercial</option>
            <option>Industrial</option>
          </select>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            placeholder="Message"
            className="w-full rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-3 text-white outline-none focus:border-brand-blue/60"
          />
          <button type="submit" className="inline-flex w-full items-center justify-center rounded-2xl bg-brand-yellow px-5 py-3 text-base font-semibold text-slate-950 transition hover:bg-yellow-300">
            Submit Request
          </button>
          {status && <p className="text-sm text-slate-300">{status}</p>}
        </form>
      </div>
    </section>
  );
}
