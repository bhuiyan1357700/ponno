/**
 * R (Ruby/Furigana) component
 *
 * Usage: <R k="漢字" r="かんじ" />
 *
 * Renders kanji with furigana (reading hints) on top.
 * Pass dark={true} when on light backgrounds for darker furigana.
 *
 * The body class 'no-furigana' (set by App) hides the rt element
 * so the toggle works globally without re-rendering this component.
 */
export function R({ k, r, dark }) {
  return (
    <ruby>
      {k}
      <rt className={dark ? 'dark' : ''}>{r}</rt>
    </ruby>
  )
}
