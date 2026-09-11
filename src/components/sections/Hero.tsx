import { useLayoutEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { gsap } from '../../lib/gsapConfig'
import { pinnableQuery } from '../../lib/hooks/useMediaQuery'

export function Hero() {
  const { t } = useTranslation()
  const sectionRef = useRef<HTMLElement>(null)
  const backdropRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      mm.add(pinnableQuery, () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: '+=100%',
            scrub: 1,
            pin: true,
          },
        })
        tl.to(backdropRef.current, { scale: 1.25, opacity: 0.35, ease: 'none' }, 0)
        tl.to(titleRef.current, { yPercent: -60, opacity: 0, ease: 'none' }, 0)
      })

      mm.add('(max-width: 639px)', () => {
        gsap.to(backdropRef.current, {
          opacity: 0.4,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        })
      })

      return () => mm.revert()
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="hero"
      ref={sectionRef}
      data-nav-theme="dark"
      className="relative flex h-[100svh] items-end overflow-hidden bg-ink"
    >
      <div ref={backdropRef} className="absolute inset-0">
        <img
          src="/images/hero-background.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(75% 75% at 78% 22%, rgba(43,168,224,0.35) 0%, rgba(124,193,66,0.18) 40%, rgba(11,30,45,0.9) 75%)',
          }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />

      <div
        ref={titleRef}
        className="relative z-10 w-full px-6 pb-16 sm:px-10 sm:pb-24"
      >
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-blue-soft sm:text-sm">
          {t('hero.kicker')}
        </p>
        <h1 className="font-display text-[15vw] leading-[0.9] text-canvas sm:text-[12vw] lg:text-[9rem]">
          {t('hero.title')}
        </h1>
        <p className="mt-6 max-w-md text-base text-stone sm:text-lg">{t('hero.subtitle')}</p>
        <img
          src="/sirket-logosu.png"
          alt="Green Pi"
          className="mt-8 h-16 w-auto rounded-sm sm:h-20"
        />
      </div>

      <div className="absolute bottom-6 right-6 z-10 hidden items-center gap-2 text-xs uppercase tracking-widest text-stone sm:right-10 sm:flex">
        <span className="h-8 w-px animate-pulse bg-stone" />
        {t('hero.scroll')}
      </div>
    </section>
  )
}
