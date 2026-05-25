import { useState } from 'react'
import { R } from '../components/Furigana.jsx'
import { T } from '../components/T.jsx'
import { ChapterView } from '../components/ChapterView.jsx'
import { ProductsSection } from '../components/ProductsSection.jsx'
import { QuizCTA } from '../components/QuizCTA.jsx'
import { JUTE_CHAPTERS, JUTE_PRODUCTS } from '../data/jute.jsx'

export function JutePage({onKeypoint, onQuiz, readKeypoints}){
  const [ch,setCh]=useState(0);
  const c=JUTE_CHAPTERS[ch];
  return(
    <div className="industry-page">
      <div className="chapter-tabs">
        {JUTE_CHAPTERS.map((h,i)=>(
          <button key={i} className={`ctab ${ch===i?'on':''}`} onClick={()=>setCh(i)}><T jp={<>{h.label} — {h.period}</>} en={<>{h.labelEn||h.label} — {h.periodEn||h.period}</>}/></button>
        ))}
      </div>
      <ChapterView chapter={c} onKeypointClick={onKeypoint} readKeypoints={readKeypoints}/>
      <div className="stats-band">
        <div className="stats-band-inner">
          <div className="cards-label" style={{color:'rgba(255,255,255,0.5)'}}><T jp={<><R k="数字で見る" r="すうじでみる"/> · By the Numbers</>} en="By the Numbers"/></div>
          <div className="stats-grid">
            {[{n:'40%',l:'世界生産シェア',lr:'せかいせいさんシェア'},{n:'#1',l:'世界生産国',lr:'せかいせいさんこく'},{n:'4万+',l:'農家従事者',lr:'のうかじゅうじしゃ'},{n:'280+',l:'多様化製品',lr:'たようかせいひん'}].map((s,i)=>(
              <div key={i} className="stat-card">
                <div className="stat-num">{s.n}</div>
                <div className="stat-lbl"><R k={s.l} r={s.lr}/></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ProductsSection title={<>ジュート<R k="製品" r="せいひん"/>の<em><R k="例" r="れい"/></em></>} products={JUTE_PRODUCTS}/>
      <QuizCTA industry="jute" onStart={onQuiz} title={<><R k="黄麻産業" r="こうまさんぎょう"/></>} titleEn="Jute"/>
    </div>
  );
}
