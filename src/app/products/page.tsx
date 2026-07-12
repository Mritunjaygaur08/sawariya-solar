const products = [
  { title: 'Solar Panels', details: 'High-efficiency photovoltaic modules for durable solar generation.' },
  { title: 'Solar Inverters', details: 'Smart inverters that convert sunlight into reliable AC power.' },
  { title: 'Solar Batteries', details: 'Energy storage systems for backup power and load management.' },
  { title: 'Solar Water Heaters', details: 'Efficient solar heating for homes, hotels, and industrial use.' },
  { title: 'Solar Pumps', details: 'Robust pumps for agriculture, irrigation, and water management.' },
  { title: 'Solar Street Lights', details: 'LED street lighting powered by solar for safer outdoor spaces.' }
];

import Link from 'next/link';

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <section className="rounded-3xl bg-slate-900/80 p-10 shadow-soft">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">Solar Products</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Premium solar equipment selected for performance, efficiency, and long-term reliability. Choose from panels, inverters, batteries, pumps, heaters, and lighting.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {products.map((item) => (
              <article key={item.title} className="rounded-3xl border border-white/10 bg-slate-950/80 p-8 shadow-xl transition hover:-translate-y-1 hover:border-brand-blue/60">
                <h2 className="text-2xl font-semibold text-white">{item.title}</h2>
                <p className="mt-4 text-slate-300">{item.details}</p>
                <Link href="/quote" className="mt-6 inline-flex rounded-full bg-brand-green px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-brand-green/90">
                  Inquire Now
                </Link>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
