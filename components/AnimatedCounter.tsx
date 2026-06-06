'use client'

import React, { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

export interface AnimatedCounterProps {
  target: number
  suffix?: string // e.g. '+'
  duration?: number // ms, default 2000
  label: string
}

export default function AnimatedCounter({
  target,
  suffix = '',
  duration = 2000,
  label,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  
  // Trigger once when it scrolls into view
  const isInView = useInView(ref, { once: true, margin: '-10%' })

  useEffect(() => {
    if (!isInView) {
      setCount(0)
      return
    }

    let startTime: number | null = null
    let animationFrameId: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime
      const progressPercentage = Math.min(progress / duration, 1)

      // Easing out quad
      const easeProgress = progressPercentage * (2 - progressPercentage)
      const currentCount = Math.floor(easeProgress * target)

      setCount(currentCount)

      if (progressPercentage < 1) {
        animationFrameId = requestAnimationFrame(animate)
      } else {
        setCount(target)
      }
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [isInView, target, duration])

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <span className="text-4xl sm:text-5xl font-extrabold text-[#F59E0B] tracking-tight font-[var(--font-montserrat)] tabular-nums">
        {count}
        {suffix}
      </span>
      <span className="mt-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-zinc-400">
        {label}
      </span>
    </div>
  )
}
