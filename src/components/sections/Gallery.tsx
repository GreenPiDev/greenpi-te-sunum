import { useLayoutEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { gsap } from '../../lib/gsapConfig'
import { pinnableQuery } from '../../lib/hooks/useMediaQuery'
import { artworks } from '../../data/artworks'

export function Gallery() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language.startsWith('en') ? 'en' : 'tr'
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      mm.add(pinnableQuery, () => {
        cardsRef.current.forEach((card, i) => {
          if (!card) return
          const isLast = i === artworks.length - 1

          gsap.fromTo(
            card,
            { scale: 0.82, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              ease: 'none',
              scrollTrigger: {
                trigger: card,
                start: 'top 90%',
                end: 'top 20%',
                scrub: 1,
              },
            },
          )

          if (!isLast) {
            gsap.to(card, {
              scale: 1.08,
              opacity: 0,
              ease: 'none',
              scrollTrigger: {
                trigger: card,
                start: 'bottom 60%',
                end: 'bottom top',
                scrub: 1,
              },
            })
          }
        })
      })

      mm.add('(max-width: 639px)', () => {
        cardsRef.current.forEach((card) => {
          if (!card) return
          gsap.fromTo(
            card,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power2.out',
              scrollTrigger: { trigger: card, start: 'top 85%' },
            },
          )
        })
      })

      return () => mm.revert()
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="gallery" ref={sectionRef} className="relative bg-ink px-6 py-24 sm:px-10 sm:py-40">
      <div className="mb-16 sm:mb-24">
        <p className="text-xs uppercase tracking-[0.3em] text-ember-soft">{t('gallery.kicker')}</p>
        <h2 className="font-display mt-4 text-4xl text-canvas sm:text-6xl">{t('gallery.title')}</h2>
      </div>

      <div className="flex flex-col gap-24 sm:gap-40">
        {artworks.map((art, i) => (
          <div
            key={art.id}
            ref={(el) => {
              cardsRef.current[i] = el
            }}
            className="mx-auto flex w-full max-w-5xl flex-col items-center gap-6 sm:sticky sm:top-[10vh]"
            style={{ transformOrigin: 'center center' }}
          >
            <div className="aspect-[4/5] w-full max-w-xl overflow-hidden rounded-sm sm:aspect-[16/10] sm:max-w-4xl">
              <img
                src={art.image}
                alt={art.title[lang]}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex w-full max-w-xl items-baseline justify-between sm:max-w-4xl">
              <div>
                <h3 className="font-display text-2xl text-canvas sm:text-3xl">
                  {art.title[lang]}
                </h3>
                <p className="mt-1 text-sm text-stone">
                  {art.medium[lang]} · {art.size}
                </p>
              </div>
              <span className="font-display text-xl text-ember">{art.year}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
