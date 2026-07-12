export default function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-green/90 via-slate-950 to-brand-blue/90 px-6 py-16 text-white shadow-soft sm:px-10 lg:flex lg:items-center lg:justify-between lg:px-14">
      <div className="max-w-2xl">
        <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold tracking-wide text-white/90">
          Clean energy. smarter savings.
        </span>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Power Your Future with Clean Solar Energy
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-100/90">
          Reduce electricity bills and embrace sustainable energy with Sawariya Solar's customized solar solutions.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a href="/quote" className="inline-flex items-center justify-center rounded-full bg-yellow-400 px-6 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-yellow-400/20 transition hover:bg-yellow-300">
            Get Free Quote
          </a>
          <a href="#calculator" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-base font-semibold text-white transition hover:border-white/40 hover:bg-white/20">
            Calculate Savings
          </a>
        </div>
      </div>
      <div className="mt-12 lg:mt-0 lg:max-w-lg">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 shadow-2xl shadow-black/40">
          <img
            src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=900&q=80"
            alt="Rooftop solar panels with sunlight"
            className="h-[420px] w-full object-cover sm:h-[460px]"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/95 to-transparent px-6 py-6 text-white">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-300">Solar installations built for lasting performance</p>
          </div>
        </div>
      </div>
    </section>
  );
}
