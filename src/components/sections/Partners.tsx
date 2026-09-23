import { useLayoutEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import { gsap } from '../../lib/gsapConfig'
import { pinnableQuery } from '../../lib/hooks/useMediaQuery'
import { partnerGroups } from '../../data/partners'

const marqueeLogos = partnerGroups
  .flatMap((group) => group.partners)
  .filter((partner) => Boolean(partner.logo))

export function Partners() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language.startsWith('en') ? 'en' : 'tr'
  const sectionRef = useRef<HTMLElement>(null)
  const pinRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      mm.add(pinnableQuery, () => {
        const track = trackRef.current
        if (!track) return
        const getDistance = () => track.scrollWidth - window.innerWidth

        gsap.to(track, {
          x: () => -getDistance(),
          ease: 'none',
          scrollTrigger: {
            id: 'partners-scroll',
            trigger: pinRef.current,
            start: 'top top',
            end: () => `+=${getDistance()}`,
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
    <section id="partners" ref={sectionRef} data-nav-theme="light" className="relative bg-canvas text-ink">
      <div className="mx-auto max-w-5xl px-6 pt-24 sm:px-10 sm:pt-36">
        <p className="text-xs uppercase tracking-[0.3em] text-blue">{t('partners.kicker')}</p>
        <h2 className="font-display mt-4 max-w-3xl text-4xl leading-tight sm:text-6xl">
          {t('partners.title')}
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-stone-dim sm:text-lg">
          {t('partners.body')}
        </p>
      </div>

      <div ref={pinRef} className="relative mt-16 overflow-hidden sm:mt-20 sm:h-screen">
        <div
          ref={trackRef}
          className="flex flex-col gap-16 px-6 sm:h-screen sm:flex-row sm:items-center sm:gap-0 sm:px-0"
        >
          {partnerGroups.map((group) => {
            const isDistributorship = group.id === 'distributorship'

            if (isDistributorship) {
              const partner = group.partners[0]
              return (
                <div
                  key={group.id}
                  className="relative flex h-full w-screen shrink-0 flex-col gap-10 overflow-hidden sm:flex-row sm:items-center sm:gap-0"
                >
                  <div className="relative z-10 flex flex-col justify-center gap-4 px-6 sm:w-2/5 sm:px-16 lg:px-28">
                    <h3 className="text-xs uppercase tracking-[0.3em] text-stone-dim">{group.label[lang]}</h3>
                    <h4 className="font-display text-2xl font-bold sm:text-3xl">{partner.name}</h4>
                    <p className="max-w-md text-base leading-relaxed text-stone-dim sm:text-lg">
                      {partner.scope[lang]}
                    </p>
                  </div>
                  <div className="relative flex h-72 w-full items-center justify-center px-10 sm:h-full sm:w-3/5 sm:px-16">
                    <img
                      src="/images/brands/aite-fuse.png"
                      alt={partner.name}
                      className="h-full w-full object-contain opacity-40"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                      }}
                    />
                  </div>
                </div>
              )
            }

            return (
              <div
                key={group.id}
                className="relative flex flex-col justify-center gap-6 sm:h-full sm:w-screen sm:shrink-0 sm:px-16 lg:px-28"
              >
                <h3 className="text-xs uppercase tracking-[0.3em] text-stone-dim">{group.label[lang]}</h3>
                <div
                  className={clsx(
                    'relative grid grid-cols-1 gap-px overflow-hidden rounded-sm bg-ink/15',
                    group.partners.length >= 2 && 'sm:grid-cols-2',
                    group.partners.length >= 3 && 'lg:grid-cols-3',
                  )}
                >
                  {group.partners.map((partner) => (
                    <div
                      key={partner.name}
                      className="relative flex min-h-[200px] flex-col gap-3 overflow-hidden bg-canvas p-5 sm:min-h-[240px] sm:p-6"
                    >
                      {partner.logo ? (
                        <img
                          src={`/images/brands/${partner.logo}.png`}
                          alt={partner.name}
                          className="pointer-events-none absolute bottom-0 right-0 aspect-square h-full object-contain object-right-bottom opacity-20"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none'
                          }}
                        />
                      ) : null}
                      <h4 className="relative font-display text-base font-bold sm:text-lg">
                        {partner.name}
                      </h4>
                      <p className="relative max-w-[70%] text-sm leading-relaxed text-stone-dim">
                        {partner.scope[lang]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 pb-24 sm:px-10 sm:pb-36">
        <div className="relative flex flex-col items-center border-t border-ink/15 pt-10 text-center">
          <h3 className="text-xs uppercase tracking-[0.3em] text-stone-dim">
            {t('partners.ecosystemLabel')}
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-stone-dim">
            {t('partners.ecosystemBody')}
          </p>
          <div
            className="mt-8 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
          >
            <div className="animate-marquee flex w-max items-center gap-16">
              {[...marqueeLogos, ...marqueeLogos].map((brand, index) => (
                <div key={`${brand.logo}-${index}`} className="flex h-10 w-24 shrink-0 items-center justify-center">
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
      </div>
    </section>
  )
}
