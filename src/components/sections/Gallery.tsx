import { useLayoutEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { gsap } from '../../lib/gsapConfig'
import { activities } from '../../data/activities'

export function Gallery() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language.startsWith('en') ? 'en' : 'tr'
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])
  const dividerRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter((el): el is HTMLDivElement => el !== null)
      gsap.set(dividerRef.current, { opacity: 0 })

      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 32, scale: 0.94 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: { trigger: card, start: 'top 90%' },
            onComplete:
              i === cards.length - 1
                ? () => gsap.to(dividerRef.current, { opacity: 1, duration: 0.5, ease: 'power1.out' })
                : undefined,
          },
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="gallery" ref={sectionRef} data-nav-theme="dark" className="relative bg-ink px-6 py-24 sm:px-10 sm:py-32">
      <div className="mb-16 sm:mb-20">
        <p className="text-xs uppercase tracking-[0.3em] text-blue-soft">{t('gallery.kicker')}</p>
        <h2 className="font-display mt-4 max-w-2xl text-4xl text-canvas sm:text-6xl">
          {t('gallery.title')}
        </h2>
      </div>

      <div className="relative grid grid-cols-1 gap-px overflow-hidden rounded-sm sm:grid-cols-2 lg:grid-cols-3">
        <div ref={dividerRef} aria-hidden="true" className="absolute inset-0 z-0 bg-stone-dim" />
        {activities.map((activity, i) => (
          <div
            key={activity.id}
            ref={(el) => {
              cardsRef.current[i] = el
            }}
            className="relative z-10 flex flex-col gap-4 bg-ink p-8 sm:p-10"
          >
            <span className="font-display text-sm text-green">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="font-display text-xl text-canvas sm:text-2xl">{activity.title[lang]}</h3>
            <p className="text-sm leading-relaxed text-stone">{activity.description[lang]}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
