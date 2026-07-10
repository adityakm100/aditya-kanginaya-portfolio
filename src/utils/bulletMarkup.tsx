import type { ReactNode } from 'react'
import AnimatedNumber from '../components/AnimatedNumber'

const MARKUP_PATTERN = /\{\{([^}]+)\}\}|\*\*([^*]+)\*\*/g

/**
 * Shared bullet text markup for Projects and Experience:
 *   {{96.9%}}   -> animated count-up number, counts up when scrolled into view
 *   **6-week**  -> static bold emphasis, no animation
 * Everything else renders as plain text. Mark only the headline "result" of a
 * bullet ({{...}}) rather than every number in it — descriptive counts (team
 * size, dataset counts, etc.) read better as plain or **bold** text.
 */
export function renderBullet(text: string): ReactNode[] {
  const nodes: ReactNode[] = []
  let last = 0
  let key = 0
  let match: RegExpExecArray | null

  MARKUP_PATTERN.lastIndex = 0
  while ((match = MARKUP_PATTERN.exec(text))) {
    if (match.index > last) nodes.push(text.slice(last, match.index))
    if (match[1] !== undefined) {
      nodes.push(<AnimatedNumber key={key++} raw={match[1]} />)
    } else if (match[2] !== undefined) {
      nodes.push(<strong key={key++}>{match[2]}</strong>)
    }
    last = MARKUP_PATTERN.lastIndex
  }
  if (last < text.length) nodes.push(text.slice(last))
  return nodes
}
