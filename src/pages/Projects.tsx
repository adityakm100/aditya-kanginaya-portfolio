import './Projects.css'

interface ProjectLink {
  label: string
  href: string
}

interface Project {
  index: string
  name: string
  bullets: string[]
  tags: string[]
  links: ProjectLink[]
  status?: string
  media?: { src: string; caption: string }
  note?: string
}

const projects: Project[] = [
  {
    index: '01 — Feb / Mar 2026',
    name: 'Null Hunter',
    bullets: [
      'Reduced manual dataset audit time by 40% by designing a real-time 4-dimension data quality scoring system tracking completeness, uniqueness, consistency, and validity post-imputation.',
      'Integrates 3 imputation strategies — Simple, KNN, and MICE — handling MCAR, MAR, and MNAR missingness across CSV and Excel inputs.',
      'Deployed publicly on Streamlit Cloud and validated across 3 real-world benchmark datasets spanning healthcare and housing domains with missingness rates up to 30%.',
    ],
    tags: ['Streamlit', 'Pandas', 'Scikit-Learn', 'NumPy'],
    links: [
      { label: 'Live Demo ↗', href: 'https://null-hunter-dashboard.streamlit.app/' },
      { label: 'GitHub ↗', href: 'https://github.com/adityakm100/null-hunter-dashboard' },
    ],
  },
  {
    index: '02 — Jan / May 2026',
    name: 'AI Outreach Orchestrator',
    bullets: [
      'Cut nonprofit outreach drafting time by 70% by architecting a Planner-Writer-Critic LangGraph pipeline with per-node prompt isolation and stateful in-conversation memory that resets between sessions to prevent context bleed across clients.',
      'Reduced draft iterations from 7 to 2–3 and token usage by 80% by implementing a self-scoring Critic node evaluating output against a team-defined rubric of tone, prose structure, and voice guidelines.',
      'Deployed as a live tool integrated with club infrastructure enabling a card-based review workflow for member-managed outreach across 50+ monthly contacts.',
    ],
    tags: ['LangGraph', 'ChromaDB', 'RAG', 'Python', 'Gemini'],
    links: [],
    status: 'Deployed — May 2026',
    media: {
      src: '/ai-orchestrator.png',
      caption: 'Planner-Writer-Critic pipeline — per-node prompt isolation with stateful memory that resets between sessions.',
    },
  },
  {
    index: '03 — Jan / May 2026',
    name: 'CNN vs ViT Architecture Benchmarking Study',
    bullets: [
      'Achieved 0.952 Test AUROC on a 12,775-image binary classification task, outperforming a ViT baseline by 40% on held-out test data by engineering a custom 3-layer CNN with data augmentation and AdamW optimization to mitigate background-bias overfitting.',
      'Diagnosed ViT test-set degradation (0.55 AUROC) as a consequence of high representational capacity overfitting on small datasets, contrasting with CNN spatial inductive bias to justify final architecture selection.',
      'Optimized cross-domain feature extraction by benchmarking transfer learning protocols across varying frozen layer configurations.',
    ],
    tags: ['PyTorch', 'Python', 'Scikit-Learn', 'NumPy'],
    links: [],
    media: {
      src: '/cnn-auroc.png',
      caption: 'Train vs. validation AUROC over 30 epochs — gap illustrates overfitting behavior that informed architecture selection over ViT.',
    },
  },
  {
    index: '04 — 2026',
    name: 'Big Ten Fight Song Analysis',
    bullets: [
      'Entry for the Big Ten Data Visualization Contest analyzing the musical and lyrical evolution of college fight songs across conferences and decades.',
      'Built 5 interactive views in Tableau exploring tempo vs. duration across conferences, lyrical trope shifts by decade, mood analysis by conference, and early vs. modern era trope comparisons.',
      'Surfaced that fight songs converged toward higher "Says Fight" trope prevalence from the 1920s onward while "Says Nonsense" tropes declined, and that independent schools averaged significantly higher excitement trope counts than conference-affiliated programs.',
    ],
    tags: ['Tableau', 'Data Visualization', 'Statistical Analysis'],
    links: [
      { label: 'Tableau Public ↗', href: 'https://public.tableau.com/app/profile/aditya.kanginaya.madhuchandra/viz/DataVizProjectIteration1_17678351284180/EraTropeCompare' },
    ],
  },
  {
    index: '05 — April 2025',
    name: 'Bubbul',
    bullets: [
      'A desktop focus app that monitors browser activity in real time and nudges users toward healthier work patterns by switching between focus modes based on detected behavior.',
      'Built the backend logic for dynamic focus mode switching, processing real-time browser activity signals from a Chrome extension to determine when user behavior diverged from stated intent.',
      'Integrated a FastAPI Python backend with a React/TypeScript/Electron frontend and Chrome extension, bridging real-time tab classification data across the full stack.',
      'Leveraged Claude Haiku via OpenRouter for in-browser tab classification, enabling real-time AI-driven activity categorization without manual input.',
    ],
    tags: ['Python', 'FastAPI', 'React', 'TypeScript', 'Electron', 'Chrome Extension'],
    links: [
      { label: 'GitHub ↗', href: 'https://github.com/YugShah123/Bubbul' },
    ],
    note: 'Significant contributor — repository maintained by collaborator.',
    media: {
      src: '/bubbul.png',
      caption: 'Bubbul desktop app — real-time focus mode switching driven by Chrome extension tab classification.',
    },
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
            <ul className="project-bullets">
              {p.bullets.map((b, j) => <li key={j}>{b}</li>)}
            </ul>
            {p.media && (
              <div className="project-media">
                <img src={p.media.src} alt={p.media.caption} className="project-img" />
                <p className="project-caption">{p.media.caption}</p>
              </div>
            )}
            <div className="project-tags">
              {p.tags.map(t => <span className="tag" key={t}>{t}</span>)}
            </div>
            <div className="project-links">
              {p.status && <span className="project-status">{p.status}</span>}
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
              {p.note && <span className="project-note">{p.note}</span>}
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
