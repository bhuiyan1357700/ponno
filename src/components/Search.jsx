import { useState, useMemo } from 'react'
import { T } from './T.jsx'
import { useLang } from '../context/LangContext.jsx'
import { KEYPOINTS } from '../data/keypoints.jsx'

// Helper: extract plain text from a React node (titles can be JSX with R components)
function extractText(node) {
  if (node == null || node === false) return ''
  if (typeof node === 'string' || typeof node === 'number') return String(node)
  if (Array.isArray(node)) return node.map(extractText).join(' ')
  if (node.props) {
    if (node.props.k) return node.props.k + extractText(node.props.children || '')
    return extractText(node.props.children)
  }
  return ''
}

export function Search({ onOpenKeypoint }) {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const { lang } = useLang()

  const allKeypoints = useMemo(() => {
    return Object.entries(KEYPOINTS).map(([key, data]) => ({
      key,
      industry: data.industry,
      title: extractText(data.title),
      lede: extractText(data.lede),
    }))
  }, [])

  const results = useMemo(() => {
    if (!query.trim()) return []
    const q = query.toLowerCase()
    return allKeypoints.filter(kp =>
      kp.title.toLowerCase().includes(q) ||
      kp.lede.toLowerCase().includes(q) ||
      kp.industry.toLowerCase().includes(q)
    ).slice(0, 6)
  }, [query, allKeypoints])

  const handleSelect = (key) => {
    setOpen(false)
    setQuery('')
    onOpenKeypoint(key)
  }

  return (
    <div className="search-wrap">
      <button className="search-trigger" onClick={() => setOpen(true)} title="Search">
        <span className="search-icon">🔍</span>
        <span className="search-label">
          <T jp="検索" en="Search" />
        </span>
      </button>

      {open && (
        <div className="search-overlay" onClick={() => setOpen(false)}>
          <div className="search-modal" onClick={e => e.stopPropagation()}>
            <input
              type="text"
              className="search-input"
              autoFocus
              placeholder={lang === 'EN' ? 'Search keypoints...' : 'キーポイントを検索...'}
              value={query}
              onChange={e => setQuery(e.target.value)}
            />

            {query && results.length === 0 && (
              <div className="search-empty">
                <T jp="結果なし" en="No results found" />
              </div>
            )}

            {results.length > 0 && (
              <div className="search-results">
                {results.map(r => (
                  <button
                    key={r.key}
                    className="search-result"
                    onClick={() => handleSelect(r.key)}
                  >
                    <div className="search-result-industry">{r.industry}</div>
                    <div className="search-result-title">{r.title}</div>
                    <div className="search-result-lede">{r.lede.slice(0, 80)}...</div>
                  </button>
                ))}
              </div>
            )}

            {!query && (
              <div className="search-hint">
                <T jp="キーワードを入力してください" en="Type a keyword to search" />
              </div>
            )}

            <button className="search-close" onClick={() => setOpen(false)}>✕</button>
          </div>
        </div>
      )}
    </div>
  )
}
