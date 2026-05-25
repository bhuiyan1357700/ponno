import { R } from './Furigana.jsx'
import { T } from './T.jsx'

export function QuizCTA({industry, onStart, title, titleEn}){
  return (
    <div className="quiz-cta">
      <div className="quiz-cta-label">
        <T jp={<><R k="知識テスト" r="ちしきテスト"/> · Test Your Knowledge</>} en="Test Your Knowledge"/>
      </div>
      <h2 className="quiz-cta-title">
        <T jp={<>{title}に<em><R k="詳" r="くわ"/>しい</em>？</>}
           en={<>How well do you know <em>{titleEn || title}</em>?</>}/>
      </h2>
      <p className="quiz-cta-desc">
        <T jp={<>5<R k="問" r="もん"/>のクイズで<R k="知識" r="ちしき"/>を<R k="確認" r="かくにん"/>しよう</>}
           en="Take a 5-question quiz to test your knowledge"/>
      </p>
      <button className="quiz-btn" onClick={()=>onStart(industry)}>
        <T jp={<>クイズに<R k="挑戦" r="ちょうせん"/> →</>} en="Take the Quiz →"/>
      </button>
    </div>
  );
}
