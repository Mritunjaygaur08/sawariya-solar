const posts = [
  { title: 'Benefits of Solar Energy', excerpt: 'Why solar power is the smartest investment for homes and businesses today.' },
  { title: 'Solar Maintenance Tips', excerpt: 'Simple steps to keep your solar system efficient and reliable year-round.' },
  { title: 'Government Solar Policies', excerpt: 'How new incentive programs make solar more affordable than ever.' },
  { title: 'Industry Updates', excerpt: 'The latest trends in solar technology, storage, and project financing.' }
];

import Link from 'next/link';

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <section className="rounded-3xl bg-slate-900/80 p-10 shadow-soft">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">Blog & Insights</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Stay updated with solar energy benefits, maintenance advice, subsidy news, and industry trends from Sawariya Solar.
          </p>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {posts.map((post) => (
              <article key={post.title} className="rounded-3xl border border-white/10 bg-slate-950/80 p-8 shadow-xl transition hover:-translate-y-1 hover:border-brand-green/60">
                <h2 className="text-2xl font-semibold text-white">{post.title}</h2>
                <p className="mt-4 text-slate-300">{post.excerpt}</p>
                <Link href="/quote" className="mt-6 inline-flex rounded-full bg-brand-blue px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-blue/90">
                  Read Article
                </Link>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
