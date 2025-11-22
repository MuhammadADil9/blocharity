import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Login.css'

function Login() {
  const navigate = useNavigate()

  return (
    <div className="login-container">
      <div className="overlay"></div>

      <div className="login-card">

        <h1 className="login-title">Welcome Back</h1>
        <p className="login-subtitle">
          Log in to your BloCharity account and continue making an impact.
        </p>

        {/* Email Input */}
        <input
          type="email"
          placeholder="Email"
          className="login-input"
        />

        {/* Password Input */}
        <input
          type="password"
          placeholder="Password"
          className="login-input"
        />

        {/* Login Button */}
        <button className="login-btn">
          Log In
        </button>

        {/* Forgot Password */}
        <p
          className="forgot-password"
          onClick={() => alert('Forgot password clicked!')}
        >
          Forgot Password?
        </p>

        {/* Social Login Buttons */}
        <button className="auth-btn google">
          <img src="/google.svg" alt="Google" className="auth-icon" />
          Log in with Google
        </button>

        <button className="auth-btn facebook">
          <img src="/facebook.svg" alt="Facebook" className="auth-icon" />
          Log in with Facebook
        </button>

        <button className="auth-btn metamask">
          <img src="/metamask.svg" alt="Metamask" className="auth-icon" />
          Log in with MetaMask
        </button>

        {/* Signup Redirect */}
        <p className="signup-link">
          Don't have an account?{' '}
          <span onClick={() => navigate('/signup')} style={{ cursor: 'pointer' }}>
            Sign Up
          </span>
        </p>

      </div>
    </div>
  )
}

export default Login
