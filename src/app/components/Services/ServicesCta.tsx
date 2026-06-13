"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";

export default function ServicesCta() {
  const ctaActions = [
    {
      title: "Request a Structural Audit",
      desc: "Visual inspections, crack mapping, and load stability certifications matching corporation bylaws.",
      link: "/contact?type=audit",
      ctaText: "Request Audit",
      icon: "solar:buildings-linear",
    },
    {
      title: "Schedule a Site Visit",
      desc: "Arrange for senior engineers to audit concrete pouring, formwork layout, or reinforcement covers on site.",
      link: "/contact?type=visit",
      ctaText: "Schedule Visit",
      icon: "solar:calendar-date-linear",
    },
    {
      title: "Speak to an Engineer",
      desc: "Consult on concrete mix designs, restoration schemes, carbon wrapping, or material laboratory testing.",
      link: "/contact?type=consult",
      ctaText: "Consult Now",
      icon: "solar:user-speak-linear",
    },
  ];

  return (
    <section className="bg-darkmode dark:bg-darklight py-20 transition-colors duration-300 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" aria-hidden="true" />

      <div className="container mx-auto max-w-7xl 2xl:max-w-[1400px] 3xl:max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-blue font-bold text-sm uppercase tracking-wider mb-3">
            Engage Our Expertise
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Ready to Vet Your Next Project?
          </h2>
          <p className="text-base text-slate-200 font-medium mt-4 leading-relaxed">
            Ensure safety, compliance, and material integrity. Contact our senior advisory panel to discuss your structural requirements today.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {ctaActions.map((action) => (
            <div key={action.title} className="col-span-12 md:col-span-6 lg:col-span-4 flex">
              <div className="w-full bg-white/5 border border-white/10 dark:bg-white/5 dark:border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between group">
                <div className="flex flex-col gap-5">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform duration-300" aria-hidden="true">
                    <Icon icon={action.icon} width="24" height="24" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-bold text-white leading-snug">
                      {action.title}
                    </h3>
                    <p className="text-sm text-slate-300 font-medium leading-relaxed">
                      {action.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <Link
                    href={action.link}
                    className="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-blue transition-colors duration-200"
                  >
                    {action.ctaText}
                    <Icon icon="solar:alt-arrow-right-linear" width="16" height="16" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
