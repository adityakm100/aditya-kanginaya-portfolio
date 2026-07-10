import { useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Contact.css'

const contactItems = [
  { label: 'Email',    value: 'adityakm@umich.edu',           href: 'mailto:adityakm@umich.edu' },
  { label: 'LinkedIn', value: 'aditya-kanginaya',              href: 'https://linkedin.com/in/aditya-kanginaya/' },
  { label: 'GitHub',   value: 'adityakm100',                   href: 'https://github.com/adityakm100' },
  { label: 'Phone',    value: '248-938-3580',                  href: 'tel:2489383580' },
]

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null)
  useScrollReveal(containerRef)

  return (
    <div className="page-wrapper page-enter" ref={containerRef}>
      <div className="page-header">
        <span className="page-num">04 /</span>
        <h2 className="page-title">Contact</h2>
      </div>

      <div className="contact-layout">
        <p className="contact-intro reveal-item">
          Open to Summer 2027 internships in{' '}
          <em>Machine Learning</em>, <em>Software Engineering</em>, and <em>Data Science</em>.
        </p>

        <div className="contact-links reveal-item">
          {contactItems.map(item => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="contact-item"
            >
              <div>
                <div className="contact-item-label">{item.label}</div>
                <div className="contact-item-val link-underline">{item.value}</div>
              </div>
              <span className="contact-arrow">→</span>
            </a>
          ))}
        </div>
      </div>

      <footer className="page-footer">
        <span>University of Michigan, Ann Arbor</span>
        <span>Expected May 2028</span>
      </footer>
    </div>
  )
}
