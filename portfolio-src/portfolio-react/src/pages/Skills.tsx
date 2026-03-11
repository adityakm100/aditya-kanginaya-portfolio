import './Skills.css'

const skillGroups = [
  {
    title: 'Programming Languages',
    skills: ['Python', 'C++', 'JavaScript', 'R', 'SQL', 'Java', 'React', 'Typescript'],
  },
  {
    title: 'Data Science & ML',
    skills: ['PyTorch', 'Scikit-Learn', 'Pandas', 'NumPy', 'SciPy', 'LangChain', 'LangGraph', 'Streamlit', 'Tableau'],
  },
  {
    title: 'Infrastructure & Cloud',
    skills: ['AWS', 'Docker', 'Jenkins', 'CI/CD', 'Vite'],
  },
  {
    title: 'Tools & Practices',
    skills: ['Flutter', 'Git', 'Agile', 'A/B Testing'],
  },
]

export default function Skills() {
  return (
    <div className="page-wrapper page-enter">
      <div className="page-header">
        <span className="page-num">03 /</span>
        <h2 className="page-title">Skills</h2>
      </div>

      <div className="skills-layout">
        {skillGroups.map((group, i) => (
          <div
            className="skill-group"
            key={group.title}
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="skill-group-title">{group.title}</div>
            <div className="skill-list">
              {group.skills.map(s => (
                <span className="skill-pill" key={s}>{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <footer className="page-footer">
        <span>Always learning — currently exploring agentic AI systems</span>
      </footer>
    </div>
  )
}
