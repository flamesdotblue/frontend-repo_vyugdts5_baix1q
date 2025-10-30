import React, { useState } from 'react'

const riskOptions = [
  { value: 'conservative', label: 'Conservative' },
  { value: 'balanced', label: 'Balanced' },
  { value: 'aggressive', label: 'Aggressive' },
]

export default function SignInCard({ onSignedIn }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [risk, setRisk] = useState('balanced')
  const [goals, setGoals] = useState('Retirement, Emergency fund')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`${backend}/users/signin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          risk_tolerance: risk,
          goals: goals.split(',').map(g => g.trim()).filter(Boolean),
        }),
      })
      if (!res.ok) throw new Error('Sign in failed')
      const data = await res.json()
      onSignedIn(data.user)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900">Sign in to personalize your advice</h2>
          <p className="mt-3 text-zinc-600">We’ll tailor recommendations to your goals and risk tolerance.</p>
        </div>
        <form onSubmit={handleSubmit} className="bg-white border rounded-xl p-6 shadow-sm">
          <div className="grid grid-cols-1 gap-4">
            <label className="grid gap-1">
              <span className="text-sm text-zinc-700">Name</span>
              <input className="h-10 rounded-md border px-3 focus:outline-none focus:ring-2 ring-zinc-900" value={name} onChange={e=>setName(e.target.value)} required />
            </label>
            <label className="grid gap-1">
              <span className="text-sm text-zinc-700">Email</span>
              <input type="email" className="h-10 rounded-md border px-3 focus:outline-none focus:ring-2 ring-zinc-900" value={email} onChange={e=>setEmail(e.target.value)} required />
            </label>
            <label className="grid gap-1">
              <span className="text-sm text-zinc-700">Risk tolerance</span>
              <select className="h-10 rounded-md border px-3 focus:outline-none focus:ring-2 ring-zinc-900" value={risk} onChange={e=>setRisk(e.target.value)}>
                {riskOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
              </select>
            </label>
            <label className="grid gap-1">
              <span className="text-sm text-zinc-700">Goals (comma separated)</span>
              <input className="h-10 rounded-md border px-3 focus:outline-none focus:ring-2 ring-zinc-900" value={goals} onChange={e=>setGoals(e.target.value)} />
            </label>
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <button disabled={loading} className="mt-2 h-11 rounded-md bg-zinc-900 text-white font-medium hover:bg-zinc-800 disabled:opacity-50">
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
