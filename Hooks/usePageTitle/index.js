import { useEffect } from 'react'

export const usePageTitle = (title) => {
  useEffect(() => {
    document.title = title || 'Comgas - Quero ser cliente'
    return () => {
      document.title = 'Comgas - Quero ser cliente'
    }
  }, [title])
  return null
}
