import { useEffect } from 'react'
import type { RefObject } from 'react'

/**
 * Observes all `selector` descendants of `containerRef` and adds `is-visible`
 * the first time each one enters the viewport (one-shot reveal, matching the
 * site's existing load-time fadeUp animations but triggered by scroll).
 * Falls back to revealing everything immediately under prefers-reduced-motion.
 */
export function useScrollReveal(containerRef: RefObject<HTMLElement>, selector = '.reveal-item') {
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const items = Array.from(container.querySelectorAll<HTMLElement>(selector))
    if (items.length === 0) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion || typeof IntersectionObserver === 'undefined') {
      items.forEach(el => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )

    items.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [containerRef, selector])
}
