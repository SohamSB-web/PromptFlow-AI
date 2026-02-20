import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const IMAGES = [
    "https://images.unsplash.com/photo-1542281286-9e0a16bb7366", // Dark sand dunes
    "https://images.unsplash.com/photo-1506744626753-1fa44df14c28", // Mountains
    "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0"  // Dark abstract
];

export default function LoginPage() {
    const [isLogin, setIsLogin] = useState(false); // Default to sign up based on reference
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Auto-scroll images every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % IMAGES.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const toggleMode = () => setIsLogin(!isLogin);

    return (
        <div className="login-wrapper">
            <motion.div
                className="login-grid"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                {/* Left Panel: Image Slider */}
                <div className="login-image-panel">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentImageIndex}
                            className="login-image-bg"
                            style={{ backgroundImage: `url(${IMAGES[currentImageIndex]})` }}
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                        />
                    </AnimatePresence>
                    <div className="login-image-overlay" />

                    <div className="image-panel-content">
                        {/* Top Context */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div className="amu-logo">
                                AMU
                            </div>
                            <Link to="/" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                Back to website <span>→</span>
                            </Link>
                        </div>

                        {/* Bottom Context */}
                        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 500, lineHeight: 1.2, marginBottom: '2rem' }}>
                                Capturing Moments,<br />Creating Memories
                            </h2>
                            <div className="slider-indicators">
                                {IMAGES.map((_, idx) => (
                                    <div
                                        key={idx}
                                        className={`slider-dot ${idx === currentImageIndex ? 'active' : ''}`}
                                        onClick={() => setCurrentImageIndex(idx)}
                                        style={{ cursor: 'pointer' }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Panel: Form */}
                <div className="login-form-panel">
                    <div style={{ marginBottom: '2.5rem' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', fontWeight: 600 }}>
                            {isLogin ? 'Log in' : 'Create an account'}
                        </h2>
                        <p style={{ color: 'var(--ref-text-secondary)', fontSize: '0.95rem' }}>
                            {isLogin ? "Don't have an account? " : "Already have an account? "}
                            <span onClick={toggleMode} style={{ color: 'var(--ref-primary)', cursor: 'pointer', textDecoration: 'underline' }}>
                                {isLogin ? 'Sign up' : 'Log in'}
                            </span>
                        </p>
                    </div>

                    <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>

                        {!isLogin && (
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem' }}>
                                <input type="text" className="ref-input" placeholder="First name" defaultValue="Fletcher" />
                                <input type="text" className="ref-input" placeholder="Last name" />
                            </div>
                        )}

                        <input type="email" className="ref-input" placeholder="Email" />

                        {isLogin && (
                            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '0.2rem', marginTop: '-0.5rem' }}>
                                <a href="#" style={{ fontSize: '0.85rem', color: 'var(--ref-primary)', textDecoration: 'none' }}>Forgot password?</a>
                            </div>
                        )}
                        <div style={{ position: 'relative' }}>
                            <input type="password" className="ref-input" placeholder="Enter your password" />
                            {/* Eye icon placeholder */}
                            <div style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--ref-text-secondary)', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                </svg>
                            </div>
                        </div>

                        {!isLogin && (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginTop: '0.5rem' }}>
                                <input type="checkbox" id="terms" className="custom-checkbox" defaultChecked />
                                <label htmlFor="terms" style={{ fontSize: '0.85rem', color: 'var(--ref-text-secondary)', cursor: 'pointer' }}>
                                    I agree to the <span style={{ textDecoration: 'underline' }}>Terms & Conditions</span>
                                </label>
                            </div>
                        )}

                        <motion.button
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.98 }}
                            className="ref-btn"
                            style={{ marginTop: '0.5rem' }}
                        >
                            {isLogin ? 'Log in' : 'Create account'}
                        </motion.button>
                    </form>

                    <div className="divider">Or register with</div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem' }}>
                        <button className="ref-oauth-btn">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                            </svg>
                            Google
                        </button>
                        <button className="ref-oauth-btn">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.035 8.164c-.033-2.583 2.106-3.83 2.203-3.886-1.21-1.782-3.08-2.023-3.753-2.05-1.58-.16-3.086.945-3.896.945-.81 0-2.053-1.034-3.376-1.004-1.714.03-3.292.996-4.184 2.55-1.801 3.125-.46 7.756 1.292 10.323.864 1.268 1.895 2.69 3.208 2.637 1.282-.055 1.767-.833 3.32-.833 1.551 0 1.999.833 3.32.808 1.353-.03 2.235-1.298 3.093-2.56.993-1.464 1.401-2.885 1.422-2.956-.03-.013-2.731-1.047-2.65-4.174zM14.653 3.82c.706-.856 1.183-2.049 1.053-3.251-1.037.042-2.274.693-2.997 1.564-.644.77-1.168 1.986-1.018 3.167 1.155.09 2.257-.611 2.962-1.48z" />
                            </svg>
                            Apple
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
