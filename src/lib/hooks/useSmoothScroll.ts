import { useEffect } from 'react'
import { startSmoothScroll } from '../lenis'
import { useReducedMotion } from './useMediaQuery'

export function useSmoothScroll() {
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion) return
    const stop = startSmoothScroll()
    return stop
  }, [reducedMotion])
}
