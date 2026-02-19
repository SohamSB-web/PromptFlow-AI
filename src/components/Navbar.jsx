import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 100,
                padding: '1.5rem 0',
                background: 'linear-gradient(to bottom, rgba(5,5,5,0.8), transparent)',
                backdropFilter: 'blur(5px)'
            }}
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '30px', height: '30px', background: 'var(--accent-blue)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>⚡</div>
                    <span style={{ fontSize: '1.2rem', fontWeight: 'bold', letterSpacing: '-0.02em' }}>PromptFlow AI</span>
                </div>

                <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    {['Solution', 'Benefits', 'Market', 'Docs'].map((item) => (
                        <a key={item} href={`#${item.toLowerCase()}`} style={{ textDecoration: 'none', color: '#ccc', fontSize: '0.9rem', transition: 'color 0.3s' }}>
                            {item}
                        </a>
                    ))}
                </div>

                <button className="btn-primary" style={{ background: 'white', color: 'black' }}>
                    Join Waitlist
                </button>
            </div>
        </motion.nav>
    );
};

export default Navbar;
