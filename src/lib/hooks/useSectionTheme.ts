import { useEffect, useState } from 'react'

export function useSectionTheme() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('[data-nav-theme]')
    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting)
        if (!visible) return
        const next = visible.target.getAttribute('data-nav-theme') === 'light' ? 'light' : 'dark'
        setTheme(next)
      },
      { rootMargin: '0px 0px -90% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return theme
}
