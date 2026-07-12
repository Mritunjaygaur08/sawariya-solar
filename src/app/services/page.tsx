import Link from 'next/link';

const services = [
  { title: 'Residential Solar Installation', description: 'Complete rooftop solar systems for homes that cut power bills and deliver clean energy.' },
  { title: 'Commercial Solar Solutions', description: 'Tailored solar arrays for offices, retail stores, and hospitality businesses.' },
  { title: 'Industrial Solar Projects', description: 'Large-scale installations for manufacturing, warehousing, and industrial campuses.' },
  { title: 'Solar Consultation', description: 'Energy assessments, subsidy planning, and system design for maximum ROI.' },
  { title: 'Solar Maintenance & AMC', description: 'Preventive maintenance and service contracts to keep systems efficient.' },
  { title: 'Battery Storage Solutions', description: 'Battery backup systems for energy resilience and uninterrupted power.' }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <section className="rounded-3xl bg-slate-900/80 p-10 shadow-soft">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">Our Solar Services</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Sawariya Solar offers full-service solar solutions from consultation and design to installation and maintenance. Our offerings are engineered for homes, businesses, and industrial sites.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((item) => (
              <article key={item.title} className="rounded-3xl border border-white/10 bg-slate-950/80 p-8 shadow-xl transition hover:-translate-y-1 hover:border-brand-green/60">
                <h2 className="text-2xl font-semibold text-white">{item.title}</h2>
                <p className="mt-4 text-slate-300">{item.description}</p>
                <Link href="/quote" className="mt-6 inline-flex rounded-full bg-brand-blue px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-blue/90">
                  Learn More
                </Link>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
