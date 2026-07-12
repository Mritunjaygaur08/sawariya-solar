const projects = [
  { title: 'Residential Rooftop Upgrade', location: 'Jaipur, Rajasthan', capacity: '6 kW', image: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=900&q=80', testimonial: 'The team delivered a seamless experience and excellent performance.' },
  { title: 'Commercial Office System', location: 'Mumbai, Maharashtra', capacity: '35 kW', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80', testimonial: 'We reduced our monthly energy spend significantly with a smart solar design.' },
  { title: 'Industrial Plant Array', location: 'Ahmedabad, Gujarat', capacity: '120 kW', image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=900&q=80', testimonial: 'Reliable installation and strong aftercare from Sawariya Solar.' }
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <section className="rounded-3xl bg-slate-900/80 p-10 shadow-soft">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-brand-blue/80">Projects</p>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl">Completed solar installations</h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
              Explore our portfolio of residential, commercial, and industrial solar projects completed with performance and reliability in mind.
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className="rounded-3xl overflow-hidden border border-white/10 bg-slate-950/80 shadow-xl transition hover:-translate-y-1 hover:border-brand-green/60">
                <img src={project.image} alt={project.title} className="h-64 w-full object-cover" />
                <div className="p-6">
                  <p className="text-sm uppercase tracking-[0.24em] text-brand-yellow">{project.capacity}</p>
                  <h2 className="mt-3 text-2xl font-semibold text-white">{project.title}</h2>
                  <p className="mt-3 text-sm text-slate-400">{project.location}</p>
                  <p className="mt-5 text-sm leading-7 text-slate-300">“{project.testimonial}”</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
