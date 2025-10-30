import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero3D() {
  return (
    <section className="relative w-full h-[520px] md:h-[640px] overflow-hidden bg-gradient-to-b from-zinc-50 to-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/M4yE7MTeWshitQbr/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-white" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col justify-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-zinc-900">
          AI Robo Advisory
        </h1>
        <p className="mt-4 max-w-2xl text-zinc-700 text-lg md:text-xl">
          Personalized, AI-driven portfolio insights and risk-aligned recommendations with an interactive chat assistant.
        </p>
      </div>
    </section>
  )
}
