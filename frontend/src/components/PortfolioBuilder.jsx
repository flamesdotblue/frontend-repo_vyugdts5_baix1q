import React, { useState } from 'react'

export default function PortfolioBuilder({ user, onSaved }) {
  const [rows, setRows] = useState([
    { symbol: 'VTI', quantity: 10, avg_cost: 200, sector: 'Broad Market' },
  ])
  const [saving, setSaving] = useState(false)
  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  function addRow() {
    setRows(prev => [...prev, { symbol: '', quantity: 0, avg_cost: 0, sector: '' }])
  }
  function updateRow(i, key, val) {
    setRows(prev => prev.map((r, idx) => idx === i ? { ...r, [key]: val } : r))
  }
  function removeRow(i) {
    setRows(prev => prev.filter((_, idx) => idx !== i))
  }

  async function save() {
    setSaving(true)
    try {
      const res = await fetch(`${backend}/portfolio/save`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_id: user._id, holdings: rows })
      })
      if (!res.ok) throw new Error('Save failed')
      const data = await res.json()
      onSaved(data.portfolio)
    } catch (e) {
      alert(e.message)
    } finally {
      setSaving(false)
    }
  }

  return (
    <section className="py-12 bg-zinc-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-zinc-900">Build your portfolio</h3>
          <button onClick={addRow} className="text-sm text-zinc-700 hover:underline">+ Add holding</button>
        </div>
        <div className="mt-4 overflow-x-auto bg-white border rounded-xl">
          <table className="min-w-full text-sm">
            <thead className="bg-zinc-100 text-zinc-700">
              <tr>
                <th className="p-3 text-left">Symbol</th>
                <th className="p-3 text-left">Quantity</th>
                <th className="p-3 text-left">Avg Cost</th>
                <th className="p-3 text-left">Sector</th>
                <th className="p-3"></th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className="border-t">
                  <td className="p-3"><input value={r.symbol} onChange={e=>updateRow(i,'symbol',e.target.value)} className="h-9 w-28 border rounded px-2" /></td>
                  <td className="p-3"><input type="number" value={r.quantity} onChange={e=>updateRow(i,'quantity',parseFloat(e.target.value||0))} className="h-9 w-28 border rounded px-2" /></td>
                  <td className="p-3"><input type="number" value={r.avg_cost} onChange={e=>updateRow(i,'avg_cost',parseFloat(e.target.value||0))} className="h-9 w-28 border rounded px-2" /></td>
                  <td className="p-3"><input value={r.sector} onChange={e=>updateRow(i,'sector',e.target.value)} className="h-9 w-36 border rounded px-2" /></td>
                  <td className="p-3 text-right"><button onClick={()=>removeRow(i)} className="text-red-600 text-xs">Remove</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex justify-end">
          <button disabled={saving} onClick={save} className="h-10 px-4 rounded-md bg-zinc-900 text-white font-medium hover:bg-zinc-800 disabled:opacity-50">
            {saving ? 'Saving...' : 'Save portfolio'}
          </button>
        </div>
      </div>
    </section>
  )
}
