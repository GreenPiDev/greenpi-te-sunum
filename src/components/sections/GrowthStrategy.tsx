import { useLayoutEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { gsap } from '../../lib/gsapConfig'
import { pinnableQuery } from '../../lib/hooks/useMediaQuery'
import {
  growthModelBlocks,
  growthPhases,
  productTargets,
  totalTargets,
  vendorListBlocks,
} from '../../data/growthStrategy'

const yearColumns = [
  { key: 'year1' as const, label: 'Y1' },
  { key: 'year2' as const, label: 'Y2' },
  { key: 'year3' as const, label: 'Y3' },
  { key: 'year5' as const, label: 'Y5' },
]

export function GrowthStrategy() {
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
            id: 'growth-scroll',
            trigger: pinRef.current,
            start: 'top top',
            end: () => `+=${getDistance()}`,
            scrub: 1,
            pin: true,
            invalidateOnRefresh: true,
          },
        })
      })

      const reveals = sectionRef.current?.querySelectorAll<HTMLElement>('[data-reveal]')
      if (reveals?.length) {
        gsap.from(reveals, {
          opacity: 0,
          y: 24,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.05,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        })
      }

      return () => mm.revert()
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="growth"
      ref={sectionRef}
      data-nav-theme="dark"
      className="relative overflow-hidden bg-ink px-6 py-24 sm:px-10 sm:py-36"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.3em] text-blue-soft">{t('growth.kicker')}</p>
        <h2 className="font-display mt-4 max-w-3xl text-4xl leading-tight text-canvas sm:text-6xl">
          {t('growth.title')}
        </h2>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-stone sm:text-lg">
          {t('growth.intro')}
        </p>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-stone">
          {t('growth.introNote')}
        </p>

        {/* Product group target table */}
        <h3 className="mt-16 text-xs uppercase tracking-[0.3em] text-stone sm:mt-24">
          {t('growth.tableLabel')}
        </h3>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-left">
            <thead>
              <tr className="border-b border-stone-dim">
                <th className="py-3 pr-4 text-xs font-normal uppercase tracking-[0.2em] text-stone">
                  {t('growth.tableProductHeader')}
                </th>
                {yearColumns.map((col) => (
                  <th
                    key={col.key}
                    className="py-3 pr-4 text-xs font-normal uppercase tracking-[0.2em] text-stone"
                  >
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {productTargets.map((product) => (
                <tr key={product.id} data-reveal className="border-b border-stone-dim/60">
                  <td className="py-4 pr-4 text-sm text-canvas sm:text-base">{product.name[lang]}</td>
                  {yearColumns.map((col) => (
                    <td key={col.key} className="py-4 pr-4 font-display text-sm text-stone sm:text-base">
                      {product[col.key]}
                    </td>
                  ))}
                </tr>
              ))}
              <tr data-reveal>
                <td className="py-4 pr-4 text-sm font-bold uppercase tracking-wide text-canvas sm:text-base">
                  {t('growth.tableTotalRow')}
                </td>
                {yearColumns.map((col) => (
                  <td key={col.key} className="py-4 pr-4 font-display text-lg text-green sm:text-2xl">
                    {totalTargets[col.key]}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-stone">{t('growth.tableNote')}</p>

        {/* 5-year ambition — big numbers, single glance */}
        <h3 className="mt-16 text-xs uppercase tracking-[0.3em] text-stone sm:mt-24">
          {t('growth.ambitionLabel')}
        </h3>
        <div className="mt-8 flex flex-col divide-y divide-stone-dim sm:flex-row sm:divide-x sm:divide-y-0">
          {growthPhases.map((phase) => (
            <div key={phase.id} data-reveal className="flex flex-1 flex-col gap-2 py-6 sm:px-6 sm:py-0 first:sm:pl-0 last:sm:pr-0">
              <span className="text-xs uppercase tracking-[0.3em] text-stone">{phase.yearLabel[lang]}</span>
              <span className="font-display text-3xl text-green sm:text-4xl lg:text-5xl">{phase.target}</span>
              <span className="text-sm leading-snug text-stone">{phase.phaseTitle[lang]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Year-by-year phases — horizontal pinned scroll on desktop */}
      <div className="mt-16 sm:mt-24">
        <div ref={pinRef} className="relative sm:h-screen sm:overflow-hidden">
          <div
            ref={trackRef}
            className="flex flex-col gap-16 px-6 sm:h-screen sm:flex-row sm:items-center sm:gap-0 sm:px-0"
          >
            {growthPhases.map((phase) => (
              <div
                key={phase.id}
                className="relative flex flex-col justify-center gap-8 border-t border-stone-dim pt-10 sm:h-full sm:w-screen sm:shrink-0 sm:border-t-0 sm:px-16 sm:pt-0 lg:px-28"
              >
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-16">
                  <div className="flex flex-col justify-center gap-4">
                    <span className="text-xs uppercase tracking-[0.3em] text-blue-soft">
                      {phase.yearLabel[lang]}
                    </span>
                    <span className="font-display text-5xl text-green sm:text-7xl">{phase.target}</span>
                    <h4 className="font-display text-2xl text-canvas sm:text-3xl">
                      {phase.phaseTitle[lang]}
                    </h4>
                    <p className="max-w-md text-sm leading-relaxed text-stone sm:text-base">
                      {phase.body[lang]}
                    </p>
                    {phase.outcome && (
                      <p className="max-w-md text-sm italic leading-relaxed text-blue-soft">
                        {phase.outcome[lang]}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col justify-center gap-3">
                    <span className="text-xs uppercase tracking-[0.3em] text-stone">
                      {t('growth.objectivesLabel')}
                    </span>
                    <ul className="grid max-h-[46vh] grid-cols-1 gap-x-6 gap-y-2 overflow-y-auto pr-2 sm:max-h-[52vh] sm:grid-cols-2">
                      {phase.objectives.map((objective) => (
                        <li
                          key={objective[lang]}
                          className="flex gap-2 text-sm leading-snug text-stone-dim sm:text-stone"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-green" aria-hidden="true" />
                          {objective[lang]}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Growth model */}
      <div className="mx-auto mt-16 max-w-6xl sm:mt-24">
        <h3 className="text-xs uppercase tracking-[0.3em] text-stone">{t('growth.modelLabel')}</h3>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-stone sm:text-base">
          {t('growth.modelIntro')}
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          {growthModelBlocks.map((block, i) => (
            <span key={block[lang]} className="flex items-center gap-3">
              <span
                data-reveal
                className="rounded-full border border-stone-dim px-4 py-1.5 text-sm text-canvas"
              >
                {block[lang]}
              </span>
              {i < growthModelBlocks.length - 1 && (
                <span className="text-stone-dim" aria-hidden="true">
                  +
                </span>
              )}
            </span>
          ))}
        </div>

        <p className="mt-10 max-w-2xl text-sm leading-relaxed text-stone sm:text-base">
          {t('growth.modelVendorIntro')}
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          {vendorListBlocks.map((block, i) => (
            <span key={block[lang]} className="flex items-center gap-3">
              <span
                data-reveal
                className="rounded-full border border-blue/40 px-4 py-1.5 text-sm text-blue-soft"
              >
                {block[lang]}
              </span>
              {i < vendorListBlocks.length - 1 && (
                <span className="text-stone-dim" aria-hidden="true">
                  +
                </span>
              )}
            </span>
          ))}
        </div>

        <p className="mt-10 max-w-2xl text-sm leading-relaxed text-stone sm:text-base">
          {t('growth.modelClosing')}
        </p>
      </div>

      {/* Long-term objective */}
      <div className="mx-auto mt-16 max-w-4xl border-t border-stone-dim pt-10 text-center sm:mt-24 sm:pt-14">
        <h3 className="text-xs uppercase tracking-[0.3em] text-stone">{t('growth.objectiveLabel')}</h3>
        <p className="font-display mt-6 text-2xl leading-snug text-canvas sm:text-4xl">
          {t('growth.objectiveQuote')}
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-stone sm:text-base">
          {t('growth.objectiveBody')}
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-blue-soft sm:text-base">
          {t('growth.objectiveClosing')}
        </p>
      </div>
    </section>
  )
}
