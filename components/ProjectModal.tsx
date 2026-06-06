'use client'

import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Calendar, User, Tag } from 'lucide-react'
import Image from 'next/image'

export interface Project {
  id: string
  title: string
  category: 'structural-audit' | 'qaqc-tpqm' | 'restoration'
  imageSrc: string
  imageAlt: string
  description?: string
  client?: string
  year?: number
}

export interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [mounted, setMounted] = useState(false)

  // Block scrolling when open
  useEffect(() => {
    setMounted(true)
    if (project) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [project])

  // Escape key handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  if (!mounted) return null

  const categoryLabels = {
    'structural-audit': 'Structural Audit',
    'qaqc-tpqm': 'QA/QC & TPQM',
    'restoration': 'Restoration & Rehabilitation',
  }

  const humanReadableCategory = project ? (categoryLabels[project.category] || project.category) : ''

  return createPortal(
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col md:flex-row max-h-[90vh] md:max-h-[85vh]"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-[#0F172A]/85 text-white hover:bg-[#F59E0B] hover:text-[#0F172A] transition-colors shadow-md focus:outline-none"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {/* Left Side: Image */}
            <div className="relative w-full md:w-1/2 h-64 sm:h-80 md:h-auto min-h-[250px] bg-zinc-900 shrink-0">
              <Image
                src={project.imageSrc}
                alt={project.imageAlt}
                fill
                sizes="(max-w-768px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>

            {/* Right Side: Details */}
            <div className="flex-1 p-6 sm:p-8 overflow-y-auto flex flex-col justify-between">
              <div>
                {/* Category Badge */}
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F59E0B] mb-4">
                  <Tag size={14} className="shrink-0" />
                  <span>{humanReadableCategory}</span>
                </div>

                {/* Title */}
                <h2
                  id="modal-title"
                  className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] font-[var(--font-montserrat)] tracking-tight leading-tight"
                >
                  {project.title}
                </h2>

                {/* Metadata block (Client / Year) */}
                <div className="mt-4 flex flex-wrap gap-4 text-xs font-medium text-zinc-550 border-y border-zinc-100 py-3">
                  {project.client && (
                    <div className="flex items-center gap-1.5">
                      <User size={14} className="text-[#F59E0B]" />
                      <span><strong>Client:</strong> {project.client}</span>
                    </div>
                  )}
                  {project.year && (
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-[#F59E0B]" />
                      <span><strong>Year:</strong> {project.year}</span>
                    </div>
                  )}
                </div>

                {/* Description */}
                {project.description && (
                  <p className="mt-6 text-sm sm:text-base text-zinc-650 leading-relaxed font-sans">
                    {project.description}
                  </p>
                )}
              </div>

              {/* Bottom Close Call */}
              <div className="mt-8 pt-6 border-t border-zinc-150 flex justify-end">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-lg bg-[#0F172A] text-white hover:bg-slate-800 text-sm font-semibold transition-colors focus:outline-none"
                >
                  Close Details
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  )
}
