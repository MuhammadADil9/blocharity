import React from 'react'
import Navbar from '../components/Navbar'
import FloatingBar from '../components/FloatingBar'
import '../styles/Distributor.css'

function Distributor() {
  return (
    <div className="distributor-container">
      <nav className="navbar">
        <h2 className="logo">BloCharity</h2>
        <ul className="nav-links">
          <li><a href="#">Overview</a></li>
          <li><a href="#">Distributions</a></li>
          <li><a href="#">Reports</a></li>
          <li><a href="#">Logout</a></li>
        </ul>
      </nav>

      <div className="distributor-content">
        <h1>Welcome, Distributor</h1>
        <p>Manage and verify decentralized donations here.</p>
      </div>

      <div className="floating-sidebar">
        <p className="sidebar-title">Activity Feed</p>
        {/* Placeholder for updates later */}
      </div>
    </div>
  )
}

export default Distributor
