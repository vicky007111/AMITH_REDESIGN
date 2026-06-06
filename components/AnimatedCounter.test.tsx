import React from 'react'
import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import AnimatedCounter from './AnimatedCounter'

// Mock useInView from framer-motion
const mockUseInView = vi.fn()
vi.mock('framer-motion', async () => {
  const actual = await vi.importActual('framer-motion')
  return {
    ...actual,
    useInView: () => mockUseInView(),
  }
})

describe('AnimatedCounter', () => {
  beforeEach(() => {
    mockUseInView.mockReset()
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders label and stays at 0 when not in view', () => {
    mockUseInView.mockReturnValue(false)
    render(<AnimatedCounter target={50} suffix="+" label="Years" />)

    expect(screen.getByText('Years')).toBeInTheDocument()
    expect(screen.getByText('0+')).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(1000)
    })

    expect(screen.getByText('0+')).toBeInTheDocument()
  })

  it('starts animating when in view and reaches target with suffix', () => {
    mockUseInView.mockReturnValue(true)
    render(<AnimatedCounter target={100} suffix="%" duration={1000} label="Success" />)

    expect(screen.getByText('Success')).toBeInTheDocument()
    expect(screen.getByText('0%')).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(1100) // Advance past duration
    })

    expect(screen.getByText('100%')).toBeInTheDocument()
  })

  it('gracefully handles target value of 0', () => {
    mockUseInView.mockReturnValue(true)
    render(<AnimatedCounter target={0} suffix="x" duration={500} label="Multiplier" />)

    expect(screen.getByText('0x')).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(600)
    })

    expect(screen.getByText('0x')).toBeInTheDocument()
  })
})
