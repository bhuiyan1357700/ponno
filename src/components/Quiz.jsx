import { useState } from 'react'
import { R } from './Furigana.jsx'
import { T } from './T.jsx'
import { QUIZZES } from '../data/quizzes.jsx'

export function Quiz({industry, onClose}){
  const quiz = QUIZZES[industry];
  const [qIdx, setQIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);

  if(!quiz) return null;
  const isResult = qIdx >= quiz.questions.length;
  const currentQ = quiz.questions[qIdx];
  const pct = (qIdx / quiz.questions.length) * 100;

  const handleSelect = (optIdx) => {
    if(selected !== null) return;
    setSelected(optIdx);
    if(currentQ.options[optIdx].correct) setScore(s=>s+1);
  };

  const handleNext = () => {
    setSelected(null);
    setQIdx(i=>i+1);
  };

  const handleRetry = () => {
    setQIdx(0); setScore(0); setSelected(null); setShowResult(false);
  };

  const scorePct = (score / quiz.questions.length) * 100;
  const resultColor = scorePct>=80?'var(--green-mid)':scorePct>=60?'#d4a020':'var(--red)';
  const resultMsg = scorePct>=80
    ? <T jp={<>素晴らしい！バングラデシュの<R k="産業" r="さんぎょう"/>に<R k="詳" r="くわ"/>しいですね。</>}
         en="Excellent! You really know Bangladesh's industries."/>
    : scorePct>=60
    ? <T jp={<>よくできました！もう<R k="少" r="すこ"/>し<R k="学" r="まな"/>べば<R k="完璧" r="かんぺき"/>です。</>}
         en="Well done! A bit more study and you'll be perfect."/>
    : <T jp={<>もう<R k="一度" r="いちど"/><R k="記事" r="きじ"/>を<R k="読" r="よ"/>み<R k="直" r="なお"/>してみよう！</>}
         en="Try reading the articles again and come back!"/>;

  const c = 2 * Math.PI * 60;
  const offset = c - (c * scorePct/100);

  return (
    <div className="quiz-overlay" onClick={onClose}>
      <div className="quiz-modal" onClick={e=>e.stopPropagation()}>
        <div className="quiz-header">
          <div className="quiz-header-label">PONNO QUIZ</div>
          <div className="quiz-header-title">{quiz.title}</div>
          <button className="quiz-close" onClick={onClose}>✕</button>
        </div>
        <div className="quiz-progress-bar">
          <div className="quiz-progress-fill" style={{width:`${isResult?100:pct}%`}}/>
        </div>

        {!isResult ? (
          <div className="quiz-body">
            <div className="quiz-q-num"><T jp={<>問題 {qIdx+1} / {quiz.questions.length}</>} en={<>Question {qIdx+1} / {quiz.questions.length}</>}/></div>
            <div className="quiz-question"><T jp={currentQ.q} en={currentQ.qEn || currentQ.q}/></div>
            <div className="quiz-options">
              {currentQ.options.map((opt,i)=>{
                let cls = 'quiz-option';
                if(selected !== null){
                  if(opt.correct) cls += ' correct';
                  else if(i === selected) cls += ' wrong';
                  else cls += ' disabled';
                }
                return (
                  <button key={i} className={cls} onClick={()=>handleSelect(i)}>
                    <span className="quiz-option-letter">{['A','B','C','D'][i]}</span>
                    <span>{opt.text}</span>
                  </button>
                );
              })}
            </div>
            {selected !== null && (
              <>
                <div className="quiz-explanation">{currentQ.exp}</div>
                <button className="quiz-next-btn" onClick={handleNext}>
                  <T jp={qIdx < quiz.questions.length - 1 ? '次の問題へ →' : '結果を見る →'}
                     en={qIdx < quiz.questions.length - 1 ? 'Next Question →' : 'See Results →'}/>
                </button>
              </>
            )}
          </div>
        ) : (
          <div className="quiz-result">
            <div className="quiz-score-circle">
              <svg width="140" height="140" viewBox="0 0 140 140">
                <circle className="quiz-score-bg" cx="70" cy="70" r="60"/>
                <circle
                  className="quiz-score-fg"
                  cx="70" cy="70" r="60"
                  stroke={resultColor}
                  strokeDasharray={c}
                  strokeDashoffset={offset}
                />
              </svg>
              <div className="quiz-score-text">
                <div className="quiz-score-num">{score}</div>
                <div className="quiz-score-total">/ {quiz.questions.length}</div>
              </div>
            </div>
            <h3 className="quiz-result-title">
              <T jp={scorePct>=80 ? '素晴らしい！' : scorePct>=60 ? 'よくできました' : 'もう一度挑戦'}
                 en={scorePct>=80 ? 'Excellent!' : scorePct>=60 ? 'Well done' : 'Try Again'}/>
            </h3>
            <p className="quiz-result-msg">{resultMsg}</p>
            <button className="quiz-retry-btn" onClick={handleRetry}><T jp="もう一度" en="Retry"/></button>
            <button className="quiz-btn" onClick={onClose} style={{padding:'1rem 2.5rem',fontSize:'0.78rem'}}><T jp="閉じる" en="Close"/></button>
          </div>
        )}
      </div>
    </div>
  );
}
