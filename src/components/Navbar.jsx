// src/components/Navbar.jsx
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Navbar.css'

export default function Navbar() {
  const navigate = useNavigate()
  const [showNotifications, setShowNotifications] = useState(false)

  return (
    <nav className="global-navbar">

      {/* Logo */}
      <h2 className="nav-logo" onClick={() => navigate('/')}>
        BloCharity
      </h2>

      {/* Links */}
      <ul className="nav-links">
        {/* <li>
          <span onClick={() => navigate('/')} className="nav-link">Home</span>
        </li> */}

        <li>
          <span onClick={() => navigate('/distributor')} className="nav-link">Dashboard</span>
        </li>

        <li>
          <span onClick={() => navigate('/distributor/campaigns')} className="nav-link">
            My Campaigns
          </span>
        </li>

        <li>
          <span onClick={() => navigate('/distributor/create')} className="nav-link">
            Create Campaign
          </span>
        </li>

        <li>
          <span onClick={() => navigate('/leaderboard')} className="nav-link">
            Leaderboard
          </span>
        </li>

        {/* NOTIFICATIONS ICON */}
        <li
          className="notification-icon"
          onClick={() => setShowNotifications(!showNotifications)}
        >
          🔔
        </li>

        {/* PROFILE */}
        <li>
          <span onClick={() => navigate('/profile')} className="nav-link profile-link">
            Profile
          </span>
        </li>
      </ul>

      {/* NOTIFICATION PANEL */}
      {/* {showNotifications && (
        <div className="notification-panel">
          <h3>Notifications</h3>
          <ul>
            <li>📌 Campaign #23 requires verification</li>
            <li>🎉 Your campaign reached 80% funding!</li>
            <li>⏳ 2 donations pending approval</li>
          </ul>
        </div>
      )} */}
    </nav>
  )
}
