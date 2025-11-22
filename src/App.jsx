import React from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'

import Donor from './pages/Donor'
import Distributor from './pages/Distributor'
import Signup from './pages/Signup'
import Login from './pages/Login'
import RoleSelection from './pages/RoleSelection'
// HOME PAGE
function Home() {
  const navigate = useNavigate()

  return (
    <div className="home-container">
      <div className="overlay"></div>
      <div className="content">
        <h1 className="title">BloCharity</h1>
        <p className="subtitle">
          A decentralized charity platform revolutionizing trust, transparency, and global giving.
        </p>

        <button className="get-started-btn" onClick={() => navigate('/signup')}>
          Get Started
        </button>
      </div>
    </div>
  )
}

// MAIN ROUTER
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/login"
          element={
            <Login />
          }
        />
        <Route path="/role-selection" element={<RoleSelection />} />
        <Route path="/donor" element={<Donor />} />
        <Route path="/distributor" element={<Distributor />} />

        
      </Routes>
    </Router>
  )
}

export default App
