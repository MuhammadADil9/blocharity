import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Signup.css' // Reuse Signup styles for consistent card and background

function RoleSelection() {
  const navigate = useNavigate()

  return (
    <div className="signup-container">
      <div className="overlay"></div>

      <div className="signup-card">
        <h1 className="signup-title">Choose Your Role</h1>
        <p className="signup-subtitle">
          Select whether you want to participate as a Donor or Distributor.
        </p>

        <div
          className="button-group"
          style={{
            marginTop: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
          }}
        >
          <button
            className="role-button donor"
            onClick={() => navigate('/donor')}
          >
            Donor
          </button>
          <button
            className="role-button distributor"
            onClick={() => navigate('/distributor')}
          >
            Distributor
          </button>
        </div>
      </div>
    </div>
  )
}

export default RoleSelection
