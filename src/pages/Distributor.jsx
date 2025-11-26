import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import '../styles/Distributor.css'

function Distributor() {
  const navigate = useNavigate()
  const [showNotifications, setShowNotifications] = useState(false)

  return (
   
    <div className="distributor-container">
       <Navbar />
     

      {/* MAIN CONTENT */}
      <div className="distributor-content">
        <h1 className="page-title">Distributor Dashboard</h1>
        <p className="page-subtitle">Manage and verify decentralized donations</p>

        {/* STATS */}
        <div className="stats-grid">
          <div className="stat-card">
            <h2>18</h2>
            <p>Active Campaigns</p>
          </div>
          <div className="stat-card">
            <h2>42</h2>
            <p>Completed Distributions</p>
          </div>
          <div className="stat-card">
            <h2>7</h2>
            <p>Pending Verifications</p>
          </div>
          <div className="stat-card">
            <h2>2.1M PKR</h2>
            <p>Total Donations Managed</p>
          </div>
        </div>

        {/* ACTIVITY FEED */}
        <div className="activity-section">
          <h2>Recent Activity</h2>

          <ul className="activity-list">
            <li>🎉 Donation of 500 PKR verified successfully</li>
            <li>🆕 New campaign "Winter Relief Fund" created</li>
            <li>⏳ Verification needed for donation in Campaign #21</li>
            <li>📦 Distribution completed for Flood Victims Fund</li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Distributor
