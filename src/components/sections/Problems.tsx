'use client'

import { motion } from 'framer-motion'
import { Clock, MessageSquare, Search, BarChart2 } from 'lucide-react'
import { PROBLEMS } from '@/lib/constants'
import GradientCard from '@/components/ui/GradientCard'
import SectionHeading from '@/components/ui/SectionHeading'

const iconMap: Record<string, React.ReactNode> = {
  Clock: <Clock size={28} className="text-electric-light" />,
  MessageSquare: <MessageSquare size={28} className="text-electric-light" />,
  Search: <Search size={28} className="text-electric-light" />,
  BarChart2: <BarChart2 size={28} className="text-electric-light" />,
}

export default function Problems() {
  return (
    <section id="problems" className="section-padding bg-navy-deep">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Проблемы"
          title="Знакомые боли бизнеса"
          subtitle="Каждая из этих проблем стоит вам денег и времени. AI решает их системно."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROBLEMS.map((problem, i) => (
            <motion.div
              key={problem.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <GradientCard className="h-full">
                <div className="w-12 h-12 rounded-xl bg-electric/10 border border-electric/20 flex items-center justify-center mb-4">
                  {iconMap[problem.icon]}
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{problem.title}</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">{problem.description}</p>
              </GradientCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
