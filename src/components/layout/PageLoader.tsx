import { useEffect, useRef, useState } from 'react'
import { gsap } from '../../lib/gsapConfig'

export function PageLoader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)
  const rootRef = useRef<HTMLDivElement>(null)
  const curtainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const counter = { value: 0 }
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(rootRef.current, {
          autoAlpha: 0,
          duration: 0.6,
          onComplete,
        })
      },
    })

    tl.to(counter, {
      value: 100,
      duration: 1.6,
      ease: 'power2.inOut',
      onUpdate: () => setProgress(Math.round(counter.value)),
    }).to(
      curtainRef.current,
      { yPercent: -100, duration: 0.9, ease: 'power4.inOut' },
      '-=0.2',
    )

    return () => {
      tl.kill()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div ref={rootRef} className="fixed inset-0 z-[100]">
      <div ref={curtainRef} className="absolute inset-0 flex items-end bg-ink px-6 py-8 sm:px-10 sm:py-12">
        <span className="font-display text-6xl text-canvas sm:text-8xl">
          {progress}
          <span className="text-2xl align-top text-stone sm:text-3xl">%</span>
        </span>
      </div>
    </div>
  )
}
