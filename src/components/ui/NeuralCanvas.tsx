'use client'

import { useRef } from 'react'
import { useNeuralNetwork } from '@/hooks/useNeuralNetwork'

export default function NeuralCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useNeuralNetwork(canvasRef)

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  )
}
