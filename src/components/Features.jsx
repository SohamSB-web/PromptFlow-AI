import React from 'react';

const Features = () => {
    return (
        <div style={{ position: 'relative', zIndex: 10, background: '#f9f9f9', color: '#333' }}>

            {/* Section 1: The Solution */}
            <div id="solution" className="container" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '5rem 2rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', width: '100%' }}>
                    <div style={{ textAlign: 'left' }}>
                        <div style={{
                            display: 'inline-block',
                            padding: '0.5rem 1rem',
                            borderRadius: '50px',
                            background: '#dbeafe',
                            color: '#1e40af',
                            fontSize: '0.8rem',
                            fontWeight: 'bold',
                            marginBottom: '1rem'
                        }}>
                            THE SOLUTION
                        </div>
                        <h2 style={{ fontSize: '3rem', marginBottom: '2rem', color: '#111827', lineHeight: '1.2' }}>
                            Natural-Language<br />Video Editing
                        </h2>
                        <div style={{ width: '50px', height: '3px', background: '#3b82f6', marginBottom: '2rem' }}></div>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#4b5563' }}>
                            PromptFlow AI is a natural-language video editor that lets creators skip hours of manual work by simply describing what they want. From smart cutting to automated VFX, just type your vision and let AI handle the execution.
                        </p>
                    </div>

                    {/* Command Card */}
                    <div style={{
                        background: '#1f2937',
                        borderRadius: '20px',
                        height: '400px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                        padding: '2rem',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div style={{
                            width: '100%',
                            background: 'rgba(255,255,255,0.05)',
                            padding: '1.5rem',
                            borderRadius: '10px',
                            border: '1px solid rgba(255,255,255,0.1)',
                            marginBottom: '2rem'
                        }}>
                            <div style={{ fontSize: '0.8rem', color: '#9ca3af', marginBottom: '0.5rem' }}>PROMPT</div>
                            <div style={{ color: '#60a5fa', fontFamily: 'monospace' }}>
                                "Remove the silence and add subtitles"
                            </div>
                        </div>
                        <div style={{
                            display: 'flex',
                            gap: '1rem',
                            color: '#10b981',
                            fontSize: '0.9rem',
                            alignItems: 'center',
                            background: 'rgba(16, 185, 129, 0.1)',
                            padding: '0.5rem 1rem',
                            borderRadius: '50px'
                        }}>
                            <span>✓</span>
                            <span>Processing Complete</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 2: Efficiency / Creator Impact */}
            <div id="benefits" style={{ background: '#f3f4f6', padding: '5rem 0 8rem 0' }}>
                <div className="container">
                    <div style={{
                        background: 'white',
                        borderRadius: '30px',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.05)',
                        padding: '4rem',
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '4rem',
                        alignItems: 'center'
                    }}>

                        {/* Left: Metrics */}
                        <div>
                            <div style={{ fontSize: '0.9rem', fontWeight: 'bold', letterSpacing: '0.1em', color: '#7c3aed', marginBottom: '1rem' }}>EFFICIENCY</div>
                            <div style={{ fontSize: '5rem', fontWeight: 'bold', lineHeight: '1', color: '#111827' }}>5+ Hours</div>
                            <div style={{ fontSize: '1.2rem', color: '#6b7280', marginBottom: '2rem' }}>Saved per week</div>

                            <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem' }}>
                                {['No Manual Cuts', 'Auto-VFX', 'Smart Audio'].map(tag => (
                                    <span key={tag} style={{
                                        padding: '0.5rem 1rem',
                                        borderRadius: '50px',
                                        border: '1px solid #e5e7eb',
                                        fontSize: '0.8rem',
                                        fontWeight: '600',
                                        color: '#374151'
                                    }}>{tag}</span>
                                ))}
                            </div>

                            <div style={{ marginBottom: '2rem' }}>
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
                                    <div style={{ background: '#ddd6fe', color: '#5b21b6', borderRadius: '50%', padding: '0.2rem', fontSize: '0.8rem' }}>✓</div>
                                    <div>
                                        <div style={{ fontWeight: 'bold', color: '#1f2937' }}>Reclaim Creative Time</div>
                                        <div style={{ fontSize: '0.9rem', color: '#6b7280', marginTop: '0.2rem' }}>Let AI handle the grunt work while you focus on the story.</div>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                    <div style={{ background: '#ddd6fe', color: '#5b21b6', borderRadius: '50%', padding: '0.2rem', fontSize: '0.8rem' }}>✓</div>
                                    <div>
                                        <div style={{ fontWeight: 'bold', color: '#1f2937' }}>Professional Consistency</div>
                                        <div style={{ fontSize: '0.9rem', color: '#6b7280', marginTop: '0.2rem' }}>Perfect cuts and timing, every single time.</div>
                                    </div>
                                </div>
                            </div>

                            <button style={{
                                width: '100%',
                                padding: '1.2rem',
                                background: '#000',
                                color: 'white',
                                borderRadius: '15px',
                                fontSize: '1.2rem',
                                fontWeight: 'bold',
                                border: 'none',
                                cursor: 'pointer'
                            }}>
                                Join Waitlist
                            </button>
                        </div>

                        {/* Right: Graphic */}
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                            <div style={{
                                width: '200px',
                                height: '200px',
                                background: '#eff6ff',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '2rem'
                            }}>
                                {/* Clock Icon Placeholder */}
                                <div style={{ fontSize: '4rem' }}>⏱️</div>
                            </div>
                            <p style={{ color: '#6b7280', maxWidth: '300px' }}>
                                "AI handles the repetitive parts, humans get involved for creativity."
                            </p>
                            <p style={{ fontSize: '0.9rem', fontWeight: 'bold', marginTop: '0.5rem', color: '#4b5563' }}>- Vibhav Sisinty</p>
                        </div>

                    </div>
                </div>
            </div>

            {/* Section 3: Footer */}
            <footer style={{ background: '#0f172a', color: 'white', padding: '5rem 0 2rem 0' }}>
                <div className="container" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <p style={{ letterSpacing: '0.2em', fontSize: '0.8rem', opacity: 0.6, marginBottom: '1.5rem' }}>JOIN THE REVOLUTION</p>
                    <button style={{
                        padding: '1rem 3rem',
                        borderRadius: '50px',
                        background: 'white',
                        color: 'black',
                        border: 'none',
                        fontWeight: 'bold',
                        fontSize: '1.1rem',
                        cursor: 'pointer'
                    }}>
                        Get Early Access →
                    </button>
                </div>

                <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1.5fr', gap: '3rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '4rem' }}>
                    <div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 'bold' }}>PromptFlow<span style={{ color: '#4361ee' }}> AI.</span></h3>
                        <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: '1.6' }}>
                            Democratizing video editing by enabling anyone to create professional-quality content through simple prompts.
                        </p>
                    </div>
                    <div>
                        <h4 style={{ fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>PRODUCT</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.9rem', color: '#cbd5e1' }}>
                            <div>Features</div>
                            <div>Pricing</div>
                            <div>Docs</div>
                            <div>API</div>
                        </div>
                    </div>
                    <div>
                        <h4 style={{ fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>COMPANY</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.9rem', color: '#cbd5e1' }}>
                            <div>About</div>
                            <div>Blog</div>
                            <div>Careers</div>
                            <div>Contact</div>
                        </div>
                    </div>
                    <div>
                        <h4 style={{ fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>STAY UPDATED</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <input type="email" placeholder="Your email" style={{ padding: '0.8rem', borderRadius: '5px', border: '1px solid #334155', background: '#1e293b', color: 'white' }} />
                            <button style={{ padding: '0.8rem', borderRadius: '5px', border: 'none', background: '#4361ee', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}>Subscribe</button>
                        </div>
                    </div>
                </div>

                <div className="container" style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#64748b' }}>
                    <div>© 2026 PromptFlow AI. All rights reserved.</div>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <div>Privacy Policy</div>
                        <div>Terms of Service</div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Features;
