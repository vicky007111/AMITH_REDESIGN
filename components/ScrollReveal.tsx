'use client'

import React, { useEffect, useRef, useState } from 'react'

export interface ScrollRevealProps {
  children: React.ReactNode
  direction?: 'up' | 'down' | 'left' | 'right'
  delay?: number // seconds
  className?: string
}

// Singleton IntersectionObserver shared by all ScrollReveal instances
let sharedObserver: IntersectionObserver | null = null
const callbacks = new WeakMap<Element, () => void>()

function getSharedObserver() {
  if (typeof window === 'undefined') return null
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cb = callbacks.get(entry.target)
            if (cb) {
              cb()
              callbacks.delete(entry.target)
              sharedObserver?.unobserve(entry.target)
            }
          }
        })
      },
      {
        rootMargin: '-10%',
        threshold: 0,
      }
    )
  }
  return sharedObserver
}

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  className = '',
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (isVisible) return

    const observer = getSharedObserver()
    if (!observer) {
      setIsVisible(true)
      return
    }

    callbacks.set(el, () => {
      setIsVisible(true)
    })
    observer.observe(el)

    return () => {
      callbacks.delete(el)
      observer.unobserve(el)
    }
  }, [isVisible])

  const directionClass = `sr-from-${direction}`
  const visibleClass = isVisible ? 'sr-visible' : ''

  return (
    <div
      ref={ref}
      className={`sr-reveal ${directionClass} ${visibleClass} ${className}`.trim()}
      style={{
        '--sr-delay': `${delay}s`,
      } as React.CSSProperties}
    >
      {children}
    </div>
  )
}
