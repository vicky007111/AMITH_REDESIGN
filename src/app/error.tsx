"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="section-py bg-white">
      <div className="section-container text-center max-w-xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Something Went Wrong
        </h1>
        <p className="text-base text-slate-500 font-medium mb-8 leading-relaxed">
          We hit an unexpected error loading this page. Please try again, or
          head back to the homepage.
        </p>
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => reset()}
            className="rounded-xl px-6 py-3 text-sm font-bold bg-primary text-white hover:bg-primary/90 transition-colors cursor-pointer border-none"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="rounded-xl px-6 py-3 text-sm font-bold border border-slate-200 text-slate-700 hover:border-primary hover:text-primary transition-colors"
          >
            Go Home
          </Link>
        </div>
      </div>
    </section>
  );
}
