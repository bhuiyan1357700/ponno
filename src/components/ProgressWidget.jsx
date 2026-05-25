import { T } from './T.jsx'

export function ProgressWidget({readCount, total}){
  if(readCount===0)return null;
  const pct = (readCount/total)*100;
  const c = 2 * Math.PI * 16; // circumference
  const offset = c - (c * pct/100);
  return (
    <div className="progress-widget" title={`${readCount} / ${total} keypoints read`}>
      <div className="progress-circle">
        <svg width="38" height="38" viewBox="0 0 38 38">
          <circle className="progress-circle-bg" cx="19" cy="19" r="16"/>
          <circle
            className="progress-circle-fg"
            cx="19" cy="19" r="16"
            strokeDasharray={c}
            strokeDashoffset={offset}
          />
        </svg>
        <div className="progress-circle-text">{Math.round(pct)}</div>
      </div>
      <div>
        <div className="progress-label"><T jp="読了 · Read" en="Read"/></div>
        <div className="progress-count">{readCount} / {total}</div>
      </div>
    </div>
  );
}
