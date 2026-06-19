import { useEffect } from 'react'
import './Experience.css'

const experiences = [
  {
    id: 'mni-experience',
    date: 'Aug 2025 — Present',
    company: 'MNI Labs / Omni Sciences',
    role: 'Team Lead & Research Engineer',
    stack: ['Python', 'MediaPipe', 'OpenCV', 'AWS', 'Docker', 'PostgreSQL'],
    bullets: [
      <>Led a 4-person team porting contactless vital sign monitoring systems to Meta Display glasses on a <strong>6-week</strong> timeline, sustaining <strong>30 fps</strong> WebSocket streams at <strong>3.7 MB/s</strong> under a compression constraint via containerized rPPG server on AWS EC2, Docker, and PostgreSQL.</>,
      <>Achieved <strong>3.83% MAPE</strong> and <strong>80% session accuracy</strong> by replacing CHROM with adaptive green channel isolation and applying highpass and 1-Euro filters via MediaPipe FaceMesh; added cardiac-band beta correction with capped exponent range to improve individual session accuracy.</>,
      <>Reduced respiratory rate MAE to <strong>1.47 BrPM</strong> and worst-case error to <strong>3.9 BrPM</strong> by implementing PCA-based PnP face tracking across dimensional axes in OpenCV, validating Z-plane depth as the strongest predictor; boosted cardiac-band depth SNR by <strong>8.4 dB</strong> by replacing dToF with an RGB-only PnP depth pipeline.</>,
    ],
  },
  {
    id: undefined,
    date: 'Jun 2025 — Aug 2025',
    company: 'Preh',
    role: 'Software Engineering Intern',
    stack: ['C++', 'Tessy', 'AUTOSAR', 'CI/CD'],
    bullets: [
      <>Eliminated <strong>15+</strong> critical boundary and graceful-failure bugs across <strong>3</strong> MPUs using Tessy, preventing out-of-range failures in HVAC module hinge rotation on production vehicle hardware.</>,
      <>Reduced manual coding effort per release cycle by <strong>40%</strong> by engineering a C++ code generation script integrated into the CI/CD pipeline, automating AUTOSAR CAN message handler and header stub output.</>,
      <>Identified incorrect register values across MOSI/MISO lines by validating SPI integrity between HVAC components and a master device using a logic analyzer, resolving discrepancies in collaboration with engineers.</>,
    ],
  },
]

export default function Experience() {
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }, 50)
    }
  }, [])

  return (
    <div className="page-wrapper page-enter">
      <div className="page-header">
        <span className="page-num">01 /</span>
        <h2 className="page-title">Experience</h2>
      </div>

      <div className="exp-list">
        {experiences.map((exp, i) => (
          <div
            className="exp-item"
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
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <footer className="page-footer">
        <span>University of Michigan — B.S.E. Data Science, Expected May 2028</span>
        <span>GPA 3.63 / 4.0</span>
      </footer>
    </div>
  )
}
