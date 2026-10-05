import { useReveal } from '../hooks/useReveal'
import { Header, Footer } from '../sections/chrome'
import { Hero, TrustStrip } from '../sections/hero'
import { Workflow } from '../sections/workflow'
import { Results } from '../sections/results'
import { About, Contact } from '../sections/about'

export default function Home() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <div ref={ref} className="min-h-screen bg-paper text-ink">
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Workflow />
        <Results />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
