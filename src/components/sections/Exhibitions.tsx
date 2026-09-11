import { useLayoutEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { gsap } from '../../lib/gsapConfig'

interface ProjectItem {
  year: string
  title: string
  place: string
}

interface OngoingItem {
  title: string
  place: string
}

interface AgreementItem {
  company: string
  amount: string
  scope: string
}

interface EventItem {
  title: string
  body: string
}

export function Exhibitions() {
  const { t } = useTranslation()
  const sectionRef = useRef<HTMLElement>(null)

  const projects = t('exhibitions.items', { returnObjects: true }) as ProjectItem[]
  const ongoing = t('exhibitions.ongoing', { returnObjects: true }) as OngoingItem[]
  const agreements = t('exhibitions.agreements', { returnObjects: true }) as AgreementItem[]
  const events = t('exhibitions.events', { returnObjects: true }) as EventItem[]

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const reveals = sectionRef.current?.querySelectorAll<HTMLElement>('[data-reveal]')
      if (!reveals?.length) return

      gsap.from(reveals, {
        opacity: 0,
        y: 24,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.06,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="exhibitions" ref={sectionRef} data-nav-theme="dark" className="relative overflow-hidden bg-ink px-6 py-24 sm:px-10 sm:py-36">
      <div className="relative mx-auto max-w-5xl">
        <p className="text-xs uppercase tracking-[0.3em] text-blue-soft">
          {t('exhibitions.kicker')}
        </p>
        <h2 className="font-display mt-4 text-4xl text-canvas sm:text-6xl">
          {t('exhibitions.title')}
        </h2>

        {/* Selected project experience */}
        <h3 className="mt-16 text-xs uppercase tracking-[0.3em] text-stone sm:mt-24">
          {t('exhibitions.projectsLabel')}
        </h3>
        <div className="mt-6 flex flex-col">
          {projects.map((item) => (
            <div
              key={item.title}
              data-reveal
              className="flex flex-col gap-2 border-t border-stone-dim py-6 sm:flex-row sm:items-baseline sm:gap-8 sm:py-7"
            >
              <span className="font-display text-sm uppercase tracking-widest text-green sm:w-28 sm:shrink-0">
                {item.year}
              </span>
              <h4 className="font-display text-lg text-canvas sm:text-xl">{item.title}</h4>
              <span className="text-sm text-stone sm:ml-auto">{item.place}</span>
            </div>
          ))}
        </div>

        {/* Ongoing projects */}
        <h3 className="mt-16 text-xs uppercase tracking-[0.3em] text-stone sm:mt-20">
          {t('exhibitions.ongoingLabel')}
        </h3>
        <div className="mt-6 flex flex-col">
          {ongoing.map((item) => (
            <div
              key={item.title}
              data-reveal
              className="flex flex-col gap-2 border-t border-stone-dim py-6 sm:flex-row sm:items-baseline sm:gap-8 sm:py-7"
            >
              <h4 className="font-display text-lg text-canvas sm:text-xl">{item.title}</h4>
              <span className="text-sm text-stone sm:ml-auto">{item.place}</span>
            </div>
          ))}
        </div>

        {/* Commercial agreements */}
        <h3 className="mt-16 text-xs uppercase tracking-[0.3em] text-stone sm:mt-20">
          {t('exhibitions.agreementsLabel')}
        </h3>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-stone">
          {t('exhibitions.agreementsIntro')}
        </p>
        <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-sm bg-stone-dim sm:grid-cols-2">
          {agreements.map((item) => (
            <div key={item.company} data-reveal className="flex flex-col gap-2 bg-ink p-6 sm:p-8">
              <h4 className="font-display text-lg text-canvas">{item.company}</h4>
              <span className="font-display text-2xl text-green">{item.amount}</span>
              <p className="text-sm leading-relaxed text-stone">{item.scope}</p>
            </div>
          ))}
        </div>

        {/* Brand visibility & events */}
        <h3 className="mt-16 text-xs uppercase tracking-[0.3em] text-stone sm:mt-20">
          {t('exhibitions.eventsLabel')}
        </h3>
        <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {events.map((item) => (
            <div key={item.title} data-reveal className="border-t border-stone-dim pt-6">
              <h4 className="font-display text-lg text-canvas">{item.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-stone">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
