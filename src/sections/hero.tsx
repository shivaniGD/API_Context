import { useEffect, useRef } from 'react'

/* ------------------------------------------------------------------ */
/* Star galaxy — slow drift left → right, occasional signal-blue dots  */
/* ------------------------------------------------------------------ */

function Starfield() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    type Star = { x: number; y: number; r: number; v: number; blue: boolean; a: number }
    let stars: Star[] = []
    let w = 0
    let h = 0
    let raf = 0

    const seed = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const rect = canvas.getBoundingClientRect()
      w = rect.width
      h = rect.height
      canvas.width = Math.max(1, Math.floor(w * dpr))
      canvas.height = Math.max(1, Math.floor(h * dpr))
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const count = Math.round((w * h) / 9000)
      stars = Array.from({ length: count }, () => {
        const blue = Math.random() < 0.12
        const r = blue ? 0.8 + Math.random() * 1.3 : 0.4 + Math.random() * 0.9
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          r,
          v: 6 + r * 14 + Math.random() * 8, // px per second, parallax by size
          blue,
          a: blue ? 0.45 + Math.random() * 0.4 : 0.12 + Math.random() * 0.22,
        }
      })
    }

    const draw = (dt: number) => {
      ctx.clearRect(0, 0, w, h)
      for (const s of stars) {
        s.x += s.v * dt
        if (s.x - s.r > w) {
          s.x = -s.r
          s.y = Math.random() * h
        }
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = s.blue
          ? `rgba(31, 61, 255, ${s.a})`
          : `rgba(22, 21, 15, ${s.a})`
        ctx.fill()
      }
    }

    seed()
    if (reduced) {
      draw(0) // static field, no motion
      return
    }

    let last = performance.now()
    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05)
      last = now
      draw(dt)
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    const onResize = () => seed()
    window.addEventListener('resize', onResize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  )
}

const HERO_STATS = [
  { k: '01', label: 'Ideation', v: 'Concept & discovery' },
  { k: '02', label: 'Qualification', v: 'Feasibility & ROI' },
  { k: '03', label: 'Prototyping', v: 'Build & validation' },
  { k: '04', label: 'Measurable Outcome', v: 'Launch & results' },
]

export function Hero() {
  return (
    <section id="top" className="grid-paper relative overflow-hidden border-b border-line">
      {/* star galaxy drifting left → right */}
      <Starfield />

      {/* crosshair registration marks */}
      <span aria-hidden className="absolute left-6 top-24 hidden font-mono-lab text-lg text-ink-3/50 lg:block">+</span>
      <span aria-hidden className="absolute right-6 top-24 hidden font-mono-lab text-lg text-ink-3/50 lg:block">+</span>
      <span aria-hidden className="absolute bottom-8 left-6 hidden font-mono-lab text-lg text-ink-3/50 lg:block">+</span>
      <span aria-hidden className="absolute bottom-8 right-6 hidden font-mono-lab text-lg text-ink-3/50 lg:block">+</span>

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 pb-20 pt-36 sm:pt-44">
        <div className="reveal flex items-center gap-3">
          <span className="inline-block h-1.5 w-1.5 bg-signal" aria-hidden />
          <span className="eyebrow">AI Product Studio — Brisbane, Australia</span>
        </div>

        <h1 className="reveal mt-8 max-w-[16ch] font-display text-[clamp(44px,7.5vw,96px)] font-light leading-[1.02] tracking-[-0.02em] text-ink" data-delay="80">
          Ideas,{' '}
          <em className="font-normal not-italic text-signal" style={{ fontStyle: 'italic' }}>
            engineered
          </em>{' '}
          into living products.
        </h1>

        <div className="mt-10 grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-end">
          <p className="reveal max-w-[52ch] text-lg leading-relaxed text-ink-2" data-delay="160">
            DiscoverrLabs.AI transforms ideation into full product life — engineering ground-up
            AI solutions across diverse verticals and industries. Our proven four-step process
            guides every concept seamlessly from ideation → qualification → prototype → launch.
          </p>

          <div className="reveal flex flex-wrap gap-3 md:justify-end" data-delay="240">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-ink bg-ink px-6 py-3 font-mono-lab text-[13px] tracking-[0.06em] uppercase text-paper transition-colors hover:bg-signal hover:border-signal"
            >
              Bring your idea to life →
            </a>
            <a
              href="#results"
              className="inline-flex items-center gap-2 border border-line bg-transparent px-6 py-3 font-mono-lab text-[13px] tracking-[0.06em] uppercase text-ink transition-colors hover:border-ink"
            >
              See launched products
            </a>
          </div>
        </div>

        {/* specimen stat strip */}
        <div className="reveal mt-20 grid grid-cols-2 md:grid-cols-4" data-delay="300">
          {HERO_STATS.map((s) => (
            <div key={s.label} className="-ml-px -mt-px border border-line bg-paper px-6 py-6">
              <div className="font-mono-lab text-[10px] tracking-[0.14em] uppercase text-ink-3">
                Fig. {s.k}
              </div>
              <div className="mt-2 font-display text-2xl font-medium tracking-tight text-ink">{s.label}</div>
              <div className="mt-1 font-mono-lab text-[11px] text-ink-3">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function TrustStrip() {
  return (
    <section className="border-b border-line bg-cream">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-5 px-6 py-10 sm:flex-row sm:items-center sm:gap-10">
        <div className="flex shrink-0 items-center gap-3">
          <span className="relative flex h-2 w-2" aria-hidden>
            <span className="absolute inline-flex h-full w-full animate-ping bg-signal opacity-60" />
            <span className="relative inline-flex h-2 w-2 bg-signal" />
          </span>
          <span className="font-mono-lab text-[11px] tracking-[0.14em] uppercase text-ink-3">
            Enterprise-grade security &amp; governance
          </span>
        </div>
        <p className="reveal max-w-[72ch] text-[15px] leading-relaxed text-ink-2">
          Every stage is backed by enterprise-grade security and governance — so you can
          innovate boldly while maintaining compliance, data protection, and full oversight
          at every step.
        </p>
      </div>
    </section>
  )
}
