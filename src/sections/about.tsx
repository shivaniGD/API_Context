import { useState } from 'react'

const WHY = [
  {
    k: 'A',
    title: 'Proven track record',
    desc: 'AI products built and launched for Fortune 500 companies and Australian enterprises alike.',
  },
  {
    k: 'B',
    title: 'Cross-industry range',
    desc: 'Products shipped across healthcare, finance, retail, manufacturing, pharma, education, and logistics.',
  },
  {
    k: 'C',
    title: 'End-to-end ownership',
    desc: 'From ideation to launch and beyond — training, monitoring, and optimisation included.',
  },
]

export function About() {
  return (
    <section id="about" className="border-b border-line bg-paper">
      <div className="mx-auto max-w-[1200px] px-6 py-24 sm:py-32">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <div className="reveal eyebrow">Section 03 — The Studio</div>
            <h2 className="reveal mt-5 font-display text-[clamp(34px,4.5vw,56px)] font-light leading-[1.05] tracking-[-0.015em] text-ink" data-delay="80">
              A studio that{' '}
              <em className="text-signal" style={{ fontStyle: 'italic' }}>ships</em>.
            </h2>
            <p className="reveal mt-8 max-w-[52ch] text-lg leading-relaxed text-ink-2" data-delay="160">
              We are a team of AI specialists, data scientists, and product engineers who take
              ideas from a first sketch to a launched, governed product — across pharma,
              retail, education, logistics, and beyond.
            </p>
            <p className="reveal mt-5 max-w-[52ch] leading-relaxed text-ink-2" data-delay="220">
              Our process combines cutting-edge AI with deep cross-industry expertise to ship
              products that create real business value and durable competitive advantage.
            </p>
            <div className="reveal mt-8" data-delay="280">
              <a
                href="#/team"
                className="inline-flex items-center gap-2 border border-ink px-5 py-2.5 font-mono-lab text-[12px] tracking-[0.08em] uppercase text-ink transition-colors hover:border-signal hover:bg-signal hover:text-paper"
              >
                Meet the founding team →
              </a>
            </div>
          </div>

          <div className="reveal space-y-0 border-t border-line" data-delay="200">
            {WHY.map((w) => (
              <div key={w.k} className="brackets grid grid-cols-[44px_1fr] gap-5 border-b border-line py-7">
                <div className="font-mono-lab text-[13px] text-signal">[{w.k}]</div>
                <div>
                  <h3 className="font-semibold tracking-tight text-ink">{w.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-2">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <section id="contact" className="bg-paper">
      <div className="mx-auto max-w-[1200px] px-6 py-24 sm:py-32">
        <div className="reveal eyebrow">Section 04 — Engagement</div>
        <h2 className="reveal mt-5 max-w-[18ch] font-display text-[clamp(34px,4.5vw,56px)] font-light leading-[1.05] tracking-[-0.015em] text-ink" data-delay="80">
          Bring your{' '}
          <em className="text-signal" style={{ fontStyle: 'italic' }}>idea</em>{' '}
          to life.
        </h2>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          {/* form */}
          <form
            className="reveal border border-line bg-paper p-8"
            data-delay="140"
            onSubmit={(e) => {
              e.preventDefault()
              setSent(true)
            }}
          >
            <div className="font-mono-lab text-[10px] tracking-[0.14em] uppercase text-ink-3">
              Form DL-C1 — Initial enquiry
            </div>
            {sent ? (
              <div className="mt-8 border border-signal bg-signal-tint p-6">
                <div className="font-mono-lab text-[12px] tracking-[0.1em] uppercase text-signal">
                  ✓ Enquiry logged
                </div>
                <p className="mt-2 text-sm text-ink-2">
                  Thank you — we will respond within one business day. For urgent matters,
                  call +61 422 201 738.
                </p>
              </div>
            ) : (
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {[
                  { id: 'fn', label: 'First name', type: 'text', ph: 'John' },
                  { id: 'ln', label: 'Last name', type: 'text', ph: 'Doe' },
                  { id: 'em', label: 'Email', type: 'email', ph: 'john@company.com' },
                  { id: 'co', label: 'Company', type: 'text', ph: 'Your company' },
                ].map((f) => (
                  <div key={f.id}>
                    <label htmlFor={f.id} className="font-mono-lab text-[11px] tracking-[0.1em] uppercase text-ink-3">
                      {f.label}
                    </label>
                    <input
                      id={f.id}
                      type={f.type}
                      required={f.id !== 'co'}
                      placeholder={f.ph}
                      className="mt-2 w-full border border-line bg-transparent px-4 py-3 text-[15px] text-ink outline-none transition-colors placeholder:text-ink-3/50 focus:border-signal"
                    />
                  </div>
                ))}
                <div className="sm:col-span-2">
                  <label htmlFor="mob" className="font-mono-lab text-[11px] tracking-[0.1em] uppercase text-ink-3">
                    Mobile <span className="normal-case text-ink-3/60">— optional</span>
                  </label>
                  <div className="mt-2 flex">
                    <select
                      id="cc"
                      aria-label="Country code"
                      className="w-[110px] shrink-0 border border-r-0 border-line bg-transparent px-3 py-3 font-mono-lab text-[13px] text-ink outline-none transition-colors focus:border-signal"
                      defaultValue="+61"
                    >
                      <option value="+61">AU +61</option>
                      <option value="+91">IN +91</option>
                      <option value="+1">US +1</option>
                      <option value="+44">UK +44</option>
                      <option value="+64">NZ +64</option>
                      <option value="+65">SG +65</option>
                      <option value="+971">AE +971</option>
                    </select>
                    <input
                      id="mob"
                      type="tel"
                      inputMode="tel"
                      className="w-full border border-line bg-transparent px-4 py-3 text-[15px] text-ink outline-none transition-colors placeholder:text-ink-3/50 focus:border-signal"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="msg" className="font-mono-lab text-[11px] tracking-[0.1em] uppercase text-ink-3">
                    Tell us about your idea
                  </label>
                  <textarea
                    id="msg"
                    rows={4}
                    className="mt-2 w-full resize-none border border-line bg-transparent px-4 py-3 text-[15px] text-ink outline-none transition-colors placeholder:text-ink-3/50 focus:border-signal"
                  />
                </div>
                <button
                  type="submit"
                  className="sm:col-span-2 border border-ink bg-ink px-6 py-4 font-mono-lab text-[13px] tracking-[0.08em] uppercase text-paper transition-colors hover:bg-signal hover:border-signal"
                >
                  Submit enquiry →
                </button>
              </div>
            )}
          </form>

          {/* contact panel */}
          <div className="space-y-6">
            <div className="reveal brackets border border-line bg-cream p-8" data-delay="200">
              <div className="eyebrow">Direct line</div>
              <div className="mt-5 space-y-3 text-[15px]">
                <a href="mailto:connect@discoverrlabs.ai" className="block text-ink transition-colors hover:text-signal">
                  connect@discoverrlabs.ai
                </a>
                <a href="tel:+61422201738" className="block text-ink transition-colors hover:text-signal">
                  +61 422 201 738
                </a>
                <div className="text-ink-2">Brisbane, Australia</div>
              </div>
            </div>

            <div className="reveal brackets border border-ink bg-ink p-8 text-paper" data-delay="260">
              <div className="eyebrow !text-paper/50">Free 30-minute ideation session</div>
              <p className="mt-4 text-sm leading-relaxed text-paper/70">
                Book a session with our product team. You will leave with:
              </p>
              <ul className="mt-5 space-y-2.5">
                {[
                  'Initial assessment of your idea',
                  'Feasibility and vertical fit',
                  'ROI projections and timeline',
                  'Next steps toward prototype',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 font-mono-lab text-[12px] text-paper/75">
                    <span className="mt-[7px] inline-block h-px w-3 shrink-0 bg-signal" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="mailto:connect@discoverrlabs.ai?subject=Free%20consultation%20request"
                className="mt-7 block border border-paper/40 px-6 py-3.5 text-center font-mono-lab text-[12px] tracking-[0.08em] uppercase text-paper transition-colors hover:border-signal hover:bg-signal"
              >
                Book free consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
