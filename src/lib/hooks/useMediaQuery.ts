import { useSyncExternalStore } from 'react'

export function useMediaQuery(query: string): boolean {
  return useSyncExternalStore(
    (onChange) => {
      const mql = window.matchMedia(query)
      mql.addEventListener('change', onChange)
      return () => mql.removeEventListener('change', onChange)
    },
    () => window.matchMedia(query).matches,
    () => false,
  )
}

export const breakpoints = {
  mobile: '(max-width: 639px)',
  tablet: '(min-width: 640px) and (max-width: 1023px)',
  desktop: '(min-width: 1024px)',
} as const

/** Shared gsap.matchMedia() query: pinned/scroll-hijacking effects only above phone width. */
export const pinnableQuery = '(min-width: 640px)'

export type Breakpoint = keyof typeof breakpoints

export function useBreakpoint(): Breakpoint {
  const isTablet = useMediaQuery(breakpoints.tablet)
  const isDesktop = useMediaQuery(breakpoints.desktop)

  if (isDesktop) return 'desktop'
  if (isTablet) return 'tablet'
  return 'mobile'
}

export function useIsTouchDevice(): boolean {
  return useMediaQuery('(hover: none) and (pointer: coarse)')
}

export function useReducedMotion(): boolean {
  return useMediaQuery('(prefers-reduced-motion: reduce)')
}
