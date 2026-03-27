'use client'

import { motion } from 'framer-motion'

interface GradientCardProps {
  children: React.ReactNode
  className?: string
  glowColor?: string
  hover?: boolean
}

export default function GradientCard({
  children,
  className = '',
  glowColor = '#2B7BE8',
  hover = true,
}: GradientCardProps) {
  return (
    <motion.div
      className={`relative rounded-2xl p-6 glass-card overflow-hidden ${className}`}
      style={{
        borderTop: `2px solid ${glowColor}40`,
      }}
      whileHover={
        hover
          ? {
              y: -8,
              boxShadow: `0 0 32px ${glowColor}40`,
            }
          : undefined
      }
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* subtle corner glow */}
      <div
        className="absolute top-0 left-0 w-32 h-32 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: glowColor }}
      />
      {children}
    </motion.div>
  )
}
