"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { Timeline } from "@/components/timeline"

export function EducationSection() {
  return (
    <section id="education" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-900/10 via-black to-black z-0"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <h2 className="text-4xl font-bold mb-16 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-purple-600">
              Education
            </span>
          </h2>
        </ScrollReveal>

        <div className="mt-12">
          <Timeline />
        </div>
      </div>
    </section>
  )
}
