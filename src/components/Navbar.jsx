import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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

export default Navbar;
