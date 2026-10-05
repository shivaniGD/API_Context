import madhup_img from '../assets/team/Maddy.png'
import imran_img from '../assets/team/Imran.png'
import kabir_img from '../assets/team/Kabir.png'
import divya_img from '../assets/team/Divya.png'
import taha_img from '../assets/team/taha.webp'
import atharv_img from '../assets/team/atharv.webp'
import matthew_img from '../assets/team/Matthew.png'
import hemlta_img from '../assets/team/Hemlata.png'
import manaan_img from '../assets/team/Manaan.png'

type Member = {
  initials: string
  name: string
  role: string
  group: 'Leadership & Advisors' | 'AI & Engineering'
  department: string
  location: string
  bio: string
  highlights: string[]
  linkedin?: string
  photo?: string
}

const MEMBERS: Member[] = [
  {
    initials: 'MM',
    name: 'Madhup Mudiraj',
    role: 'Founder & CEO',
    photo: madhup_img,
    group: 'Leadership & Advisors',
    department: 'Product & Engineering',
    location: 'Australia',
    bio:
      'Engineer by training, product builder by instinct. Madhup leads DiscoverrLabs with one conviction: AI should solve real work problems, not just demo well.',
    highlights: [
      'Engineering background',
      'Builds for real work problems',
      'Avid traveller',
    ],
    linkedin: '#',
  },
  {
    initials: 'IA',
    name: 'Imran Ansari',
    role: 'Co-founder, CTO & AI Architect',
    photo: imran_img,
    group: 'Leadership & Advisors',
    department: 'Technology & Development',
    location: 'Brisbane, Australia',
    bio:
      'The developer-architect behind the studio. Imran designs the AI systems, data pipelines and ML infrastructure that turn a qualified idea into a working product.',
    highlights: [
      'Developer at heart',
      'AI systems & ML architecture',
      'Scalable product engineering',
    ],
    linkedin: '#',
  },
  {
    initials: 'KB',
    name: 'Kabir Bawa',
    role: 'Co-founder & Operations Head',
    photo: kabir_img,
    group: 'Leadership & Advisors',
    department: 'Operations & Delivery',
    location: 'Australia',
    bio:
      'Great with numbers and relentless about getting things done. Kabir runs the operational engine of the studio: timelines, budgets, resourcing and delivery.',
    highlights: [
      'Numbers-driven',
      'Delivery & execution',
      'Gets things done',
    ],
    linkedin: '#',
  },
  {
    initials: 'MP',
    name: 'Matthew Perry',
    role: 'Co-Founder & Advisor',
    photo: matthew_img,
    group: 'Leadership & Advisors',
    department: 'Enterprise Technology',
    location: 'Australia',
    bio:
      'A global CIO who has run technology for continents. Matthew brings boardroom-grade technology judgement to the studio: coaching the team, advising on enterprise deals, and making sure what we build survives the scrutiny of the world’s toughest IT departments.',
    highlights: [
      'Global CIO experience',
      'Executive advisor & mentor',
      'Enterprise IT governance',
    ],
    linkedin: 'https://www.linkedin.com/in/matthewsimonperry/',
  },
  {
    initials: 'DW',
    name: 'David Waite',
    role: 'Advisor',
    group: 'Leadership & Advisors',
    department: 'Business Development',
    location: 'Australia',
    bio:
      'CEO-calibre operator, growth-strategy specialist. David has spent a career delivering growth through business development strategy and execution. He opens the doors, frames the deals, and gives the studio’s products a commercial runway.',
    highlights: [
      'Growth strategy & execution',
      'Business development',
      'Senior executive leadership',
    ],
    linkedin: 'https://www.linkedin.com/in/waitedavid/',
  },
  {
    initials: 'HG',
    name: 'Dr Hemlata Gupta',
    role: 'Head of Growth & Marketing, Global',
    photo: hemlta_img,
    group: 'Leadership & Advisors',
    department: 'Growth & Strategy',
    location: 'Australia / New Zealand',
    bio:
      'A doctorate, a marketer’s instinct, and a strategist’s patience. Dr Hemlata drives the studio’s growth across global markets, turning shipped products into market presence, and market presence into pipeline, one data-driven move at a time.',
    highlights: [
      'Growth strategy, global',
      'Marketing leadership',
      'Data-driven expansion',
    ],
    linkedin: 'https://www.linkedin.com/in/dr-hemlata-gupta/',
  },
  {
    initials: 'MA',
    name: 'Manaan Ansari',
    role: 'AI Specialist',
    photo: manaan_img,
    group: 'AI & Engineering',
    department: 'Applied AI',
    location: 'India',
    bio:
      'The studio’s applied-AI engine. Manaan turns complex business challenges into working intelligent systems. He takes a bold idea and answers the only question that matters: does the model actually work?',
    highlights: [
      'Applied AI delivery',
      'Complex problem solving',
      'Model to production',
    ],
    linkedin: 'https://www.linkedin.com/in/manaanansari/',
  },
  {
    initials: 'DG',
    name: 'Divya Gupta',
    role: 'AI Developer Lead',
    photo: divya_img,
    group: 'AI & Engineering',
    department: 'Engineering Leadership',
    location: 'India',
    bio:
      'Full-stack developer turned AI development lead. Divya leads the teams that turn prototypes into production-ready applications, where code quality, deadlines, and the product’s soul all get protected at once.',
    highlights: [
      'Full-stack development',
      'Leads AI build teams',
      'Production-ready delivery',
    ],
    linkedin: 'https://www.linkedin.com/in/erdivyagupta/',
  },
  {
    initials: 'TS',
    name: 'Taha Shaikh',
    role: 'AI Engineer, Backend & Automation',
    photo: taha_img,
    group: 'AI & Engineering',
    department: 'Backend Engineering',
    location: 'India',
    bio:
      'Builder of the invisible machinery. Taha engineers the scalable backend systems, automation workflows, and real-time applications that studio products stand on: the parts users never see and always feel.',
    highlights: [
      'Scalable backend systems',
      'Automation workflows',
      'Real-time applications',
    ],
    linkedin: 'https://www.linkedin.com/in/taha-shaikh-10776b350/',
  },
  {
    initials: 'AS',
    name: 'Aatharv Shelke',
    role: 'Full-Stack Developer',
    photo: atharv_img,
    group: 'AI & Engineering',
    department: 'Product Engineering',
    location: 'India',
    bio:
      'Full-stack developer with an AI streak. Aatharv crafts end-to-end product experiences in React, Next.js and modern AI/ML tooling, equally at home in the database, the API, and the pixel.',
    highlights: [
      'React & Next.js',
      'AI/ML integration',
      'End-to-end builds',
    ],
    linkedin: 'https://www.linkedin.com/in/atharv-shelke/',
  },
]

