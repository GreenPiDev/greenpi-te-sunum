import { useEffect, useRef } from 'react'
import clsx from 'clsx'
import { gsap } from '../../lib/gsapConfig'
import { useIsTouchDevice } from '../../lib/hooks/useMediaQuery'
import { useSectionTheme } from '../../lib/hooks/useSectionTheme'

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const isTouch = useIsTouchDevice()
  const theme = useSectionTheme()
  const isLight = theme === 'light'

  useEffect(() => {
    if (isTouch) return
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    const moveDot = gsap.quickTo(dot, 'x', { duration: 0.1, ease: 'power3.out' })
    const moveDotY = gsap.quickTo(dot, 'y', { duration: 0.1, ease: 'power3.out' })
    const moveRing = gsap.quickTo(ring, 'x', { duration: 0.35, ease: 'power3.out' })
    const moveRingY = gsap.quickTo(ring, 'y', { duration: 0.35, ease: 'power3.out' })

    const onMove = (e: MouseEvent) => {
      moveDot(e.clientX)
      moveDotY(e.clientY)
      moveRing(e.clientX)
      moveRingY(e.clientY)
    }

    const onEnterInteractive = () => gsap.to(ring, { scale: 2, duration: 0.3 })
    const onLeaveInteractive = () => gsap.to(ring, { scale: 1, duration: 0.3 })

    window.addEventListener('mousemove', onMove)
    const interactive = document.querySelectorAll('a, button')
    interactive.forEach((el) => {
      el.addEventListener('mouseenter', onEnterInteractive)
      el.addEventListener('mouseleave', onLeaveInteractive)
    })

    return () => {
      window.removeEventListener('mousemove', onMove)
      interactive.forEach((el) => {
        el.removeEventListener('mouseenter', onEnterInteractive)
        el.removeEventListener('mouseleave', onLeaveInteractive)
      })
    }
  }, [isTouch])

  if (isTouch) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-[60] hidden md:block">
      <div
        ref={dotRef}
        className={clsx(
          'absolute h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full transition-colors',
          isLight ? 'bg-ink' : 'bg-canvas',
        )}
      />
      <div
        ref={ringRef}
        className={clsx(
          'absolute h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border transition-colors',
          isLight ? 'border-ink' : 'border-canvas',
        )}
      />
    </div>
  )
}
