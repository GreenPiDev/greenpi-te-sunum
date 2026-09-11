import { useLayoutEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { gsap } from '../../lib/gsapConfig'
import { pinnableQuery } from '../../lib/hooks/useMediaQuery'

export function About() {
  const { t } = useTranslation()
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  const stats = [
    { value: t('about.stat1Value'), label: t('about.stat1Label') },
    { value: t('about.stat2Value'), label: t('about.stat2Label') },
    { value: t('about.stat3Value'), label: t('about.stat3Label') },
  ]

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      mm.add(pinnableQuery, () => {
        const track = trackRef.current
        if (!track) return
        const distance = track.scrollWidth - window.innerWidth

        gsap.to(track, {
          x: -distance,
          ease: 'none',
          scrollTrigger: {
            id: 'about-scroll',
            trigger: sectionRef.current,
            start: 'top top',
            end: () => `+=${distance}`,
            scrub: 1,
            pin: true,
            invalidateOnRefresh: true,
          },
        })
      })

      return () => mm.revert()
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="relative overflow-hidden bg-ink py-24 sm:py-0">
      <div
        ref={trackRef}
        className="flex flex-col gap-16 px-6 sm:h-screen sm:flex-row sm:items-center sm:gap-0 sm:px-0"
      >
        <div className="flex flex-col justify-center gap-6 sm:h-full sm:w-screen sm:shrink-0 sm:px-16 lg:px-28">
          <p className="text-xs uppercase tracking-[0.3em] text-blue-soft">{t('about.kicker')}</p>
          <h2 className="font-display max-w-3xl text-4xl leading-tight text-canvas sm:text-6xl lg:text-7xl">
            {t('about.title')}
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-stone sm:text-lg">
            {t('about.body')}
          </p>
        </div>

        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col justify-center gap-4 border-t border-stone-dim pt-8 sm:h-full sm:w-screen sm:shrink-0 sm:border-t-0 sm:border-l sm:px-16 sm:pt-0 lg:px-28"
          >
            <span className="font-display text-7xl text-blue sm:text-9xl">{stat.value}</span>
            <span className="text-sm uppercase tracking-widest text-stone">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
