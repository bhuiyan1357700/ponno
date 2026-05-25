import { createContext, useContext } from 'react'

// Language context for the whole app
// Provides {lang, setLang} where lang is 'JP' or 'EN'
export const LangContext = createContext({
  lang: 'JP',
  setLang: () => {}
})

// Convenience hook
export function useLang() {
  return useContext(LangContext)
}
