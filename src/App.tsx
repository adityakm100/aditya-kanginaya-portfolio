import React from 'react'
import './App.css'
import Header from './components/Header'
import Section from './components/Section'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experiences from './components/Experiences'
import Footer from './components/Footer'
import ContactCard from './components/ContactCard'
import umichLogo from './assets/umich.png'
// Import the hero photo from `src/assets` so Vite bundles it into `dist/assets`
import heroPhoto from './assets/IMG_20240903_210551_198.jpg'

function App() {
  return (
    <div className="app body-text-black">
      <Header />

      <main className="container main-hero">
        <section className="hero">
          <div className="container hero-inner">
            <div className="hero-image">
              <img className="sharp-img" src={heroPhoto} alt="Aditya" />
            </div>
              <div className="hero-text hero-display">
                <h1 className="display-title">Aditya Kanginaya Madhuchandra</h1>
                <h2 className="display-sub">Data Science &amp; Full-Stack Developer</h2>
                <p className="lead">I'm a Data Science student at the University of Michigan, passionate about accessibility and building production-ready full-stack experiences.</p>
                <p className="lead">My goal is to create innovative data-driven solutions that tangibly impact society.</p>
                <div className="hero-social" aria-label="social links">
                <a href="mailto:adityakm@umich.edu" className="social-link" aria-label="Email">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 8.5L12 13L21 8.5V18C21 18.8284 20.3284 19.5 19.5 19.5H4.5C3.67157 19.5 3 18.8284 3 18V8.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/><path d="M21 6.75C21 6.0587 20.4413 5.5 19.75 5.5H4.25C3.5587 5.5 3 6.0587 3 6.75" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
                <a href="https://github.com/adityakm100" className="social-link" target="_blank" rel="noreferrer" aria-label="GitHub">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C7.58 2 4 5.58 4 10C4 13.87 6.87 17 10.68 17.73C11 17.78 11.14 17.52 11.14 17.29C11.14 17.09 11.13 16.42 11.13 15.66C8 16.11 7.22 14.34 7.22 14.34C6.76 13.33 6.03 13.03 6.03 13.03C5.01 12.43 6.11 12.45 6.11 12.45C7.24 12.52 7.82 13.56 7.82 13.56C8.82 15.21 10.35 14.8 10.98 14.56C11.04 13.84 11.33 13.33 11.65 13.05C8.9 12.77 6.03 11.77 6.03 8.49C6.03 7.52 6.33 6.73 6.85 6.11C6.75 5.83 6.45 4.88 6.95 3.6C6.95 3.6 7.65 3.31 11.13 5.23C11.86 4.99 12.64 4.87 13.42 4.87C14.2 4.87 14.98 4.99 15.71 5.23C19.19 3.31 19.89 3.6 19.89 3.6C20.39 4.88 20.09 5.83 19.99 6.11C20.51 6.73 20.81 7.52 20.81 8.49C20.81 11.78 17.94 12.77 15.19 13.05C15.6 13.4 16 14.1 16 15.18C16 16.77 15.98 17.97 15.98 17.29C15.98 17.52 16.13 17.79 16.47 17.73C20.28 17 23.15 13.87 23.15 10C23.15 5.58 19.42 2 15 2H12Z"/></svg>
                </a>
                <a href="https://linkedin.com/in/aditya-kanginaya" className="social-link" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M4.98 3.5C4.98 4.6 4.12 5.46 3.02 5.46C1.92 5.46 1.06 4.6 1.06 3.5C1.06 2.4 1.92 1.54 3.02 1.54C4.12 1.54 4.98 2.4 4.98 3.5ZM0.66 8.98H5.38V22H0.66V8.98ZM8.58 8.98H13.06V10.9H13.14C13.83 9.66 15.45 8.52 17.6 8.52C21.88 8.52 22 11.36 22 15.05V22H17.28V15.89C17.28 14.24 17.24 12.11 14.68 12.11C12.08 12.11 11.66 13.83 11.66 15.76V22H6.94V8.98H8.58Z"/></svg>
                </a>
                </div>
              </div>
            </div>
        </section>
  <Section id="education" title="Education" variant="light">
          <div className="edu-card">
            <div className="edu-left">
              <div className="edu-logo-frame">
                <img className="edu-logo-left" src={umichLogo} alt="University of Michigan logo" />
              </div>
              <div className="edu-meta">
                <p className="muted">B.S.E. in Data Science — Expected Graduation: May 2027</p>
                <div className="gpa-row">
                  <span className="gpa-label">GPA</span>
                  <span className="gpa-value">3.71</span>
                  <span className="gpa-scale">/ 4.0</span>
                </div>
              </div>

              <h4>Coursework:</h4>
              <ul>
                <li>Data Structures & Algorithms</li>
                <li>Probability Theory</li>
                <li>Applied Regression</li>
                <li>Bayesian Statistics</li>
                <li>Machine Learning</li>
                <li>Web Systems</li>
                <li>Financial Mathematics</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section id="skills" title="Technical Skills" variant="dark">
          <Skills />
        </Section>

        <Experiences />

        <Section id="projects" title="Projects" variant="light">
          <Projects />
        </Section>

        <Section id="contact" variant="dark">
          <ContactCard />
        </Section>
      </main>

      <Footer />
    </div>
  )
}

export default App
