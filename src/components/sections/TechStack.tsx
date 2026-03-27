'use client'

import SectionHeading from '@/components/ui/SectionHeading'
import { TECH_ITEMS } from '@/lib/constants'

export default function TechStack() {
  return (
    <section id="tech" className="section-padding bg-navy overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Технологии"
          title="Наш стек"
          subtitle="Проверенные инструменты для надёжных production-систем."
        />
      </div>

      {/* Marquee */}
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {TECH_ITEMS.map((item, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-3 mx-4 px-6 py-3 rounded-xl glass-card border-electric-subtle flex-shrink-0"
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="text-white font-semibold text-sm">{item.name}</span>
            </div>
          ))}
        </div>

        {/* Edge fades */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-navy to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-navy to-transparent pointer-events-none" />
      </div>
    </section>
  )
}
