import React from 'react'
import Navbar from '../components/Navbar'
import FloatingBar from '../components/FloatingBar'
import '../styles/Donor.css'

function Donor() {
  return (
    <div className="donor-container">
      <nav className="navbar">
        <h2 className="logo">BloCharity</h2>
        <ul className="nav-links">
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Donations</a></li>
          <li><a href="#">Profile</a></li>
          <li><a href="#">Logout</a></li>
        </ul>
      </nav>

      <div className="donor-content">
        <h1>Welcome, Donor</h1>
        <p>Your contributions make a difference.</p>
      </div>

      <div className="floating-sidebar">
        <p className="sidebar-title">Live Chat / Updates</p>
        {/* Placeholder for live chat later */}
      </div>
    </div>
  )
}

export default Donor
