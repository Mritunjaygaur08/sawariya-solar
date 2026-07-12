'use client';

import { useState, type ChangeEvent, type FormEvent } from 'react';
import { API_BASE } from '@/lib/api';

export default function QuotePage() {
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
        setStatus('Your quote request was submitted successfully.');
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
      setStatus('Unable to send message. Check your connection and try again.');
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <section className="rounded-3xl bg-slate-900/80 p-10 shadow-soft">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_0.8fr] lg:items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-brand-green/80">Quote Request</p>
              <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl">Request a custom solar quote</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Share your details and electricity usage so our solar team can build a tailored proposal with savings projections and installation pricing.
              </p>
              <div className="mt-10 grid gap-6 rounded-3xl border border-white/10 bg-slate-950/80 p-8">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Quick support</p>
                  <p className="mt-2 text-white">+91 98765 43210</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Email</p>
                  <p className="mt-2 text-white">info@sawariyasolar.com</p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-8 shadow-xl">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required className="w-full rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-3 text-white outline-none transition focus:border-brand-blue/60" />
                <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" required className="w-full rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-3 text-white outline-none transition focus:border-brand-blue/60" />
                <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="Phone Number" required className="w-full rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-3 text-white outline-none transition focus:border-brand-blue/60" />
                <input name="address" value={form.address} onChange={handleChange} placeholder="Address" required className="w-full rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-3 text-white outline-none transition focus:border-brand-blue/60" />
                <input name="monthly_bill" value={form.monthly_bill} onChange={handleChange} placeholder="Monthly Electricity Bill" required className="w-full rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-3 text-white outline-none transition focus:border-brand-blue/60" />
                <select name="property_type" value={form.property_type} onChange={handleChange} className="w-full rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-3 text-white outline-none transition focus:border-brand-blue/60">
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Industrial</option>
                </select>
                <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Message" className="w-full rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-3 text-white outline-none transition focus:border-brand-blue/60" />
                <button type="submit" className="inline-flex w-full items-center justify-center rounded-2xl bg-brand-yellow px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-yellow-300">
                  Submit Quote Request
                </button>
                {status && <p className="mt-2 text-sm text-slate-300">{status}</p>}
              </form>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
