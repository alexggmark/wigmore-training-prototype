'use client'
import { useEffect } from 'react'
import { useHeader } from './HeaderProvider'

export function HeaderMode({ transparent = false }: { transparent?: boolean }) {
  const { setMode } = useHeader()
  useEffect(() => {
    setMode(transparent ? 'transparent' : 'solid')
    return () => setMode('solid')
  }, [transparent, setMode])
  return null
}
