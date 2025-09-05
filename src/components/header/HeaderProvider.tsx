'use client'

import { createContext, useContext, useMemo, useState, ReactNode } from 'react'

type HeaderMode = 'solid' | 'transparent'

type HeaderContextType = {
  mode: HeaderMode
  setMode: (m: HeaderMode) => void
}

const HeaderContext = createContext<HeaderContextType | null>(null)

export function HeaderProvider({
  children,
  defaultMode = 'solid',
}: { children: ReactNode; defaultMode?: HeaderMode }) {
  const [mode, setMode] = useState<HeaderMode>(defaultMode)
  const value = useMemo(() => ({ mode, setMode }), [mode])
  return <HeaderContext.Provider value={value}>{children}</HeaderContext.Provider>
}

export function useHeader() {
  const ctx = useContext(HeaderContext)
  if (!ctx) throw new Error('useHeader must be used within <HeaderProvider>')
  return ctx
}
