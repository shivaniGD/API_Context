import { Link } from 'react-router'

const CASES = [
  {
    id: 'S-01',
    sector: 'Pharmaceutical & CROs',
    title: 'VigilantLabs.AI',
    desc: 'Complete AI-powered safety intelligence platform for pharmaceutical compliance.',
    stat: '75%',
    statLabel: 'faster safety reporting',
    stat2: '−50%',
    stat2Label: 'operating cost',
    slug: 'vigilant-labs-ai',
  },
  {
    id: 'S-02',
    sector: 'Professional Services',
    title: '24/7 Conversational AI',
    desc: 'AI-powered conversational system handling after-hours client calls.',
    stat: '+40%',
    statLabel: 'customer satisfaction',
    stat2: '24/7',
    stat2Label: 'availability',
    slug: 'conversational-ai-professional-services',
  },
  {
    id: 'S-03',
    sector: 'E-commerce Retail',
    title: 'Product Recommendations',
    desc: 'AI-driven recommendation engine increasing conversion rates.',
    stat: '+35%',
    statLabel: 'conversion rate',
    stat2: '+25%',
    stat2Label: 'average order value',
  },
  {
    id: 'S-04',
    sector: 'Education Technology',
    title: 'Student Journey Platform',
    desc: 'End-to-end AI platform from admission through to career placement.',
    stat: '85%',
    statLabel: 'placement success rate',
    stat2: '40%',
    stat2Label: 'faster application processing',
  },
  {
    id: 'S-05',
    sector: 'Transport & Logistics',
    title: 'Road Damage Detection',
    desc: 'Real-time road condition monitoring using AI computer vision.',
    stat: '−45%',
    statLabel: 'vehicle maintenance costs',
    stat2: '−70%',
    stat2Label: 'service disruptions',
  },
]

export function Results() {
  return (
    <section id="results" className="border-b border-line bg-cream">
      <div className="mx-auto max-w-[1200px] px-6 py-24 sm:py-32">
        <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:items-end">
          <div>
            <div className="reveal eyebrow">Section 02 — Evidence</div>
            <h2 className="reveal mt-5 font-display text-[clamp(34px,4.5vw,56px)] font-light leading-[1.05] tracking-[-0.015em] text-ink" data-delay="80">
              Products,{' '}
              <em className="text-signal" style={{ fontStyle: 'italic' }}>in market</em>.
            </h2>
          </div>
          <p className="reveal max-w-[46ch] text-ink-2 md:justify-self-end" data-delay="160">
            A selection of products shipped across five verticals. Each specimen is documented
            with the metric that mattered to the client.
          </p>
        </div>

        {/* specimen ledger */}
        <div className="mt-16 border-t border-line">
          {CASES.map((c, i) => (
            <article
              key={c.id}
              className="reveal group grid gap-6 border-b border-line py-10 transition-colors md:grid-cols-[90px_1.5fr_1fr_1fr] md:items-center md:gap-10 hover:bg-paper"
              data-delay={`${(i % 2) * 80}`}
            >
              <div className="font-mono-lab text-[12px] tracking-[0.1em] text-ink-3">
                {c.id}
              </div>
              <div>
                <div className="eyebrow !text-signal">{c.sector}</div>
                <h3 className="mt-2 font-display text-[26px] font-medium tracking-tight text-ink">
                  {c.title}
                </h3>
                <p className="mt-2 max-w-[48ch] text-[15px] text-ink-2">{c.desc}</p>
                {'slug' in c && c.slug && (
                  <Link
                    to={`/case/${c.slug}`}
                    className="mt-4 inline-flex items-center gap-2 font-mono-lab text-[11px] tracking-[0.08em] uppercase text-signal transition-colors hover:text-ink"
                  >
                    Read case study →
                  </Link>
                )}
              </div>
              <div>
                <div className="font-display text-[clamp(40px,4vw,56px)] font-light leading-none tracking-tight text-ink">
                  {c.stat}
                </div>
                <div className="mt-2 font-mono-lab text-[11px] tracking-[0.06em] uppercase text-ink-3">
                  {c.statLabel}
                </div>
              </div>
              <div className="md:border-l md:border-line md:pl-10">
                <div className="font-display text-[clamp(28px,2.5vw,36px)] font-light leading-none tracking-tight text-ink-2">
                  {c.stat2}
                </div>
                <div className="mt-2 font-mono-lab text-[11px] tracking-[0.06em] uppercase text-ink-3">
                  {c.stat2Label}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="reveal mt-6 flex flex-col gap-2 font-mono-lab text-[10px] tracking-[0.14em] uppercase text-ink-3 sm:flex-row sm:justify-between">
          <span>Ledger 01 — Shipped product record, 2024–2026</span>
          <span>Metrics as reported post-launch</span>
        </div>
      </div>
    </section>
  )
}
