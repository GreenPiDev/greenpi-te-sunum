import { useLayoutEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import { gsap } from '../../lib/gsapConfig'
import { partnerGroups } from '../../data/partners'

const ecosystemLogos = [
  { name: 'ABB', logo: 'abb' },
  { name: 'LS Electric', logo: 'ls' },
  { name: 'Jean Müller', logo: 'jm' },
  { name: 'Schrack', logo: 'schrack' },
  { name: 'Miltera', logo: 'miltera' },
  { name: 'Iskra', logo: 'iskra' },
]

export function Partners() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language.startsWith('en') ? 'en' : 'tr'
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[][]>(partnerGroups.map(() => []))
  const dividerRefs = useRef<(HTMLDivElement | null)[]>([])

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((groupCards, gi) => {
        const cards = groupCards.filter((el): el is HTMLDivElement => el !== null)
        const divider = dividerRefs.current[gi]
        gsap.set(divider, { opacity: 0 })

        cards.forEach((card, i) => {
          gsap.fromTo(
            card,
            { opacity: 0, y: 24, scale: 0.96 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.6,
              ease: 'power2.out',
              scrollTrigger: { trigger: card, start: 'top 90%' },
              onComplete:
                i === cards.length - 1
                  ? () => gsap.to(divider, { opacity: 1, duration: 0.5, ease: 'power1.out' })
                  : undefined,
            },
          )
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="partners" ref={sectionRef} data-nav-theme="light" className="relative bg-canvas px-6 py-24 text-ink sm:px-10 sm:py-36">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs uppercase tracking-[0.3em] text-blue">{t('partners.kicker')}</p>
        <h2 className="font-display mt-4 max-w-3xl text-4xl leading-tight sm:text-6xl">
          {t('partners.title')}
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-stone-dim sm:text-lg">
          {t('partners.body')}
        </p>

        {partnerGroups.map((group, gi) => (
          <div key={group.id} className="mt-16 sm:mt-20">
            <h3 className="text-xs uppercase tracking-[0.3em] text-stone-dim">{group.label[lang]}</h3>
            <div
              className={clsx(
                'relative grid grid-cols-1 gap-px overflow-hidden rounded-sm',
                group.partners.length >= 2 && 'sm:grid-cols-2',
                group.partners.length >= 3 && 'lg:grid-cols-3',
              )}
            >
              <div
                ref={(el) => {
                  dividerRefs.current[gi] = el
                }}
                aria-hidden="true"
                className="absolute inset-0 z-0 bg-ink/15"
              />
              {group.partners.map((partner, pi) => (
                <div
                  key={partner.name}
                  ref={(el) => {
                    cardsRef.current[gi][pi] = el
                  }}
                  className="relative z-10 flex flex-col gap-3 overflow-hidden bg-canvas p-6 sm:p-7"
                >
                  {partner.logo ? (
                    <img
                      src={`/images/brands/${partner.logo}.png`}
                      alt={partner.name}
                      className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/2 object-contain object-right-bottom opacity-20"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                      }}
                    />
                  ) : null}
                  <h4 className="relative font-display text-lg">{partner.name}</h4>
                  <p className="relative max-w-[70%] text-sm leading-relaxed text-stone-dim">
                    {partner.scope[lang]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="relative mt-16 flex flex-col items-center border-t border-ink/15 pt-10 text-center sm:mt-20">
          <h3 className="text-xs uppercase tracking-[0.3em] text-stone-dim">
            {t('partners.ecosystemLabel')}
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-stone-dim">
            {t('partners.ecosystemBody')}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
            {ecosystemLogos.map((brand) => (
              <div key={brand.logo} className="flex h-10 w-24 items-center justify-center">
                <img
                  src={`/images/brands/${brand.logo}.png`}
                  alt={brand.name}
                  className="max-h-full max-w-full object-contain opacity-70 mix-blend-multiply"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
