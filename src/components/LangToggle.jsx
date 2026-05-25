export function LangToggle({lang, setLang, showFurigana, setShowFurigana, isDark}){
  return (
    <div style={{display:'flex',gap:'0.6rem',alignItems:'center'}}>
      <div className={`lang-toggle ${isDark?'':'light'}`}>
        <button
          className={`lang-btn ${lang==='JP'?'active':''}`}
          onClick={()=>setLang('JP')}
          title="日本語"
        >JP</button>
        <button
          className={`lang-btn ${lang==='EN'?'active':''}`}
          onClick={()=>setLang('EN')}
          title="English"
        >EN</button>
      </div>
      {lang === 'JP' && (
        <div className={`lang-toggle ${isDark?'':'light'}`}>
          <button
            className={`lang-btn ${showFurigana?'active':''}`}
            onClick={()=>setShowFurigana(true)}
            title="ふりがな表示"
          >ふりがな</button>
          <button
            className={`lang-btn ${!showFurigana?'active':''}`}
            onClick={()=>setShowFurigana(false)}
            title="ふりがな非表示"
          >漢字のみ</button>
        </div>
      )}
    </div>
  );
}
