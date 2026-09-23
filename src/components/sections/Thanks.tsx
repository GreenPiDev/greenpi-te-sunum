import { useTranslation } from 'react-i18next'

export function Thanks() {
  const { t } = useTranslation()

  return (
    <section
      id="thanks"
      data-nav-theme="dark"
      className="flex flex-col items-center justify-center gap-8 bg-ink px-6 py-20 text-center sm:py-28"
    >
      <img src="/sirket-logosu.png" alt="Green Pi" className="h-24 w-auto rounded-sm sm:h-32" />
      <p className="max-w-xl text-base text-stone sm:text-lg">{t('thanks.message')}</p>
    </section>
  )
}
