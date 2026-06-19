import { useState } from 'react'
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

  return (
    <div className="app">
      <Nav activePage={activePage} setActivePage={setActivePage} />
      <main>
        {activePage === 'home'       && <Home setActivePage={setActivePage} />}
        {activePage === 'experience' && <Experience />}
        {activePage === 'projects'   && <Projects />}
        {activePage === 'skills'     && <Skills setActivePage={setActivePage} />}
        {activePage === 'contact'    && <Contact />}
      </main>
    </div>
  )
}
