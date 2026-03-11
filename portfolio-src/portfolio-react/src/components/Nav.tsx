import { Page } from '../App'
import './Nav.css'

const links: { label: string; page: Page }[] = [
  { label: 'Experience', page: 'experience' },
  { label: 'Projects',   page: 'projects' },
  { label: 'Skills',     page: 'skills' },
  { label: 'Contact',    page: 'contact' },
]

interface Props {
  activePage: Page
  setActivePage: (p: Page) => void
}

export default function Nav({ activePage, setActivePage }: Props) {
  return (
    <nav className="nav">
      <button className="nav-logo" onClick={() => setActivePage('home')}>
        AK —
      </button>
      <ul className="nav-links">
        {links.map(({ label, page }) => (
          <li key={page}>
            <button
              className={`nav-link ${activePage === page ? 'active' : ''}`}
              onClick={() => setActivePage(page)}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
