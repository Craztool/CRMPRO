export interface NavLink {
  label: string
  href: string
}

export interface ProblemCard {
  id: string
  icon: string
  title: string
  description: string
}

export interface ServiceCard {
  id: string
  icon: string
  title: string
  description: string
  features: string[]
  accentColor: string
}

export interface CaseMetric {
  label: string
  before?: string
  after?: string
  value?: string
}

export interface CaseStudy {
  id: string
  title: string
  industry: string
  metric1: CaseMetric
  metric2: CaseMetric
  metric3: CaseMetric
  badgeColor: string
}

export interface TechItem {
  name: string
  icon: string
}

export interface NeuralNode {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  pulsePhase: number
}

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  children: React.ReactNode
  className?: string
  icon?: React.ReactNode
  type?: 'button' | 'submit'
}
