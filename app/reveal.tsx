'use client'

import { useEffect } from 'react'

export default function RevealController() {
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' }
    )

    targets.forEach((target) => observer.observe(target))

    const hero = document.querySelector<HTMLElement>('.hero')
    const mark = document.querySelector<HTMLElement>('.hero-mark')
    const onScroll = () => {
      if (!hero || !mark) return
      const progress = Math.min(window.scrollY / Math.max(hero.offsetHeight, 1), 1)
      mark.style.setProperty('--hero-progress', progress.toFixed(3))
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return null
}
