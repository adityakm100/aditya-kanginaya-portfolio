import './Projects.css'

const projects = [
  {
    index: '01 — Feb / Mar 2026',
    name: 'Null Hunter',
    desc: 'Deployed data quality dashboard supporting CSV and Excel ingestion with 4 imputation strategies — Simple, KNN, and MICE — to address MCAR, MAR, and MNAR missingness. Features a real-time weighted 4-dimension quality score across completeness, uniqueness, consistency, and validity.',
    tags: ['Streamlit', 'Pandas', 'Scikit-Learn', 'Missingno', 'NumPy'],
    links: [
      { label: 'Live Demo ↗', href: 'https://null-hunter-dashboard.streamlit.app' },
      { label: 'GitHub ↗', href: 'https://github.com/adityakm100/null-hunter-dashboard' },
    ],
  },
  {
    index: '02 — Jan / Apr 2026',
    name: 'AI Outreach Orchestrator',
    desc: '3-node LangGraph agentic pipeline integrating Gemini 2.5 Flash via LangChain, enabling iterative draft-review-refine cycles over RAG-retrieved club context to auto-generate personalized outreach emails. Projected to reduce email drafting time by 70% and increase non-profit response rates by 35%.',
    tags: ['LangChain', 'LangGraph', 'Gemini 2.5', 'RAG', 'Python'],
    links: [],
    inProgress: true,
  },
  {
    index: '03 — Jan / May 2025',
    name: 'Cube360',
    desc: 'Flutter mobile app developed for 200+ clinics through non-profit distribution. Led a team of 5, optimizing UI load time by 20% and validating interface decisions through A/B testing across target clinic devices.',
    tags: ['Flutter', 'A/B Testing', 'UI/UX', 'Agile'],
    links: [],
  },
]

export default function Projects() {
  return (
    <div className="page-wrapper page-enter">
      <div className="page-header">
        <span className="page-num">02 /</span>
        <h2 className="page-title">Projects</h2>
      </div>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <div
            className="project-card"
            key={i}
            style={{ animationDelay: `${i * 0.12}s` }}
          >
            <div className="project-index">{p.index}</div>
            <div className="project-name">{p.name}</div>
            <p className="project-desc">{p.desc}</p>
            <div className="project-tags">
              {p.tags.map(t => <span className="tag" key={t}>{t}</span>)}
            </div>
            <div className="project-links">
              {p.inProgress && (
                <span className="project-wip">In Progress — Apr 2026</span>
              )}
              {p.links.map(l => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <footer className="page-footer">
        <span>More on GitHub</span>
        <a href="https://github.com/adityakm100" target="_blank" rel="noreferrer">
          github.com/adityakm100 →
        </a>
      </footer>
    </div>
  )
}
