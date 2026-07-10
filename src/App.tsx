import { useCallback, useState } from 'react'
import { flushSync } from 'react-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import './App.css'

export type Page = 'home' | 'experience' | 'projects' | 'skills' | 'contact'

export default function App() {
  const [activePage, setActivePage] = useState<Page>('home')

  const changePage = useCallback((page: Page) => {
    if (page === activePage) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (document.startViewTransition && !reduceMotion) {
      document.startViewTransition(() => {
        flushSync(() => setActivePage(page))
      })
    } else {
      setActivePage(page)
    }
  }, [activePage])

  return (
    <div className="app">
      <Nav activePage={activePage} setActivePage={changePage} />
      <main>
        {activePage === 'home'       && <Home setActivePage={changePage} />}
        {activePage === 'experience' && <Experience />}
        {activePage === 'projects'   && <Projects />}
        {activePage === 'skills'     && <Skills setActivePage={changePage} />}
        {activePage === 'contact'    && <Contact />}
      </main>
    </div>
  )
}
