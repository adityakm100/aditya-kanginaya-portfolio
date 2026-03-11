import { Page } from '../App'
import './Home.css'

interface Props {
  setActivePage: (p: Page) => void
}

export default function Home({ setActivePage }: Props) {
  return (
    <div className="home page-enter">
      <section className="hero">
        <div className="hero-grid" aria-hidden="true">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="hero-grid-cell" />
          ))}
        </div>

        <p className="hero-tag">Data Science @ University of Michigan</p>
        <h1 className="hero-heading">
          Aditya<br />
          <em>Kanginaya</em><br />
          Madhuchandra
        </h1>
        <p className="hero-sub">
          Building at the intersection of machine learning, signal processing,
          and intelligent systems. Research assistant, engineer, and maker.
        </p>

        <div className="hero-links">
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

        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-num">3.71</span>
            <span className="hero-stat-label">GPA</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-num">2+</span>
            <span className="hero-stat-label">Industry Roles</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-num">↑28%</span>
            <span className="hero-stat-label">Avg. Impact Metric</span>
          </div>
        </div>
      </section>

      <footer className="home-footer">
        <span>Ann Arbor, MI — Open to Summer 2026 Internships</span>
        <span>adityakm@umich.edu</span>
      </footer>
    </div>
  )
}
