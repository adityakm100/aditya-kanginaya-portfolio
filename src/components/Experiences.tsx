import React, { useState } from 'react'

const experiences = [
  {
    id: 'research-assistant',
    title: 'Research Assistant — MNI Labs / Omni Sciences',
  period: 'Aug 2025–Present',
    details: (
      <div>
        <ul>
          <li>Developed contactless vital sign monitoring (CVSM) on Samsung S10 using PPG signal processing.</li>
          <li>Integrated TOF sensor modules and optimized calibration automation.</li>
          <li>Visualized CVSM results in Android Studio to reduce analysis time and iterate models.</li>
        </ul>
      </div>
    ),
    link: 'https://github.com/ubicomplab/rPPG-Toolbox'
  },
  {
    id: 'software-intern',
    title: 'Software Engineering Intern — Preh',
  period: 'Jun–Aug 2025',
    details: (
      <div>
        <ul>
          <li>Automated source-code generation and CI/CD to reduce manual coding efforts.</li>
          <li>Authored architecture docs and performed unit testing on microprocessor units.</li>
          <li>Identified and resolved critical bugs to improve release quality.</li>
        </ul>
      </div>
    ),
    link: ''
  }
]

const Experiences: React.FC = () => {
  const [open, setOpen] = useState<Record<string, boolean>>({})
  const toggle = (id: string) => setOpen((s) => ({ ...s, [id]: !s[id] }))

  return (
    <div className="flow-section section--light">
      <h2 className="flow-title">Experience</h2>
      <div className="flow-grid">
        {experiences.map((e) => (
          <div key={e.id} className={`flow-box ${open[e.id] ? 'open' : ''}`}>
            <button className="flow-inner" onClick={() => toggle(e.id)}>
              <div className="flow-head">
                <div>
                  <h3>{e.title}</h3>
                  <p className="sub">{e.period}</p>
                </div>
                <div className="caret">{open[e.id] ? '▴' : '▾'}</div>
              </div>

              <div className="flow-body">
                {e.details}
                <div className="flow-actions">
                  {e.link && e.link.length > 0 && (
                    <a className="btn" href={e.link} target="_blank" rel="noreferrer">Repo / Docs</a>
                  )}
                </div>
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experiences