function Avatar({
  member,
  size = 'md',
}: {
  member: Member
  size?: 'md' | 'lg'
}) {
  if (member.photo) {
    return (
      <img
        src={member.photo}
        alt={member.name}
        className={
          size === 'lg'
            ? 'h-full w-full shrink-0 rounded-2xl object-cover object-top'
            : 'h-14 w-14 shrink-0 rounded-xl object-cover object-top'
        }
      />
    )
  }

  const box =
    size === 'lg'
      ? 'h-full w-full rounded-2xl text-3xl'
      : 'h-14 w-14 rounded-xl text-lg'

  return (
    <div
      aria-hidden
      className={`flex shrink-0 items-center justify-center bg-gradient-to-br from-neutral-800 to-black font-semibold tracking-wide text-white ${box}`}
    >
      {member.initials}
    </div>
  )
}

function GridCard({ member }: { member: Member }) {
  const hasLinkedIn = Boolean(
    member.linkedin && member.linkedin !== '#'
  )

  return (
    <div
      className="group relative aspect-[3/4] w-full overflow-hidden rounded-2xl outline-none transition-all duration-300 ease-out hover:-translate-y-2"
    >
      {/* Team member image */}
      <Avatar member={member} size="lg" />

      {/* Bottom information overlay */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-4 pt-16 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="flex items-end justify-between gap-3">
          <div className="min-w-0">
            <p className="text-[15px] font-semibold leading-tight text-white">
              {member.name}
            </p>

            <p className="mt-0.5 text-[13px] leading-snug text-neutral-300">
              {member.role}
            </p>

            <p className="mt-1.5 text-[12px] text-neutral-400">
              {member.department} · {member.location}
            </p>
          </div>

          {/* LinkedIn icon */}
          {hasLinkedIn && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label={`${member.name} on LinkedIn`}
              onClick={(e) => e.stopPropagation()}
              className="pointer-events-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-black transition-colors duration-300 hover:bg-neutral-300"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
                aria-hidden
              >
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export function TeamSection() {
  return (
    <div className="bg-neutral-50 font-sans text-black">
      {/* Hero */}
      <section className="mx-auto max-w-[1200px] px-6 pb-14 pt-28 text-center md:pt-36">
        <p className="text-sm text-neutral-500">
          Two countries, one crew
        </p>

        <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
          The people building DiscoverrLabs
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600">
          Founders, architects, engineers and growth operators across
          Australia and India, working as one crew to turn ideas into
          shipped AI products.
        </p>
      </section>

      {/* Team Grid */}
      <section className="pb-16">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-5 px-6 sm:grid-cols-2 lg:grid-cols-3">
          {MEMBERS.map((member) => (
            <GridCard
              key={member.name}
              member={member}
            />
          ))}
        </div>
      </section>

      {/* Closing Call To Action */}
      <section className="mx-auto max-w-[1200px] px-6 pb-24 pt-12">
        <div className="relative overflow-hidden rounded-3xl bg-black text-white">
          {/* Decorative rings */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-28 -top-28 h-[420px] w-[420px] rounded-full border border-white/10"
          />

          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 top-44 h-[260px] w-[260px] rounded-full border border-white/10"
          />

          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -left-20 h-[300px] w-[300px] rounded-full border border-white/10"
          />

          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-12 -left-8 h-[160px] w-[160px] rounded-full border border-dashed border-white/15"
          />

          {/* Dot grid texture */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.15] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:28px_28px]"
          />

          <div className="relative px-8 pb-0 pt-16 text-center md:px-16 md:pt-20">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1.5 text-[13px] tracking-wide text-neutral-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
              </span>

              Now onboarding new projects
            </p>

            <h2 className="mx-auto mt-8 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
              Have a product idea?
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-neutral-400 md:text-lg">
              Talk to the people who will actually build it. Book a
              consultation and we&rsquo;ll tell you honestly what it takes.
            </p>

            {/* Actions */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#/?s=contact"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:gap-5 hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Book consultation

                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M2 8h11M9 3.5 13.5 8 9 12.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              <a
                href="mailto:connect@discoverrlabs.ai"
                className="text-sm font-medium text-neutral-300 underline decoration-white/30 underline-offset-8 transition-colors hover:text-white hover:decoration-white"
              >
                or write to us directly
              </a>
            </div>
          </div>

          {/* Marquee strip */}
          <div className="relative mt-16 border-t border-white/10 py-5">
            <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <div className="flex w-max animate-[marquee_24s_linear_infinite] gap-10 whitespace-nowrap text-sm font-medium uppercase tracking-[0.25em] text-neutral-500">
                {[0, 1].map((copy) => (
                  <span
                    key={copy}
                    className="flex gap-10"
                    aria-hidden={copy === 1}
                  >
                    <span>Ideas validated</span>
                    <span className="text-white/30">✦</span>

                    <span>AI products shipped</span>
                    <span className="text-white/30">✦</span>

                    <span>Two countries, one crew</span>
                    <span className="text-white/30">✦</span>

                    <span>Real work problems</span>
                    <span className="text-white/30">✦</span>

                    <span>Book a consultation</span>
                    <span className="text-white/30">✦</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Marquee animation */}
        <style>{`
          @keyframes marquee {
            from {
              transform: translateX(0);
            }

            to {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </section>
    </div>
  )
}