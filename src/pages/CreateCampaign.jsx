import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import FloatingBar from '../components/FloatingBar'
import '../styles/CreateCampaign.css'

function CreateCampaign() {
  const navigate = useNavigate()

  // form state
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [location, setLocation] = useState('')
  const [categories, setCategories] = useState(['Health', 'Education', 'Emergency', 'Environment'])
  const [selectedCategories, setSelectedCategories] = useState([])
  const [customCategory, setCustomCategory] = useState('')
  const [milestone, setMilestone] = useState('')

  // Save campaign to localStorage
  const saveCampaign = (newCampaign) => {
    const existing = JSON.parse(localStorage.getItem('blocharity_campaigns') || '[]')
    // newest first, mark new as active
    const updated = [newCampaign, ...existing.map(c => ({ ...c, active: false }))]
    localStorage.setItem('blocharity_campaigns', JSON.stringify(updated))
  }

  const handleAddCustomCategory = () => {
    const c = customCategory.trim()
    if (!c) return
    if (!categories.includes(c)) setCategories(prev => [c, ...prev])
    if (!selectedCategories.includes(c)) setSelectedCategories(prev => [c, ...prev])
    setCustomCategory('')
  }

  const toggleCategory = (cat) => {
    setSelectedCategories(prev =>
      prev.includes(cat) ? prev.filter(x => x !== cat) : [...prev, cat]
    )
  }

  const handlePost = (e) => {
    e.preventDefault()
    const newCampaign = {
      id: Date.now(),
      title,
      description,
      location,
      categories: selectedCategories,
      milestone: parseFloat(milestone) || 0,
      status: 'active',
      createdAt: new Date().toISOString(),
      active: true
    }
    saveCampaign(newCampaign)
    // reset (optional) then navigate
    navigate('/distributor/campaigns')
  }

  const isPostDisabled = !title.trim() || !description.trim() || !location.trim() || selectedCategories.length === 0 || !milestone

  return (
    <div className="create-campaign-page">
      <Navbar />
      <FloatingBar />

      <main className="create-form-area">
        <form className="create-card" onSubmit={handlePost}>
          <h2 className="create-title">Create New Campaign</h2>
          <p className="create-sub">Tell donors why this campaign matters. Add details and a realistic target.</p>

          {/* Title */}
          <label className="label">Campaign Title</label>
          <input
            className="input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Winter Relief Fund"
            autoComplete="off"
          />

          {/* Description */}
          <label className="label">Description</label>
          <textarea
            className="textarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe the purpose, beneficiaries and planned activities"
          />

          {/* Location */}
          <label className="label">Location</label>
          <input
            className="input"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="City, Country or Online"
            autoComplete="off"
          />

          {/* Categories */}
          <label className="label">Categories</label>
          <div className="categories-row">
            {categories.map(cat => (
              <button
                key={cat}
                type="button"
                className={`chip ${selectedCategories.includes(cat) ? 'chip-active' : ''}`}
                onClick={() => toggleCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="add-category-row">
            <input
              className="input small"
              value={customCategory}
              onChange={(e) => setCustomCategory(e.target.value)}
              placeholder="Add a custom category"
            />
            <button type="button" className="secondary" onClick={handleAddCustomCategory}>Add</button>
          </div>

          {/* Milestone */}
          <label className="label">Milestone (target amount)</label>
          <input
            className="input"
            value={milestone}
            onChange={(e) => setMilestone(e.target.value)}
            placeholder="e.g. 150000"
            inputMode="numeric"
          />

          {/* Review summary (live) */}
          <section className="review">
            <h4>Preview</h4>
            <p><strong>Title:</strong> {title || '—'}</p>
            <p><strong>Location:</strong> {location || '—'}</p>
            <p><strong>Categories:</strong> {selectedCategories.length ? selectedCategories.join(', ') : '—'}</p>
            <p><strong>Milestone:</strong> {milestone || '—'}</p>
          </section>

          {/* Actions */}
          <div className="form-actions">
            <button type="button" className="ghost" onClick={() => navigate('/distributor')}>Cancel</button>
            <button type="submit" className="primary" disabled={isPostDisabled}>Post Campaign</button>
          </div>
        </form>
      </main>
    </div>
  )
}

export default CreateCampaign
