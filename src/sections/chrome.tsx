import { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import { useTheme } from '../context/ThemeContext'

const NAV = [
  { label: 'Process', href: '#/', anchor: 'process' },
  { label: 'Results', href: '#/', anchor: 'results' },
  { label: 'About', href: '#/', anchor: 'about' },
  { label: 'Team', href: '#/team' },
]

function ThemeToggle() {
  const { state, dispatch } = useTheme()
  return (
    <button
      onClick={() => dispatch({ type: 'TOGGLE' })}
      className="font-mono-lab text-[12px] tracking-[0.08em] uppercase text-ink-2 transition-colors hover:text-signal"
    >
      {state.theme === 'light' ? 'Dark' : 'Light'} mode
    </button>
  )
}

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-paper/90 backdrop-blur-md border-b border-line' : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
        <a href="#/" className="flex items-center gap-2">
          <img src={logo} alt="DiscoverrLabs.AI" className="h-5 w-auto md:h-6" />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.anchor ? `${item.href}?s=${item.anchor}` : item.href}
              className="font-mono-lab text-[12px] tracking-[0.08em] uppercase text-ink-2 transition-colors hover:text-signal"
            >
              {item.label}
            </a>
          ))}
          <ThemeToggle />
        </nav>

        <a
          href="#/?s=contact"
          className="group inline-flex items-center gap-2 border border-ink bg-ink px-4 py-2 font-mono-lab text-[12px] tracking-[0.08em] uppercase text-paper transition-colors hover:bg-signal hover:border-signal"
        >
          Book consultation
          <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
        </a>
      </div>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <img src={logo} alt="DiscoverrLabs.AI" className="h-7 w-auto brightness-0 invert" />

            <p className="mt-4 max-w-[34ch] text-sm leading-relaxed text-paper/60">
              An AI product studio. We turn ideation into product life — ground-up AI
              products built, launched, and measured across verticals.
            </p>
            <div className="mt-6 font-mono-lab text-[11px] tracking-[0.12em] uppercase text-paper/40">
              Brisbane, Australia — 27.47°S, 153.03°E
            </div>
          </div>

          <div>
            <div className="eyebrow !text-paper/40">Process</div>
            <ul className="mt-4 space-y-2 text-sm text-paper/75">
              <li><a href="#/process/ideation" className="hover:text-signal transition-colors">Ideation</a></li>
              <li><a href="#/process/qualification" className="hover:text-signal transition-colors">Qualification</a></li>
              <li><a href="#/process/prototyping" className="hover:text-signal transition-colors">Prototyping</a></li>
              <li><a href="#/process/launch" className="hover:text-signal transition-colors">Launch</a></li>
            </ul>
          </div>

          <div>
            <div className="eyebrow !text-paper/40">Company</div>
            <ul className="mt-4 space-y-2 text-sm text-paper/75">
              <li><a href="#/?s=about" className="hover:text-signal transition-colors">About</a></li>
              <li><a href="#/team" className="hover:text-signal transition-colors">Team</a></li>
              <li><a href="#/?s=results" className="hover:text-signal transition-colors">Case Studies</a></li>
              <li><a href="#/?s=contact" className="hover:text-signal transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <div className="eyebrow !text-paper/40">Contact</div>
            <ul className="mt-4 space-y-2 text-sm text-paper/75">
              <li><a href="mailto:connect@discoverrlabs.ai" className="hover:text-signal transition-colors">connect@discoverrlabs.ai</a></li>
              <li><a href="tel:+61422201738" className="hover:text-signal transition-colors">+61 422 201 738</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line-dark pt-6 font-mono-lab text-[11px] tracking-[0.1em] uppercase text-paper/35 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 DiscoverrLabs.AI — All observations recorded</span>
          <span>DOC. REF. DL-2026-001 / REV. A</span>
        </div>
      </div>
    </footer>
  )
}