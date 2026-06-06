import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href: string
}

interface PageHeaderProps {
  title: string
  breadcrumb?: BreadcrumbItem[]
}

export default function PageHeader({ title, breadcrumb }: PageHeaderProps) {
  return (
    <section
      className="relative w-full bg-[#0F172A] overflow-hidden"
      aria-labelledby="page-header-title"
    >
      {/* Background pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        aria-hidden="true"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #F59E0B 0, #F59E0B 1px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px',
        }}
      />

      {/* Dark gradient overlay on top */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/80 via-[#0F172A]/60 to-[#0F172A]/90"
        aria-hidden="true"
      />

      {/* Gold bottom accent */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1 bg-[#F59E0B]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16 sm:pt-32 sm:pb-20">
        {/* Breadcrumb */}
        {breadcrumb && breadcrumb.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className="mb-4"
          >
            <ol className="flex items-center flex-wrap gap-1 text-sm" role="list">
              <li>
                <Link
                  href="/"
                  className="flex items-center gap-1 text-zinc-400 hover:text-[#F59E0B] transition-colors"
                  aria-label="Home"
                >
                  <Home size={14} aria-hidden="true" />
                  <span>Home</span>
                </Link>
              </li>
              {breadcrumb.map((crumb, index) => {
                const isLast = index === breadcrumb.length - 1
                return (
                  <li key={crumb.href} className="flex items-center gap-1">
                    <ChevronRight
                      size={14}
                      className="text-zinc-600"
                      aria-hidden="true"
                    />
                    {isLast ? (
                      <span
                        className="text-[#F59E0B] font-medium"
                        aria-current="page"
                      >
                        {crumb.label}
                      </span>
                    ) : (
                      <Link
                        href={crumb.href}
                        className="text-zinc-400 hover:text-[#F59E0B] transition-colors"
                      >
                        {crumb.label}
                      </Link>
                    )}
                  </li>
                )
              })}
            </ol>
          </nav>
        )}

        {/* Page title */}
        <h1
          id="page-header-title"
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-[var(--font-montserrat)]"
        >
          {title}
        </h1>

        {/* Gold underline accent */}
        <div
          className="mt-4 w-16 h-1 rounded-full bg-[#F59E0B]"
          aria-hidden="true"
        />
      </div>
    </section>
  )
}
