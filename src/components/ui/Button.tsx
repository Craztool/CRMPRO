'use client'

import { motion } from 'framer-motion'
import type { ButtonProps } from '@/types'

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  children,
  className = '',
  icon,
  type = 'button',
}: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 font-semibold rounded-xl transition-all duration-200 cursor-pointer'

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const variants = {
    primary:
      'bg-electric-gradient text-white shadow-electric hover:shadow-electric-lg hover:scale-105',
    secondary:
      'bg-navy-light text-white border border-electric-subtle hover:border-electric hover:shadow-electric',
    ghost:
      'bg-transparent text-electric-light border border-electric-light/40 hover:border-electric-light hover:bg-electric-light/10',
  }

  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`

  if (href) {
    return (
      <motion.a
        href={href}
        className={cls}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        {icon && <span>{icon}</span>}
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={cls}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {icon && <span>{icon}</span>}
      {children}
    </motion.button>
  )
}
