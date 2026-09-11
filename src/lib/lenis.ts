import Lenis from 'lenis'
import { gsap, ScrollTrigger } from './gsapConfig'

let lenis: Lenis | null = null

export function getLenis(): Lenis | null {
  return lenis
}

export function startSmoothScroll(): () => void {
  lenis = new Lenis({
    duration: 1.1,
    easing: (t) => 1 - Math.pow(1 - t, 3),
    smoothWheel: true,
    wheelMultiplier: 1,
  })

  window.scrollTo(0, 0)
  lenis.scrollTo(0, { immediate: true })

  lenis.on('scroll', ScrollTrigger.update)

  const onTick = (time: number) => {
    lenis?.raf(time * 1000)
  }
  gsap.ticker.add(onTick)
  gsap.ticker.lagSmoothing(0)

  // Chrome can restore the previous scroll position on reload in multiple
  // late passes (after fonts/images settle), overriding any reset we do at
  // mount time. Keep forcing scroll back to 0 for the first second so none
  // of those passes can win, then do one final ScrollTrigger.refresh() so
  // pin start/end offsets match the real, settled layout.
  const forceTop = () => {
    window.scrollTo(0, 0)
    lenis?.scrollTo(0, { immediate: true })
  }
  const resetDelays = [0, 50, 150, 300, 600, 1000]
  const resetTimers = resetDelays.map((delay) => window.setTimeout(forceTop, delay))
  const refreshTimer = window.setTimeout(() => ScrollTrigger.refresh(), 1050)
  requestAnimationFrame(forceTop)

  return () => {
    resetTimers.forEach((id) => window.clearTimeout(id))
    window.clearTimeout(refreshTimer)
    gsap.ticker.remove(onTick)
    lenis?.destroy()
    lenis = null
  }
}
