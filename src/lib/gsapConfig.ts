import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const ease = {
  smooth: 'power3.out',
  sharp: 'power4.inOut',
} as const

export { gsap, ScrollTrigger }
