import { useState } from 'react'
import { R } from '../components/Furigana.jsx'
import { T } from '../components/T.jsx'
import { ChapterView } from '../components/ChapterView.jsx'
import { ProductsSection } from '../components/ProductsSection.jsx'
import { QuizCTA } from '../components/QuizCTA.jsx'
import { TEXTILE_CHAPTERS, TEXTILE_PRODUCTS } from '../data/textile.jsx'

export function TextilePage({onKeypoint, onQuiz, readKeypoints}){
  const [ch,setCh]=useState(0);
  const c=TEXTILE_CHAPTERS[ch];
  return(
    <div className="industry-page">
      <div className="chapter-tabs">
        {TEXTILE_CHAPTERS.map((h,i)=>(
          <button key={i} className={`ctab ${ch===i?'on':''}`} onClick={()=>setCh(i)}><T jp={<>{h.label} — {h.period}</>} en={<>{h.labelEn||h.label} — {h.periodEn||h.period}</>}/></button>
        ))}
      </div>
      <ChapterView chapter={c} showQuote={c.showQuote} onKeypointClick={onKeypoint} readKeypoints={readKeypoints}/>
      <ProductsSection title={<><R k="繊維製品" r="せんいせいひん"/>の<em><R k="例" r="れい"/></em></>} products={TEXTILE_PRODUCTS}/>
      <QuizCTA industry="textile" onStart={onQuiz} title={<><R k="繊維産業" r="せんいさんぎょう"/></>} titleEn="Textile"/>
    </div>
  );
}
