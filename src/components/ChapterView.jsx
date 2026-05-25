import { R } from './Furigana.jsx'
import { T } from './T.jsx'

export function ChapterView({chapter, showQuote, onKeypointClick, readKeypoints}){
  return(
    <div key={chapter.label} className="tab-anim">
      <div className="chapter-wrap">
        <div className="chapter-img" style={{backgroundImage:`url(${chapter.bgImg})`}}/>
        <div className="chapter-img-overlay"/>
        <div className="chapter-hero-content">
          <div className="chapter-period"><T jp={chapter.period} en={chapter.periodEn || chapter.period}/></div>
          <h2 className="chapter-title-big"><T jp={chapter.title} en={chapter.titleEn || chapter.title}/></h2>
          {chapter.body.map((b,i)=><p key={i} className="chapter-body-text"><T jp={b} en={(chapter.bodyEn && chapter.bodyEn[i]) || b}/></p>)}
        </div>
        <div className="chapter-img-panel">
          <img src={chapter.img} alt={chapter.imgCaption} onError={e=>e.target.style.display='none'}/>
          <div className="chapter-img-caption">{chapter.imgCaption}</div>
        </div>
      </div>

      <div className="cards-section">
        <div className="cards-label">
          <T jp={<><R k="重要" r="じゅうよう" dark/>ポイント · Key Points</>} en="Key Points"/>
        </div>
        <div className="cards-row">
          {chapter.cards.map((card,i)=>{
            const isRead = card.detailKey && readKeypoints && readKeypoints.includes(card.detailKey);
            return (
              <div
                key={i}
                className={`icard ${card.detailKey?'detailed':''}`}
                onClick={()=>card.detailKey && onKeypointClick && onKeypointClick(card.detailKey)}
              >
                <div className="icard-bg" style={{backgroundImage:`url(${card.img})`}}/>
                <div className="icard-overlay"/>
                <div className="icard-bar"/>
                {card.detailKey && !isRead && <div className="icard-click-hint"><T jp="詳細を見る →" en="View Details →"/></div>}
                {isRead && <div className="icard-check">✓</div>}
                <div className="icard-content">
                  <div className="icard-num">0{i+1}</div>
                  <div className="icard-title"><T jp={card.title} en={card.titleEn || card.title}/></div>
                  <p className="icard-text"><T jp={card.text} en={card.textEn || card.text}/></p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {showQuote && (
        <div className="page-quote">
          <p className="quote-body">
            <T jp={<><R k="私" r="わたし"/>の<R k="国" r="くに"/>は、その<R k="手" r="て"/>で<R k="世界" r="せかい"/>に<R k="物" r="もの"/>を<R k="送" r="おく"/>り<R k="続" r="つづ"/>けてきた。<R k="私" r="わたし"/>はその<R k="同" r="おな"/>じ<R k="精神" r="せいしん"/>を<R k="受" r="う"/>け<R k="継" r="つ"/>ぎ、<R k="今" r="いま"/>は<R k="日本" r="にほん"/>・<R k="神戸" r="こうべ"/>でコードで<R k="未来" r="みらい"/>を<R k="作" r="つく"/>っています。</>}
               en="My country has given the world its products with its own hands. I carry that same spirit — now building the future with code, from Kobe, Japan."/>
          </p>
          <div className="quote-who">ANAS</div>
          <div className="quote-role"><T jp={<>バングラデシュ<R k="出身" r="しゅっしん"/> · ITエンジニア<R k="志望" r="しぼう"/> · <R k="神戸在住" r="こうべざいじゅう"/></>} en="From Bangladesh · IT Engineer · Based in Kobe"/></div>
        </div>
      )}
    </div>
  );
}
