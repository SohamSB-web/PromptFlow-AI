import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import './Workspace.css';

function Workspace() {
  const navigate = useNavigate();
  const location = useLocation();
  const [prompt, setPrompt] = useState('');
  const [profileOpen, setProfileOpen] = useState(false);

  // Mock data for Media Bin
  const mediaItems = [
    { id: 1, name: 'Desert_01', duration: '0:32', type: 'video', color: '#1E293B', labelColor: '#885522' },
    { id: 2, name: 'Beat_Track', duration: '0:29', type: 'audio', color: '#1E293B', labelColor: '#228855' },
    { id: 3, name: 'Clip_01', duration: '0:09', type: 'video', color: '#1E293B', labelColor: '#225588' },
    { id: 4, name: 'Face_01', duration: '0:09', type: 'video', color: '#1E293B', labelColor: '#882255' },
    { id: 5, name: 'Vibe_01', duration: '0:29', type: 'audio', color: '#1E293B', labelColor: '#558822' },
    { id: 6, name: 'Portrait', duration: '0:26', type: 'image', color: '#1E293B', labelColor: '#552288' },
  ];

  return (
    <div className="workspace-layout">
      {/* Top Navigation Bar */}
      <header className="workspace-header">
        <div className="workspace-logo" onClick={() => navigate('/dashboard')}>
          <div className="logo-icon"></div>
          <span>PromptFlow AI.</span>
        </div>
        <div className="workspace-tabs">
          <button className="tab active">Workspace</button>
          <button className="tab">Assets</button>
          <button className="tab">Exports</button>
        </div>
        <div className="workspace-actions">
          <button className="quick-access-btn" onClick={() => navigate(-1)} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
            Back
          </button>
          <button className="quick-access-btn">Project Quick Access</button>
          
          <div className="profile-container" style={{ position: 'relative' }}>
            <div className="profile-pic" onClick={() => setProfileOpen(!profileOpen)}></div>
            
            <AnimatePresence>
              {profileOpen && (
                <motion.div
                  className="profile-dropdown"
                  initial={{ opacity: 0, y: 15, scale: 0.9, rotateX: 10 }}
                  animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                  exit={{ opacity: 0, y: 15, scale: 0.9, rotateX: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  style={{ transformOrigin: "top right" }}
                >
                  <div className="dropdown-item" onClick={() => navigate('/dashboard')}>Dashboard</div>
                  <div className="dropdown-item">Account Settings</div>
                  <div className="dropdown-divider"></div>
                  <div className="dropdown-item text-danger" onClick={() => navigate('/login')}>Logout</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </header>

      {/* Main Grid Workspace */}
      <main className="workspace-main">
        {/* Left Sidebar: Media Bin */}
        <aside className="media-bin-panel">
          <div className="panel-header">
            <h3>Media Bin</h3>
            <div className="header-icons">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            </div>
          </div>
          
          <div className="media-tree">
            <div className="tree-item active">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              Folders
            </div>
            <div className="tree-item">› <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg> Bin</div>
            <div className="tree-item">› <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg> Video</div>
            <div className="tree-item">› <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg> Audio Tracks</div>
            <div className="tree-item">› <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg> Images</div>
          </div>

          <div className="media-list" data-lenis-prevent>
            {mediaItems.map(item => (
              <div key={item.id} className="media-thumbnail-container">
                <div className="media-thumbnail" style={{ backgroundColor: item.color }}>
                   <div style={{width: '100%', height:'100%', opacity: 0.5, backgroundImage: `linear-gradient(to bottom right, ${item.labelColor}, transparent)`}}></div>
                   <div className="duration-badge">{item.duration}</div>
                </div>
                <div className="media-name">{item.name}</div>
              </div>
            ))}
          </div>
        </aside>

        {/* Center Canvas Area processing video */}
        <section className="workspace-center">
          {/* Video Player */}
          <div className="video-player-wrapper glow-border-cyan-pink">
             <div className="video-player-inner">
                {/* Mock Image Content matching the screenshot */}
                <div className="mock-video-frame">
                   {/* Fallback solid */}
                   <div className="mock-video-bg"></div>
                </div>
                {/* Video Controls bar */}
                <div className="video-controls-bar">
                   <div className="timeline-trail">
                      <div className="timeline-thumb"></div>
                   </div>
                   <div className="controls-row">
                      <div className="playback-controls">
                         <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line></svg>
                         <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="11 19 2 12 11 5 11 19"></polygon><polygon points="22 19 13 12 22 5 22 19"></polygon></svg>
                         <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                         <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 19 22 12 13 5 13 19"></polygon><polygon points="2 19 11 12 2 5 2 19"></polygon></svg>
                         <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line></svg>
                      </div>
                      <div className="utility-controls">
                         <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2"></rect><path d="M6 15h12"></path></svg>
                         <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg>
                      </div>
                   </div>
                </div>
             </div>
          </div>

          {/* AI Prompt Console */}
          <div className="ai-prompt-console glow-border-purple">
             <div className="console-inner">
                <div className="panel-header">
                   <div className="title-with-icon">
                      <div className="logo-icon small"></div>
                      <h3>AI Prompt Console</h3>
                   </div>
                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{cursor: 'pointer'}}><path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line></svg>
                </div>
                
                <textarea 
                   className="ai-prompt-input"
                   placeholder="Enter your detailed edit command here (e.g., Make the background warmer and add film grain)..."
                   value={prompt}
                   onChange={(e) => setPrompt(e.target.value)}
                ></textarea>

                <div className="console-footer">
                   <div className="console-footer-left"></div>
                   <div className="console-footer-right">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                      <button className="send-prompt-btn" onClick={() => prompt.trim() && setPrompt('')}>
                         <div className="btn-content">
                            <span className="check-icon">✓</span>
                            <div className="btn-text">
                               <span className="btn-title">Send Prompt</span>
                               <span className="btn-subtitle">Submit AI Request</span>
                            </div>
                         </div>
                      </button>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* Right Sidebar: Status Log */}
        <aside className="status-log-panel">
          <div className="panel-header">
            <h3>Status Log</h3>
          </div>
          <div className="status-content">
             <div className="status-summary">
                <p>AI processing status: Ready</p>
                <div className="progress-bar-container">
                   <div className="progress-bar-fill"></div>
                </div>
             </div>
             
             <div className="status-list">
                <div className="status-item">
                   <span className="status-check">✓</span>
                   <span className="status-text">Audio analysis complete.</span>
                </div>
                <div className="status-item">
                   <span className="status-check">✓</span>
                   <span className="status-text">Status check: OK</span>
                </div>
                <div className="status-item">
                   <span className="status-check">✓</span>
                   <span className="status-text">Ready for new prompt.</span>
                </div>
                <div className="status-item">
                   <span className="status-check">✓</span>
                   <span className="status-text">Autosave successful!</span>
                </div>
                <div className="status-item">
                   <span className="status-check">✓</span>
                   <span className="status-text">Project autosaved.</span>
                </div>
                <div className="status-item">
                   <span className="status-check">✓</span>
                   <span className="status-text">Audio analysis complete.</span>
                </div>
             </div>
          </div>
        </aside>

      </main>
    </div>
  );
}

export default Workspace;
