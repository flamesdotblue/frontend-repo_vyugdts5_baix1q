import React from 'react'
import { User } from 'lucide-react'

export default function Navbar({ currentUser }) {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-zinc-900 text-white grid place-items-center font-bold">AI</div>
          <span className="font-semibold">Robo Advisory</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-zinc-700">
          <User className="h-5 w-5" />
          {currentUser ? (
            <span>{currentUser.name} · {currentUser.risk_tolerance}</span>
          ) : (
            <span>Guest</span>
          )}
        </div>
      </div>
    </header>
  )
}
