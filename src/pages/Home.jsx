import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Home.css'

function Home() {
  const navigate = useNavigate()

  return (
    <div className="home-container">
      <div className="overlay"></div>
      <div className="content">
        <h1 className="title">BloCharity</h1>
        <p className="subtitle">Decentralized Charity Application</p>
        <div className="button-group">
          <button className="role-button donor" onClick={() => navigate('/donor')}>
            Donor
          </button>
          <button className="role-button distributor" onClick={() => navigate('/distributor')}>
            Distributor
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
