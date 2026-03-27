import { Zap } from 'lucide-react'
import { NAV_LINKS } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-navy-deep border-t border-electric/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Logo + tagline */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-electric-gradient flex items-center justify-center shadow-electric">
                <Zap size={16} className="text-white" />
              </div>
              <span className="text-xl font-bold text-white">Agentia</span>
            </a>
            <p className="text-[#94A3B8] text-sm leading-relaxed max-w-xs">
              Автоматизируем бизнес-процессы с помощью AI-агентов нового поколения.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Навигация
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#94A3B8] hover:text-electric-light text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Copyright */}
          <div className="md:text-right">
            <p className="text-[#94A3B8] text-sm">
              © 2025 Agentia. Все права защищены.
            </p>
            <p className="text-[#94A3B8]/50 text-xs mt-2">
              Сделано с ♥ и нейросетями
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
