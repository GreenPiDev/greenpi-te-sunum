import { useEffect, useRef } from 'react'
import { gsap } from '../../lib/gsapConfig'
import { useIsTouchDevice } from '../../lib/hooks/useMediaQuery'

const INK = { r: 0x0b, g: 0x1e, b: 0x2d } // --color-ink
const CANVAS = { r: 0xf7, g: 0xf9, b: 0xfa } // --color-canvas
const TRANSITION_ZONE = 90 // px around a section boundary over which the color blends

function lerpChannel(a: number, b: number, t: number) {
  return Math.round(a + (b - a) * t)
}

function colorForTheme(isLight: boolean) {
  return isLight ? INK : CANVAS
}

function rgbToCss({ r, g, b }: { r: number; g: number; b: number }) {
  return `rgb(${r}, ${g}, ${b})`
}

function getColorAtPoint(x: number, y: number): string {
  const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-nav-theme]'))
  if (sections.length === 0) return rgbToCss(CANVAS)

  for (let i = 0; i < sections.length; i += 1) {
    const rect = sections[i].getBoundingClientRect()
    if (y < rect.top || y > rect.bottom || x < rect.left || x > rect.right) continue

    const isLight = sections[i].dataset.navTheme === 'light'
    const base = colorForTheme(isLight)

    const distTop = y - rect.top
    const prev = sections[i - 1]
    if (prev && distTop < TRANSITION_ZONE) {
      const prevLight = prev.dataset.navTheme === 'light'
      if (prevLight !== isLight) {
        const t = 1 - distTop / TRANSITION_ZONE
        const target = colorForTheme(prevLight)
        return rgbToCss({
          r: lerpChannel(base.r, target.r, t),
          g: lerpChannel(base.g, target.g, t),
          b: lerpChannel(base.b, target.b, t),
        })
      }
    }

    const distBottom = rect.bottom - y
    const next = sections[i + 1]
    if (next && distBottom < TRANSITION_ZONE) {
      const nextLight = next.dataset.navTheme === 'light'
      if (nextLight !== isLight) {
        const t = 1 - distBottom / TRANSITION_ZONE
        const target = colorForTheme(nextLight)
        return rgbToCss({
          r: lerpChannel(base.r, target.r, t),
          g: lerpChannel(base.g, target.g, t),
          b: lerpChannel(base.b, target.b, t),
        })
      }
    }

    return rgbToCss(base)
  }

  return rgbToCss(CANVAS)
}

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const isTouch = useIsTouchDevice()
  const pointerRef = useRef({ x: -9999, y: -9999 })

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
      pointerRef.current = { x: e.clientX, y: e.clientY }
      moveDot(e.clientX)
      moveDotY(e.clientY)
      moveRing(e.clientX)
      moveRingY(e.clientY)
    }

    const onEnterInteractive = () => gsap.to(ring, { scale: 2, duration: 0.3 })
    const onLeaveInteractive = () => gsap.to(ring, { scale: 1, duration: 0.3 })

    const onTick = () => {
      const { x, y } = pointerRef.current
      const color = getColorAtPoint(x, y)
      dot.style.backgroundColor = color
      ring.style.borderColor = color
    }

    window.addEventListener('mousemove', onMove)
    gsap.ticker.add(onTick)
    const interactive = document.querySelectorAll('a, button')
    interactive.forEach((el) => {
      el.addEventListener('mouseenter', onEnterInteractive)
      el.addEventListener('mouseleave', onLeaveInteractive)
    })

    return () => {
      window.removeEventListener('mousemove', onMove)
      gsap.ticker.remove(onTick)
      interactive.forEach((el) => {
        el.removeEventListener('mouseenter', onEnterInteractive)
        el.removeEventListener('mouseleave', onLeaveInteractive)
      })
    }
  }, [isTouch])

  if (isTouch) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-[60] hidden md:block">
      <div ref={dotRef} className="absolute h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full" />
      <div ref={ringRef} className="absolute h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border" />
    </div>
  )
}
