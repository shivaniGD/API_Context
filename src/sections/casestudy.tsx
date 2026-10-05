import { Link } from 'react-router'

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

type Metric = { v: string; label: string }
type Block = { title: string; items: string[] }

type CaseStudy = {
  slug: string
  register: string
  sector: string
  title: string
  intro: string
  challenge: {
    body: string
    points: string[]
    note?: string
  }
  before: Metric[]
  solution: {
    body: string
    capabilities: string[]
  }
  architecture?: Block[]
  timeline?: { step: string; title: string; dur: string }[]
  results: Metric[]
  operational?: Metric[]
  financial?: Metric[]
  impactBlocks?: Block[]
  testimonial?: { quote: string; by: string }
}

/* ------------------------------------------------------------------ */
/* Case study records — content per live site                          */
/* ------------------------------------------------------------------ */

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'vigilant-labs-ai',
    register: 'CS-01',
    sector: 'Pharmaceutical & CRO',
    title: 'VigilantLabs.AI — Safety Intelligence Platform',
    intro:
      'Complete AI-powered safety intelligence platform purpose-built for ANZ pharmaceutical companies and CROs — delivering 60% faster insights, 35% cost reduction, and 100% compliance accuracy.',
    challenge: {
      body: 'ANZ pharmaceutical companies and Contract Research Organizations (CROs) were struggling with fragmented safety databases, manual processing of adverse events, and increasingly complex regulatory requirements. Traditional safety systems were unable to keep pace with the volume and complexity of modern drug development.',
      points: [
        'Manual safety data processing leading to delayed insights',
        'Scattered safety information across multiple databases',
        'High compliance costs and resource requirements',
        'Reactive approach to safety signal detection',
        'Inconsistent safety reporting across different teams',
      ],
      note: 'With TGA, FDA, and EMA requirements constantly evolving, maintaining compliance across multiple jurisdictions became increasingly challenging — 150+ regulatory updates per year.',
    },
    before: [
      { v: '5–7 days', label: 'Safety report processing' },
      { v: '$2.5M/yr', label: 'Compliance cost' },
      { v: '2–3 weeks', label: 'Signal detection time' },
      { v: '80%', label: 'Manual processing' },
    ],
    solution: {
      body: 'DiscoverrLabs.AI developed VigilantLabs.AI as a comprehensive safety intelligence platform that revolutionizes how pharmaceutical companies and CROs manage safety data. The platform combines advanced AI algorithms with deep regulatory knowledge to automate safety processes while ensuring complete compliance.',
      capabilities: [
        'AI-powered safety signal detection and analysis',
        'Automated adverse event processing and categorization',
        'Real-time compliance monitoring and reporting',
        'Predictive analytics for proactive safety management',
        'Integrated platform for centralized safety intelligence',
      ],
    },
    architecture: [
      {
        title: 'Data Layer',
        items: ['Unified safety database with real-time data ingestion from multiple sources'],
      },
      {
        title: 'AI Engine',
        items: ['Advanced ML models for signal detection, classification, and prediction'],
      },
      {
        title: 'Compliance Layer',
        items: ['Automated regulatory reporting and compliance monitoring'],
      },
    ],
    results: [
      { v: '60%', label: 'Faster safety insight generation' },
      { v: '35%', label: 'Reduction in compliance costs' },
      { v: '100%', label: 'Accuracy in compliance reporting' },
      { v: '85%', label: 'Reduction in manual processing time' },
      { v: '90%', label: 'Improvement in signal detection speed' },
      { v: '50%', label: 'Faster regulatory submission times' },
    ],
    operational: [
      { v: '10,000+', label: 'Daily case processing' },
      { v: '95%', label: 'Automation rate' },
      { v: '25+', label: 'Data sources integrated' },
      { v: '99.9%', label: 'Uptime' },
    ],
    financial: [
      { v: '$875,000', label: 'Annual cost savings' },
      { v: '6 months', label: 'ROI timeline' },
      { v: '35%', label: 'Compliance cost reduction' },
      { v: '40%', label: 'Resource optimization' },
    ],
    testimonial: {
      quote:
        'VigilantLabs.AI has transformed our safety operations. What used to take weeks now happens in hours, and our compliance confidence has never been higher. The platform pays for itself through efficiency gains alone.',
      by: 'Chief Safety Officer, Leading ANZ Pharmaceutical Company',
    },
  },
  {
    slug: 'conversational-ai-professional-services',
    register: 'CS-02',
    sector: 'Professional Services',
    title: 'Conversational AI for 24/7 Customer Support',
    intro:
      'How a leading professional services firm transformed their customer experience with AI-powered conversational support — achieving 85% faster response times and 40% higher customer satisfaction.',
    challenge: {
      body: 'A prominent professional services firm was struggling with customer inquiries outside business hours. With clients across different time zones and urgent queries requiring immediate attention, the company faced significant challenges in maintaining service quality and customer satisfaction.',
      points: [
        'High volume of after-hours customer inquiries going unanswered',
        'Limited staff availability during weekends and holidays',
        'Inconsistent response quality across different support agents',
        'Long response times leading to customer frustration',
        'High operational costs for 24/7 human support coverage',
      ],
    },
    before: [
      { v: '8–12 hrs', label: 'Average response time' },
      { v: '0%', label: 'After-hours coverage' },
      { v: '65%', label: 'Customer satisfaction' },
      { v: '$280K/yr', label: 'Support cost' },
    ],
    solution: {
      body: 'DiscoverrLabs.AI developed a comprehensive conversational AI platform that integrates seamlessly with the existing customer support infrastructure. The solution combines natural language processing, intelligent routing, and automated response generation.',
      capabilities: [
        'AI-powered chatbot with natural language understanding',
        'Intelligent call routing and prioritization system',
        'Automated response generation for common inquiries',
        'Seamless escalation to human agents when needed',
        'Multi-channel support integration (phone, email, chat)',
      ],
    },
    timeline: [
      { step: '1', title: 'Discovery & Planning', dur: '2 weeks' },
      { step: '2', title: 'AI Model Development', dur: '6 weeks' },
      { step: '3', title: 'Integration & Testing', dur: '4 weeks' },
      { step: '4', title: 'Deployment & Training', dur: '2 weeks' },
    ],
    results: [
      { v: '85%', label: 'Reduction in average response time' },
      { v: '40%', label: 'Increase in customer satisfaction' },
      { v: '24/7', label: 'Availability with consistent quality' },
      { v: '60%', label: 'Reduction in operational support costs' },
      { v: '95%', label: 'Query resolution without human intervention' },
      { v: '300%', label: 'Increase in after-hours handling capacity' },
    ],
    impactBlocks: [
      {
        title: 'Operational Improvements',
        items: [
          'Instant response to 95% of customer inquiries',
          'Reduced workload on human support agents by 70%',
          'Consistent service quality across all time zones',
          'Automated escalation for complex issues',
        ],
      },
      {
        title: 'Financial Benefits',
        items: [
          'Annual cost savings: $168,000',
          'ROI achieved within 8 months',
          '30% increase in customer retention',
          '20% growth in new client acquisitions',
        ],
      },
    ],
  },
]

