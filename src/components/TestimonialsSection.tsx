const testimonials = [
  { name: 'Ravi Kumar', role: 'Homeowner', quote: 'Sawariya Solar transformed our rooftop and lowered our electricity bill significantly.', rating: 5 },
  { name: 'Priya Shah', role: 'Retail Manager', quote: 'Professional team, fast installation, and excellent after-sales support.', rating: 5 },
  { name: 'Amit Desai', role: 'Factory Owner', quote: 'A reliable solar partner for our industrial power needs.', rating: 5 }
];

export default function TestimonialsSection() {
  return (
    <section className="mt-16 rounded-3xl bg-slate-900/80 p-6 shadow-soft sm:p-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-brand-green/80">Testimonials</p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">What customers say</h2>
        </div>
        <p className="max-w-lg text-sm leading-7 text-slate-300">
          Trusted by homeowners, businesses, and industries for reliable solar energy systems and exceptional service.
        </p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {testimonials.map((item) => (
          <article key={item.name} className="rounded-3xl border border-white/10 bg-slate-950/80 p-6 shadow-xl transition hover:-translate-y-1 hover:border-brand-blue/60">
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-full bg-brand-blue/10 text-2xl leading-[3.5rem] text-white">{item.name[0]}</div>
              <div>
                <p className="font-semibold text-white">{item.name}</p>
                <p className="text-sm text-slate-400">{item.role}</p>
              </div>
            </div>
            <p className="mt-6 text-sm leading-7 text-slate-300">“{item.quote}”</p>
            <div className="mt-6 flex gap-1 text-yellow-400">
              {Array.from({ length: item.rating }).map((_, index) => (
                <span key={index}>★</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
