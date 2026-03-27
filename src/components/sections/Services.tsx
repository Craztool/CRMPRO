'use client'

import { motion } from 'framer-motion'
import { Bot, Database, Zap, TrendingUp, Check } from 'lucide-react'
import { SERVICES } from '@/lib/constants'
import SectionHeading from '@/components/ui/SectionHeading'

const iconMap: Record<string, React.ReactNode> = {
  Bot: <Bot size={32} />,
  Database: <Database size={32} />,
  Zap: <Zap size={32} />,
  TrendingUp: <TrendingUp size={32} />,
}

export default function Services() {
  return (
    <section id="services" className="section-padding bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Услуги"
          title="Что мы строим"
          subtitle="Четыре продукта, которые закрывают ключевые точки автоматизации бизнеса."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              className="relative rounded-2xl p-8 glass-card overflow-hidden group cursor-default"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, boxShadow: `0 0 40px ${service.accentColor}30` }}
            >
              {/* Accent top border */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{ background: `linear-gradient(90deg, ${service.accentColor}, transparent)` }}
              />

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                style={{
                  background: `${service.accentColor}18`,
                  border: `1px solid ${service.accentColor}40`,
                  color: service.accentColor,
                }}
              >
                {iconMap[service.icon]}
              </div>

              <h3 className="text-white font-bold text-xl mb-2">{service.title}</h3>
              <p className="text-[#94A3B8] text-sm mb-5 leading-relaxed">{service.description}</p>

              <ul className="space-y-2">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-[#94A3B8]">
                    <Check size={14} style={{ color: service.accentColor, flexShrink: 0 }} />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
