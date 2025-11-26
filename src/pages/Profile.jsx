import React from "react";
import Navbar from "../components/Navbar";
import FloatingBar from "../components/FloatingBar";
import "../styles/Profile.css";

function Profile() {
  return (
    <div className="profile-page">
      <Navbar />
      <FloatingBar />

      <div className="profile-wrapper">
        <div className="profile-card">
          <h2>Your Profile</h2>
          <p className="subtitle">Manage your account & preferences</p>

          <div className="profile-options">
            <button className="profile-btn">📊 Analytics</button>
            <button className="profile-btn">⚙️ Settings</button>
            <button className="profile-btn logout">🚪 Log Out</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
