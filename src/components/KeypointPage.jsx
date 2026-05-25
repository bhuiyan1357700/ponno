import { useState, useEffect, useRef } from 'react'
import { R } from './Furigana.jsx'
import { T } from './T.jsx'

export function KeypointPage({data, onBack}){
  const figRefs = useRef([]);
  const secRefs = useRef([]);
  const [progress, setProgress] = useState(0);
  const containerRef = useRef(null);

  useEffect(()=>{
    const obs=new IntersectionObserver(entries=>{
      entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in-view');});
    },{threshold:0.15});
    figRefs.current.forEach(r=>r&&obs.observe(r));
    secRefs.current.forEach(r=>r&&obs.observe(r));
    return()=>obs.disconnect();
  },[data]);

  useEffect(()=>{
    const el = containerRef.current;
    if(!el) return;
    const onScroll = () => {
      const max = el.scrollHeight - el.clientHeight;
      const pct = max > 0 ? (el.scrollTop / max) * 100 : 0;
      setProgress(pct);
    };
    el.addEventListener('scroll', onScroll);
    return () => el.removeEventListener('scroll', onScroll);
  },[data]);

  return(
    <div className="kp-page" ref={containerRef} style={{position:'relative',height:'100vh',overflowY:'auto'}}>
      <div className="kp-progress" style={{width:`${progress}%`}}/>
      {/* Hero */}
      <div className="kp-hero">
        <div className="kp-hero-img" style={{backgroundImage:`url(${data.heroImg})`}}/>
        <div className="kp-hero-overlay"/>
        <div className="kp-hero-content">
          <div className="kp-breadcrumb">
            <R k="ホーム" r="ホーム"/> <span>›</span> {data.industry} <span>›</span> Keypoint
          </div>
          <div className="kp-number">{data.number}</div>
          <h1 className="kp-title">{data.title}</h1>
          <p className="kp-lede">{data.lede}</p>
        </div>
      </div>

      {/* Body */}
      <div className="kp-body">
        {data.sections.map((sec,si)=>(
          <div key={si} className="kp-section" ref={el=>secRefs.current[si]=el}>
            <div className="kp-section-num">0{si+1} — {sec.label}</div>
            <h2 className="kp-section-title">{sec.title}</h2>
            {sec.paragraphs.map((p,pi)=>(
              <p key={pi} className="kp-para">{p}</p>
            ))}
            {sec.figure && (
              <figure className="kp-figure" ref={el=>figRefs.current[si]=el}>
                <img src={sec.figure.src} alt={sec.figure.caption}/>
                <figcaption>{sec.figure.caption}</figcaption>
              </figure>
            )}
            {sec.quote && <div className="kp-pullquote">{sec.quote}</div>}
            {sec.facts && (
              <div className="kp-facts">
                {sec.facts.map((f,fi)=>(
                  <div key={fi} className="kp-fact">
                    <div className="kp-fact-num">{f.num}</div>
                    <div className="kp-fact-lbl">{f.lbl}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* References */}
      <div className="kp-refs">
        <div className="kp-refs-title"><R k="参考資料" r="さんこうしりょう" dark/> · References</div>
        {data.refs.map((r,i)=>(
          <a key={i} href={r.url} target="_blank" rel="noopener" className="kp-ref-link">
            <span>📖</span>
            <span>{r.label}</span>
            <span className="ref-arrow">↗</span>
          </a>
        ))}
      </div>

      <div className="kp-back-cta">
        <div className="kp-back-cta-text"><R k="他" r="ほか"/>のキーポイントを<R k="探索" r="たんさく"/></div>
        <button className="kp-back-cta-btn" onClick={onBack}>← {data.industry}<R k="ページ" r="ページ"/>へ<R k="戻" r="もど"/>る</button>
      </div>
    </div>
  );
}
