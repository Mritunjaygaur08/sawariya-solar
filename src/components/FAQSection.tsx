const faqs = [
  { question: 'How much does solar installation cost?', answer: 'Cost depends on system size, equipment, and site requirements. We prepare custom proposals based on your monthly consumption and location.' },
  { question: 'What subsidies are available?', answer: 'Government incentives and net metering vary by region. We guide customers through the subsidy and policy process.' },
  { question: 'How long do solar panels last?', answer: 'High-quality solar panels typically last 25 years or more when installed and maintained properly.' },
  { question: 'What maintenance is required?', answer: 'Regular inspections, cleaning, and inverter checks keep your system operating efficiently. Our AMC plans handle maintenance for you.' }
];

export default function FAQSection() {
  return (
    <section className="mt-16 rounded-3xl bg-slate-900/80 p-6 shadow-soft sm:p-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-brand-yellow/80">FAQ</p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Frequently asked questions</h2>
        </div>
        <p className="max-w-lg text-sm leading-7 text-slate-300">
          Answers to common questions about solar costs, subsidies, maintenance, and ownership.
        </p>
      </div>
      <div className="mt-10 space-y-4">
        {faqs.map((faq) => (
          <details key={faq.question} className="rounded-3xl border border-white/10 bg-slate-950/80 p-5 transition hover:border-brand-green/60">
            <summary className="cursor-pointer text-lg font-semibold text-white">{faq.question}</summary>
            <p className="mt-4 text-sm leading-7 text-slate-300">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