/* ------------------------------------------------------------------ */
/* Shared bits                                                         */
/* ------------------------------------------------------------------ */

function MetricGrid({ items, dark }: { items: Metric[]; dark?: boolean }) {
  return (
    <div className="grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-3">
      {items.map((m) => (
        <div key={m.label} className={`px-6 py-6 ${dark ? 'bg-ink' : 'bg-paper'}`}>
          <div
            className={`font-display text-[clamp(28px,3vw,40px)] font-light leading-none tracking-tight ${
              dark ? 'text-paper' : 'text-ink'
            }`}
          >
            {m.v}
          </div>
          <div
            className={`mt-2 font-mono-lab text-[10px] tracking-[0.1em] uppercase ${
              dark ? 'text-paper/50' : 'text-ink-3'
            }`}
          >
            {m.label}
          </div>
        </div>
      ))}
    </div>
  )
}

function PointList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((p) => (
        <li key={p} className="flex items-start gap-2.5 text-[15px] leading-relaxed text-ink-2">
          <span className="mt-[9px] inline-block h-px w-3 shrink-0 bg-signal" aria-hidden />
          {p}
        </li>
      ))}
    </ul>
  )
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export function CaseStudyPage({ study }: { study: CaseStudy }) {
  return (
    <>
      {/* hero */}
      <section className="grid-paper border-b border-line">
        <div className="mx-auto max-w-[1200px] px-6 pb-16 pt-36 sm:pt-44">
          <Link
            to="/?s=results"
            className="reveal inline-flex items-center gap-2 font-mono-lab text-[11px] tracking-[0.1em] uppercase text-ink-3 transition-colors hover:text-signal"
          >
            ← Back to launched products
          </Link>
          <div className="reveal mt-10 flex items-center gap-3" data-delay="60">
            <span className="inline-block h-1.5 w-1.5 bg-signal" aria-hidden />
            <span className="eyebrow">
              Case Study {study.register} — {study.sector}
            </span>
          </div>
          <h1 className="reveal mt-8 max-w-[20ch] font-display text-[clamp(36px,5.5vw,72px)] font-light leading-[1.04] tracking-[-0.02em] text-ink" data-delay="120">
            {study.title}
          </h1>
          <p className="reveal mt-8 max-w-[58ch] text-lg leading-relaxed text-ink-2" data-delay="180">
            {study.intro}
          </p>
        </div>
      </section>

      {/* challenge */}
      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-[1200px] px-6 py-20 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <div className="reveal eyebrow">01 — The Challenge</div>
              <h2 className="reveal mt-4 font-display text-[clamp(28px,3.5vw,44px)] font-light leading-[1.08] tracking-[-0.015em] text-ink" data-delay="60">
                Before the{' '}
                <em className="text-signal" style={{ fontStyle: 'italic' }}>build</em>.
              </h2>
              <p className="reveal mt-6 max-w-[46ch] leading-relaxed text-ink-2" data-delay="120">
                {study.challenge.body}
              </p>
              {study.challenge.note && (
                <p className="reveal mt-5 max-w-[46ch] border-l-2 border-signal pl-4 text-[14px] leading-relaxed text-ink-3" data-delay="180">
                  {study.challenge.note}
                </p>
              )}
            </div>
            <div className="reveal" data-delay="140">
              <div className="font-mono-lab text-[10px] tracking-[0.14em] uppercase text-ink-3">
                Critical challenges observed
              </div>
              <div className="mt-4 border-t border-line pt-5">
                <PointList items={study.challenge.points} />
              </div>
              <div className="mt-8">
                <div className="font-mono-lab text-[10px] tracking-[0.14em] uppercase text-ink-3">
                  Industry benchmarks — before AI
                </div>
                <div className="mt-4">
                  <MetricGrid items={study.before} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* solution */}
      <section className="border-b border-line bg-cream">
        <div className="mx-auto max-w-[1200px] px-6 py-20 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <div className="reveal eyebrow">02 — The Solution</div>
              <h2 className="reveal mt-4 font-display text-[clamp(28px,3.5vw,44px)] font-light leading-[1.08] tracking-[-0.015em] text-ink" data-delay="60">
                What we{' '}
                <em className="text-signal" style={{ fontStyle: 'italic' }}>engineered</em>.
              </h2>
              <p className="reveal mt-6 max-w-[46ch] leading-relaxed text-ink-2" data-delay="120">
                {study.solution.body}
              </p>
            </div>
            <div className="reveal space-y-8" data-delay="140">
              <div>
                <div className="font-mono-lab text-[10px] tracking-[0.14em] uppercase text-ink-3">
                  Core AI capabilities
                </div>
                <div className="mt-4 border-t border-line pt-5">
                  <PointList items={study.solution.capabilities} />
                </div>
              </div>

              {study.architecture && (
                <div>
                  <div className="font-mono-lab text-[10px] tracking-[0.14em] uppercase text-ink-3">
                    Platform architecture
                  </div>
                  <div className="mt-4 grid gap-px border border-line bg-line sm:grid-cols-3">
                    {study.architecture.map((a, i) => (
                      <div key={a.title} className="bg-paper px-5 py-5">
                        <div className="font-mono-lab text-[11px] text-signal">[{String.fromCharCode(65 + i)}]</div>
                        <div className="mt-1.5 font-semibold tracking-tight text-ink">{a.title}</div>
                        <p className="mt-2 text-[13px] leading-relaxed text-ink-2">{a.items[0]}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {study.timeline && (
                <div>
                  <div className="font-mono-lab text-[10px] tracking-[0.14em] uppercase text-ink-3">
                    Implementation timeline
                  </div>
                  <div className="mt-4 border-t border-line">
                    {study.timeline.map((t) => (
                      <div key={t.step} className="grid grid-cols-[44px_1fr_auto] items-center gap-4 border-b border-line py-4">
                        <span className="font-mono-lab text-[12px] text-signal">[{t.step}]</span>
                        <span className="text-[15px] font-medium text-ink">{t.title}</span>
                        <span className="font-mono-lab text-[11px] uppercase tracking-[0.08em] text-ink-3">{t.dur}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* results */}
      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-[1200px] px-6 py-20 sm:py-24">
          <div className="reveal eyebrow">03 — Measurable Outcome</div>
          <h2 className="reveal mt-4 max-w-[20ch] font-display text-[clamp(28px,3.5vw,44px)] font-light leading-[1.08] tracking-[-0.015em] text-ink" data-delay="60">
            Results,{' '}
            <em className="text-signal" style={{ fontStyle: 'italic' }}>recorded</em>.
          </h2>

          <div className="reveal mt-10" data-delay="120">
            <MetricGrid items={study.results} />
          </div>

          {study.operational && (
            <div className="reveal mt-10" data-delay="160">
              <div className="font-mono-lab text-[10px] tracking-[0.14em] uppercase text-ink-3">
                Operational excellence
              </div>
              <div className="mt-4">
                <MetricGrid items={study.operational} />
              </div>
            </div>
          )}

          {study.financial && (
            <div className="reveal mt-10" data-delay="200">
              <div className="font-mono-lab text-[10px] tracking-[0.14em] uppercase text-ink-3">
                Financial impact
              </div>
              <div className="mt-4">
                <MetricGrid items={study.financial} />
              </div>
            </div>
          )}

          {study.impactBlocks && (
            <div className="reveal mt-10 grid gap-px border border-line bg-line sm:grid-cols-2" data-delay="200">
              {study.impactBlocks.map((b) => (
                <div key={b.title} className="bg-paper p-7">
                  <div className="eyebrow !text-signal">{b.title}</div>
                  <div className="mt-4">
                    <PointList items={b.items} />
                  </div>
                </div>
              ))}
            </div>
          )}

          {study.testimonial && (
            <figure className="reveal brackets mt-12 border border-line bg-cream p-8 sm:p-10" data-delay="240">
              <blockquote className="max-w-[62ch] font-display text-[clamp(19px,2.2vw,26px)] font-light leading-[1.4] tracking-[-0.01em] text-ink">
                “{study.testimonial.quote}”
              </blockquote>
              <figcaption className="mt-5 font-mono-lab text-[11px] tracking-[0.1em] uppercase text-ink-3">
                — {study.testimonial.by}
              </figcaption>
            </figure>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1200px] px-6 py-20">
          <div className="reveal flex flex-col items-start justify-between gap-6 border border-ink bg-ink p-8 text-paper sm:flex-row sm:items-center sm:p-10">
            <div>
              <div className="font-mono-lab text-[11px] tracking-[0.14em] uppercase text-paper/50">
                Next specimen
              </div>
              <p className="mt-2 max-w-[52ch] text-sm leading-relaxed text-paper/70">
                Have a problem this product — or one like it — could solve? Every engagement
                starts with a free 30-minute ideation session.
              </p>
            </div>
            <a
              href="#/?s=contact"
              className="shrink-0 border border-paper/40 px-6 py-3 font-mono-lab text-[12px] tracking-[0.08em] uppercase text-paper transition-colors hover:border-signal hover:bg-signal"
            >
              Bring your idea to life →
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
