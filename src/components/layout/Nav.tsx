import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import { getLenis } from '../../lib/lenis'
import { ScrollTrigger } from '../../lib/gsapConfig'
import { LanguageSwitch } from './LanguageSwitch'

const links = [
  { id: 'about', key: 'nav.about' },
  { id: 'gallery', key: 'nav.gallery' },
  { id: 'partners', key: 'nav.partners' },
  { id: 'process', key: 'nav.process' },
  { id: 'opportunities', key: 'nav.opportunities' },
  { id: 'exhibitions', key: 'nav.exhibitions' },
  { id: 'contact', key: 'nav.contact' },
] as const

export function Nav() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const lenis = getLenis()
    if (open) lenis?.stop()
    else lenis?.start()
  }, [open])

  const goTo = (id: string) => {
    setOpen(false)
    const lenis = getLenis()
    lenis?.start()

    if (id === 'about') {
      const trigger = ScrollTrigger.getById('about-scroll')
      if (trigger) {
        lenis?.scrollTo(trigger.start, { duration: 1.4 })
        return
      }
    }

    const el = document.getElementById(id)
    if (!el) return
    lenis?.scrollTo(el, { duration: 1.4 })
  }

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 mix-blend-difference">
        <div className="flex items-center justify-between px-6 py-5 sm:px-10 sm:py-7">
          <button
            onClick={() => goTo('hero')}
            className="font-display text-lg tracking-wide text-canvas sm:text-xl"
          >
            {t('nav.brand')}
          </button>

          <nav className="hidden items-center gap-8 text-sm uppercase tracking-widest text-canvas md:flex">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => goTo(link.id)}
                className="relative opacity-80 transition-opacity hover:opacity-100"
              >
                {t(link.key)}
              </button>
            ))}
          </nav>

          <div className="hidden md:block">
            <LanguageSwitch className="text-canvas" />
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-label="Menu"
          >
            <span
              className={clsx(
                'h-px w-6 bg-canvas transition-transform',
                open && 'translate-y-[3.5px] rotate-45',
              )}
            />
            <span
              className={clsx(
                'h-px w-6 bg-canvas transition-transform',
                open && '-translate-y-[3.5px] -rotate-45',
              )}
            />
          </button>
        </div>
      </header>

      <div
        className={clsx(
          'fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-ink transition-opacity duration-500 md:hidden',
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
      >
        {links.map((link, i) => (
          <button
            key={link.id}
            onClick={() => goTo(link.id)}
            style={{ transitionDelay: open ? `${i * 60}ms` : '0ms' }}
            className={clsx(
              'font-display text-3xl text-canvas transition-all duration-500',
              open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
            )}
          >
            {t(link.key)}
          </button>
        ))}
        <LanguageSwitch className="mt-4 text-canvas" />
      </div>
    </>
  )
}
