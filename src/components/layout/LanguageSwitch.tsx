import { useTranslation } from 'react-i18next'
import clsx from 'clsx'

export function LanguageSwitch({ className }: { className?: string }) {
  const { i18n } = useTranslation()
  const current = i18n.language.startsWith('en') ? 'en' : 'tr'

  const setLang = (lng: 'tr' | 'en') => {
    if (lng !== current) i18n.changeLanguage(lng)
  }

  return (
    <div className={clsx('flex items-center gap-2 text-sm tracking-wide', className)}>
      <button
        onClick={() => setLang('tr')}
        className={clsx(
          'transition-colors',
          current === 'tr' ? 'text-canvas' : 'text-stone hover:text-canvas',
        )}
        aria-current={current === 'tr'}
      >
        TR
      </button>
      <span className="text-stone-dim">/</span>
      <button
        onClick={() => setLang('en')}
        className={clsx(
          'transition-colors',
          current === 'en' ? 'text-canvas' : 'text-stone hover:text-canvas',
        )}
        aria-current={current === 'en'}
      >
        EN
      </button>
    </div>
  )
}
