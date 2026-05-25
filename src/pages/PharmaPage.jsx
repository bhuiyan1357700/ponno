import { useState } from 'react'
import { R } from '../components/Furigana.jsx'
import { T } from '../components/T.jsx'
import { ChapterView } from '../components/ChapterView.jsx'
import { ProductsSection } from '../components/ProductsSection.jsx'
import { QuizCTA } from '../components/QuizCTA.jsx'
import { PHARMA_CHAPTERS, PHARMA_PRODUCTS } from '../data/pharma.jsx'

export function PharmaPage({onKeypoint, onQuiz, readKeypoints}){
  const [ch,setCh]=useState(0);
  const c=PHARMA_CHAPTERS[ch];
  return(
    <div className="industry-page">
      <div className="chapter-tabs">
        {PHARMA_CHAPTERS.map((h,i)=>(
          <button key={i} className={`ctab ${ch===i?'on':''}`} onClick={()=>setCh(i)}><T jp={<>{h.label} — {h.period}</>} en={<>{h.labelEn||h.label} — {h.periodEn||h.period}</>}/></button>
        ))}
      </div>
      <ChapterView chapter={c} showQuote={c.showQuote} onKeypointClick={onKeypoint} readKeypoints={readKeypoints}/>
      <div className="stats-band">
        <div className="stats-band-inner">
          <div className="cards-label" style={{color:'rgba(255,255,255,0.5)'}}><T jp={<><R k="数字で見る" r="すうじでみる"/> · By the Numbers</>} en="By the Numbers"/></div>
          <div className="stats-grid">
            {[{n:'150+',l:'輸出先国数',lr:'ゆしゅつさきこくすう'},{n:'98%',l:'国内自給率',lr:'こくないじきゅうりつ'},{n:'$200M',l:'年間輸出額',lr:'ねんかんゆしゅつがく'},{n:'15%',l:'年間成長率',lr:'ねんかんせいちょうりつ'}].map((s,i)=>(
              <div key={i} className="stat-card">
                <div className="stat-num">{s.n}</div>
                <div className="stat-lbl"><R k={s.l} r={s.lr}/></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ProductsSection title={<><R k="医薬品" r="いやくひん"/>の<em><R k="例" r="れい"/></em></>} products={PHARMA_PRODUCTS}/>
      <QuizCTA industry="pharma" onStart={onQuiz} title={<><R k="医薬品産業" r="いやくひんさんぎょう"/></>} titleEn="Pharmaceuticals"/>
    </div>
  );
}
