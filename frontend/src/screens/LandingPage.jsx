import React, { useState, useEffect } from 'react';
import { motion, useTransform } from 'framer-motion';
import ScrollSequence from '../components/ScrollSequence';

// --- Navbar Component ---
const Navbar = () => {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['solution', 'benefits', 'contact'];

            // Default to empty (no active section)
            let current = '';

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // Check if the section is occupying the top-middle part of the viewport
                    // We use 150px offset to account for navbar height + a bit of buffer
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        current = section;
                    }
                }
            }

            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 100,
                padding: '1.5rem 0',
                background: 'rgba(5, 5, 5, 0.6)',
                backdropFilter: 'blur(10px)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
            }}
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    style={{ display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer' }}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    <div style={{
                        width: '40px',
                        height: '40px',
                        background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-purple))',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 'bold',
                        boxShadow: '0 0 15px var(--accent-glow)'
                    }}>⚡</div>
                    <span style={{ fontSize: '1.2rem', fontWeight: 'bold', letterSpacing: '-0.02em' }}>PromptFlow AI</span>
                </motion.div>

                <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="hidden-mobile">
                    {['Solution', 'Benefits', 'Contact'].map((item, index) => {
                        const isActive = activeSection === item.toLowerCase();
                        return (
                            <motion.a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    const section = document.getElementById(item.toLowerCase());
                                    if (section) {
                                        section.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 + (index * 0.1) }}
                                whileHover={{ scale: 1.1 }}
                                style={{
                                    textDecoration: 'none',
                                    color: isActive ? 'white' : '#888',
                                    fontSize: '0.95rem',
                                    fontWeight: isActive ? 600 : 500,
                                    transition: 'all 0.3s ease',
                                    position: 'relative'
                                }}
                            >
                                {item}
                                {isActive && (
                                    <motion.div
                                        layoutId="activeTab"
                                        style={{
                                            position: 'absolute',
                                            bottom: '-5px',
                                            left: 0,
                                            width: '100%',
                                            height: '2px',
                                            background: 'linear-gradient(90deg, var(--accent-blue), var(--accent-purple))',
                                            borderRadius: '2px',
                                            boxShadow: '0 0 10px var(--accent-blue)'
                                        }}
                                    />
                                )}
                            </motion.a>
                        );
                    })}
                </div>

                {/* Wrapped in motion.div to isolate entry delay from hover transition */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <motion.button
                        whileHover={{
                            scale: 1.05,
                            y: -2,
                            transition: { duration: 0.2 }
                        }}
                        className="btn-primary"
                        style={{ padding: '0.7rem 1.5rem', fontSize: '0.9rem' }}
                    >
                        Join Waitlist
                    </motion.button>
                </motion.div>
            </div>
        </motion.nav>
    );
};

