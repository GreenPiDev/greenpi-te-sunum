import { useLayoutEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { gsap } from '../../lib/gsapConfig'
import { useIsTouchDevice } from '../../lib/hooks/useMediaQuery'

export function Contact() {
  const { t } = useTranslation()
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const buttonRef = useRef<HTMLAnchorElement>(null)
  const isTouch = useIsTouchDevice()

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  useLayoutEffect(() => {
    if (isTouch) return
    const btn = buttonRef.current
    if (!btn) return

    const moveX = gsap.quickTo(btn, 'x', { duration: 0.4, ease: 'power3.out' })
    const moveY = gsap.quickTo(btn, 'y', { duration: 0.4, ease: 'power3.out' })

    const onMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect()
      const relX = e.clientX - (rect.left + rect.width / 2)
      const relY = e.clientY - (rect.top + rect.height / 2)
      moveX(relX * 0.35)
      moveY(relY * 0.35)
    }
    const onLeave = () => {
      moveX(0)
      moveY(0)
    }

    btn.addEventListener('mousemove', onMove)
    btn.addEventListener('mouseleave', onLeave)
    return () => {
      btn.removeEventListener('mousemove', onMove)
      btn.removeEventListener('mouseleave', onLeave)
    }
  }, [isTouch])

  return (
    <section
      id="contact"
      ref={sectionRef}
      data-nav-theme="dark"
      className="relative flex min-h-[90vh] flex-col justify-between bg-ink px-6 py-24 sm:px-10 sm:py-32"
    >
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-blue-soft">{t('contact.kicker')}</p>
        <h2
          ref={titleRef}
          className="font-display mt-6 max-w-3xl text-4xl leading-tight text-canvas sm:text-7xl"
        >
          {t('contact.title')}
        </h2>
        <p className="mt-6 max-w-md text-base text-stone sm:text-lg">{t('contact.body')}</p>

        <a
          ref={buttonRef}
          href="mailto:info@greenpi.com.tr"
          className="mt-12 inline-flex h-32 w-32 items-center justify-center rounded-full border border-blue text-center text-sm uppercase tracking-widest text-canvas transition-colors hover:bg-blue sm:h-40 sm:w-40"
        >
          {t('contact.cta')}
        </a>
      </div>

      <footer className="mt-24 flex flex-col gap-2 border-t border-stone-dim pt-8 text-xs uppercase tracking-widest text-stone sm:flex-row sm:items-center sm:justify-between">
        <span>{t('contact.location')}</span>
        <span>© {new Date().getFullYear()} {t('nav.brand')} — {t('footer.rights')}</span>
      </footer>
    </section>
  )
}
