import { useLayoutEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import { gsap } from '../../lib/gsapConfig'
import { partnerGroups } from '../../data/partners'

export function Partners() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language.startsWith('en') ? 'en' : 'tr'
  const sectionRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = sectionRef.current?.querySelectorAll<HTMLDivElement>('[data-reveal]')
      if (!cards?.length) return

      gsap.from(cards, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.04,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
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

        {partnerGroups.map((group) => (
          <div key={group.id} className="mt-16 sm:mt-20">
            <h3 className="text-xs uppercase tracking-[0.3em] text-stone-dim">{group.label[lang]}</h3>
            <div
              className={clsx(
                'mt-6 grid grid-cols-1 gap-px overflow-hidden rounded-sm bg-ink/15',
                group.partners.length >= 2 && 'sm:grid-cols-2',
                group.partners.length >= 3 && 'lg:grid-cols-3',
              )}
            >
              {group.partners.map((partner) => (
                <div key={partner.name} data-reveal className="flex flex-col gap-3 bg-canvas p-6 sm:p-7">
                  {partner.logo ? (
                    <img
                      src={`/images/brands/${partner.logo}.png`}
                      alt={partner.name}
                      className="h-14 w-14 object-contain object-left"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                      }}
                    />
                  ) : null}
                  <h4 className="font-display text-lg">{partner.name}</h4>
                  <p className="text-sm leading-relaxed text-stone-dim">{partner.scope[lang]}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-16 border-t border-ink/15 pt-10 sm:mt-20">
          <h3 className="text-xs uppercase tracking-[0.3em] text-stone-dim">
            {t('partners.ecosystemLabel')}
          </h3>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-stone-dim">
            {t('partners.ecosystemBody')}
          </p>
        </div>
      </div>
    </section>
  )
}
