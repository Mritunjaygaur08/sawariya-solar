export default function SubsidiesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <section className="rounded-3xl bg-slate-900/80 p-10 shadow-soft">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-brand-green/80">Government Subsidies</p>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl">Solar incentives and net metering</h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
              Learn about subsidy programs, net metering benefits, and how Sawariya Solar helps you claim savings on your solar investment.
            </p>
          </div>
          <div className="mt-10 space-y-8">
            <article className="rounded-3xl border border-white/10 bg-slate-950/80 p-8 shadow-xl">
              <h2 className="text-2xl font-semibold text-white">Subsidy information</h2>
              <p className="mt-4 text-slate-300">Eligible residential and commercial customers can receive government support for solar installations. Our experts evaluate your eligibility and support the application process.</p>
            </article>
            <article className="rounded-3xl border border-white/10 bg-slate-950/80 p-8 shadow-xl">
              <h2 className="text-2xl font-semibold text-white">Net metering details</h2>
              <p className="mt-4 text-slate-300">Net metering allows you to export excess energy to the grid and earn credits. We help configure systems for maximum savings and regulatory compliance.</p>
            </article>
            <article className="rounded-3xl border border-white/10 bg-slate-950/80 p-8 shadow-xl">
              <h2 className="text-2xl font-semibold text-white">Eligibility & application</h2>
              <p className="mt-4 text-slate-300">Most homeowners, businesses, and industrial sites qualify based on rooftop area, consumption, and local policy. We handle paperwork and provide a step-by-step application roadmap.</p>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}
