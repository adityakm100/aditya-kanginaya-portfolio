import './Contact.css'

const contactItems = [
  { label: 'Email',    value: 'adityakm@umich.edu',           href: 'mailto:adityakm@umich.edu' },
  { label: 'LinkedIn', value: 'aditya-kanginaya',              href: 'https://linkedin.com/in/aditya-kanginaya/' },
  { label: 'GitHub',   value: 'adityakm100',                   href: 'https://github.com/adityakm100' },
  { label: 'Phone',    value: '248-938-3580',                  href: 'tel:2489383580' },
]

export default function Contact() {
  return (
    <div className="page-wrapper page-enter">
      <div className="page-header">
        <span className="page-num">04 /</span>
        <h2 className="page-title">Contact</h2>
      </div>

      <div className="contact-layout">
        <p className="contact-intro">
          Open to Summer 2027 internships in{' '}
          <em>SWE</em>, <em>Data Science</em>, and <em>AI Engineering</em>.
        </p>

        <div className="contact-links">
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
                <div className="contact-item-val">{item.value}</div>
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
