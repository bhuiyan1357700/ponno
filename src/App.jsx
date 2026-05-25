import { useState, useEffect } from 'react'
import { LangContext } from './context/LangContext.jsx'
import { R } from './components/Furigana.jsx'
import { T } from './components/T.jsx'
import { Cursor } from './components/Cursor.jsx'
import { LangToggle } from './components/LangToggle.jsx'
import { ProgressWidget } from './components/ProgressWidget.jsx'
import { KeypointPage } from './components/KeypointPage.jsx'
import { Quiz } from './components/Quiz.jsx'
import { Home } from './pages/Home.jsx'
import { TextilePage } from './pages/TextilePage.jsx'
import { LeatherPage } from './pages/LeatherPage.jsx'
import { JutePage } from './pages/JutePage.jsx'
import { PharmaPage } from './pages/PharmaPage.jsx'
import { KEYPOINTS } from './data/keypoints.jsx'

export function App() {
  const [page, setPage] = useState('home')
  const [prev, setPrev] = useState(null)
  const [busy, setBusy] = useState(false)
  const [keypoint, setKeypoint] = useState(null)
  const [lang, setLang] = useState('JP')
  const [showFurigana, setShowFurigana] = useState(true)
  const [readKeypoints, setReadKeypoints] = useState([])
  const [quizIndustry, setQuizIndustry] = useState(null)

  // Load saved state from localStorage
  useEffect(() => {
    try {
      const savedRead = JSON.parse(localStorage.getItem('ponno_read') || '[]')
      const savedFuri = localStorage.getItem('ponno_furigana')
      const savedLang = localStorage.getItem('ponno_lang')
      if (Array.isArray(savedRead)) setReadKeypoints(savedRead)
      if (savedFuri !== null) setShowFurigana(savedFuri === 'true')
      if (savedLang === 'JP' || savedLang === 'EN') setLang(savedLang)
    } catch (e) {}
  }, [])

  // Persist read keypoints
  useEffect(() => {
    try { localStorage.setItem('ponno_read', JSON.stringify(readKeypoints)) } catch (e) {}
  }, [readKeypoints])

  // Toggle furigana on body class
  useEffect(() => {
    document.body.classList.toggle('no-furigana', !showFurigana)
    try { localStorage.setItem('ponno_furigana', String(showFurigana)) } catch (e) {}
  }, [showFurigana])

  // Persist language
  useEffect(() => {
    document.body.classList.toggle('lang-en', lang === 'EN')
    document.documentElement.lang = lang.toLowerCase()
    try { localStorage.setItem('ponno_lang', lang) } catch (e) {}
  }, [lang])

  const go = (p) => {
    if (busy || p === page) return
    setBusy(true); setPrev(page); setKeypoint(null)
    setTimeout(() => { setPage(p); setPrev(null); setBusy(false) }, 650)
  }

  const openKeypoint = (key) => {
    setBusy(true); setPrev(page)
    setReadKeypoints(prev => prev.includes(key) ? prev : [...prev, key])
    setTimeout(() => { setKeypoint(key); setPrev(null); setBusy(false) }, 650)
  }

  const closeKeypoint = () => {
    setBusy(true)
    setTimeout(() => { setKeypoint(null); setBusy(false) }, 400)
  }

  const openQuiz = (industry) => setQuizIndustry(industry)
  const closeQuiz = () => setQuizIndustry(null)

  const totalKeypoints = Object.keys(KEYPOINTS).length

  const isHome = page === 'home' && !keypoint

  const renderPage = (p) => {
    if (p === 'home') return <Home onNavigate={go} />
    if (p === 'textile') return <TextilePage onKeypoint={openKeypoint} onQuiz={openQuiz} readKeypoints={readKeypoints} />
    if (p === 'leather') return <LeatherPage onKeypoint={openKeypoint} onQuiz={openQuiz} readKeypoints={readKeypoints} />
    if (p === 'jute') return <JutePage onKeypoint={openKeypoint} onQuiz={openQuiz} readKeypoints={readKeypoints} />
    if (p === 'pharma') return <PharmaPage onKeypoint={openKeypoint} onQuiz={openQuiz} readKeypoints={readKeypoints} />
    return null
  }

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <div style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden', background: 'var(--green)' }}>
        <Cursor />

        <nav className="nav" style={{
          background: isHome ? 'transparent' : 'rgba(26,74,46,0.95)',
          backdropFilter: isHome ? 'none' : 'blur(16px)',
          borderBottom: isHome ? 'none' : '1px solid rgba(255,255,255,0.06)'
        }}>
          <div className="nav-logo">
            <span>পণ্য</span>
            <span className="latin">PONNO</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <LangToggle
              lang={lang}
              setLang={setLang}
              showFurigana={showFurigana}
              setShowFurigana={setShowFurigana}
              isDark={true}
            />
            {keypoint && (
              <button className="nav-back" onClick={closeKeypoint}>
                ← {KEYPOINTS[keypoint].industry}
              </button>
            )}
            {!isHome && !keypoint && (
              <button className="nav-back" onClick={() => go('home')}>
                <T jp={<>← <R k="ホーム" r="ホーム" /></>} en="← Home" />
              </button>
            )}
          </div>
        </nav>

        <ProgressWidget readCount={readKeypoints.length} total={totalKeypoints} />

        <style>{`
          @keyframes slideRight{from{transform:translateX(100%);opacity:0}to{transform:translateX(0);opacity:1}}
          @keyframes slideLeft{from{transform:translateX(0);opacity:1}to{transform:translateX(-6%);opacity:0;filter:brightness(0.5)}}
          @keyframes slideLeftIn{from{transform:translateX(-100%);opacity:0}to{transform:translateX(0);opacity:1}}
          @keyframes slideRightOut{from{transform:translateX(0);opacity:1}to{transform:translateX(6%);opacity:0;filter:brightness(0.5)}}
          .enter-fwd{animation:slideRight 0.65s cubic-bezier(0.22,1,0.36,1) both;}
          .exit-fwd{animation:slideLeft 0.65s cubic-bezier(0.22,1,0.36,1) both;pointer-events:none;}
          .enter-back{animation:slideLeftIn 0.65s cubic-bezier(0.22,1,0.36,1) both;}
          .exit-back{animation:slideRightOut 0.65s cubic-bezier(0.22,1,0.36,1) both;pointer-events:none;}
        `}</style>

        {prev && !keypoint && (
          <div className={`scene ${page === 'home' ? 'exit-back' : 'exit-fwd'}`} style={{ zIndex: 1 }}>
            {renderPage(prev)}
          </div>
        )}

        {keypoint ? (
          <div className={`scene ${busy ? 'enter-fwd' : ''}`} style={{ zIndex: 2 }}>
            <KeypointPage data={KEYPOINTS[keypoint]} onBack={closeKeypoint} />
          </div>
        ) : (
          <div className={`scene ${busy ? (page === 'home' ? 'enter-back' : 'enter-fwd') : ''}`} style={{ zIndex: 2 }}>
            {renderPage(page)}
          </div>
        )}

        {quizIndustry && <Quiz industry={quizIndustry} onClose={closeQuiz} />}
      </div>
    </LangContext.Provider>
  )
}
