import { useLayoutEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { gsap } from '../../lib/gsapConfig'
import { activities } from '../../data/activities'

export function Gallery() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language.startsWith('en') ? 'en' : 'tr'
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card) => {
        if (!card) return
        gsap.fromTo(
          card,
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: { trigger: card, start: 'top 90%' },
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

      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-sm bg-stone-dim sm:grid-cols-2 lg:grid-cols-3">
        {activities.map((activity, i) => (
          <div
            key={activity.id}
            ref={(el) => {
              cardsRef.current[i] = el
            }}
            className="flex flex-col gap-4 bg-ink p-8 sm:p-10"
          >
            <span className="font-display text-sm text-blue">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="font-display text-xl text-canvas sm:text-2xl">{activity.title[lang]}</h3>
            <p className="text-sm leading-relaxed text-stone">{activity.description[lang]}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
