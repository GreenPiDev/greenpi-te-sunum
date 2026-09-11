import { useLayoutEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { gsap } from '../../lib/gsapConfig'
import { opportunities, roleTransformations } from '../../data/opportunities'

export function Opportunities() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language.startsWith('en') ? 'en' : 'tr'
  const sectionRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const reveals = sectionRef.current?.querySelectorAll<HTMLElement>('[data-reveal]')
      if (!reveals?.length) return

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
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="opportunities" ref={sectionRef} data-nav-theme="light" className="relative bg-canvas px-6 py-24 text-ink sm:px-10 sm:py-36">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs uppercase tracking-[0.3em] text-blue">{t('opportunities.kicker')}</p>
        <h2 className="font-display mt-4 max-w-3xl text-4xl leading-tight sm:text-6xl">
          {t('opportunities.title')}
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-stone-dim sm:text-lg">
          {t('opportunities.body')}
        </p>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-sm bg-ink/15 sm:mt-20 sm:grid-cols-2">
          {opportunities.map((item, i) => (
            <div key={item.id} data-reveal className="flex flex-col gap-3 bg-canvas p-6 sm:p-8">
              <span className="font-display text-sm text-blue">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="font-display text-lg sm:text-xl">{item.title[lang]}</h3>
              <p className="text-sm leading-relaxed text-stone-dim">{item.body[lang]}</p>
            </div>
          ))}
        </div>

        <h3 className="mt-16 text-xs uppercase tracking-[0.3em] text-stone-dim sm:mt-24">
          {t('opportunities.roleLabel')}
        </h3>
        <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {roleTransformations.map((role) => (
            <div key={role.from[lang]} data-reveal className="border-t border-ink/15 pt-6">
              <p className="font-display text-lg">
                {role.from[lang]} <span className="text-blue">→</span> {role.to[lang]}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-stone-dim">{role.body[lang]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
