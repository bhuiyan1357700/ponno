import { useRef } from 'react'
import { R } from '../components/Furigana.jsx'
import { T } from '../components/T.jsx'
import { ENTRIES } from '../data/entries.jsx'

export function Home({onNavigate}){
  const entriesRef=useRef(null);
  const scrollToEntries=()=>entriesRef.current?.scrollIntoView({behavior:'smooth'});
  return(
    <div className="home">
      <div className="home-grid-pattern"/>
      <div className="home-glow"/>

      <div className="home-hero">
        <div className="home-flag">
          <span>🇧🇩</span>
          <p>Bangladesh · বাংলাদেশ · バングラデシュ</p>
        </div>
        <h1 className="home-bengali">পণ্য</h1>
        <div className="home-title">PONNO</div>
        <p className="home-meaning">
          <T jp={<>「<R k="製品" r="せいひん"/>」 — Products of Bangladesh</>}
             en={<>"Products" — Bangladesh's gifts to the world</>}/>
        </p>
        <p className="home-sub">
          <T jp={<>バングラデシュが<R k="世界" r="せかい"/>に<R k="送" r="おく"/>り<R k="出" r="だ"/>す4つの<R k="産業" r="さんぎょう"/>。<br/>
            <R k="繊維" r="せんい"/>、<R k="皮革" r="ひかく"/>、<R k="黄麻" r="こうま"/>、<R k="医薬品" r="いやくひん"/> — それぞれの<R k="物語" r="ものがたり"/>を<R k="探索" r="たんさく"/>しよう。</>}
             en={<>Four industries Bangladesh exports to the world.<br/>
                Textile, Leather, Jute, Pharmaceuticals — explore each story.</>}/>
        </p>
        <div className="scroll-cue" onClick={scrollToEntries}>
          <span><T jp={<><R k="産業" r="さんぎょう"/>を<R k="選" r="えら"/>ぶ</>} en="Choose an Industry"/></span>
          <div className="scroll-cue-line"/>
        </div>
      </div>

      <div className="home-entries" ref={entriesRef}>
        <div className="entries-label">
          <T jp={<><R k="4つの主要産業" r="よっつのしゅようさんぎょう"/> · Four Pillars</>} en="Four Main Industries · Four Pillars"/>
        </div>
        {ENTRIES.map(e=>(
          <div key={e.id} className="entry" style={{'--entry-color':e.color,'--bar-color':e.bar}} onClick={()=>onNavigate(e.id)}>
            <div className="entry-bg" style={{backgroundImage:`url(${e.bg})`}}/>
            <div className="entry-bar"/>
            <div className="entry-num">{e.num}</div>
            <div className="entry-content">
              <span className="entry-tag">{e.tag}</span>
              <div className="entry-title">
                <T jp={e.title} en={e.titleEn || e.title}/>
              </div>
              <div className="entry-desc">
                <T jp={e.desc} en={e.descEn || e.desc}/>
              </div>
            </div>
            <div className="entry-arrow">Enter →</div>
          </div>
        ))}
      </div>
    </div>
  );
}