// --- Hero Component ---
const Hero = ({ scrollYProgress }) => {
    // Scene 1: Initial (0 - 0.3)
    const opacity1 = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0]);
    const scale1 = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);
    const pointerEvents1 = useTransform(scrollYProgress, (v) => v > 0.3 ? 'none' : 'auto');

    // Scene 2: Middle (0.3 - 0.6)
    const opacity2 = useTransform(scrollYProgress, [0.3, 0.4, 0.6, 0.7], [0, 1, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.3, 0.5], [50, 0]);
    const pointerEvents2 = useTransform(scrollYProgress, (v) => (v > 0.3 && v < 0.7) ? 'auto' : 'none');

    // Scene 3: End (0.6 - 0.9)
    const opacity3 = useTransform(scrollYProgress, [0.65, 0.75, 0.95], [0, 1, 1]);
    const y3 = useTransform(scrollYProgress, [0.65, 0.8], [50, 0]);

    // Floating animation variants
    const floatVariant = {
        animate: {
            y: [0, -20, 0],
            transition: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <div style={{ height: '100vh', width: '100%', position: 'relative', overflow: 'hidden' }}>

            {/* Ambient Background Elements */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}>
                <motion.div
                    animate={{ x: [0, 100, 0], y: [0, 50, 0], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    style={{ position: 'absolute', top: '20%', left: '20%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(67, 97, 238, 0.2) 0%, transparent 70%)', filter: 'blur(40px)' }}
                />
                <motion.div
                    animate={{ x: [0, -100, 0], y: [0, -50, 0], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    style={{ position: 'absolute', bottom: '20%', right: '20%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(123, 44, 191, 0.2) 0%, transparent 70%)', filter: 'blur(40px)' }}
                />
            </div>

            {/* Scene 1: Intro */}
            <motion.div
                style={{
                    opacity: opacity1,
                    scale: scale1,
                    pointerEvents: pointerEvents1,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    zIndex: 10
                }}
            >
                <div className="container" style={{ textAlign: 'center' }}>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        style={{ fontSize: '1.2rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem', color: '#4361EE', fontWeight: 600 }}
                    >
                        The Future of Video Editing
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                        className="gradient-text"
                        style={{
                            fontSize: 'clamp(3rem, 8vw, 6.5rem)',
                            marginBottom: '1.5rem',
                            letterSpacing: '-0.03em',
                            textShadow: '0 0 50px rgba(67, 97, 238, 0.4)'
                        }}
                    >
                        PromptFlow AI.
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        style={{ fontSize: '1.5rem', fontWeight: 500, maxWidth: '600px', margin: '0 auto', color: 'rgba(255,255,255,0.8)' }}
                    >
                        AI-Powered Prompt-Based Editing
                    </motion.div>
                </div>
            </motion.div>

            {/* Scene 2: The Solution */}
            <motion.div
                style={{
                    opacity: opacity2,
                    y: y2,
                    pointerEvents: pointerEvents2,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end', // Align right
                    paddingRight: '10%',
                    zIndex: 10
                }}
            >
                <div style={{ textAlign: 'right', maxWidth: '600px' }}>
                    <h2 style={{ fontSize: '4.5rem', lineHeight: '1.05', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
                        Skip the<br />
                        <span className="gradient-text">grunt work.</span>
                    </h2>
                    <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
                        A natural-language video editor that lets creators skip hours of manual work by simply describing what they want.
                    </p>
                </div>
            </motion.div>

            {/* Scene 3: Example Command */}
            <motion.div
                style={{
                    opacity: opacity3,
                    y: y3,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start', // Align left
                    paddingLeft: '10%',
                    zIndex: 10
                }}
            >
                <div style={{ textAlign: 'left', maxWidth: '650px' }}>
                    <h2 style={{ fontSize: '4.5rem', lineHeight: '1.05', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
                        Just <span style={{ color: '#A5B4FC' }}>ask.</span>
                    </h2>

                    <motion.div
                        variants={floatVariant}
                        animate="animate"
                        className="glass-card"
                        style={{
                            padding: '2rem',
                            marginBottom: '1.5rem',
                            background: 'rgba(5, 5, 5, 0.6)',
                            border: '1px solid rgba(165, 180, 252, 0.2)'
                        }}
                    >
                        <div style={{ fontFamily: 'monospace', fontSize: '1.3rem', color: '#A5B4FC', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span style={{ color: '#4361EE' }}>&gt;</span>
                            "Cut 0:13 to 0:15 and add fire when I wave my hand"
                            <motion.span
                                animate={{ opacity: [1, 0] }}
                                transition={{ duration: 0.8, repeat: Infinity }}
                                style={{ width: '10px', height: '20px', background: '#A5B4FC', display: 'inline-block' }}
                            />
                        </div>
                    </motion.div>

                    <p style={{ fontSize: '1.2rem', color: '#ccc', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '24px', height: '24px', background: 'rgba(74, 222, 128, 0.2)', borderRadius: '50%', color: '#4ade80', fontSize: '14px' }}>✓</span>
                        <span style={{ color: '#4ade80', fontWeight: 'bold' }}>Processed instantly.</span>
                    </p>
                </div>
            </motion.div>

            {/* Scroll indicator - Only visible in Scene 1 */}
            <motion.div
                style={{ position: 'absolute', bottom: '2rem', left: '50%', translateX: '-50%', opacity: opacity1, zIndex: 20 }}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontSize: '0.75rem', opacity: 0.6, letterSpacing: '0.2em' }}>SCROLL TO EDIT</span>
                    <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, rgba(255,255,255,0.5), transparent)' }}></div>
                </div>
            </motion.div>
        </div>
    );
};

// --- Features Component ---
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
                {/* Market Validation / Stats Section */}
                <div id="market" style={{ position: 'absolute', top: 0, left: 0, width: '1px', height: '1px', visibility: 'hidden' }}></div>
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

// --- Main Landing Page Compositor ---
export default function LandingPage() {
    return (
        <div className="landing-page" style={{ position: 'relative' }}>
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
