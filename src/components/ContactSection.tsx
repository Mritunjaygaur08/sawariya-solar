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
