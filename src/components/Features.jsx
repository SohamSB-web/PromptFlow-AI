import React from 'react';
import { motion } from 'framer-motion';

const Features = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <div style={{ position: 'relative', zIndex: 10, background: '#050505', color: 'white' }}>

            {/* Background Gradients */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', pointerEvents: 'none' }}>
                <div style={{ position: 'absolute', top: '10%', right: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(67, 97, 238, 0.15) 0%, transparent 70%)', filter: 'blur(60px)' }}></div>
                <div style={{ position: 'absolute', bottom: '10%', left: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(123, 44, 191, 0.1) 0%, transparent 70%)', filter: 'blur(60px)' }}></div>
            </div>

            {/* Section 1: The Solution */}
            <div id="solution" className="container" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '8rem 2rem' }}>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center', width: '100%' }}
                >
                    <div style={{ textAlign: 'left' }}>
                        <motion.div variants={fadeInUp} style={{
                            display: 'inline-block',
                            padding: '0.5rem 1rem',
                            borderRadius: '50px',
                            background: 'rgba(67, 97, 238, 0.1)',
                            border: '1px solid rgba(67, 97, 238, 0.3)',
                            color: '#4361EE',
                            fontSize: '0.8rem',
                            fontWeight: 'bold',
                            marginBottom: '1.5rem'
                        }}>
                            THE SOLUTION
                        </motion.div>
                        <motion.h2 variants={fadeInUp} style={{ fontSize: '3.5rem', marginBottom: '2rem', lineHeight: '1.1', letterSpacing: '-0.02em' }}>
                            Natural-Language<br />
                            <span className="gradient-text">Video Editing</span>
                        </motion.h2>
                        <motion.div variants={fadeInUp} style={{ width: '60px', height: '4px', background: 'linear-gradient(90deg, #4361EE, #7B2CBF)', marginBottom: '2rem', borderRadius: '2px' }}></motion.div>
                        <motion.p variants={fadeInUp} style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#aaa' }}>
                            PromptFlow AI is a natural-language video editor that lets creators skip hours of manual work by simply describing what they want. From smart cutting to automated VFX, just type your vision and let AI handle the execution.
                        </motion.p>
                    </div>

                    {/* Command Card */}
                    <motion.div
                        variants={fadeInUp}
                        className="glass-card"
                        style={{
                            height: 'auto',
                            minHeight: '400px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative',
                        }}
                    >
                        <div style={{
                            width: '100%',
                            background: 'rgba(0,0,0,0.3)',
                            padding: '1.5rem',
                            borderRadius: '12px',
                            border: '1px solid rgba(255,255,255,0.05)',
                            marginBottom: '2rem'
                        }}>
                            <div style={{ fontSize: '0.8rem', color: '#666', marginBottom: '0.8rem', letterSpacing: '0.1em' }}>PROMPT</div>
                            <div style={{ color: '#A5B4FC', fontFamily: 'monospace', fontSize: '1.1rem' }}>
                                "Remove the silence and add subtitles"
                                <motion.span
                                    animate={{ opacity: [0, 1, 0] }}
                                    transition={{ duration: 1, repeat: Infinity }}
                                    style={{ display: 'inline-block', width: '2px', height: '1.2em', background: '#A5B4FC', marginLeft: '5px', verticalAlign: 'middle' }}
                                />
                            </div>
                        </div>
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            style={{
                                display: 'flex',
                                gap: '1rem',
                                color: '#4ade80',
                                fontSize: '1rem',
                                alignItems: 'center',
                                background: 'rgba(74, 222, 128, 0.1)',
                                padding: '0.8rem 1.5rem',
                                borderRadius: '50px',
                                border: '1px solid rgba(74, 222, 128, 0.2)'
                            }}
                        >
                            <span>✓</span>
                            <span style={{ fontWeight: 600 }}>Processing Complete</span>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Section 2: Efficiency / Creator Impact */}
            <div id="benefits" style={{ padding: '5rem 0 8rem 0', position: 'relative' }}>
                <div className="container">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                        className="glass-card"
                        style={{
                            padding: '5rem',
                            display: 'grid',
                            gridTemplateColumns: '1.2fr 0.8fr',
                            gap: '5rem',
                            alignItems: 'center',
                            background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)'
                        }}
                    >

                        {/* Left: Metrics */}
                        <div>
                            <div style={{ fontSize: '0.9rem', fontWeight: 'bold', letterSpacing: '0.2em', color: '#A5B4FC', marginBottom: '1rem' }}>EFFICIENCY</div>
                            <h3 style={{ fontSize: '5rem', fontWeight: 'bold', lineHeight: '1', marginBottom: '0.5rem' }} className="gradient-text">5+ Hours</h3>
                            <div style={{ fontSize: '1.5rem', color: '#888', marginBottom: '3rem' }}>Saved per week</div>

                            <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
                                {['No Manual Cuts', 'Auto-VFX', 'Smart Audio'].map(tag => (
                                    <span key={tag} style={{
                                        padding: '0.6rem 1.2rem',
                                        borderRadius: '50px',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        background: 'rgba(255,255,255,0.03)',
                                        fontSize: '0.9rem',
                                        fontWeight: '500',
                                        color: '#ccc'
                                    }}>{tag}</span>
                                ))}
                            </div>

                            <div style={{ marginBottom: '3rem' }}>
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.5rem' }}>
                                    <div style={{ background: 'rgba(123, 44, 191, 0.2)', color: '#C4B5FD', borderRadius: '50%', padding: '0.2rem', fontSize: '0.8rem', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✓</div>
                                    <div>
                                        <div style={{ fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '0.3rem' }}>Reclaim Creative Time</div>
                                        <div style={{ fontSize: '0.95rem', color: '#888' }}>Let AI handle the grunt work while you focus on the story.</div>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                    <div style={{ background: 'rgba(123, 44, 191, 0.2)', color: '#C4B5FD', borderRadius: '50%', padding: '0.2rem', fontSize: '0.8rem', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✓</div>
                                    <div>
                                        <div style={{ fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '0.3rem' }}>Professional Consistency</div>
                                        <div style={{ fontSize: '0.95rem', color: '#888' }}>Perfect cuts and timing, every single time.</div>
                                    </div>
                                </div>
                            </div>

                            <button className="btn-primary" style={{ width: '100%', fontSize: '1.1rem' }}>
                                Join Waitlist
                            </button>
                        </div>

                        {/* Right: Graphic */}
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                style={{
                                    width: '220px',
                                    height: '220px',
                                    background: 'linear-gradient(135deg, rgba(67, 97, 238, 0.1), rgba(123, 44, 191, 0.1))',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '2rem',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    boxShadow: '0 0 50px rgba(67, 97, 238, 0.1)'
                                }}
                            >
                                <div style={{ fontSize: '5rem' }}>⏱️</div>
                            </motion.div>
                            <p style={{ color: '#aaa', maxWidth: '300px', fontStyle: 'italic', fontSize: '1.1rem' }}>
                                "AI handles the repetitive parts, humans get involved for creativity."
                            </p>
                            <p style={{ fontSize: '0.9rem', fontWeight: 'bold', marginTop: '1rem', color: '#6366f1' }}>- Vibhav Sisinty</p>
                        </div>

                    </motion.div>
                </div>
            </div>

            {/* Section 3: Footer */}
            <footer id="contact" style={{ background: '#020204', color: 'white', padding: '5rem 0 2rem 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="container" style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <p style={{ letterSpacing: '0.2em', fontSize: '0.9rem', opacity: 0.5, marginBottom: '2rem' }}>JOIN THE REVOLUTION</p>
                    <button className="btn-primary" style={{ padding: '1.2rem 4rem', fontSize: '1.2rem' }}>
                        Get Early Access →
                    </button>
                </div>

                <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1.5fr', gap: '4rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '4rem' }}>
                    <div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: 'bold' }}>PromptFlow<span style={{ color: '#4361ee' }}> AI.</span></h3>
                        <p style={{ fontSize: '0.95rem', color: '#888', lineHeight: '1.6' }}>
                            Democratizing video editing by enabling anyone to create professional-quality content through simple prompts.
                        </p>
                    </div>
                    <div>
                        <h4 style={{ fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '1.5rem', letterSpacing: '0.1em' }}>PRODUCT</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.95rem', color: '#aaa' }}>
                            <a href="#" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }} className="hover:text-white">Features</a>
                            <a href="#" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }} className="hover:text-white">Pricing</a>
                            <a href="#" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }} className="hover:text-white">Docs</a>
                            <a href="#" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }} className="hover:text-white">API</a>
                        </div>
                    </div>
                    <div>
                        <h4 style={{ fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '1.5rem', letterSpacing: '0.1em' }}>COMPANY</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.95rem', color: '#aaa' }}>
                            <a href="#" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }} className="hover:text-white">About</a>
                            <a href="#" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }} className="hover:text-white">Blog</a>
                            <a href="#" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }} className="hover:text-white">Careers</a>
                            <a href="#" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }} className="hover:text-white">Contact</a>
                        </div>
                    </div>
                    <div>
                        <h4 style={{ fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '1.5rem', letterSpacing: '0.1em' }}>STAY UPDATED</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <input type="email" placeholder="Your email" style={{ padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)', color: 'white', fontSize: '0.9rem' }} />
                            <button style={{ padding: '0.8rem', borderRadius: '8px', border: 'none', background: '#4361ee', color: 'white', fontWeight: 'bold', cursor: 'pointer', transition: 'background 0.3s' }}>Subscribe</button>
                        </div>
                    </div>
                </div>

                <div className="container" style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#555' }}>
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
