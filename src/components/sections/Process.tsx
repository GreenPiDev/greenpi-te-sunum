import { useLayoutEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { gsap } from '../../lib/gsapConfig'

export function Process() {
  const { t } = useTranslation()
  const sectionRef = useRef<HTMLElement>(null)
  const stepsRef = useRef<(HTMLDivElement | null)[]>([])

  const steps = [
    { title: t('process.step1Title'), body: t('process.step1Body') },
    { title: t('process.step2Title'), body: t('process.step2Body') },
    { title: t('process.step3Title'), body: t('process.step3Body') },
  ]

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(stepsRef.current, {
        opacity: 0,
        y: 48,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 65%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="process" ref={sectionRef} className="relative bg-canvas px-6 py-24 text-ink sm:px-10 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.3em] text-ember">{t('process.kicker')}</p>
        <h2 className="font-display mt-4 max-w-3xl text-4xl leading-tight sm:text-6xl">
          {t('process.title')}
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-stone-dim sm:text-lg">
          {t('process.body')}
        </p>

        <div className="mt-16 grid grid-cols-1 gap-10 sm:mt-24 sm:grid-cols-3 sm:gap-8">
          {steps.map((step, i) => (
            <div
              key={step.title}
              ref={(el) => {
                stepsRef.current[i] = el
              }}
              className="border-t border-ink/20 pt-6"
            >
              <span className="font-display text-sm text-ember">0{i + 1}</span>
              <h3 className="font-display mt-3 text-2xl">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-dim">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
