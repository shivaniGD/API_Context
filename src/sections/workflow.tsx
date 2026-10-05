import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router'

/* ------------------------------------------------------------------ */
/* Data — the DiscoverrLabs 4-step product process                     */
/* ------------------------------------------------------------------ */

type Readout = {
  label: string
  /** numeric tween target; omit for static text values */
  value?: number
  prefix?: string
  suffix?: string
  text?: string
}

type Stage = {
  id: string
  step: string
  title: string
  kicker: string
  desc: string
  flow: string[]
  readouts: Readout[]
}

const STAGES: Stage[] = [
  {
    id: 'ideation',
    step: 'Step 1',
    title: 'Ideation',
    kicker: 'Every product starts as a hypothesis',
    desc: 'We take your raw idea — from any vertical, any industry — and shape it into a defined product concept. Together we map the problem space, the users, the data available, and the AI capabilities that could create an unfair advantage.',
    flow: [
      'Idea intake & discovery workshops',
      'Problem, user & market mapping',
      'Data and AI capability audit',
      'Product concept definition',
    ],
    readouts: [
      { label: 'Input', text: 'Your raw idea' },
      { label: 'Ideation phase', text: '≈ 2 weeks' },
      { label: 'Output', text: 'Defined product concept' },
    ],
  },
  {
    id: 'qualification',
    step: 'Step 2',
    title: 'Qualification',
    kicker: 'Evidence before investment',
    desc: 'The concept is stress-tested before a dollar of build budget is spent. We validate technical feasibility, data readiness, regulatory exposure, and commercial potential — then quantify the ROI case and the success criteria in writing.',
    flow: [
      'Technical feasibility assessment',
      'Data readiness & quality review',
      'Regulatory & risk screening',
      'ROI projection & success criteria',
    ],
    readouts: [
      { label: 'Feasibility', text: 'Tested & scored' },
      { label: 'Success criteria', text: 'Agreed in writing' },
      { label: 'Commitment risk', text: 'Gated go / no-go' },
    ],
  },
  {
    id: 'prototype',
    step: 'Step 3',
    title: 'Prototype',
    kicker: 'A working product, fast',
    desc: 'A functional prototype is built and validated against real data in weeks, not quarters. You and your users interact with the actual product — its AI models, its workflows, its interface — before any production commitment is made.',
    flow: [
      'AI model & system development',
      'Working prototype build',
      'Validation on real data',
      'User testing & iteration',
    ],
    readouts: [
      { label: 'Prototype build', text: '≈ 6 weeks' },
      { label: 'Validated on', text: 'Real data, real users' },
      { label: 'Iteration', text: 'Rapid cycles' },
    ],
  },
  {
    id: 'launch',
    step: 'Step 4',
    title: 'Launch',
    kicker: 'Idea, alive in the market',
    desc: 'The validated product is hardened, secured, and launched into production — integrated with your systems, governed for compliance, and monitored against the success criteria set at qualification. Post-launch, we keep optimising and scaling it.',
    flow: [
      'Production hardening & security',
      'Compliance & governance controls',
      'Launch & systems integration',
      'Monitoring, optimisation & scaling',
    ],
    readouts: [
      { label: 'Typical ROI horizon', text: '6 months' },
      { label: 'Compliance accuracy', value: 100, suffix: '%' },
      { label: 'Post-launch support', text: '24 / 7' },
    ],
  },
]

const AUTOPLAY_MS = 6500

/* ------------------------------------------------------------------ */
/* Animated counter                                                    */
/* ------------------------------------------------------------------ */

function TweenedValue({ r, active }: { r: Readout; active: boolean }) {
  const [display, setDisplay] = useState(0)
  const raf = useRef<number | undefined>(undefined)

  useEffect(() => {
    if (r.value === undefined) return
    if (!active) {
      setDisplay(0)
      return
    }
    const start = performance.now()
    const dur = 900
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / dur)
      const eased = 1 - Math.pow(1 - t, 3)
      setDisplay(Math.round(r.value! * eased))
      if (t < 1) raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current)
    }
  }, [active, r.value])

  if (r.value === undefined) return <>{r.text}</>
  return (
    <>
      {r.prefix}
      {display}
      {r.suffix}
    </>
  )
}

/* ------------------------------------------------------------------ */
/* Section                                                             */
/* ------------------------------------------------------------------ */

