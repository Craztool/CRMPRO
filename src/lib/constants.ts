import type { NavLink, ProblemCard, ServiceCard, CaseStudy, TechItem } from '@/types'

export const NAV_LINKS: NavLink[] = [
  { label: 'Проблемы', href: '#problems' },
  { label: 'Услуги', href: '#services' },
  { label: 'Кейсы', href: '#cases' },
  { label: 'Технологии', href: '#tech' },
  { label: 'Контакт', href: '#contact' },
]

export const PROBLEMS: ProblemCard[] = [
  {
    id: 'p1',
    icon: 'Clock',
    title: 'Медленные ручные процессы',
    description: 'Ваша команда тратит часы на повторяющиеся задачи, которые ИИ выполнит за секунды.',
  },
  {
    id: 'p2',
    icon: 'MessageSquare',
    title: 'Пропущенные обращения клиентов',
    description: 'Долгий ответ стоит вам конверсий и доверия. Клиенты уходят к конкурентам.',
  },
  {
    id: 'p3',
    icon: 'Search',
    title: 'Знания теряются в документах',
    description: 'Критическая информация погребена в файлах — невозможно найти в нужный момент.',
  },
  {
    id: 'p4',
    icon: 'BarChart2',
    title: 'Слепая аналитика бизнеса',
    description: 'Нет видимости в реальном времени — решения принимаются на основе устаревших отчётов.',
  },
]

export const SERVICES: ServiceCard[] = [
  {
    id: 's1',
    icon: 'Bot',
    title: 'AI Агенты продаж',
    description: 'LLM-агенты, которые обрабатывают входящие обращения, квалифицируют лиды и бронируют встречи 24/7.',
    features: ['Мультиканально: Web, Telegram, WhatsApp', 'Интеграция с CRM', 'Эскалация на оператора'],
    accentColor: '#2B7BE8',
  },
  {
    id: 's2',
    icon: 'Database',
    title: 'RAG Базы знаний',
    description: 'Загрузите все документы — получайте мгновенные точные ответы из собственных данных.',
    features: ['PDF, DOCX, Notion, Confluence', 'Семантический поиск с цитатами', 'Контроль доступа'],
    accentColor: '#5BA4F5',
  },
  {
    id: 's3',
    icon: 'Zap',
    title: 'Автоматизация процессов',
    description: 'n8n-пайплайны, которые соединяют ваши инструменты и устраняют ручные передачи задач.',
    features: ['500+ интеграций', 'Обработка ошибок и повторы', 'Дашборды мониторинга'],
    accentColor: '#2B7BE8',
  },
  {
    id: 's4',
    icon: 'TrendingUp',
    title: 'Аналитические агенты',
    description: 'Автоматические отчёты и обнаружение аномалий по всем источникам данных.',
    features: ['Дашборды в реальном времени', 'Алерты в Slack/Telegram', 'Запросы на естественном языке'],
    accentColor: '#5BA4F5',
  },
]

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'c1',
    title: 'AI Агент продаж',
    industry: 'E-commerce',
    metric1: { label: 'Время ответа', before: '4 часа', after: '3 сек' },
    metric2: { label: 'Запросов в день', before: '50', after: '500+' },
    metric3: { label: 'Рост конверсии', value: '+34%' },
    badgeColor: '#2B7BE8',
  },
  {
    id: 'c2',
    title: 'RAG База знаний',
    industry: 'Юридическая фирма',
    metric1: { label: 'Время поиска', before: '2 часа', after: '2 мин' },
    metric2: { label: 'Документов в базе', before: '0', after: '2 000+' },
    metric3: { label: 'Точность ответов', value: '94%' },
    badgeColor: '#5BA4F5',
  },
  {
    id: 'c3',
    title: 'Аналитический агент',
    industry: 'Сеть кофеен (12 точек)',
    metric1: { label: 'Формирование отчёта', before: '6 часов', after: '0 часов' },
    metric2: { label: 'Охват локаций', before: '1', after: '12' },
    metric3: { label: 'Обнаружение аномалий', value: 'Real-time' },
    badgeColor: '#2B7BE8',
  },
]

export const TECH_ITEMS: TechItem[] = [
  { name: 'LangChain', icon: '🦜' },
  { name: 'OpenAI', icon: '⚡' },
  { name: 'Python', icon: '🐍' },
  { name: 'n8n', icon: '⚙️' },
  { name: 'Pinecone', icon: '🌲' },
  { name: 'FastAPI', icon: '🚀' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'Docker', icon: '🐳' },
  { name: 'LangChain', icon: '🦜' },
  { name: 'OpenAI', icon: '⚡' },
  { name: 'Python', icon: '🐍' },
  { name: 'n8n', icon: '⚙️' },
  { name: 'Pinecone', icon: '🌲' },
  { name: 'FastAPI', icon: '🚀' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'Docker', icon: '🐳' },
]
