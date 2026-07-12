const services = [
  { title: 'Residential Solar Installation', description: 'Custom rooftop systems for homes with high efficiency and quick ROI.', icon: '☀️' },
  { title: 'Commercial Solar Solutions', description: 'Scalable solar arrays for offices, retail, and hospitality businesses.', icon: '🏢' },
  { title: 'Industrial Solar Projects', description: 'Large-scale energy systems for manufacturing and warehousing.', icon: '🏭' },
  { title: 'Solar Consultation', description: 'Expert planning, subsidy guidance, and system design support.', icon: '🧭' },
  { title: 'Solar Maintenance & AMC', description: 'Regular servicing to keep solar systems operating at peak efficiency.', icon: '🛠️' },
  { title: 'Battery Storage Solutions', description: 'Battery backup and energy storage for uninterrupted power supply.', icon: '🔋' }
];

import Link from 'next/link';

export default function ServicesSection() {
  return (
    <section className="mt-16 rounded-3xl bg-slate-900/80 p-6 shadow-soft sm:p-10">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-brand-green/80">Our Services</p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Solar solutions for every property type</h2>
        </div>
        <p className="max-w-xl text-sm leading-7 text-slate-300">
          From residential rooftops to industrial campuses, Sawariya Solar delivers end-to-end solar energy systems designed for performance, savings, and reliability.
        </p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <article key={service.title} className="group rounded-3xl border border-white/10 bg-slate-950/80 p-6 transition hover:-translate-y-1 hover:border-brand-blue/60 hover:bg-slate-900/90">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-green/10 text-2xl transition group-hover:bg-brand-blue/10">
              {service.icon}
            </span>
            <h3 className="mt-6 text-xl font-semibold text-white">{service.title}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">{service.description}</p>
            <Link href="/quote" className="mt-6 inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20">
              Learn More
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
