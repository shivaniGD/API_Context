import { Link } from 'react-router'

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

type ProcessStep = {
  slug: string
  step: string
  name: string
  tagline: string
  intro: string
  happens: { k: string; title: string; desc: string }[]
  leaveWith: string[]
  readouts: { v: string; label: string }[]
  gate: string
}

/* ------------------------------------------------------------------ */
/* The four steps — long-form records                                  */
/* ------------------------------------------------------------------ */

export const PROCESS_STEPS: ProcessStep[] = [
  {
    slug: 'ideation',
    step: '01',
    name: 'Ideation',
    tagline: 'Concept & discovery',
    intro:
      'Every shipped product begins as a raw idea. Ideation is where we sit down with you — founders, operators, domain experts — and turn that idea into a defined product concept worth qualifying. No code yet; just sharp thinking, mapped properly.',
    happens: [
      {
        k: 'A',
        title: 'Idea intake & discovery workshops',
        desc: 'Structured sessions with your team to surface the real problem — not the symptom. We capture the vision, the constraints, and the ambition in your own words.',
      },
      {
        k: 'B',
        title: 'Problem–user–market mapping',
        desc: 'We map who feels the problem, how they solve it today, and where the gap sits in the market. If the gap is not real, we say so here — before a dollar is spent.',
      },
      {
        k: 'C',
        title: 'Data & AI capability audit',
        desc: 'An honest assessment of the data you have, the data you need, and where AI genuinely adds leverage versus where a simpler tool wins.',
      },
      {
        k: 'D',
        title: 'Product concept definition',
        desc: 'Everything converges into a written product concept: the user, the workflow, the AI at its core, and the outcome it must produce.',
      },
    ],
    leaveWith: [
      'A defined product concept document',
      'Problem–user–market opportunity map',
      'Data & AI capability audit report',
      'A clear recommendation: qualify, pivot, or park',
    ],
    readouts: [
      { v: '≈2 wks', label: 'Typical duration' },
      { v: '1', label: 'Defined product concept' },
      { v: '0', label: 'Lines of code written' },
    ],
    gate: 'Gate 01 — Is this concept worth qualifying? Decided together, in writing.',
  },
  {
    slug: 'qualification',
    step: '02',
    name: 'Qualification',
    tagline: 'Feasibility & ROI',
    intro:
      'Qualification is where ideas earn the right to be built. We test the concept against technical reality, data readiness, regulation, and return on investment — and we agree the success criteria in writing before anyone commits to a build.',
    happens: [
      {
        k: 'A',
        title: 'Technical feasibility testing',
        desc: 'Can the AI actually do what the concept promises? We run targeted experiments against the hardest part of the problem first — not the easiest demo.',
      },
      {
        k: 'B',
        title: 'Data readiness assessment',
        desc: 'Volume, quality, access, and rights. We verify the data can support the model the concept needs, and cost out closing any gaps.',
      },
      {
        k: 'C',
        title: 'Regulatory & compliance screening',
        desc: 'Privacy, industry regulation, and jurisdictional requirements are screened up front — so governance is designed in, never bolted on.',
      },
      {
        k: 'D',
        title: 'ROI model & success criteria',
        desc: 'A financial model of cost, return, and payback period — plus the written success criteria the launched product will be measured against.',
      },
    ],
    leaveWith: [
      'A tested, scored feasibility verdict',
      'Data readiness report and gap plan',
      'Compliance screening summary',
      'ROI model with success criteria agreed in writing',
      'A gated go / no-go decision',
    ],
    readouts: [
      { v: '100%', label: 'Concepts tested & scored' },
      { v: 'Written', label: 'Success criteria, agreed' },
      { v: 'Go / No-Go', label: 'Gated decision' },
    ],
    gate: 'Gate 02 — Go or no-go. If the numbers do not work, we do not build.',
  },
  {
    slug: 'prototyping',
    step: '03',
    name: 'Prototyping',
    tagline: 'Build & validation',
    intro:
      'Prototyping is where the concept becomes something you can touch. In rapid cycles we build a working product, run it on real data with real users, and validate it against the success criteria agreed at qualification — not against opinions.',
    happens: [
      {
        k: 'A',
        title: 'Model & core system development',
        desc: 'The AI engine at the heart of the product is built and trained — models, pipelines, and the logic that makes the product intelligent.',
      },
      {
        k: 'B',
        title: 'Working product build',
        desc: 'A real, usable build — interface, workflows, and integrations — engineered to production standards from the first commit, not a throwaway demo.',
      },
      {
        k: 'C',
        title: 'Validation on real data',
        desc: 'The prototype runs against live or representative data, and its outputs are measured against the written success criteria from Gate 02.',
      },
      {
        k: 'D',
        title: 'User testing & rapid iteration',
        desc: 'Real users work with the build in short cycles. Every cycle tightens accuracy, usability, and fit — fast, because cycles are cheap here and expensive after launch.',
      },
    ],
    leaveWith: [
      'A working prototype on real data',
      'Validation report against success criteria',
      'User testing findings and iteration log',
      'A launch plan with security & governance scope',
    ],
    readouts: [
      { v: '≈6 wks', label: 'Typical build window' },
      { v: 'Real', label: 'Data, real users' },
      { v: 'Rapid', label: 'Iteration cycles' },
    ],
    gate: 'Gate 03 — Does the prototype meet the agreed criteria on real data? Then it earns launch.',
  },
  {
    slug: 'launch',
    step: '04',
    name: 'Launch',
    tagline: 'Measurable outcome',
    intro:
      'Launch is where the product goes to work. We harden it, secure it, wire in compliance and governance controls, integrate it into your operations — and then we keep measuring, optimising, and scaling against the outcomes that justified the build.',
    happens: [
      {
        k: 'A',
        title: 'Hardening & security',
        desc: 'Enterprise-grade security review, penetration-conscious engineering, access controls, and data protection — the product is hardened for real-world adversaries, not just real users.',
      },
      {
        k: 'B',
        title: 'Compliance & governance controls',
        desc: 'The governance framework designed at qualification goes live: audit trails, oversight dashboards, and regulatory reporting built into the product itself.',
      },
      {
        k: 'C',
        title: 'Launch & integration',
        desc: 'Deployment into your environment and integration with the systems your teams already use — with training and handover so adoption sticks.',
      },
      {
        k: 'D',
        title: 'Monitoring, optimisation & scaling',
        desc: 'Post-launch, the product is monitored 24/7 against its success metrics. We optimise performance and scale what works — the outcome is never "launched and left".',
      },
    ],
    leaveWith: [
      'A launched, integrated, governed product',
      'Security & compliance framework in operation',
      'Outcome dashboard against agreed metrics',
      'Ongoing optimisation and scaling plan',
    ],
    readouts: [
      { v: '6 mo', label: 'Typical ROI timeline' },
      { v: '100%', label: 'Compliance accuracy target' },
      { v: '24/7', label: 'Monitoring & oversight' },
    ],
    gate: 'Gate 04 — Measurable outcome. The product is judged on the numbers agreed at Gate 02.',
  },
]

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export function ProcessStepPage({ step }: { step: ProcessStep }) {
  const idx = PROCESS_STEPS.findIndex((s) => s.slug === step.slug)
  const prev = PROCESS_STEPS[(idx + PROCESS_STEPS.length - 1) % PROCESS_STEPS.length]
  const next = PROCESS_STEPS[(idx + 1) % PROCESS_STEPS.length]

  return (
    <>
      {/* hero */}
      <section className="grid-paper border-b border-line">
        <div className="mx-auto max-w-[1200px] px-6 pb-16 pt-36 sm:pt-44">
          <Link
            to="/?s=process"
            className="reveal inline-flex items-center gap-2 font-mono-lab text-[11px] tracking-[0.1em] uppercase text-ink-3 transition-colors hover:text-signal"
          >
            ← Back to the process
          </Link>
          <div className="reveal mt-10 flex items-center gap-3" data-delay="60">
            <span className="inline-block h-1.5 w-1.5 bg-signal" aria-hidden />
            <span className="eyebrow">
              The Process — Step {step.step} of 04 · {step.tagline}
            </span>
          </div>
          <h1 className="reveal mt-8 font-display text-[clamp(40px,6.5vw,84px)] font-light leading-[1.02] tracking-[-0.02em] text-ink" data-delay="120">
            {step.name}
            <span className="text-signal">.</span>
          </h1>
          <p className="reveal mt-8 max-w-[58ch] text-lg leading-relaxed text-ink-2" data-delay="180">
            {step.intro}
          </p>

          {/* readouts */}
          <div className="reveal mt-12 grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-3" data-delay="240">
            {step.readouts.map((r) => (
              <div key={r.label} className="bg-paper px-6 py-5">
                <div className="font-display text-[clamp(24px,2.5vw,34px)] font-light leading-none tracking-tight text-ink">
                  {r.v}
                </div>
                <div className="mt-2 font-mono-lab text-[10px] tracking-[0.1em] uppercase text-ink-3">
                  {r.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* what happens */}
      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-[1200px] px-6 py-20 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <div className="reveal eyebrow">What happens in this step</div>
              <h2 className="reveal mt-4 font-display text-[clamp(28px,3.5vw,44px)] font-light leading-[1.08] tracking-[-0.015em] text-ink" data-delay="60">
                Inside step{' '}
                <em className="text-signal" style={{ fontStyle: 'italic' }}>{step.step}</em>.
              </h2>
            </div>
            <div className="reveal border-t border-line" data-delay="120">
              {step.happens.map((h) => (
                <div key={h.k} className="brackets grid grid-cols-[44px_1fr] gap-5 border-b border-line py-7">
                  <div className="font-mono-lab text-[13px] text-signal">[{h.k}]</div>
                  <div>
                    <h3 className="font-semibold tracking-tight text-ink">{h.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-ink-2">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* what you leave with + gate */}
      <section className="border-b border-line bg-cream">
        <div className="mx-auto max-w-[1200px] px-6 py-20 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="reveal">
              <div className="eyebrow">What you leave with</div>
              <ul className="mt-6 space-y-3 border-t border-line pt-6">
                {step.leaveWith.map((l) => (
                  <li key={l} className="flex items-start gap-2.5 text-[15px] leading-relaxed text-ink-2">
                    <span className="mt-[9px] inline-block h-px w-3 shrink-0 bg-signal" aria-hidden />
                    {l}
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal brackets flex flex-col justify-center border border-ink bg-ink p-8 text-paper sm:p-10" data-delay="120">
              <div className="font-mono-lab text-[11px] tracking-[0.14em] uppercase text-paper/50">
                Stage gate
              </div>
              <p className="mt-3 font-display text-[clamp(19px,2vw,24px)] font-light leading-[1.4] text-paper">
                {step.gate}
              </p>
              <p className="mt-4 text-[13px] leading-relaxed text-paper/60">
                Every stage is backed by enterprise-grade security and governance — so you can
                innovate boldly while maintaining compliance, data protection, and full oversight.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* prev / next + CTA */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1200px] px-6 py-16">
          <div className="reveal grid gap-px border border-line bg-line sm:grid-cols-2">
            <Link to={`/process/${prev.slug}`} className="group bg-paper p-7 transition-colors hover:bg-cream">
              <div className="font-mono-lab text-[10px] tracking-[0.14em] uppercase text-ink-3">
                ← Step {prev.step}
              </div>
              <div className="mt-2 font-display text-2xl font-medium tracking-tight text-ink transition-colors group-hover:text-signal">
                {prev.name}
              </div>
            </Link>
            <Link to={`/process/${next.slug}`} className="group bg-paper p-7 text-right transition-colors hover:bg-cream">
              <div className="font-mono-lab text-[10px] tracking-[0.14em] uppercase text-ink-3">
                Step {next.step} →
              </div>
              <div className="mt-2 font-display text-2xl font-medium tracking-tight text-ink transition-colors group-hover:text-signal">
                {next.name}
              </div>
            </Link>
          </div>

          <div className="reveal mt-10 flex flex-col items-start justify-between gap-6 border border-ink bg-ink p-8 text-paper sm:flex-row sm:items-center sm:p-10">
            <div>
              <div className="font-mono-lab text-[11px] tracking-[0.14em] uppercase text-paper/50">
                Start at step 01
              </div>
              <p className="mt-2 max-w-[52ch] text-sm leading-relaxed text-paper/70">
                Bring your idea to a free 30-minute ideation session — you will leave with an
                initial assessment, feasibility read, and next steps.
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
