'use client'

import { useEffect } from 'react'

export default function RevealController() {
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal], [data-line]'))
    const header = document.querySelector<HTMLElement>('.site-header')
    const progress = document.querySelector<HTMLElement>('.scroll-progress')
    const ambient = document.querySelector<HTMLElement>('.ambient-layer')
    const hero = document.querySelector<HTMLElement>('.hero')
    const mark = document.querySelector<HTMLElement>('.hero-mark')
    const darkSections = Array.from(document.querySelectorAll<HTMLElement>('.is-dark-section'))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.16, rootMargin: '0px 0px -8% 0px' }
    )

    targets.forEach((target) => observer.observe(target))

    const onScroll = () => {
      const max = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1)
      const pageProgress = Math.min(window.scrollY / max, 1)
      progress?.style.setProperty('--scroll-progress', pageProgress.toFixed(4))
      document.documentElement.style.setProperty('--scroll-y', pageProgress.toFixed(4))
      ambient?.style.setProperty('--ambient-shift', (pageProgress * 100).toFixed(2))

      if (hero && mark) {
        const heroProgress = Math.min(window.scrollY / Math.max(hero.offsetHeight, 1), 1)
        mark.style.setProperty('--hero-progress', heroProgress.toFixed(3))
      }

      if (header) {
        const checkpoint = header.offsetHeight + 12
        const isDark = darkSections.some((section) => {
          const rect = section.getBoundingClientRect()
          return rect.top <= checkpoint && rect.bottom >= checkpoint
        })
        header.classList.toggle('is-dark', isDark)
      }
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    const onPointer = (event: PointerEvent) => {
      const x = event.clientX / Math.max(window.innerWidth, 1)
      const y = event.clientY / Math.max(window.innerHeight, 1)
      document.documentElement.style.setProperty('--mouse-x', x.toFixed(4))
      document.documentElement.style.setProperty('--mouse-y', y.toFixed(4))
    }
    window.addEventListener('pointermove', onPointer, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      window.removeEventListener('pointermove', onPointer)
    }
  }, [])

  return null
}
