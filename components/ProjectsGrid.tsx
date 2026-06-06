'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { projects, Project } from '../lib/data/projects'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import ScrollReveal from './ScrollReveal'

export interface ProjectsGridProps {
  limit?: number
  showViewAll?: boolean
}

export default function ProjectsGrid({
  limit,
  showViewAll = false,
}: ProjectsGridProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  
  const displayedProjects = limit ? projects.slice(0, limit) : projects

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white" aria-labelledby="projects-title">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-16">
          <h2
            id="projects-title"
            className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-[var(--font-montserrat)]"
          >
            Featured Projects
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-650 leading-relaxed font-sans">
            Explore our portfolio of structural assessments, quality audits, and building restorations in Chennai and beyond.
          </p>
          <div className="mt-4 w-12 h-1 rounded bg-[#F59E0B] mx-auto" />
        </ScrollReveal>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayedProjects.map((project, index) => (
            <ScrollReveal
              key={project.id}
              direction="up"
              delay={index * 0.05}
            >
              <ProjectCard
                image={project.imageSrc}
                alt={project.imageAlt}
                title={project.title}
                category={project.category}
                description={project.description}
                onClick={() => setSelectedProject(project)}
              />
            </ScrollReveal>
          ))}
        </div>

        {showViewAll && projects.length > displayedProjects.length && (
          <ScrollReveal direction="up" className="mt-12 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-[#0F172A] text-[#0F172A] text-sm font-bold hover:bg-[#0F172A] hover:text-white transition-all duration-300"
            >
              View All Projects
            </Link>
          </ScrollReveal>
        )}
      </div>

      {/* Portal modal overlay */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}
