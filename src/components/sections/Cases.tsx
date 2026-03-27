'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { CASE_STUDIES } from '@/lib/constants'
import SectionHeading from '@/components/ui/SectionHeading'

export default function Cases() {
  return (
    <section id="cases" className="section-padding bg-navy-deep">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Кейсы"
          title="Реальные результаты"
          subtitle="Три внедрения с измеримыми метриками — до и после."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CASE_STUDIES.map((c, i) => (
            <motion.div
              key={c.id}
              className="relative rounded-2xl p-6 glass-card overflow-hidden flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
            >
              {/* Top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{ background: `linear-gradient(90deg, ${c.badgeColor}, transparent)` }}
              />

              {/* Industry badge */}
              <span
                className="inline-block px-3 py-1 text-xs font-bold rounded-full mb-4 w-fit"
                style={{
                  background: `${c.badgeColor}20`,
                  color: c.badgeColor,
                  border: `1px solid ${c.badgeColor}40`,
                }}
              >
                {c.industry}
              </span>

              <h3 className="text-white font-bold text-xl mb-5">{c.title}</h3>

              {/* Metrics */}
              <div className="space-y-4 flex-1">
                {[c.metric1, c.metric2, c.metric3].map((m) => (
                  <div key={m.label} className="flex items-center justify-between">
                    <span className="text-[#94A3B8] text-xs">{m.label}</span>
                    <div className="flex items-center gap-2 text-xs font-semibold">
                      {m.before && m.after ? (
                        <>
                          <span className="text-red-400/70 line-through">{m.before}</span>
                          <ArrowRight size={10} className="text-[#94A3B8]" />
                          <span className="text-electric-light">{m.after}</span>
                        </>
                      ) : (
                        <span
                          className="text-lg font-bold"
                          style={{ color: c.badgeColor }}
                        >
                          {m.value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
