import React, { useState } from 'react'

type Category = {
  id: string
  title: string
  skills: string[]
}

const categories: Category[] = [
  { id: 'programming', title: 'Programming', skills: ['Python', 'C/C++', 'Java', 'NodeJS', 'HTML/CSS'] },
  { id: 'data', title: 'Data Science', skills: ['PyTorch', 'Scikit-Learn', 'Pandas', 'NumPy', 'OpenCV', 'MCMC'] },
  { id: 'tools', title: 'Tools & Platform', skills: ['Git', 'Flutter', 'Android Studio', 'VSCode'] }
]

const Skills: React.FC = () => {
  const [open, setOpen] = useState<string | null>(categories[0].id)
  return (
    <div className="skills-section">
      <div className="skills-grid-categories">
        {categories.map((c) => (
          <div key={c.id} className={`skill-box ${open === c.id ? 'open' : ''}`} onClick={() => setOpen(open === c.id ? null : c.id)}>
            <div className="skill-head">
              <h3>{c.title}</h3>
              <div className="caret">{open === c.id ? '▴' : '▾'}</div>
            </div>
            <div className="skill-body">
              {c.skills.map((s) => (
                <span key={s} className="skill-chip">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
