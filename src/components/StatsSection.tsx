const stats = [
  { label: 'Projects Completed', value: '500+' },
  { label: 'Installed Capacity', value: '10 MW+' },
  { label: 'Happy Customers', value: '1000+' },
  { label: '25-Year Warranty', value: '25 Years' }
];

export default function StatsSection() {
  return (
    <section className="mt-16 rounded-3xl bg-slate-900/80 p-6 shadow-soft sm:p-10">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div key={item.label} className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 text-center transition hover:-translate-y-1 hover:border-brand-green/60">
            <p className="text-3xl font-semibold text-white">{item.value}</p>
            <p className="mt-3 text-sm uppercase tracking-[0.24em] text-slate-400">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
