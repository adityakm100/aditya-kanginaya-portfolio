import React, { useState } from 'react'
import cube360Attach from '../assets/cube360-attach-1.png'
import cubixAttach from '../assets/cubix-attach-2.png'
import ppgAttach from '../assets/ppg-attach-3.png'
import Lightbox from './Lightbox'

type Project = {
  id: string
  title: string
  description: string
  github: string
}

const projectsData: (Project & { img: string })[] = [
  {
    id: 'rppg-toolbox',
    title: 'rPPG-Toolbox (adaptation)',
    description:
      "Adapting rPPG-Toolbox: building on the UbicompLab rPPG-Toolbox repository to integrate contactless vital sign monitoring techniques into my research project.",
    github: 'https://github.com/ubicomplab/rPPG-Toolbox',
    img: ppgAttach
  },
  {
    id: 'cube360',
    title: 'Cube360',
    description:
      'Front-End Application Development: mobile app for underprivileged users; led UI and front-end implementation. Technologies: Flutter (UI), front-end optimizations, A/B testing.',
    github: 'https://github.com/adityakm100/Cube360',
    img: cube360Attach
  },
  {
    id: 'cubix-solver',
    title: "Cubix-Solver",
    description:
      "Rubik's Cube Solver: real-time computer vision and recognition algorithms using OpenCV and Python, with a GUI for demo and solving pipelines.",
    github: 'https://github.com/VamanR06/Cubix-Solver',
    img: cubixAttach
  }
]

const Projects: React.FC = () => {
  const [open, setOpen] = useState<Record<string, boolean>>({})
  const [lightbox, setLightbox] = useState<{ src: string; alt?: string } | null>(null)

  const toggle = (id: string) => setOpen((s) => ({ ...s, [id]: !s[id] }))
  const openLightbox = (src: string, alt?: string) => setLightbox({ src, alt })
  const closeLightbox = () => setLightbox(null)

  return (
    <div className="projects-grid">
      {projectsData.map((p) => (
        <div key={p.id} className="project-card">
          <div className="project-media" onClick={() => openLightbox(p.img, p.title)} style={{ cursor: 'zoom-in' }}>
            <img src={p.img} alt={p.title} />
          </div>
          <h3>{p.title}</h3>
          <p>{p.description}</p>
          <div className="project-actions">
            <a className="btn" href={p.github} target="_blank" rel="noreferrer">View on GitHub</a>
            <button className="btn outline" onClick={() => toggle(p.id)}>
              {open[p.id] ? 'Hide Details' : 'Details'}
            </button>
          </div>

          {open[p.id] && (
            <div className="project-details">
              <p>
                This project contains source code, documentation, and demo instructions. Click the GitHub link to open the repository. Add screenshots and a live demo link here later.
              </p>
            </div>
          )}
        </div>
      ))}

      {lightbox && <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={closeLightbox} />}
    </div>
  )
}

export default Projects
