import { useParams, Navigate } from 'react-router'
import { useReveal } from '../hooks/useReveal'
import { Header, Footer } from '../sections/chrome'
import { CASE_STUDIES, CaseStudyPage } from '../sections/casestudy'

export default function CaseStudy() {
  const { slug } = useParams()
  const study = CASE_STUDIES.find((c) => c.slug === slug)
  const ref = useReveal<HTMLDivElement>()

  if (!study) return <Navigate to="/?s=results" replace />

  return (
    <div ref={ref} className="min-h-screen bg-paper text-ink">
      <Header />
      <main>
        <CaseStudyPage study={study} />
      </main>
      <Footer />
    </div>
  )
}
