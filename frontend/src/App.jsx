import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero3D from './components/Hero3D'
import SignInCard from './components/SignInCard'
import PortfolioBuilder from './components/PortfolioBuilder'
import AdvisorPanel from './components/AdvisorPanel'

function App() {
  const [user, setUser] = useState(null)
  const [portfolioSaved, setPortfolioSaved] = useState(null)

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Navbar currentUser={user} />
      <Hero3D />
      <SignInCard onSignedIn={setUser} />
      {user && <PortfolioBuilder user={user} onSaved={setPortfolioSaved} />}
      {user && <AdvisorPanel user={user} portfolio={portfolioSaved} />}
      <footer className="py-12">
        <div className="max-w-6xl mx-auto px-6 text-sm text-zinc-500">© {new Date().getFullYear()} AI Robo Advisory · For education only</div>
      </footer>
    </div>
  )
}

export default App
