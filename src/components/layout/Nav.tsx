import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import { getLenis } from '../../lib/lenis'
import { ScrollTrigger } from '../../lib/gsapConfig'
import { useSectionTheme } from '../../lib/hooks/useSectionTheme'
import { useActiveSection } from '../../lib/hooks/useActiveSection'
import { LanguageSwitch } from './LanguageSwitch'

const links = [
  { id: 'about', key: 'nav.about' },
  { id: 'gallery', key: 'nav.gallery' },
  { id: 'partners', key: 'nav.partners' },
  { id: 'process', key: 'nav.process' },
  { id: 'growth', key: 'nav.growth' },
  { id: 'opportunities', key: 'nav.opportunities' },
  { id: 'exhibitions', key: 'nav.exhibitions' },
] as const

const linkIds = links.map((link) => link.id)

export function Nav() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const [hovered, setHovered] = useState<string | null>(null)
  const theme = useSectionTheme()
  const isLight = theme === 'light'
  const active = useActiveSection(linkIds)

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
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="flex items-center justify-between px-6 py-5 sm:px-10 sm:py-7">
          <button
            onClick={() => goTo('hero')}
            className={clsx(
              'font-display text-lg tracking-wide transition-colors sm:text-xl',
              isLight ? 'text-ink' : 'text-canvas',
            )}
          >
            {t('nav.brand')}
          </button>

          <nav
            onMouseLeave={() => setHovered(null)}
            className={clsx(
              'hidden items-center gap-8 text-sm uppercase tracking-widest transition-colors md:flex',
              isLight ? 'text-ink' : 'text-canvas',
            )}
          >
            {links.map((link) => {
              const isActive = link.id === active
              const isHovered = hovered === link.id
              const receded = hovered !== null && !isHovered

              return (
                <button
                  key={link.id}
                  onClick={() => goTo(link.id)}
                  onMouseEnter={() => setHovered(link.id)}
                  className={clsx(
                    'relative origin-center transition-all duration-300',
                    isActive && 'font-bold text-green',
                    isHovered && 'z-10 scale-125 opacity-100',
                    !isHovered && receded && 'scale-90 opacity-50',
                    !isHovered && !receded && (isActive ? 'scale-110 opacity-100' : 'opacity-80'),
                  )}
                >
                  {t(link.key)}
                </button>
              )
            })}
          </nav>

          <div className="hidden md:block">
            <LanguageSwitch theme={theme} />
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-label="Menu"
          >
            <span
              className={clsx(
                'h-px w-6 transition-transform',
                isLight && !open ? 'bg-ink' : 'bg-canvas',
                open && 'translate-y-[3.5px] rotate-45',
              )}
            />
            <span
              className={clsx(
                'h-px w-6 transition-transform',
                isLight && !open ? 'bg-ink' : 'bg-canvas',
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
              'font-display text-3xl transition-all duration-500',
              link.id === active ? 'scale-110 text-green' : 'text-canvas',
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
