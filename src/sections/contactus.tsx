import { useState } from 'react'
import type { FormEvent, ReactNode } from 'react'
import { Header, Footer } from '../sections/chrome'

/* ------------------------------------------------------------------ */
/* Content: edit text here                                             */
/* ------------------------------------------------------------------ */

const EMAIL = 'connect@discoverrlabs.ai'

// TODO: replace with your real booking link (Calendly, Cal.com, etc.)
const BOOKING_URL = `mailto:${EMAIL}?subject=${encodeURIComponent('Free consultation request')}`
const ENTERPRISE_URL = `mailto:${EMAIL}?subject=${encodeURIComponent('Enterprise support enquiry')}`

const INFO_CARDS = [
  {
    icon: 'mail',
    title: 'Email Us',
    primary: EMAIL,
    href: `mailto:${EMAIL}`,
    note: 'Get in touch via email for general inquiries',
  },
  {
    icon: 'phone',
    title: 'Call Us',
    primary: '+61 422 201 738',
    href: 'tel:+61422201738',
    note: 'Speak directly with our AI consultants',
  },
  {
    icon: 'pin',
    title: 'Visit Us',
    primary: 'Brisbane, Aus',
    note: 'DiscoverrLabs.AI Pty Ltd, 26 Tamworth Street, ANNERLEY QLD 4103, AUSTRALIA',
  },
  {
    icon: 'clock',
    title: 'Business Hours',
    primary: 'Mon-Fri: 9AM-6PM AEST',
    note: 'We typically respond within 24 hours',
  },
] as const

const SERVICES = [
  'AI Strategy Consulting',
  'AI Implementation',
  'Machine Learning Development',
  'Data Science Services',
  'AI Training & Workshops',
  'Technical Support',
  'Custom AI Solutions',
  'Other',
]

const CONSULT_POINTS = [
  'Discuss your AI goals and challenges',
  'Get expert recommendations',
  'Learn about our solutions',
  'No commitment required',
]

const OFFICES = [
  {
    country: 'Australia',
    address: 'Tamworth Street ANNERLEY QLD 4103 AUSTRALIA',
    phone: '+61 422201738',
    tel: '+61422201738',
  },
  {
    country: 'Malaysia',
    address:
      'D-L2-02 Aurora Place, Jalan Persiaran Jalil 1, Bandar Bukit Jalil, 57000 Kuala Lumpur, Federal Territory of Kuala Lumpur',
    phone: '+60 12 271 7079',
    tel: '+60122717079',
  },
  {
    country: 'India',
    address:
      'NATH KRUPA, PL NO.40, KUSHAL NAGAR, JALNA ROAD, Aurangabad (MH), Aurangabad - 431001, Maharashtra',
    phone: '+91 8830512156',
    tel: '+918830512156',
  },
  {
    country: 'Vietnam',
    address: '47 Núi Thành, Bình Thuận, Hòa Cường, Đà Nẵng 550000, Vietnam',
    phone: '+84 862 776 430',
    tel: '+84862776430',
  },
]

const FAQS = [
  {
    q: 'How quickly can you respond to inquiries?',
    a: 'We typically respond to all inquiries within 24 hours during business days.',
  },
  {
    q: 'Do you offer free consultations?',
    a: 'Yes, we offer complimentary 30-minute consultations to discuss your AI needs.',
  },
  {
    q: 'What industries do you serve?',
    a: 'We work across all industries including healthcare, finance, manufacturing, and more.',
  },
  {
    q: 'Do you work with startups?',
    a: 'Absolutely! We have solutions for companies of all sizes, from startups to enterprises.',
  },
]

/* ------------------------------------------------------------------ */
/* Small building blocks                                               */
/* ------------------------------------------------------------------ */

type IconName = 'mail' | 'phone' | 'pin' | 'clock' | 'check' | 'plus' | 'arrow'

function Icon({ name, className = 'h-5 w-5' }: { name: IconName; className?: string }) {
  const paths: Record<IconName, ReactNode> = {
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    phone: (
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
    ),
    pin: (
      <>
        <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    check: <path d="m5 12 5 5L20 7" />,
    plus: <path d="M12 5v14M5 12h14" />,
    arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  }
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      {paths[name]}
    </svg>
  )
}

