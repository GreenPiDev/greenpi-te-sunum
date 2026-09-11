import { useLayoutEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { gsap } from '../../lib/gsapConfig'

interface ExhibitionItem {
  year: string
  title: string
  place: string
}

export function Exhibitions() {
  const { t } = useTranslation()
  const sectionRef = useRef<HTMLElement>(null)
  const rowsRef = useRef<(HTMLDivElement | null)[]>([])
  const items = t('exhibitions.items', { returnObjects: true }) as ExhibitionItem[]

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(rowsRef.current, {
        opacity: 0,
        x: -24,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="exhibitions" ref={sectionRef} className="relative bg-ink px-6 py-24 sm:px-10 sm:py-36">
      <div className="absolute inset-0">
        <img
          src="/images/exhibitions.jpg"
          alt=""
          className="h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/90 to-ink" />
      </div>
      <div className="relative mx-auto max-w-4xl">
        <p className="text-xs uppercase tracking-[0.3em] text-ember-soft">
          {t('exhibitions.kicker')}
        </p>
        <h2 className="font-display mt-4 text-4xl text-canvas sm:text-6xl">
          {t('exhibitions.title')}
        </h2>

        <div className="mt-14 flex flex-col sm:mt-20">
          {items.map((item, i) => (
            <div
              key={`${item.year}-${item.title}`}
              ref={(el) => {
                rowsRef.current[i] = el
              }}
              className="flex flex-col gap-2 border-t border-stone-dim py-6 sm:flex-row sm:items-baseline sm:gap-8 sm:py-8"
            >
              <span className="font-display text-2xl text-ember sm:w-24 sm:shrink-0">
                {item.year}
              </span>
              <h3 className="font-display text-xl text-canvas sm:text-2xl">{item.title}</h3>
              <span className="text-sm text-stone sm:ml-auto">{item.place}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
