import { useRef } from 'react'
import { Page } from '../App'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Home.css'

interface Props {
  setActivePage: (p: Page) => void
}

export default function Home({ setActivePage }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  useScrollReveal(containerRef)

  return (
    <div className="home page-enter" ref={containerRef}>
      <section className="hero">
        <div className="hero-grid" aria-hidden="true">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="hero-grid-cell" />
          ))}
        </div>

        <p className="hero-tag reveal-item">Data Science @ University of Michigan</p>
        <h1 className="hero-heading reveal-item">
          Aditya<br />
          <em>Kanginaya</em><br />
          Madhuchandra
        </h1>
        <p className="hero-sub reveal-item">
          Building at the intersection of machine learning, signal processing,
          and intelligent systems. Research assistant, engineer, and maker.
        </p>

        <div className="hero-links reveal-item">
          <button className="btn filled" onClick={() => setActivePage('projects')}>
            View Projects
          </button>
          <button className="btn" onClick={() => setActivePage('experience')}>
            Experience
          </button>
          <a
            href="https://github.com/adityakm100"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            GitHub ↗
          </a>
        </div>

        <div className="hero-stats reveal-item">
          <div className="hero-stat">
            <span className="hero-stat-num">300+</span>
            <span className="hero-stat-label">Engineers & Students Reached</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-num">70%</span>
            <span className="hero-stat-label">Outreach Time Saved</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-num">40%</span>
            <span className="hero-stat-label">Coding Effort Reduced</span>
          </div>
        </div>
      </section>

      <footer className="home-footer">
        <span>Ann Arbor, MI — Open to Summer 2027 Internships</span>
        <span>adityakm@umich.edu</span>
      </footer>
    </div>
  )
}