function IconTile({ name }: { name: IconName }) {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-neutral-800 to-black text-white">
      <Icon name={name} />
    </div>
  )
}

const inputClass =
  'w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-[15px] text-black placeholder:text-neutral-400 outline-none transition focus:border-black focus:ring-2 focus:ring-black/10'

function Field({
  id,
  label,
  required,
  children,
  className = '',
}: {
  id: string
  label: string
  required?: boolean
  children: ReactNode
  className?: string
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-neutral-800">
        {label}
        {required && <span className="text-black"> *</span>}
      </label>
      {children}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Sections                                                            */
/* ------------------------------------------------------------------ */

function ContactForm() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const d = new FormData(e.currentTarget)
    const get = (k: string) => String(d.get(k) ?? '').trim()

    // No backend yet: this opens the visitor's email app with the message filled in.
    // TODO: replace with a POST to your API / form service when it is ready.
    const subject = `Website enquiry: ${get('service')}`
    const body = [
      `Name: ${get('first')} ${get('last')}`,
      `Email: ${get('email')}`,
      `Company: ${get('company') || '-'}`,
      `Mobile: ${get('mobile') || '-'}`,
      `Service of interest: ${get('service')}`,
      '',
      get('message'),
    ].join('\n')

    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-7 md:p-10">
      <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Send Us a Message</h2>
      <p className="mt-2 text-neutral-600">
        Fill out the form below and we'll get back to you within 24 hours.
      </p>

      <form onSubmit={onSubmit} className="mt-8 grid gap-5 sm:grid-cols-2">
        <Field id="first" label="First Name" required>
          <input id="first" name="first" required autoComplete="given-name" className={inputClass} />
        </Field>
        <Field id="last" label="Last Name" required>
          <input id="last" name="last" required autoComplete="family-name" className={inputClass} />
        </Field>
        <Field id="email" label="Email Address" required className="sm:col-span-2">
          <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} />
        </Field>
        <Field id="company" label="Company">
          <input id="company" name="company" autoComplete="organization" className={inputClass} />
        </Field>
        <Field id="mobile" label="Mobile Number">
          <input id="mobile" name="mobile" type="tel" autoComplete="tel" className={inputClass} />
        </Field>
        <Field id="service" label="Service of Interest" required className="sm:col-span-2">
          <select id="service" name="service" required defaultValue="" className={inputClass}>
            <option value="" disabled>
              Select a service
            </option>
            {SERVICES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </Field>
        <Field id="message" label="Message" required className="sm:col-span-2">
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell us about your project or question"
            className={`${inputClass} resize-y`}
          />
        </Field>

        <div className="sm:col-span-2">
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-lg bg-black px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Send Message
            <Icon name="arrow" className="h-4 w-4" />
          </button>
          {sent && (
            <p role="status" className="mt-4 text-sm text-neutral-600">
              Your email app should open with the message ready to send. If it doesn't, write to us at{' '}
              <a href={`mailto:${EMAIL}`} className="font-medium text-black underline underline-offset-4">
                {EMAIL}
              </a>
              .
            </p>
          )}
        </div>
      </form>
    </div>
  )
}

function ConsultationCard() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-black p-8 text-white md:p-10">
      {/* dotted texture + outline circles, echoing the team page CTA */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70 [background-image:radial-gradient(rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:20px_20px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border border-white/10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-16 h-72 w-72 rounded-full border border-white/10"
      />

      <div className="relative">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Schedule a Consultation</h2>
        <p className="mt-3 text-neutral-300">Book a free 30-minute consultation with our AI experts.</p>

        <ul className="mt-6 space-y-3">
          {CONSULT_POINTS.map((p) => (
            <li key={p} className="flex items-start gap-3 text-[15px] text-neutral-200">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-black">
                <Icon name="check" className="h-3 w-3" />
              </span>
              {p}
            </li>
          ))}
        </ul>

        <a
          href={BOOKING_URL}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Book Free Consultation
          <Icon name="arrow" className="h-4 w-4" />
        </a>
      </div>
    </div>
  )
}

function EnterpriseCard() {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-8 md:p-10">
      <h2 className="text-2xl font-bold tracking-tight">Enterprise Support</h2>
      <p className="mt-3 font-medium text-neutral-900">
        Need dedicated support for your enterprise AI initiatives?
      </p>
      <p className="mt-3 text-[15px] leading-relaxed text-neutral-600">
        Our enterprise support team provides dedicated assistance for large-scale AI implementations,
        including 24/7 support, dedicated account management, and priority consulting services.
      </p>
      <a
        href={ENTERPRISE_URL}
        className="mt-6 inline-flex items-center gap-2 rounded-lg border border-black px-5 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Contact Enterprise Team
        <Icon name="arrow" className="h-4 w-4" />
      </a>
    </div>
  )
}

