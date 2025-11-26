import React from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

import Donor from './pages/Donor'
import Distributor from './pages/Distributor'
import Signup from './pages/Signup'
import Login from './pages/Login'
import RoleSelection from './pages/RoleSelection'
import CreateCampaign from './pages/CreateCampaign'
import MyCampaigns from './pages/MyCampaigns'
import Profile from './pages/Profile'
// HOME PAGE
function Home() {
  const navigate = useNavigate()

  return (
    <div className="home-container">
      <div className="overlay"></div>
      <div className="content">
        <h1 className="title">BloCharity</h1>
        <p className="subtitle">
          <strong>A decentralized charity platform revolutionizing trust, transparency, and global giving.</strong>
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
       {/* <Navbar />  */}
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
        <Route path="/distributor/create" element={<CreateCampaign />} />
        <Route path="/distributor/campaigns" element={<MyCampaigns />} />
        <Route path="/profile" element={<Profile />} />



        
      </Routes>
    </Router>
  )
}

export default App
