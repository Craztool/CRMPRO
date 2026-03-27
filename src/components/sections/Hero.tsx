'use client'

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'
import Button from '@/components/ui/Button'

const NeuralCanvas = dynamic(() => import('@/components/ui/NeuralCanvas'), { ssr: false })

const words = ['Автоматизируем', 'Ускоряем', 'Масштабируем']

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient">
      <NeuralCanvas />

      {/* Radial glow overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-electric/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-electric/30 bg-electric/10 text-electric-light text-sm font-medium"
        >
          <span className="w-2 h-2 rounded-full bg-electric-light animate-glow-pulse" />
          AI-автоматизация для бизнеса
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="text-gradient-electric">{words[0]}</span>{' '}
          ваш бизнес
          <br />
          с помощью{' '}
          <span className="text-gradient-electric">AI-агентов</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-lg md:text-xl text-[#94A3B8] mb-10 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Создаём интеллектуальных агентов, RAG-системы и автоматизацию на LangChain + n8n,
          которые работают 24/7 и заменяют рутинный труд.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button href="#contact" variant="primary" size="lg" icon={<ArrowRight size={18} />}>
            Обсудить проект
          </Button>
          <Button href="#cases" variant="secondary" size="lg">
            Смотреть кейсы
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-16 grid grid-cols-3 gap-6 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {[
            { value: '500+', label: 'запросов/день' },
            { value: '94%', label: 'точность RAG' },
            { value: '×60', label: 'быстрее отчёты' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gradient-electric">{stat.value}</div>
              <div className="text-xs text-[#94A3B8] mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy to-transparent pointer-events-none" />
    </section>
  )
}