export function Workflow() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [cycle, setCycle] = useState(0) // restarts the progress bar
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  const select = useCallback((i: number) => {
    setActive(i)
    setCycle((c) => c + 1)
    setPaused(true)
    if (resumeTimer.current) clearTimeout(resumeTimer.current)
    resumeTimer.current = setTimeout(() => {
      setPaused(false)
      setCycle((c) => c + 1)
    }, 12000)
  }, [])

  /* autoplay */
  useEffect(() => {
    if (paused) return
    const t = setTimeout(() => {
      setActive((a) => (a + 1) % STAGES.length)
      setCycle((c) => c + 1)
    }, AUTOPLAY_MS)
    return () => clearTimeout(t)
  }, [paused, active, cycle])

  useEffect(() => () => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current)
  }, [])

  const stage = STAGES[active]

  return (
    <section id="process" className="grid-paper-dark border-b border-line-dark bg-ink text-paper">
      <div className="mx-auto max-w-[1200px] px-6 py-24 sm:py-32">
        {/* heading */}
        <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:items-end">
          <div>
            <div className="reveal eyebrow !text-paper/45">Section 01 — The Process</div>
            <h2
              className="reveal mt-5 font-display text-[clamp(34px,4.5vw,56px)] font-light leading-[1.05] tracking-[-0.015em]"
              data-delay="80"
            >
              From idea to{' '}
              <em className="text-signal" style={{ fontStyle: 'italic' }}>launched product</em>,
              in four steps.
            </h2>
          </div>
          <p className="reveal max-w-[46ch] text-paper/65 md:justify-self-end" data-delay="160">
            Ideation, qualification, prototype, launch — the same controlled process behind
            every DiscoverrLabs product, in any vertical. Step through it, or let it play.
          </p>
        </div>

        {/* workflow apparatus */}
        <div className="reveal mt-16 border border-line-dark" data-delay="200">
          {/* governance ribbon */}
          <div className="flex items-center justify-between gap-4 border-b border-line-dark px-6 py-3">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2 w-2" aria-hidden>
                <span className="absolute inline-flex h-full w-full animate-ping bg-signal opacity-60" />
                <span className="relative inline-flex h-2 w-2 bg-signal" />
              </span>
              <span className="font-mono-lab text-[11px] tracking-[0.14em] uppercase text-paper/60">
                Security &amp; governance layer — active across all four steps
              </span>
            </div>
            <span className="hidden font-mono-lab text-[11px] tracking-[0.14em] uppercase text-paper/35 sm:block">
              Process DL-4
            </span>
          </div>

          <div className="grid lg:grid-cols-[380px_1fr]">
            {/* stage rail */}
            <div className="border-b border-line-dark lg:border-b-0 lg:border-r">
              {STAGES.map((s, i) => {
                const isActive = i === active
                return (
                  <button
                    key={s.id}
                    onClick={() => select(i)}
                    aria-current={isActive}
                    className={`group relative block w-full border-b border-line-dark px-6 py-6 text-left transition-colors last:border-b-0 ${
                      isActive ? 'bg-paper/[0.04]' : 'hover:bg-paper/[0.02]'
                    }`}
                  >
                    <div className="flex items-baseline justify-between gap-4">
                      <div className="flex items-baseline gap-4">
                        <span
                          className={`font-mono-lab text-[12px] tracking-[0.1em] transition-colors ${
                            isActive ? 'text-signal' : 'text-paper/35'
                          }`}
                        >
                          0{i + 1}
                        </span>
                        <span
                          className={`font-display text-[24px] font-medium tracking-tight transition-colors ${
                            isActive ? 'text-paper' : 'text-paper/55 group-hover:text-paper/80'
                          }`}
                        >
                          {s.title}
                        </span>
                      </div>
                      <span
                        className={`font-mono-lab text-[10px] tracking-[0.12em] uppercase transition-colors ${
                          isActive ? 'text-paper/50' : 'text-paper/25'
                        }`}
                      >
                        {s.step}
                      </span>
                    </div>
                    {/* progress line */}
                    <div className="absolute inset-x-0 bottom-0 h-px bg-transparent">
                      {isActive && (
                        <div
                          key={cycle}
                          className="h-px bg-signal"
                          style={
                            paused
                              ? { width: '100%' }
                              : { animation: `dl-progress ${AUTOPLAY_MS}ms linear forwards` }
                          }
                        />
                      )}
                    </div>
                  </button>
                )
              })}
            </div>

            {/* instrument panel */}
            <div key={stage.id} className="dl-panel px-6 py-8 sm:px-10 sm:py-10">
              <div className="font-mono-lab text-[11px] tracking-[0.14em] uppercase text-signal">
                {stage.step} — {stage.kicker}
              </div>
              <h3 className="mt-4 font-display text-[clamp(26px,3vw,38px)] font-light tracking-tight">
                {stage.title}
              </h3>
              <p className="mt-4 max-w-[62ch] text-[15px] leading-relaxed text-paper/70">
                {stage.desc}
              </p>

              {/* process flow */}
              <div className="mt-8 border-t border-line-dark pt-6">
                <div className="font-mono-lab text-[10px] tracking-[0.14em] uppercase text-paper/40">
                  Process flow
                </div>
                <ol className="mt-4 space-y-0">
                  {stage.flow.map((f, idx) => (
                    <li
                      key={f}
                      className="flex items-baseline gap-4 border-b border-line-dark/60 py-3 last:border-b-0"
                    >
                      <span className="font-mono-lab text-[11px] text-signal">
                        {stage.title.slice(0, 1)}.{idx + 1}
                      </span>
                      <span className="font-mono-lab text-[12px] text-paper/75">{f}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* instrument readouts */}
              <div className="mt-8 grid gap-px border border-line-dark bg-line-dark sm:grid-cols-3">
                {stage.readouts.map((r, idx) => (
                  <div key={r.label} className="bg-ink px-5 py-5">
                    <div className="font-mono-lab text-[10px] tracking-[0.1em] uppercase text-paper/40">
                      R-{idx + 1} · {r.label}
                    </div>
                    <div className="mt-2 font-display text-[clamp(24px,2.4vw,34px)] font-light leading-none tracking-tight text-paper">
                      <TweenedValue r={r} active />
                    </div>
                  </div>
                ))}
              </div>

              {/* full step record */}
              <div className="mt-8">
                <Link
                  to={`/process/${stage.id === 'prototype' ? 'prototyping' : stage.id}`}
                  className="inline-flex items-center gap-2 border border-paper/30 px-4 py-2 font-mono-lab text-[11px] tracking-[0.08em] uppercase text-paper/80 transition-colors hover:border-signal hover:bg-signal hover:text-paper"
                >
                  Full step record →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* footnote */}
        <div className="reveal mt-6 flex flex-col gap-2 font-mono-lab text-[10px] tracking-[0.14em] uppercase text-paper/35 sm:flex-row sm:justify-between" data-delay="120">
          <span>Apparatus 01 — Product development process, interactive</span>
          <span>Readouts R-1…R-3 recorded from shipped products, 2024–2026</span>
        </div>
      </div>
    </section>
  )
}
