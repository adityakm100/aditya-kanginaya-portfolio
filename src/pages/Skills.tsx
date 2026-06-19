import { useState } from 'react'
import { Page } from '../App'
import './Skills.css'

interface Props {
  setActivePage: (p: Page) => void
}

type TabKey = 'ai' | 'ml' | 'data' | 'swe' | 'infra'

interface SkillItem {
  name: string
  anchor?: string
  page?: Page
}

const tabs: { key: TabKey; label: string; skills: SkillItem[] }[] = [
  {
    key: 'ai',
    label: 'AI Engineering',
    skills: [
      { name: 'LangGraph',          anchor: 'ai-outreach',    page: 'projects' },
      { name: 'ChromaDB',           anchor: 'ai-outreach',    page: 'projects' },
      { name: 'Claude API' },
      { name: 'RAG',                anchor: 'ai-outreach',    page: 'projects' },
      { name: 'Prompt Engineering' },
      { name: 'OpenCV',             anchor: 'ai-outreach',    page: 'projects' },
      { name: 'MediaPipe',          anchor: 'mni-experience', page: 'experience' },
    ],
  },
  {
    key: 'ml',
    label: 'Machine Learning',
    skills: [
      { name: 'PyTorch',            anchor: 'cnn-vit',        page: 'projects' },
      { name: 'Scikit-Learn',       anchor: 'null-hunter',    page: 'projects' },
      { name: 'SciPy' },
      { name: 'Pandas',             anchor: 'null-hunter',    page: 'projects' },
      { name: 'NumPy',              anchor: 'null-hunter',    page: 'projects' },
      { name: 'Computer Vision' },
      { name: 'Signal Processing' },
    ],
  },
  {
    key: 'data',
    label: 'Data Science',
    skills: [
      { name: 'Pandas',             anchor: 'null-hunter',    page: 'projects' },
      { name: 'NumPy',              anchor: 'null-hunter',    page: 'projects' },
      { name: 'Tableau',            anchor: 'big-ten',        page: 'projects' },
      { name: 'Streamlit',          anchor: 'null-hunter',    page: 'projects' },
      { name: 'R' },
      { name: 'SQL' },
      { name: 'SciPy' },
    ],
  },
  {
    key: 'swe',
    label: 'Software Engineering',
    skills: [
      { name: 'Python' },
      { name: 'C++' },
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'Java' },
      { name: 'FastAPI' },
      { name: 'React' },
      { name: 'Flutter' },
    ],
  },
  {
    key: 'infra',
    label: 'Infrastructure',
    skills: [
      { name: 'AWS' },
      { name: 'Docker' },
      { name: 'PostgreSQL' },
      { name: 'CI/CD' },
      { name: 'Git' },
      { name: 'Electron', anchor: 'bubbul', page: 'projects' },
    ],
  },
]

export default function Skills({ setActivePage }: Props) {
  const [activeTab, setActiveTab] = useState<TabKey>('ai')

  const navigate = (page: Page, anchor: string) => {
    window.location.hash = anchor
    setActivePage(page)
  }

  const currentTab = tabs.find(t => t.key === activeTab)!

  return (
    <div className="page-wrapper page-enter">
      <div className="page-header">
        <span className="page-num">03 /</span>
        <h2 className="page-title">Skills</h2>
      </div>

      <div className="skills-tabs">
        {tabs.map(tab => (
          <button
            key={tab.key}
            className={`skills-tab${activeTab === tab.key ? ' active' : ''}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="skill-list">
        {currentTab.skills.map((skill, i) =>
          skill.anchor && skill.page ? (
            <button
              key={i}
              className="skill-pill skill-pill-link"
              onClick={() => navigate(skill.page!, skill.anchor!)}
            >
              {skill.name} ↗
            </button>
          ) : (
            <span key={i} className="skill-pill">{skill.name}</span>
          )
        )}
      </div>

      <footer className="page-footer">
        <span>Always learning — currently exploring agentic AI systems</span>
      </footer>
    </div>
  )
}
