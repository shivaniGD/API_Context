import { useParams, Navigate } from 'react-router'
import { useReveal } from '../hooks/useReveal'
import { Header, Footer } from '../sections/chrome'
import { PROCESS_STEPS, ProcessStepPage } from '../sections/processpages'

export default function ProcessStep() {
  const { slug } = useParams()
  const step = PROCESS_STEPS.find((s) => s.slug === slug)
  const ref = useReveal<HTMLDivElement>()

  if (!step) return <Navigate to="/?s=process" replace />

  return (
    <div ref={ref} className="min-h-screen bg-paper text-ink">
      <Header />
      <main>
        <ProcessStepPage step={step} />
      </main>
      <Footer />
    </div>
  )
}
