import './Experience.css'

const experiences = [
  {
    date: 'Aug 2025 — Present',
    company: 'MNI Labs / Omni Sciences',
    role: 'Research Assistant',
    stack: ['Python', 'Android Studio', 'Video Depth Anything'],
    bullets: [
      <>Developed a portable contactless vital sign monitoring (CVSM) system on Samsung S10 phones using rPPG-based signal processing, achieving heart rate error under <strong>±2 BPM</strong> across <strong>50+</strong> test users, meeting clinical-grade accuracy thresholds.</>,
      <>Integrated time-of-flight (dTOF) sensor modules, optimizing automation by <strong>35%</strong> and reducing manual calibration time by <strong>60%</strong> to improve system efficiency and reduce human error in medical data processing.</>,
      <>Constructed a relative depth estimation pipeline using Video Depth Anything (VDA), reducing heart rate estimation error from <strong>10.99%</strong> to <strong>7.88%</strong> across <strong>20</strong> benchmark trials and achieving up to <strong>27.95%</strong> error reduction on high-variance edge cases.</>,
    ],
  },
  {
    date: 'Jun — Aug 2025',
    company: 'Preh',
    role: 'Software Engineering Intern',
    stack: ['Python', 'C++', 'Jenkins', 'CI/CD'],
    bullets: [
      <>Engineered an automation script for source code generation integrated into CI/CD pipelines, reducing manual coding effort by <strong>40%</strong> and accelerating release cadence across the development lifecycle.</>,
      <>Authored and maintained system architecture documentation for a team of <strong>7</strong> software architects, reducing design review cycles by <strong>25%</strong> and ensuring consistent implementation across modules.</>,
      <>Performed unit testing on <strong>3</strong> microprocessor units, identifying and resolving <strong>15+</strong> critical bugs, preventing post-deployment issues and ensuring a smoother product release cycle.</>,
    ],
  },
]

export default function Experience() {
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
        <span>University of Michigan — B.S.E. Data Science, Expected May 2027</span>
        <span>GPA 3.71 / 4.0</span>
      </footer>
    </div>
  )
}
