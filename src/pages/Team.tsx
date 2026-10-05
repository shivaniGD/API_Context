import { Header, Footer } from '../sections/chrome'
import { TeamSection } from '../sections/team'

export function Team() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      <main>
        <TeamSection />
      </main>
      <Footer />
    </div>
  )
}

export default Team