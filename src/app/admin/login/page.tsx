'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';import { API_BASE } from '@/lib/api';
export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    const formData = new URLSearchParams();
    formData.append('username', email);
    formData.append('password', password);

    const response = await fetch(`${API_BASE}/api/auth/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formData.toString()
    });

    setLoading(false);

    if (response.ok) {
      const data = await response.json();
      window.localStorage.setItem('sawariya_admin_token', data.access_token);
      router.push('/admin');
    } else {
      const result = await response.json();
      setError(result.detail || 'Login failed. Please check your credentials.');
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="mx-auto max-w-2xl px-4 py-20 sm:px-6 lg:px-8">
        <section className="rounded-3xl bg-slate-900/80 p-10 shadow-soft">
          <h1 className="text-4xl font-bold text-white">Admin Login</h1>
          <p className="mt-4 text-slate-300">Sign in to access the Sawariya Solar admin dashboard.</p>
          <form className="mt-10 space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-semibold text-slate-200">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-3 w-full rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-3 text-white outline-none focus:border-brand-blue/60"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-200">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-3 w-full rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-3 text-white outline-none focus:border-brand-blue/60"
              />
            </div>
            {error && <p className="text-sm text-red-400">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="inline-flex w-full items-center justify-center rounded-2xl bg-brand-yellow px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
