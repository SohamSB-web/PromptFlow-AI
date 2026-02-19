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

    return (
        <div style={{ height: '100vh', width: '100%', position: 'relative' }}>

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
                    flexDirection: 'column'
                }}
            >
                <div className="container" style={{ textAlign: 'center' }}>
                    <p style={{ fontSize: '1.2rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem', color: '#4361EE' }}>
                        The Future of Video
                    </p>
                    <h1 style={{
                        fontSize: 'clamp(3rem, 8vw, 6rem)',
                        marginBottom: '1rem',
                        background: 'linear-gradient(to right, #fff, #a5b4fc)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        textShadow: '0 0 30px rgba(67, 97, 238, 0.3)'
                    }}>
                        PromptFlow AI.
                    </h1>
                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold', maxWidth: '600px', margin: '0 auto' }}>
                        AI-Powered Prompt-Based Editing
                    </div>
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
                    paddingRight: '10%'
                }}
            >
                <div style={{ textAlign: 'right', maxWidth: '600px' }}>
                    <h2 style={{ fontSize: '4rem', lineHeight: '1.1', marginBottom: '1rem' }}>
                        Skip the<br />grunt work.
                    </h2>
                    <p style={{ fontSize: '1.2rem', color: '#ccc' }}>
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
                    paddingLeft: '10%'
                }}
            >
                <div style={{ textAlign: 'left', maxWidth: '600px' }}>
                    <h2 style={{ fontSize: '4rem', lineHeight: '1.1', marginBottom: '1rem' }}>
                        Just ask.
                    </h2>
                    <div style={{
                        background: 'rgba(255,255,255,0.1)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        padding: '1.5rem',
                        borderRadius: '10px',
                        fontFamily: 'monospace',
                        fontSize: '1.2rem',
                        marginBottom: '1rem',
                        color: '#A5B4FC'
                    }}>
                        "Cut 0:13 to 0:15 and add fire when I wave my hand"
                    </div>
                    <p style={{ fontSize: '1.2rem', color: '#ccc' }}>
                        <span style={{ color: '#4ade80', fontWeight: 'bold' }}>✓ Done automatically.</span>
                    </p>
                </div>
            </motion.div>

            {/* Scroll indicator - Only visible in Scene 1 */}
            <motion.div
                style={{ position: 'absolute', bottom: '2rem', left: '50%', translateX: '-50%', opacity: opacity1 }}
            >
                <span style={{ fontSize: '0.8rem', opacity: 0.6 }}>SCROLL TO EDIT</span>
            </motion.div>
        </div>
    );
};

export default Hero;
