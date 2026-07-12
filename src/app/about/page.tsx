export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <section className="rounded-3xl bg-slate-900/80 p-10 shadow-soft">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-brand-green/80">About Us</p>
              <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl">Your partner for smarter solar energy.</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Sawariya Solar delivers residential, commercial, and industrial solar systems with complete design, installation, financing, and maintenance support.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-8">
              <h2 className="text-xl font-semibold text-white">Our mission</h2>
              <p className="mt-4 text-slate-300">
                To accelerate the transition to renewable energy by offering high-quality solar solutions that reduce costs, support sustainability, and empower customers.
              </p>
              <div className="mt-8 grid gap-4">
                <div className="rounded-3xl bg-slate-900/70 p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Vision</p>
                  <p className="mt-2 text-white">A future powered by clean, affordable, and reliable solar energy for every community.</p>
                </div>
                <div className="rounded-3xl bg-slate-900/70 p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Sustainability</p>
                  <p className="mt-2 text-white">We design systems that reduce carbon emissions, conserve resources, and support climate resilience.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 grid gap-8 lg:grid-cols-3">
          {[
            { title: 'Certified Solar Experts', description: 'Experienced engineers and installers with industry certifications.' },
            { title: 'Government Subsidy Assistance', description: 'Streamlined paperwork and eligibility guidance for incentives.' },
            { title: 'End-to-End Service', description: 'Site assessment, installation, commissioning, and maintenance.' }
          ].map((item) => (
            <article key={item.title} className="rounded-3xl border border-white/10 bg-slate-950/80 p-8 shadow-xl transition hover:-translate-y-1 hover:border-brand-blue/60">
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-4 text-slate-300">{item.description}</p>
            </article>
          ))}
        </section>

        <section className="mt-16 rounded-3xl bg-slate-900/80 p-10 shadow-soft">
          <h2 className="text-3xl font-bold text-white">Team & achievements</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {[
              { label: 'Years of experience', value: '15+' },
              { label: 'Skilled technicians', value: '120+' },
              { label: 'Awards and certifications', value: '12' }
            ].map((item) => (
              <div key={item.label} className="rounded-3xl border border-white/10 bg-slate-950/80 p-6">
                <p className="text-4xl font-bold text-brand-yellow">{item.value}</p>
                <p className="mt-3 text-slate-300">{item.label}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
