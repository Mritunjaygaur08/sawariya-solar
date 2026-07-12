import Link from 'next/link';

const products = [
  { name: 'Solar Panels', spec: 'High-efficiency PV modules', feature: 'Durable, high output', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=700&q=80' },
  { name: 'Solar Inverters', spec: 'Smart energy conversion', feature: 'Stable power delivery', image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=700&q=80' },
  { name: 'Solar Batteries', spec: 'Long-lasting backup systems', feature: 'Reliable storage', image: 'https://images.unsplash.com/photo-1565372916463-ecd3e4f884d1?auto=format&fit=crop&w=700&q=80' },
  { name: 'Solar Water Heaters', spec: 'Energy-saving water heating', feature: 'Efficient hot water', image: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=700&q=80' },
  { name: 'Solar Pumps', spec: 'Robust agricultural pumping', feature: 'Low-maintenance operation', image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=700&q=80' },
  { name: 'Solar Street Lights', spec: 'Smart outdoor illumination', feature: 'Sustainable night lighting', image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=700&q=80' }
];

export default function ProductsSection() {
  return (
    <section className="mt-16 rounded-3xl bg-slate-900/80 p-6 shadow-soft sm:p-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-brand-blue/80">Products</p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Solar systems and components</h2>
        </div>
        <p className="max-w-lg text-sm leading-7 text-slate-300">
          Browse our product portfolio for panels, inverters, batteries, pumps and lighting designed to maximize solar value.
        </p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <article key={product.name} className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 shadow-lg shadow-black/10 transition hover:-translate-y-1 hover:border-brand-green/60">
            <div className="h-52 overflow-hidden bg-slate-900">
              <img src={product.image} alt={product.name} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
            </div>
            <div className="space-y-4 p-6">
              <h3 className="text-xl font-semibold text-white">{product.name}</h3>
              <p className="text-sm text-slate-300">{product.spec}</p>
              <p className="text-sm text-slate-400">{product.feature}</p>
              <Link href="/quote" className="inline-flex items-center rounded-full bg-brand-green px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-brand-green/90">
                Inquiry
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
