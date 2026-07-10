import { useEffect, useRef, useState } from 'react'

interface AnimatedNumberProps {
  raw: string
}

const NUMBER_PATTERN = /^(-?[\d,]*\.?\d+)(.*)$/
const COUNT_DURATION = 900

function formatValue(value: number, decimals: number, useGrouping: boolean) {
  return value.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
    useGrouping,
  })
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3)
}

/**
 * Renders a "{{...}}" bullet-markup token (see src/utils/bulletMarkup.tsx):
 * the leading number counts up from 0 to its target value when scrolled into
 * view; any attached suffix ("%", "+", " fps", "-week", ...) is left as-is.
 */
export default function AnimatedNumber({ raw }: AnimatedNumberProps) {
  const match = raw.match(NUMBER_PATTERN)
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  const numberPart = match?.[1] ?? ''
  const suffix = match?.[2] ?? ''
  const decimals = (numberPart.split('.')[1] || '').length
  const useGrouping = numberPart.includes(',')
  const target = match ? parseFloat(numberPart.replace(/,/g, '')) : 0

  const [display, setDisplay] = useState(() =>
    match ? formatValue(0, decimals, useGrouping) : raw
  )

  useEffect(() => {
    if (!match) return
    const el = ref.current
    if (!el) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      setDisplay(formatValue(target, decimals, useGrouping))
      return
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting || hasAnimated.current) return
          hasAnimated.current = true
          observer.unobserve(entry.target)

          const start = performance.now()
          const tick = (now: number) => {
            const t = Math.min(1, (now - start) / COUNT_DURATION)
            setDisplay(formatValue(target * easeOutCubic(t), decimals, useGrouping))
            if (t < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        })
      },
      { threshold: 0.6 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [raw, match, target, decimals, useGrouping])

  if (!match) return <span className="metric">{raw}</span>

  return (
    <span className="metric" ref={ref}>
      {display}{suffix}
    </span>
  )
}
