import React from 'react';
import { motion, useTransform } from 'framer-motion';

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

export default Hero;
