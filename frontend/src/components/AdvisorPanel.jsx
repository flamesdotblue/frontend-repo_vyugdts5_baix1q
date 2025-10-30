import React, { useState } from 'react'

export default function AdvisorPanel({ user }) {
  const [analysis, setAnalysis] = useState(null)
  const [chatInput, setChatInput] = useState('How should I rebalance for a 5-year goal?')
  const [chatReply, setChatReply] = useState('')
  const [loadingAnalysis, setLoadingAnalysis] = useState(false)
  const [loadingChat, setLoadingChat] = useState(false)
  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  async function runAnalysis() {
    setLoadingAnalysis(true)
    try {
      const res = await fetch(`${backend}/advice/analyze`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_id: user._id })
      })
      if (!res.ok) throw new Error('Analysis failed')
      const data = await res.json()
      setAnalysis(data)
    } catch (e) {
      alert(e.message)
    } finally {
      setLoadingAnalysis(false)
    }
  }

  async function sendChat() {
    setLoadingChat(true)
    try {
      const res = await fetch(`${backend}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_id: user._id, message: chatInput })
      })
      if (!res.ok) throw new Error('Chat failed')
      const data = await res.json()
      setChatReply(data.reply)
    } catch (e) {
      alert(e.message)
    } finally {
      setLoadingChat(false)
    }
  }

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-8">
        <div className="bg-white border rounded-xl p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-zinc-900">Portfolio analysis</h3>
            <button onClick={runAnalysis} className="h-9 px-3 rounded-md bg-zinc-900 text-white text-sm hover:bg-zinc-800">
              {loadingAnalysis ? 'Analyzing...' : 'Analyze'}
            </button>
          </div>
          {analysis ? (
            <div className="mt-4 space-y-4">
              <div>
                <h4 className="font-medium text-zinc-800">Summary</h4>
                <p className="text-sm text-zinc-600">Estimated value: ${analysis.summary.estimated_value.toLocaleString()}</p>
                <p className="text-sm text-zinc-600">Holdings: {analysis.summary.holdings_count}</p>
              </div>
              <div>
                <h4 className="font-medium text-zinc-800">Sector allocation</h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {Object.entries(analysis.summary.sector_allocation).map(([k,v]) => (
                    <span key={k} className="px-2 py-1 rounded-full bg-zinc-100 text-zinc-800 text-xs">{k}: {v}%</span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-medium text-zinc-800">Advisor’s note</h4>
                <pre className="mt-2 whitespace-pre-wrap text-sm text-zinc-700">{analysis.advice}</pre>
              </div>
            </div>
          ) : (
            <p className="mt-6 text-sm text-zinc-600">Save your portfolio first, then run analysis for tailored recommendations.</p>
          )}
        </div>
        <div className="bg-white border rounded-xl p-6">
          <h3 className="text-lg font-semibold text-zinc-900">Chat with the AI</h3>
          <div className="mt-3 flex items-center gap-2">
            <input value={chatInput} onChange={e=>setChatInput(e.target.value)} className="flex-1 h-10 rounded-md border px-3" />
            <button onClick={sendChat} className="h-10 px-4 rounded-md bg-zinc-900 text-white text-sm hover:bg-zinc-800">
              {loadingChat ? 'Sending...' : 'Ask'}
            </button>
          </div>
          {chatReply && (
            <div className="mt-4 p-3 rounded-lg bg-zinc-50 border text-sm text-zinc-700 whitespace-pre-wrap">{chatReply}</div>
          )}
          <p className="mt-4 text-xs text-zinc-500">AI may produce imperfect output. This is educational information, not financial advice.</p>
        </div>
      </div>
    </section>
  )
}
