import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import FloatingBar from '../components/FloatingBar'
import CampaignCard from '../components/CampaignCard'
import CampaignDetail from '../components/CampaignDetail'
import '../styles/Campaigns.css'

function MyCampaigns() {
  const [campaigns, setCampaigns] = useState([])
  const [selected, setSelected] = useState(null) // selected campaign for detail modal

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('blocharity_campaigns') || '[]')
    // if none exist, populate with dummy completed items (so first is active when we create)
    if (!data.length) {
      const dummy = [
        { id: 1, title: 'Winter Relief Drive', description: 'Blankets & food', location: 'KPK, Pakistan', categories: ['Emergency'], milestone: 2000, status: 'completed' },
        { id: 2, title: 'School Books Fund', description: 'Books for children', location: 'Lahore, Pakistan', categories: ['Education'], milestone: 1500, status: 'completed' }
      ]
      setCampaigns(dummy)
    } else {
      setCampaigns(data)
    }
  }, [])

  const openDetail = (campaign) => {
    if (campaign.status !== 'active') return
    setSelected(campaign)
  }

  const closeDetail = () => setSelected(null)

  return (
    <div className="campaigns-page">
      <Navbar />
      <FloatingBar />
      <div className="campaigns-container">
        <h2>My Campaigns</h2>
        <div className="campaigns-list">
          {campaigns.map(c => (
            <CampaignCard key={c.id} campaign={c} onClick={() => openDetail(c)} />
          ))}
        </div>
      </div>

      {selected && <CampaignDetail campaign={selected} onClose={closeDetail} />}
    </div>
  )
}

export default MyCampaigns
