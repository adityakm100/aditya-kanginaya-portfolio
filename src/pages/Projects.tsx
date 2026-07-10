import { useEffect, useRef, useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { renderBullet } from '../utils/bulletMarkup'
import './Projects.css'

interface ProjectLink {
  label: string
  href: string
}

interface Project {
  id: string
  index: string
  name: string
  bullets: string[]
  tags: string[]
  links: ProjectLink[]
  status?: string
  media?: { src: string; caption: string }
  note?: string
}

const BASE = import.meta.env.BASE_URL

const projects: Project[] = [
  {
    id: 'refusal-direction',
    index: '01 — June / July 2026',
    name: 'Refusal Direction Attribution',
    bullets: [
      'Replicated and extended Arditi et al. (NeurIPS 2024) refusal-direction methodology on Llama 3.2 3B using TransformerLens: extracted a single difference-in-means "refusal direction" and reduced refusal rates from {{96.9%}} to {{3.9%}} across 128 AdvBench prompts via directional ablation, and from {{89.0%}} to {{9.0%}} on JailbreakBench.',
      'Built a novel per-prompt token attribution tool: projects residual-stream activations onto the refusal direction at each of 28 layers, producing delta-normalized heatmaps showing which input tokens most activate refusal behavior — a visualization layer absent from the original paper.',
      'Identified Layer 27 as the critical layer (peak separation = {{26.76}}) for harmful/harmless separation — a finding that diverges from Arditi et al.\'s middle-layer result, suggesting architectural sensitivity to model scale.',
    ],
    tags: ['TransformerLens', 'PyTorch', 'Kaggle'],
    links: [
      { label: 'GitHub ↗', href: 'https://github.com/adityakm100/refusal-direction-attribution' },
    ],
    media: {
      src: `${BASE}refusal-direction.png`,
      caption: 'Per-prompt token attribution heatmap — residual-stream projections onto the refusal direction across 28 layers of Llama 3.2 3B.',
    },
  },
  {
    id: 'ai-outreach',
    index: '02 — Jan / May 2026',
    name: 'AI Outreach Orchestrator',
    bullets: [
      'Cut nonprofit outreach drafting time by {{70%}} by architecting a Planner-Writer-Critic LangGraph pipeline with per-node prompt isolation and stateful in-conversation memory that resets between sessions to prevent context bleed across clients; presented to {{300+}} attendees at the Google Developer Student Club Gemini Showcase.',
      'Reduced draft iterations from 7 to 2–3 and token usage by {{80%}} by implementing a self-scoring Critic node evaluating output against a team-defined rubric of tone, prose structure, and voice guidelines.',
      'Deployed as a live tool integrated with club infrastructure enabling a card-based review workflow for member-managed outreach across {{50+}} monthly contacts.',
    ],
    tags: ['LangGraph', 'ChromaDB', 'RAG', 'Python', 'Gemini'],
    links: [],
    status: 'Deployed — May 2026',
    media: {
      src: `${BASE}ai-orchestrator.png`,
      caption: 'Planner-Writer-Critic pipeline — per-node prompt isolation with stateful memory that resets between sessions.',
    },
  },
  {
    id: 'cnn-vit',
    index: '03 — Jan / May 2026',
    name: 'CNN vs ViT Architecture Benchmarking Study',
    bullets: [
      'Achieved {{0.952}} Test AUROC on a 12,775-image binary classification task, outperforming a ViT baseline by {{40%}} on held-out test data by engineering a custom 3-layer CNN with data augmentation and AdamW optimization to mitigate background-bias overfitting.',
      'Diagnosed ViT test-set degradation ({{0.55}} AUROC) as a consequence of high representational capacity overfitting on small datasets, contrasting with CNN spatial inductive bias to justify final architecture selection.',
      'Optimized cross-domain feature extraction by benchmarking transfer learning protocols across varying frozen layer configurations.',
    ],
    tags: ['PyTorch', 'Python', 'Scikit-Learn', 'NumPy'],
    links: [],
    media: {
      src: `${BASE}cnn-auroc.png`,
      caption: 'Train vs. validation AUROC over 30 epochs — gap illustrates overfitting behavior that informed architecture selection over ViT.',
    },
  },
  {
    id: 'null-hunter',
    index: '04 — Feb / Mar 2026',
    name: 'Null Hunter',
    bullets: [
      'Reduced manual dataset audit time by {{40%}} by designing a real-time 4-dimension data quality scoring system tracking completeness, uniqueness, consistency, and validity post-imputation.',
      'Integrates 3 imputation strategies — Simple, KNN, and MICE — handling MCAR, MAR, and MNAR missingness across CSV and Excel inputs.',
      'Deployed publicly on Streamlit Cloud and validated across 3 real-world benchmark datasets spanning healthcare and housing domains with missingness rates up to {{30%}}.',
    ],
    tags: ['Streamlit', 'Pandas', 'Scikit-Learn', 'NumPy'],
    links: [
      { label: 'Live Demo ↗', href: 'https://null-hunter-dashboard.streamlit.app/' },
      { label: 'GitHub ↗', href: 'https://github.com/adityakm100/null-hunter-dashboard' },
    ],
  },
  {
    id: 'big-ten',
    index: '05 — 2026',
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
    media: {
      src: `${BASE}big-ten.png`,
      caption: 'Interactive Tableau dashboard — musical and lyrical evolution of Big Ten fight songs across conferences and eras.',
    },
  },
  {
    id: 'bubbul',
    index: '06 — April 2025',
    name: 'Bubbul',
    bullets: [
      'A desktop focus app that monitors browser activity in real time and nudges users toward healthier work patterns by switching between focus modes based on detected behavior.',
      'Built the backend logic for dynamic focus mode switching, processing real-time browser activity signals from a Chrome extension to determine when user behavior diverged from stated intent.',
      'Integrated a FastAPI Python backend with a React/TypeScript/Electron frontend and Chrome extension, bridging real-time tab classification data across the full stack.',
      'Leveraged Claude Haiku via OpenRouter for in-browser tab classification, enabling real-time AI-driven activity categorization without manual input.',
      'Used a knowledge graph to map user actions and determine optimal focus mode transitions.',
    ],
    tags: ['Python', 'FastAPI', 'React', 'TypeScript', 'Electron', 'Chrome Extension'],
    links: [
      { label: 'GitHub ↗', href: 'https://github.com/YugShah123/Bubbul' },
    ],
    note: 'Significant contributor — repository maintained by collaborator.',
    media: {
      src: `${BASE}bubbul.png`,
      caption: 'Bubbul desktop app — real-time focus mode switching driven by Chrome extension tab classification.',
    },
  },
]

function ProjectCard({ p, delay }: { p: Project; delay: number }) {
  return (
    <div
      className="project-card reveal-item"
      id={p.id}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="project-index">{p.index}</div>
      <div className="project-name">{p.name}</div>
      <ul className="project-bullets">
        {p.bullets.map((b, j) => <li key={j}>{renderBullet(b)}</li>)}
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
            className="project-link link-underline"
          >
            {l.label}
          </a>
        ))}
        {p.note && <span className="project-note">{p.note}</span>}
      </div>
    </div>
  )
}

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  useScrollReveal(containerRef)

  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }, 50)
    }
  }, [])

  // Tracks which project card is most in view, for the "03 / 06" progress indicator.
  useEffect(() => {
    const container = containerRef.current
    if (!container || typeof IntersectionObserver === 'undefined') return

    const cards = Array.from(container.querySelectorAll<HTMLElement>('.project-card'))
    const ratios = new Map<Element, number>()

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => ratios.set(entry.target, entry.intersectionRatio))

        let bestEl: HTMLElement | null = null
        let bestRatio = 0
        ratios.forEach((ratio, el) => {
          if (ratio > bestRatio) {
            bestRatio = ratio
            bestEl = el as HTMLElement
          }
        })

        if (bestEl) {
          const idx = cards.indexOf(bestEl)
          if (idx !== -1) setActiveIndex(idx)
        }
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] }
    )

    cards.forEach(card => observer.observe(card))
    return () => observer.disconnect()
  }, [])

  const [first, second, ...rest] = projects

  return (
    <div className="page-wrapper page-enter" ref={containerRef}>
      <div className="page-header">
        <span className="page-num">02 /</span>
        <h2 className="page-title">Projects</h2>
      </div>

      <div className="projects-featured">
        <ProjectCard p={first} delay={0} />
        <ProjectCard p={second} delay={0.12} />
      </div>

      <div className="projects-grid">
        {rest.map((p, i) => (
          <ProjectCard key={p.id} p={p} delay={(i + 2) * 0.12} />
        ))}
      </div>

      <footer className="page-footer">
        <span>More on GitHub</span>
        <a href="https://github.com/adityakm100" target="_blank" rel="noreferrer">
          github.com/adityakm100 →
        </a>
      </footer>

      <div className="projects-progress" aria-hidden="true">
        {String(activeIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
      </div>
    </div>
  )
}