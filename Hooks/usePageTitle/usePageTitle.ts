import { useEffect } from 'react'

export const usePageTitle = (title: string) => {
  useEffect(() => {
    document.title = title || 'Comgas - Quero ser cliente'
    return () => {
      document.title = 'Comgas - Quero ser cliente'
    }
  }, [title])
  return null
}
