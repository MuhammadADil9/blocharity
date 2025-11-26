import React from 'react'

export default function CampaignCard({ campaign, onClick }) {
  const isActive = campaign.status === 'active'
  return (
    <div
      className={`campaign-card ${isActive ? 'active' : 'completed'}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={() => {}}
    >
      <div className="card-top">
        <h3>{campaign.title}</h3>
        <span className="tag">{isActive ? 'Active' : 'Completed'}</span>
      </div>

      <p className="card-desc">{campaign.description}</p>

      <div className="card-meta">
        <span>{campaign.location}</span>
        <span>•</span>
        <span>{campaign.categories ? campaign.categories.slice(0,2).join(', ') : '—'}</span>
      </div>

      <div className="card-footer">
        <div className="progress">
          <div className="progress-bar" style={{ width: isActive ? '40%' : '100%' }}></div>
        </div>
        <div className="milestone">Goal: ${campaign.milestone || 0}</div>
      </div>
    </div>
  )
}
