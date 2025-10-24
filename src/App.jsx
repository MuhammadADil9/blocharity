import React from 'react'
import './App.css'

function App() {
  return (
    <div className="home-container">
      <div className="overlay"></div>
      <div className="content">
        <h1 className="title">BloCharity</h1>
        <p className="subtitle">Empowering transparent charity with blockchain</p>
        <div className="button-group">
          <button className="role-button donor">Donor</button>
          <button className="role-button distributor">Distributor</button>
        </div>
      </div>
    </div>
  )
}

export default App
