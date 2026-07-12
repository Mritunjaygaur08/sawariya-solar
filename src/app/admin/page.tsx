'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const data = [
  { label: 'Total Leads', value: '1,240' },
  { label: 'Total Customers', value: '820' },
  { label: 'Total Projects', value: '520' },
  { label: 'Revenue Overview', value: '$1.8M' }
];

const modules = ['Users', 'Products', 'Services', 'Blog Posts', 'Testimonials', 'Quote Requests', 'Contact Messages'];

export default function AdminPage() {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const token = window.localStorage.getItem('sawariya_admin_token');
    if (!token) {
      router.push('/admin/login');
    } else {
      setAuthorized(true);
    }
  }, [router]);

  if (!authorized) {
    return null;
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <section className="rounded-3xl bg-slate-900/80 p-10 shadow-soft">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-brand-blue/80">Admin Dashboard</p>
              <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl">Manage leads and solar operations</h1>
            </div>
            <button
            type="button"
            onClick={() => router.push('/quote')}
            className="rounded-full bg-brand-yellow px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-yellow-300"
          >
              Add New Record
            </button>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {data.map((item) => (
              <div key={item.label} className="rounded-3xl border border-white/10 bg-slate-950/80 p-6">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">{item.label}</p>
                <p className="mt-4 text-3xl font-bold text-white">{item.value}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-3xl border border-white/10 bg-slate-950/80 p-8">
            <h2 className="text-2xl font-semibold text-white">Management modules</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {modules.map((module) => (
                <div key={module} className="rounded-3xl border border-white/10 bg-slate-900/70 p-5 text-sm text-slate-300 transition hover:border-brand-green/60">
                  {module}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
