import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Signup.css'

function Signup() {
  const navigate = useNavigate()

  const handleSignup = () => {
    // Dummy signup: navigate to RoleSelection
    navigate('/role-selection')
  }

  return (
    <div className="signup-container">
      <div className="overlay"></div>

      <div className="signup-card">
        <h1 className="signup-title">Create Your Account</h1>
        <p className="signup-subtitle">
          Join BloCharity — a decentralized, transparent charity platform.
        </p>

        <button className="auth-btn google" onClick={handleSignup}>
          <img src="/google.svg" alt="Google" className="auth-icon" />
          Sign up with Google
        </button>

        <button className="auth-btn facebook" onClick={handleSignup}>
          <img src="/facebook.svg" alt="Facebook" className="auth-icon" />
          Sign up with Facebook
        </button>

        <button className="auth-btn metamask" onClick={handleSignup}>
          <img src="/metamask.svg" alt="Metamask" className="auth-icon" />
          Sign up with MetaMask
        </button>

        <p className="login-text">
          Already have an account?{' '}
          <span onClick={() => navigate('/login')} className="login-link">
            Log In
          </span>
        </p>
      </div>
    </div>
  )
}

export default Signup
