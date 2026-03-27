'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, MessageCircle } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'

export default function CtaSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="section-padding bg-navy-deep">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest uppercase text-electric-light bg-electric/10 border border-electric/30 rounded-full">
              Контакт
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Готовы автоматизировать
              <br />
              <span className="text-gradient-electric">ваш бизнес?</span>
            </h2>
            <p className="text-[#94A3B8] text-lg mb-8 leading-relaxed">
              Расскажите о задаче — бесплатно разберём, как AI может помочь, и предложим конкретное решение.
            </p>
            <Button
              href="https://t.me/agentia_ai"
              variant="secondary"
              size="lg"
              icon={<MessageCircle size={18} />}
            >
              Написать в Telegram
            </Button>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl p-8 glass-card"
          >
            {sent ? (
              <div className="text-center py-8">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-white font-bold text-xl mb-2">Заявка отправлена!</h3>
                <p className="text-[#94A3B8]">Свяжемся с вами в течение 24 часов.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm text-[#94A3B8] mb-1.5 font-medium">Имя</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Иван Иванов"
                    className="w-full px-4 py-3 rounded-xl bg-navy-light border border-electric/20 text-white placeholder-[#94A3B8]/50 focus:outline-none focus:border-electric/60 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-[#94A3B8] mb-1.5 font-medium">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="ivan@company.ru"
                    className="w-full px-4 py-3 rounded-xl bg-navy-light border border-electric/20 text-white placeholder-[#94A3B8]/50 focus:outline-none focus:border-electric/60 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-[#94A3B8] mb-1.5 font-medium">Опишите задачу</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Хотим автоматизировать обработку входящих заявок..."
                    className="w-full px-4 py-3 rounded-xl bg-navy-light border border-electric/20 text-white placeholder-[#94A3B8]/50 focus:outline-none focus:border-electric/60 transition-colors resize-none"
                  />
                </div>
                <Button type="submit" variant="primary" size="lg" className="w-full justify-center" icon={<Send size={16} />}>
                  Отправить заявку
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
