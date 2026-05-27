import { useState, useMemo } from 'react'
import { T } from './T.jsx'
import { KEYPOINTS } from '../data/keypoints.jsx'

// Helper: extract plain text from JSX nodes for display in dropdown
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

export function Favorites({ favorites, onOpenKeypoint, onRemove }) {
  const [open, setOpen] = useState(false)

  const items = useMemo(() => {
    return favorites
      .filter(key => KEYPOINTS[key])
      .map(key => ({
        key,
        industry: KEYPOINTS[key].industry,
        title: extractText(KEYPOINTS[key].title),
      }))
  }, [favorites])

  const handleSelect = (key) => {
    setOpen(false)
    onOpenKeypoint(key)
  }

  return (
    <div className="fav-wrap">
      <button
        className="fav-trigger"
        onClick={() => setOpen(!open)}
        title="Favorites"
      >
        <span className="fav-icon">★</span>
        {favorites.length > 0 && (
          <span className="fav-count">{favorites.length}</span>
        )}
      </button>

      {open && (
        <>
          <div className="fav-backdrop" onClick={() => setOpen(false)}/>
          <div className="fav-dropdown">
            <div className="fav-header">
              <T jp="お気に入り" en="Favorites" />
              <span className="fav-header-count">({favorites.length})</span>
            </div>

            {items.length === 0 ? (
              <div className="fav-empty">
                <T
                  jp="まだお気に入りはありません。キーポイントページで★を押して保存しよう。"
                  en="No favorites yet. Click the ★ on a keypoint page to save it."
                />
              </div>
            ) : (
              <div className="fav-list">
                {items.map(item => (
                  <div key={item.key} className="fav-item">
                    <button
                      className="fav-item-main"
                      onClick={() => handleSelect(item.key)}
                    >
                      <div className="fav-item-industry">{item.industry}</div>
                      <div className="fav-item-title">{item.title}</div>
                    </button>
                    <button
                      className="fav-item-remove"
                      onClick={() => onRemove(item.key)}
                      title="Remove"
                    >✕</button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  )
}