function Offices() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 pb-20">
      <div className="text-center">
        <p className="text-sm text-neutral-500">Four countries, one crew</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">Our Offices</h2>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {OFFICES.map((o) => (
          <article
            key={o.country}
            className="rounded-2xl border border-neutral-200 bg-white p-7 transition-shadow duration-200 hover:shadow-[0_12px_32px_-12px_rgba(0,0,0,0.18)]"
          >
            <div className="flex items-center gap-4">
              <IconTile name="pin" />
              <h3 className="text-xl font-semibold">{o.country}</h3>
            </div>
            <p className="mt-5 text-[15px] leading-relaxed text-neutral-600">{o.address}</p>
            <div className="mt-5 flex flex-col gap-1.5 text-[15px]">
              <a
                href={`tel:${o.tel}`}
                className="w-fit font-medium text-black underline-offset-4 hover:underline"
              >
                {o.phone}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="w-fit text-neutral-600 underline-offset-4 hover:text-black hover:underline"
              >
                {EMAIL}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="mx-auto max-w-[1200px] px-6 pb-28">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <div>
          <p className="text-sm text-neutral-500">Quick answers</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="divide-y divide-neutral-200 border-y border-neutral-200">
          {FAQS.map((f, i) => {
            const isOpen = open === i
            return (
              <div key={f.q}>
                <h3>
                  <button
                    type="button"
                    id={`faq-btn-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left text-lg font-semibold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    {f.q}
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-neutral-300 transition-transform duration-300 motion-reduce:transition-none ${
                        isOpen ? 'rotate-45 bg-black text-white' : ''
                      }`}
                    >
                      <Icon name="plus" className="h-4 w-4" />
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                  className={`grid transition-[grid-template-rows] duration-300 motion-reduce:transition-none ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 pr-12 text-[15px] leading-relaxed text-neutral-600">{f.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export function Contact() {
  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-black">
      <Header />
      <main>
        {/* Hero */}
        <section className="mx-auto max-w-[1200px] px-6 pb-14 pt-32 text-center md:pt-40">
          <p className="text-sm text-neutral-500">We reply within 24 hours</p>
          <h1 className="mt-4 text-5xl font-bold leading-[1.02] tracking-[-0.03em] md:text-7xl">
            Get in Touch
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600 md:text-xl">
            Ready to transform your business with AI? Our team of experts is here to help you navigate
            your AI journey and unlock new possibilities.
          </p>
        </section>

        {/* Info cards */}
        <section className="mx-auto max-w-[1200px] px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {INFO_CARDS.map((c) => (
              <article
                key={c.title}
                className="rounded-2xl border border-neutral-200 bg-white p-7 transition-shadow duration-200 hover:shadow-[0_12px_32px_-12px_rgba(0,0,0,0.18)]"
              >
                <IconTile name={c.icon} />
                <h2 className="mt-5 text-lg font-semibold">{c.title}</h2>
                {'href' in c ? (
                  <a
                    href={c.href}
                    className="mt-2 block break-words font-medium text-black underline-offset-4 hover:underline"
                  >
                    {c.primary}
                  </a>
                ) : (
                  <p className="mt-2 font-medium text-black">{c.primary}</p>
                )}
                <p className="mt-2 text-sm leading-relaxed text-neutral-500">{c.note}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Form + side cards */}
        <section className="mx-auto max-w-[1200px] px-6 py-16">
          <div className="grid items-start gap-6 lg:grid-cols-[1.4fr_1fr]">
            <ContactForm />
            <div className="grid gap-6">
              <ConsultationCard />
              <EnterpriseCard />
            </div>
          </div>
        </section>

        <Offices />
        <Faq />
      </main>
      <Footer />
    </div>
  )
}

export default Contact