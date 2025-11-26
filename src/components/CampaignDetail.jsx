import React, { useState } from 'react'
import '../styles/Campaigns.css'

export default function CampaignDetail({ campaign, onClose }) {
  const [step, setStep] = useState(1) // Step 1 to 5

  const steps = [
    "Funding",
    "Milestone",
    "Withdrawal",
    "Vote",
    "Result"
  ]

  const handleNext = () => {
    if (step < 5) setStep(step + 1)
  }

  return (
    <div className="campaign-detail-backdrop" onClick={onClose}>
      <div
        className="campaign-detail-card"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>✕</button>

        <h2>{campaign.title}</h2>
        <p className="cd-desc">{campaign.description}</p>

        <div className="cd-meta">
          <p><strong>Location:</strong> {campaign.location}</p>
          <p><strong>Categories:</strong> {campaign.categories?.join(', ')}</p>
          <p><strong>Milestone:</strong> ${campaign.milestone}</p>
          <p><strong>Status:</strong> {campaign.status}</p>
          <p><strong>Created:</strong> {new Date(campaign.createdAt).toLocaleString()}</p>
        </div>

        {/* -------------------- STEP WIZARD -------------------- */}
        <h3 className="wizard-title">Campaign Progress</h3>

        <div className="wizard-container">
          {steps.map((label, index) => {
            const current = index + 1
            return (
              <div
                key={index}
                className={`wizard-step ${current <= step ? 'active-step' : ''}`}
              >
                <div className="circle">{current}</div>
                <span>{label}</span>
              </div>
            )
          })}
        </div>

        {/* Next Step Button */}
        <div className="cd-actions">
          {step < 5 ? (
            <button className="primary" onClick={handleNext}>
              Next Step →
            </button>
          ) : (
            <button className="primary" disabled>
              All Steps Completed ✔
            </button>
          )}

          <button className="ghost" onClick={onClose}>Close</button>
        </div>

      </div>
    </div>
  )
}
