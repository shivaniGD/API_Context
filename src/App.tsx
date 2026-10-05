import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router'
import Home from './pages/Home'
import Team from './pages/Team'
import CaseStudy from './pages/CaseStudy'
import ProcessStep from './pages/ProcessStep'

/**
 * On route change: scroll to top, or to the section named in ?s=<id>
 * (used because hash routing occupies the URL fragment).
 */
function ScrollManager() {
  const { pathname, search } = useLocation()
  useEffect(() => {
    const target = new URLSearchParams(search).get('s')
    if (target) {
      // wait for the page to render before scrolling
      requestAnimationFrame(() => {
        setTimeout(() => {
          document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' })
        }, 60)
      })
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, search])
  return null
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/case/:slug" element={<CaseStudy />} />
        <Route path="/process/:slug" element={<ProcessStep />} />
      </Routes>
    </>
  )
}
