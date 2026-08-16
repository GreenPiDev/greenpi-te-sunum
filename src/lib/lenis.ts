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

  lenis.on('scroll', ScrollTrigger.update)

  const onTick = (time: number) => {
    lenis?.raf(time * 1000)
  }
  gsap.ticker.add(onTick)
  gsap.ticker.lagSmoothing(0)

  return () => {
    gsap.ticker.remove(onTick)
    lenis?.destroy()
    lenis = null
  }
}
