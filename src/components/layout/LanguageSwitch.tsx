import { useTranslation } from 'react-i18next'
import clsx from 'clsx'

export function LanguageSwitch({
  className,
  theme = 'dark',
}: {
  className?: string
  theme?: 'dark' | 'light'
}) {
  const { i18n } = useTranslation()
  const current = i18n.language.startsWith('en') ? 'en' : 'tr'
  const isLight = theme === 'light'

  const setLang = (lng: 'tr' | 'en') => {
    if (lng !== current) i18n.changeLanguage(lng)
  }

  const activeColor = isLight ? 'text-ink' : 'text-canvas'
  const inactiveColor = isLight
    ? 'text-stone-dim hover:text-ink'
    : 'text-stone hover:text-canvas'

  return (
    <div className={clsx('flex items-center gap-2 text-sm tracking-wide', className)}>
      <button
        onClick={() => setLang('tr')}
        className={clsx('transition-colors', current === 'tr' ? activeColor : inactiveColor)}
        aria-current={current === 'tr'}
      >
        TR
      </button>
      <span className="text-stone-dim">/</span>
      <button
        onClick={() => setLang('en')}
        className={clsx('transition-colors', current === 'en' ? activeColor : inactiveColor)}
        aria-current={current === 'en'}
      >
        EN
      </button>
    </div>
  )
}
