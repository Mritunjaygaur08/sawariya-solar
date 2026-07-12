"use client";

import { useState } from 'react';

export default function CalculatorSection() {
  const [bill, setBill] = useState('');
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('Residential');
  const [result, setResult] = useState<{
    capacity: string;
    cost: string;
    savings: string;
    payback: string;
  } | null>(null);

  const handleCalculate = () => {
    const amount = Number(bill);
    if (!amount || amount <= 0) {
      setResult(null);
      return;
    }

    const capacity = Math.max(1, parseFloat((amount / 7000).toFixed(1)));
    const cost = Math.round(capacity * 60000);
    const savings = Math.round(amount * 12 * 0.5);
    const paybackYears = Math.max(3, Math.round(cost / savings));

    setResult({
      capacity: `${capacity} kW`,
      cost: `₹${cost.toLocaleString()}`,
      savings: `₹${savings.toLocaleString()}`,
      payback: `${paybackYears} Years`,
    });
  };

  return (
    <section id="calculator" className="mt-16 rounded-3xl bg-slate-900/80 p-6 shadow-soft sm:p-10 sm:mx-auto sm:max-w-4xl">
      <div className="grid gap-10">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-brand-yellow/80">Savings Calculator</p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Estimate your solar savings</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
            Enter your monthly bill and property details to see your estimated system size, installation cost, and payback period.
          </p>
          <div className="mt-10 grid gap-4 rounded-3xl border border-white/10 bg-slate-950/80 p-6 text-slate-200 shadow-inner">
            <div className="space-y-2">
              <label className="text-sm font-semibold">Monthly Electricity Bill</label>
              <input
                type="number"
                value={bill}
                onChange={(event) => setBill(event.target.value)}
                placeholder="Enter amount in rupees"
                className="w-full rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-3 text-white outline-none transition focus:border-brand-blue/60"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold">Location</label>
              <input
                type="text"
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                placeholder="City, State"
                className="w-full rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-3 text-white outline-none transition focus:border-brand-blue/60"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold">Property Type</label>
              <select
                value={propertyType}
                onChange={(event) => setPropertyType(event.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-3 text-white outline-none transition focus:border-brand-blue/60"
              >
                <option>Residential</option>
                <option>Commercial</option>
                <option>Industrial</option>
              </select>
            </div>
            <button
              type="button"
              onClick={handleCalculate}
              className="mt-4 inline-flex w-full items-center justify-center rounded-2xl bg-brand-blue px-4 py-3 text-base font-semibold text-white transition hover:bg-brand-blue/90"
            >
              Calculate Now
            </button>
            <p className="mt-4 text-lg text-slate-400">
              Contact us for more discounts, subsidy benefits and financing options. Our solar experts will help you maximize your savings and make the switch to clean energy.
            </p>
          </div>

          {result && (
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-900/70 p-5">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Recommended Solar Capacity</p>
                <p className="mt-2 text-2xl font-semibold text-brand-green">{result.capacity}</p>
              </div>
              <div className="rounded-3xl bg-slate-900/70 p-5">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Estimated Installation Cost</p>
                <p className="mt-2 text-2xl font-semibold text-white">{result.cost}</p>
              </div>
              <div className="rounded-3xl bg-slate-900/70 p-5">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Annual Savings</p>
                <p className="mt-2 text-2xl font-semibold text-brand-yellow">{result.savings}</p>
              </div>
              <div className="rounded-3xl bg-slate-900/70 p-5">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Payback Period</p>
                <p className="mt-2 text-2xl font-semibold text-brand-blue">{result.payback}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
