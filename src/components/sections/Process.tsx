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

  const targetOems = t('process.targetOems', { returnObjects: true }) as string[]

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
    <section id="process" ref={sectionRef} data-nav-theme="dark" className="relative bg-ink px-6 py-24 sm:px-10 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-blue-soft">{t('process.kicker')}</p>
            <h2 className="font-display mt-4 max-w-3xl text-4xl leading-tight text-canvas sm:text-6xl">
              {t('process.title')}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-stone sm:text-lg">
              {t('process.body')}
            </p>
          </div>
          <div className="flex w-full shrink-0 flex-col gap-2 border-l-2 border-blue py-2 pl-6 sm:w-64">
            <span className="text-xs uppercase tracking-[0.3em] text-stone">
              {t('process.roadmapLabel')}
            </span>
            <span className="font-display text-2xl leading-snug text-canvas sm:text-3xl">
              {t('process.roadmap')}
            </span>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 sm:mt-24 sm:grid-cols-3 sm:gap-8">
          {steps.map((step, i) => (
            <div
              key={step.title}
              ref={(el) => {
                stepsRef.current[i] = el
              }}
              className="border-t border-stone-dim pt-6"
            >
              <span className="font-display text-sm text-blue">0{i + 1}</span>
              <h3 className="font-display mt-3 text-2xl text-canvas">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone">{step.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-stone-dim pt-10 sm:mt-24">
          <h3 className="text-xs uppercase tracking-[0.3em] text-stone">
            {t('process.targetOemsLabel')}
          </h3>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-stone">
            {t('process.targetOemsIntro')}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {targetOems.map((name) => (
              <span
                key={name}
                className="rounded-full border border-stone-dim px-4 py-1.5 text-sm text-canvas"
              >
                {name}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-stone-dim pt-10 sm:mt-20">
          <h3 className="text-xs uppercase tracking-[0.3em] text-stone">
            {t('process.visionLabel')}
          </h3>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-stone sm:text-lg">
            {t('process.visionBody')}
          </p>
        </div>
      </div>
    </section>
  )
}
