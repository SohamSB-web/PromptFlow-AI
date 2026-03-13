import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';
import gsap from 'gsap';

import LandingPage from './screens/LandingPage';
import LoginPage from './screens/LoginPage';
import DashboardHome from './screens/DashboardHome';
import Workspace from './screens/Workspace';

function App() {
  const lenisRef = useRef();

  // Set up the GSAP ticker to drive the Lenis scroll animation
  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  }, []); // The empty array ensures this only runs once on mount

  return (
    // Wrapping the entire Router in ReactLenis makes it global for all routes
    <ReactLenis root ref={lenisRef} autoRaf={false}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardHome />} />
            <Route path="/workspace" element={<Workspace />} />
          </Routes>
        </div>
      </Router>
    </ReactLenis>
  );
}

export default App;