import { useLang } from '../context/LangContext'

/**
 * T (Translate) component
 *
 * Usage: <T jp={<>日本語</>} en="English" />
 *
 * Renders the JP version by default, the EN version when language is set to 'EN'.
 * Falls back to JP if no EN version is provided.
 */
export function T({ jp, en }) {
  const { lang } = useLang()
  if (lang === 'EN' && en !== undefined) return <>{en}</>
  return <>{jp}</>
}
