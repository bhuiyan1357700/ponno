import { useState } from 'react'
import { R } from '../components/Furigana.jsx'
import { T } from '../components/T.jsx'
import { ChapterView } from '../components/ChapterView.jsx'
import { ProductsSection } from '../components/ProductsSection.jsx'
import { QuizCTA } from '../components/QuizCTA.jsx'
import { LEATHER_CHAPTERS, LEATHER_PRODUCTS } from '../data/leather.jsx'

export function LeatherPage({onKeypoint, onQuiz, readKeypoints}){
  const [ch,setCh]=useState(0);
  const c=LEATHER_CHAPTERS[ch];
  return(
    <div className="industry-page">
      <div className="chapter-tabs">
        {LEATHER_CHAPTERS.map((h,i)=>(
          <button key={i} className={`ctab ${ch===i?'on':''}`} onClick={()=>setCh(i)}><T jp={<>{h.label} — {h.period}</>} en={<>{h.labelEn||h.label} — {h.periodEn||h.period}</>}/></button>
        ))}
      </div>
      <ChapterView chapter={c} onKeypointClick={onKeypoint} readKeypoints={readKeypoints}/>
      <div className="stats-band">
        <div className="stats-band-inner">
          <div className="cards-label" style={{color:'rgba(255,255,255,0.5)'}}><T jp={<><R k="数字で見る" r="すうじでみる"/> · By the Numbers</>} en="By the Numbers"/></div>
          <div className="stats-grid">
            {[{n:'$1.2B',l:'年間輸出額',lr:'ねんかんゆしゅつがく'},{n:'85万',l:'雇用者数',lr:'こようしゃすう'},{n:'#2',l:'輸出産業順位',lr:'ゆしゅつさんぎょうじゅんい'},{n:'70+',l:'輸出先国数',lr:'ゆしゅつさきこくすう'}].map((s,i)=>(
              <div key={i} className="stat-card">
                <div className="stat-num">{s.n}</div>
                <div className="stat-lbl"><R k={s.l} r={s.lr}/></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ProductsSection title={<><R k="皮革製品" r="ひかくせいひん"/>の<em><R k="例" r="れい"/></em></>} products={LEATHER_PRODUCTS}/>
      <QuizCTA industry="leather" onStart={onQuiz} title={<><R k="皮革産業" r="ひかくさんぎょう"/></>} titleEn="Leather"/>
    </div>
  );
}
