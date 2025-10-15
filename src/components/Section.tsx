import React from 'react'

type Props = {
  title?: string
  id?: string
  children?: React.ReactNode
  variant?: 'light' | 'dark'
}

const Section: React.FC<Props> = ({ title, id, children, variant = 'light' }) => {
  const safeId = id ?? (title ?? '').toLowerCase().replace(/[^a-z0-9]+/gi, '-').replace(/(^-|-$)/g, '')
  return (
    <section id={safeId} className={`section section--${variant}`}>
      <div className="container">
        {title ? <h2>{title}</h2> : null}
        <div className="section-body">{children}</div>
      </div>
    </section>
  )
}

export default Section
