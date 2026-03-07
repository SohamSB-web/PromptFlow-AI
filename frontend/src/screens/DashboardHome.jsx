import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import NewDocumentModal from '../components/NewDocumentModal';
import './DashboardHome.css';

const recentFiles = [
  { id: 1, name: 'Cyberpunk City.mp4', time: '2 hours ago', type: 'video', color: '#ff0055' },
  { id: 2, name: 'Neon Portrait.png', time: '5 hours ago', type: 'image', color: '#00ffee' },
  { id: 3, name: 'Synthwave Audio.wav', time: '1 day ago', type: 'audio', color: '#7B2CBF' },
  { id: 4, name: 'Abstract Particles.mp4', time: '2 days ago', type: 'video', color: '#ff0055' },
  { id: 5, name: 'UI Mockup V2.psd', time: '3 days ago', type: 'image', color: '#00ffee' },
  { id: 6, name: 'Voiceover_Take1.mp3', time: '1 week ago', type: 'audio', color: '#7B2CBF' },
];

function DashboardHome() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');
  const [profileOpen, setProfileOpen] = useState(false);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [profileForm, setProfileForm] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    company: 'Acme Corp'
  });
  const navigate = useNavigate();

  const handleCreateDocument = () => {
    // Navigate to actual editor here
    setIsModalOpen(false);
    // navigate('/editor'); // Placeholder for future routing
  };

  return (
    <div className="dashboard-wrapper">
      {/* Top Menu Bar */}
      <div className="dashboard-top-menu">
        <div className="menu-logo">
           <span className="amu-logo" style={{ fontSize: '1.2rem'}}>PromptFlow<span style={{color: 'var(--accent-purple)'}}>.</span></span>
        </div>
        <div className="menu-items">
          {/* Menu items removed as requested */}
        </div>
        <div className="menu-actions" style={{ position: 'relative' }}>
           <div className="profile-icon" onClick={() => setProfileOpen(!profileOpen)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
           </div>
           
           <AnimatePresence>
             {profileOpen && (
               <motion.div 
                 className="profile-dropdown"
                 initial={{ opacity: 0, y: 10, scale: 0.95 }}
                 animate={{ opacity: 1, y: 0, scale: 1 }}
                 exit={{ opacity: 0, y: 10, scale: 0.95 }}
                 transition={{ duration: 0.15 }}
               >
                 <div className="dropdown-item">Account Settings</div>
                 <div className="dropdown-item">Switch Account...</div>
                 <div className="dropdown-divider"></div>
                 <div className="dropdown-item text-danger" onClick={() => navigate('/login')}>Logout</div>
               </motion.div>
             )}
           </AnimatePresence>
        </div>
      </div>

      <div className="dashboard-content">
        {/* Sidebar */}
        <div className="dashboard-sidebar">
          <div className="sidebar-actions">
            <button className="primary-glass-btn" onClick={() => setIsModalOpen(true)}>
              New file
            </button>
            <button className="secondary-glass-btn">
              Open
            </button>
          </div>
          
          <nav className="sidebar-nav">
             <div 
               className={`nav-item ${activeTab === 'Home' ? 'active' : ''}`}
               onClick={() => setActiveTab('Home')}
             >
               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
               Home
             </div>
             <div 
               className={`nav-item ${activeTab === 'Account' ? 'active' : ''}`}
               onClick={() => setActiveTab('Account')}
             >
               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
               Account
             </div>
             <div 
               className={`nav-item ${activeTab === 'Subscription' ? 'active' : ''}`}
               onClick={() => setActiveTab('Subscription')}
             >
               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2" ry="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg>
               Subscription
             </div>
          </nav>
        </div>

        {/* Main Area */}
        <div className="dashboard-main">
          {activeTab === 'Home' ? (
            <>
              <h1 className="welcome-text">Welcome to PromptFlow AI</h1>

              <div className="recent-section">
                <div className="recent-header">
                  <h2>Recent</h2>
                  <div className="recent-filters">
                     <span className="filter-item">Sort</span>
                     <span className="filter-item">Recent ▾</span>
                     <div className="filter-search">
                       <span>Filter</span>
                       <input type="text" placeholder="Filter Recent Files" />
                     </div>
                     <div className="view-toggles">
                       <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
                       <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                     </div>
                  </div>
                </div>

                <div className="recent-grid">
                  {recentFiles.map((file, index) => (
                    <motion.div 
                      className="recent-card" 
                      key={file.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ y: -5, boxShadow: `0 10px 20px -10px ${file.color}40`, borderColor: `${file.color}80` }}
                    >
                      <div className="card-thumbnail-container">
                        <div className="card-thumbnail" style={{ background: `linear-gradient(135deg, ${file.color}20, ${file.color}40)`, border: `1px solid ${file.color}40` }}>
                           {/* Abstract placeholder shape based on type */}
                           {file.type === 'video' && <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={file.color} strokeWidth="1.5"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>}
                           {file.type === 'image' && <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={file.color} strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>}
                           {file.type === 'audio' && <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={file.color} strokeWidth="1.5"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1v-3a2 2 0 0 1 2-2h1zM3 19a2 2 0 0 0 2 2h1v-3a2 2 0 0 0-2-2H3z"></path></svg>}
                        </div>
                      </div>
                      <div className="card-info">
                        <h3 className="card-title">{file.name}</h3>
                        <p className="card-time">{file.time}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </>
          ) : activeTab === 'Account' ? (
            <motion.div 
               className="account-section"
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.3 }}
            >
              <h1 className="welcome-text" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>Account Information</h1>
              <div className="account-card" style={{ display: 'block' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                    <div className="account-avatar-large">
                       <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    </div>
                    <div>
                       <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'white' }}>Profile Detail</h2>
                       <p style={{ color: 'var(--ref-text-secondary)', fontSize: '0.9rem' }}>Update your photo and personal details.</p>
                       <button className="secondary-glass-btn" style={{ marginTop: '1rem', padding: '0.5rem 1rem', fontSize: '0.8rem' }}>Change Photo</button>
                    </div>
                  </div>
                  {!isEditingProfile ? (
                     <button className="primary-glass-btn" onClick={() => setIsEditingProfile(true)}>Edit Profile</button>
                  ) : (
                     <div style={{ display: 'flex', gap: '1rem' }}>
                       <button className="secondary-glass-btn" onClick={() => setIsEditingProfile(false)}>Cancel</button>
                       <button className="primary-glass-btn" onClick={() => setIsEditingProfile(false)}>Save Changes</button>
                     </div>
                  )}
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label>First Name</label>
                    <input 
                      type="text" 
                      value={profileForm.firstName} 
                      onChange={(e) => setProfileForm({...profileForm, firstName: e.target.value})}
                      disabled={!isEditingProfile}
                      className="account-input"
                    />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input 
                      type="text" 
                      value={profileForm.lastName} 
                      onChange={(e) => setProfileForm({...profileForm, lastName: e.target.value})}
                      disabled={!isEditingProfile}
                      className="account-input"
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input 
                      type="email" 
                      value={profileForm.email} 
                      onChange={(e) => setProfileForm({...profileForm, email: e.target.value})}
                      disabled={!isEditingProfile}
                      className="account-input"
                    />
                  </div>
                  <div className="form-group">
                    <label>Company / Organization</label>
                    <input 
                      type="text" 
                      value={profileForm.company} 
                      onChange={(e) => setProfileForm({...profileForm, company: e.target.value})}
                      disabled={!isEditingProfile}
                      className="account-input"
                    />
                  </div>
                </div>
              </div>

              <div className="account-settings-grid">
                <div className="settings-card" style={{ gridColumn: '1 / -1' }}>
                  <h3>Preferences</h3>
                  <div className="setting-item">
                     <span>Dark Mode</span>
                     <div className="toggle active"></div>
                  </div>
                  <div className="setting-item">
                     <span>Email Notifications</span>
                     <div className="toggle"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : activeTab === 'Subscription' ? (
            <motion.div 
              className="account-section"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h1 className="welcome-text" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>Subscription Plans</h1>
              <div className="account-card" style={{ display: 'block' }}>
                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                   <div>
                     <h3 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '0.4rem' }}>Current Plan: PromptFlow Pro <span className="badge-active">Active</span></h3>
                     <p style={{ color: 'var(--ref-text-secondary)', fontSize: '0.9rem' }}>Billed monthly. Next billing date: April 1, 2026.</p>
                   </div>
                   <div style={{ textAlign: 'right' }}>
                     <p style={{ fontSize: '1.5rem', color: 'white', fontWeight: 'bold' }}>$19.99<span style={{ fontSize: '0.9rem', color: 'var(--ref-text-secondary)', fontWeight: 'normal' }}> /mo</span></p>
                     <button className="secondary-glass-btn" style={{ marginTop: '0.5rem', padding: '0.5rem 1rem', fontSize: '0.85rem' }}>Cancel Subscription</button>
                   </div>
                 </div>
                 
                 <h3 style={{ color: 'white', marginTop: '2rem', marginBottom: '1rem', fontSize: '1.1rem' }}>Available Plans</h3>
                 <div className="plans-grid">
                   <div className="plan-card">
                     <h4>Free Tier</h4>
                     <p className="plan-price">$0<span>/mo</span></p>
                     <ul className="plan-features">
                       <li>720p maximum export</li>
                       <li>Basic AI prompt features</li>
                       <li>PromptFlow Watermark</li>
                     </ul>
                     <button className="secondary-glass-btn">Downgrade to Free</button>
                   </div>
                   <div className="plan-card active-plan-card">
                     <div className="plan-badge">Most Popular</div>
                     <h4>PromptFlow Pro</h4>
                     <p className="plan-price">$19.99<span>/mo</span></p>
                     <ul className="plan-features">
                       <li>4K maximum export</li>
                       <li>Advanced AI generation</li>
                       <li>No watermarks</li>
                       <li>Priority rendering</li>
                     </ul>
                     <button className="primary-glass-btn">Current Plan</button>
                   </div>
                   <div className="plan-card">
                     <h4>Enterprise Studio</h4>
                     <p className="plan-price">$49.99<span>/mo</span></p>
                     <ul className="plan-features">
                       <li>8K maximum export</li>
                       <li>Team collaboration features</li>
                       <li>Custom AI model training</li>
                       <li>API Access</li>
                     </ul>
                     <button className="secondary-glass-btn">Upgrade to Enterprise</button>
                   </div>
                 </div>
              </div>
            </motion.div>
          ) : null}
        </div>
      </div>

      {/* New Document Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <NewDocumentModal 
            onClose={() => setIsModalOpen(false)} 
            onCreate={handleCreateDocument} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default DashboardHome;
