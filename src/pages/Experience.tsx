import { useEffect, useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { renderBullet } from '../utils/bulletMarkup'
import './Experience.css'

const experiences = [
  {
    id: 'mni-experience',
    date: 'Aug 2025 — Aug 2026',
    company: 'MNI Labs / Omni Sciences',
    role: 'Team Lead & Research Engineer',
    stack: ['Python', 'MediaPipe', 'OpenCV', 'AWS', 'Docker', 'PostgreSQL'],
    bullets: [
      'Led a **6-person** team porting contactless vital sign monitoring systems to Meta Display glasses on a **6-week** timeline, sustaining {{30 fps}} WebSocket streams at {{3.7 MB/s}} ({{10%}} higher bit rate than the previous workflow) under a compression constraint via containerized rPPG server on AWS EC2 using Docker and PostgreSQL.',
      'Achieved {{3.83%}} MAPE and {{80%}} session accuracy across **10** trials by replacing CHROM with adaptive green channel isolation and applying highpass and 1-Euro filters via MediaPipe FaceMesh.',
      'Constructed a relative depth estimation pipeline and reduced heart rate error from {{10.99%}} to {{7.88%}} across **20** trials, achieving up to {{27.95%}} error reduction on high-variance edge cases; used Great Lakes HPC for research workloads.',
    ],
  },
  {
    id: undefined,
    date: 'Jun 2025 — Aug 2025',
    company: 'Preh',
    role: 'Software Engineering Intern',
    stack: ['C++', 'Tessy', 'AUTOSAR', 'CI/CD'],
    bullets: [
      'Eliminated critical bugs before release across **3** MCUs using Tessy unit tests, preventing failures in HVAC module hinge rotation on production hardware.',
      'Reduced manual coding effort per release cycle by {{40%}} by engineering a code generation script integrated into the CI/CD pipeline, automating AUTOSAR CAN message handler and header stub output.',
      'Identified incorrect register values across MOSI/MISO lines by validating SPI integrity between components and a master device using a logic analyzer, resolving discrepancies in collaboration with engineers during hardware integration testing.',
    ],
  },
]

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null)
  useScrollReveal(containerRef, '.exp-item')

  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }, 50)
    }
  }, [])

  return (
    <div className="page-wrapper page-enter" ref={containerRef}>
      <div className="page-header">
        <span className="page-num">01 /</span>
        <h2 className="page-title">Experience</h2>
      </div>

      <div className="exp-list">
        {experiences.map((exp, i) => (
          <div
            className="exp-item reveal-item"
            key={i}
            id={exp.id}
            style={{ animationDelay: `${i * 0.12}s` }}
          >
            <div className="exp-meta">
              <div className="exp-date">{exp.date}</div>
              <div className="exp-company">{exp.company}</div>
              <div className="exp-stack">
                {exp.stack.map(s => <span className="tag" key={s}>{s}</span>)}
              </div>
            </div>
            <div className="exp-content">
              <div className="exp-role">{exp.role}</div>
              <ul className="exp-bullets">
                {exp.bullets.map((b, j) => (
                  <li key={j}>{renderBullet(b)}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <footer className="page-footer">
        <span>University of Michigan — B.S.E. Data Science, Expected May 2027</span>
        <span>GPA 3.63 / 4.0</span>
      </footer>
    </div>
  )
}
