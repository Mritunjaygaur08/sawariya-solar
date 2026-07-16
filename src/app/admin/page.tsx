'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { API_BASE } from '@/lib/api';

const modules = ['Users', 'Products', 'Services', 'Blog Posts', 'Testimonials', 'Quote Requests', 'Contact Messages'];

type LeadItem = {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  monthly_bill: string;
  property_type: string;
  message?: string | null;
};

type PropertyTypeCount = {
  property_type: string;
  count: number;
};

type AdminStats = {
  total_leads: number;
  total_customers: number;
  property_type_counts: PropertyTypeCount[];
  recent_leads: LeadItem[];
};

export default function AdminPage() {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const [stats, setStats] = useState<AdminStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = window.localStorage.getItem('sawariya_admin_token');
    if (!token) {
      router.push('/admin/login');
      return;
    }

    setAuthorized(true);

    const fetchStats = async () => {
      setLoading(true);
      const response = await fetch(`${API_BASE}/api/admin/stats`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        window.localStorage.removeItem('sawariya_admin_token');
        router.push('/admin/login');
        return;
      }

      const data = await response.json();
      setStats(data);
      setLoading(false);
    };

    fetchStats();
  }, [router]);

  if (!authorized) {
    return null;
  }

  const summaryCards = stats
    ? [
        { label: 'Total Leads', value: stats.total_leads },
        { label: 'Total Customers', value: stats.total_customers },
        { label: 'Residential Requests', value: stats.property_type_counts.find((item) => item.property_type === 'Residential')?.count ?? 0 },
        { label: 'Other Requests', value: stats.property_type_counts.reduce((sum, item) => sum + (item.property_type !== 'Residential' ? item.count : 0), 0) },
      ]
    : Array.from({ length: 4 }, (_, i) => ({ label: `Loading ${i+1}`, value: '—' }));

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
            {summaryCards.map((item) => (
              <div key={item.label} className="rounded-3xl border border-white/10 bg-slate-950/80 p-6">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">{item.label}</p>
                <p className="mt-4 text-3xl font-bold text-white">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-8">
              <h2 className="text-2xl font-semibold text-white">Recent quote submissions</h2>
              <div className="mt-6 space-y-4">
                {loading ? (
                  <p className="text-slate-400">Loading recent leads…</p>
                ) : stats && stats.recent_leads.length ? (
                  stats.recent_leads.map((lead) => (
                    <div key={lead.id} className="rounded-3xl border border-white/10 bg-slate-900/70 p-4">
                      <div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center">
                        <div>
                          <p className="text-sm text-slate-400">{lead.property_type}</p>
                          <p className="text-lg font-semibold text-white">{lead.name}</p>
                        </div>
                        <p className="text-sm text-slate-300">{lead.email}</p>
                      </div>
                      <p className="mt-3 text-sm text-slate-400">Phone: {lead.phone}</p>
                      <p className="mt-1 text-sm text-slate-400">Monthly bill: {lead.monthly_bill}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-slate-400">No recent quote requests found.</p>
                )}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-8">
              <h2 className="text-2xl font-semibold text-white">Property type breakdown</h2>
              <div className="mt-6 space-y-4">
                {loading ? (
                  <p className="text-slate-400">Loading property type analytics…</p>
                ) : stats ? (
                  stats.property_type_counts.map((item) => {
                    const percentage = stats.total_leads ? Math.round((item.count / stats.total_leads) * 100) : 0;
                    return (
                      <div key={item.property_type}>
                        <div className="flex items-center justify-between text-sm text-slate-300">
                          <span>{item.property_type}</span>
                          <span>{item.count} requests</span>
                        </div>
                        <div className="mt-2 h-3 overflow-hidden rounded-full bg-slate-900/60">
                          <div className="h-full rounded-full bg-brand-yellow" style={{ width: `${percentage}%` }} />
                        </div>
                        <p className="mt-1 text-xs text-slate-500">{percentage}% of submissions</p>
                      </div>
                    );
                  })
                ) : (
                  <p className="text-slate-400">No property type data available.</p>
                )}
              </div>
            </div>
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
