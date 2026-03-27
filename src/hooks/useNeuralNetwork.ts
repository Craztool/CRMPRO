import { useEffect, useRef } from 'react'
import type { NeuralNode } from '@/types'

const NODE_COUNT = 60
const MAX_DIST = 150

export function useNeuralNetwork(canvasRef: React.RefObject<HTMLCanvasElement | null>) {
  const animRef = useRef<number>(0)
  const nodesRef = useRef<NeuralNode[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const init = () => {
      nodesRef.current = Array.from({ length: NODE_COUNT }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 2 + 1.5,
        pulsePhase: Math.random() * Math.PI * 2,
      }))
    }

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      init()
    }

    resize()

    const observer = new ResizeObserver(resize)
    observer.observe(canvas)

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const nodes = nodesRef.current

      // Update positions
      nodes.forEach((n) => {
        n.x += n.vx
        n.y += n.vy
        n.pulsePhase += 0.02
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1
      })

      // Draw edges
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < MAX_DIST) {
            const opacity = (1 - dist / MAX_DIST) * 0.5
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = `rgba(43, 123, 232, ${opacity})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }

      // Draw nodes
      nodes.forEach((n) => {
        const pulse = Math.sin(n.pulsePhase) * 0.5 + 0.5
        const r = n.radius + pulse * 1.5
        const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, r * 3)
        grad.addColorStop(0, `rgba(91, 164, 245, ${0.9 + pulse * 0.1})`)
        grad.addColorStop(0.5, `rgba(43, 123, 232, ${0.4 + pulse * 0.2})`)
        grad.addColorStop(1, 'rgba(43, 123, 232, 0)')
        ctx.beginPath()
        ctx.arc(n.x, n.y, r * 3, 0, Math.PI * 2)
        ctx.fillStyle = grad
        ctx.fill()

        ctx.beginPath()
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(91, 164, 245, ${0.8 + pulse * 0.2})`
        ctx.fill()
      })

      animRef.current = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animRef.current)
      observer.disconnect()
    }
  }, [canvasRef])
}
