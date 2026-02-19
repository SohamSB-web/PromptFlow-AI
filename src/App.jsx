import React from 'react';
import ScrollSequence from './components/ScrollSequence';
import Hero from './components/Hero';
import Features from './components/Features';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App" style={{ position: 'relative' }}>
      <Navbar />
      <ScrollSequence>
        <Hero />
      </ScrollSequence>

      <main style={{ position: 'relative', zIndex: 20, background: 'var(--bg-color)' }}>
        <Features />
      </main>
    </div>
  );
}

export default App;
