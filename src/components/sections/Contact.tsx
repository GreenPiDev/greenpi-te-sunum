import { useLayoutEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { gsap } from '../../lib/gsapConfig'
import { pinnableQuery } from '../../lib/hooks/useMediaQuery'

export function Contact() {
  const { t } = useTranslation()
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      mm.add(pinnableQuery, () => {
        const track = trackRef.current
        if (!track) return
        const distance = track.scrollWidth - window.innerWidth

        gsap.to(track, {
          x: -distance,
          ease: 'none',
          scrollTrigger: {
            id: 'contact-scroll',
            trigger: sectionRef.current,
            start: 'top top',
            end: () => `+=${distance}`,
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
    <section
      id="contact"
      ref={sectionRef}
      data-nav-theme="light"
      className="relative overflow-hidden bg-ink sm:h-screen"
    >
      <div ref={trackRef} className="flex flex-col sm:h-screen sm:flex-row">
        <div className="hidden shrink-0 bg-ink sm:block sm:h-full sm:w-[25vw]" aria-hidden="true" />

        <div className="flex min-h-[90vh] w-full shrink-0 flex-col justify-between bg-canvas px-6 py-24 text-ink sm:h-full sm:w-screen sm:px-10 sm:py-32">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-blue">{t('contact.kicker')}</p>
            <h2 className="font-display mt-6 max-w-3xl text-4xl leading-tight sm:text-7xl">
              {t('contact.title')}
            </h2>
            <p className="mt-6 max-w-md text-base text-stone-dim sm:text-lg">{t('contact.body')}</p>

            <div className="mt-12 flex flex-col items-start gap-3">
              <a
                href="mailto:info@greenpi.com.tr"
                className="font-display text-2xl transition-colors hover:text-green sm:text-3xl"
              >
                info@greenpi.com.tr
              </a>
              <a
                href="tel:+905468582020"
                className="font-display text-2xl transition-colors hover:text-green sm:text-3xl"
              >
                +90 546 858 20 20
              </a>
            </div>

            <div className="mt-10 flex items-center gap-5">
              <a
                href="https://www.instagram.com/greenpienergy/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/20 text-ink transition-colors hover:border-green hover:text-green"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/greenpienergy/posts/?feedView=all"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/20 text-ink transition-colors hover:border-green hover:text-green"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
                  <rect x="3" y="3" width="18" height="18" rx="3" />
                  <line x1="7.5" y1="10" x2="7.5" y2="17" />
                  <circle cx="7.5" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
                  <path d="M11.5 17v-4.5c0-1.4 1-2.3 2.3-2.3s2.2.9 2.2 2.3V17" />
                </svg>
              </a>
            </div>
          </div>

          <footer className="mt-24 flex flex-col gap-2 border-t border-ink/15 pt-8 text-xs uppercase tracking-widest text-stone-dim sm:flex-row sm:items-center sm:justify-between">
            <span>{t('contact.location')}</span>
            <span>© {new Date().getFullYear()} {t('nav.brand')} — {t('footer.rights')}</span>
          </footer>
        </div>
      </div>
    </section>
  )
}
