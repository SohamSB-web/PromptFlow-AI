import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

const IMAGES = [
    "https://images.unsplash.com/photo-1542281286-9e0a16bb7366",
    "https://images.unsplash.com/photo-1506744626753-1fa44df14c28",
    "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0"
];

const fadeSlide = {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -16 },
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
};

export default function LoginPage() {
    const [isLogin, setIsLogin] = useState(true);
    const [signupStep, setSignupStep] = useState(1);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [activeVideo, setActiveVideo] = useState(1);
    const video1Ref = useRef(null);
    const video2Ref = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % IMAGES.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        let animationFrameId;
        const checkVideoTime = () => {
            const currentVideo = activeVideo === 1 ? video1Ref.current : video2Ref.current;
            const nextVideo = activeVideo === 1 ? video2Ref.current : video1Ref.current;

            if (currentVideo && nextVideo && currentVideo.duration) {
                if (currentVideo.currentTime >= currentVideo.duration - 0.5) {
                    nextVideo.currentTime = 0;
                    const playPromise = nextVideo.play();
                    if (playPromise !== undefined) {
                        playPromise.catch(() => { });
                    }
                    setActiveVideo(activeVideo === 1 ? 2 : 1);
                }
            }
            animationFrameId = requestAnimationFrame(checkVideoTime);
        };

        animationFrameId = requestAnimationFrame(checkVideoTime);

        return () => {
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
        };
    }, [activeVideo]);

    const toggleMode = () => {
        setIsLogin(!isLogin);
        setSignupStep(1);
    };

    const handleCreateAccount = (e) => {
        e.preventDefault();
        if (!isLogin && signupStep === 1) {
            setSignupStep(2);
        } else if (!isLogin && signupStep === 2) {
            navigate('/dashboard');
        }
    };

    const handleLogin = (e) => {
        e.preventDefault();
        navigate('/dashboard');
    };

    // Determine form key for AnimatePresence
    const formKey = isLogin ? 'login' : `signup-step${signupStep}`;

    return (
        <div className="login-wrapper">
            <video
                ref={video1Ref}
                autoPlay
                muted
                playsInline
                className={`login-bg-video ${activeVideo === 1 ? 'visible' : 'hidden'}`}
            >
                <source src="/final.mp4" type="video/mp4" />
            </video>
            <video
                ref={video2Ref}
                muted
                playsInline
                className={`login-bg-video ${activeVideo === 2 ? 'visible' : 'hidden'}`}
            >
                <source src="/final.mp4" type="video/mp4" />
            </video>
            <div className="login-bg-overlay"></div>

            <motion.div
                className="login-grid"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                {/* Left Panel: Image Slider & Context */}
                <div className="login-image-panel">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentImageIndex}
                            className="login-image-bg"
                            style={{ backgroundImage: `url(${IMAGES[currentImageIndex]})` }}
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8 }}
                        />
                    </AnimatePresence>
                    <div className="login-image-overlay" />

                    <div className="image-panel-content">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div className="amu-logo">
                                PromptFlow AI
                            </div>
                            <Link
                                to="/"
                                style={{
                                    color: 'white',
                                    textDecoration: 'none',
                                    fontSize: '0.85rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    background: 'rgba(255, 255, 255, 0.1)',
                                    backdropFilter: 'blur(10px)',
                                    WebkitBackdropFilter: 'blur(10px)',
                                    padding: '0.5rem 1rem',
                                    borderRadius: '20px',
                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                    transition: 'background 0.3s ease'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
                                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
                            >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'rotate(180deg)' }}>
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                </svg>
                                Back to website
                            </Link>
                        </div>

                        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                            <h2 style={{ fontSize: '2rem', fontWeight: 500, lineHeight: 1.2, marginBottom: '2rem', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
                                Natural-language video editing
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

                {/* Right Panel: Form — fixed size, content crossfades inside */}
                <div className="login-form-panel">
                    <AnimatePresence mode="wait" initial={false}>
                        <motion.div
                            key={formKey}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
                            style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
                        >
                            {/* ===== LOGIN ===== */}
                            {isLogin && (
                                <>
                                    <div style={{ marginBottom: '2.5rem' }}>
                                        <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', fontWeight: 600 }}>Log in</h2>
                                        <p style={{ color: 'var(--ref-text-secondary)', fontSize: '0.95rem' }}>
                                            Don't have an account?{' '}
                                            <span onClick={toggleMode} style={{ color: 'var(--ref-primary)', cursor: 'pointer', textDecoration: 'underline' }}>Sign up</span>
                                        </p>
                                    </div>

                                    <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                                        <input type="email" className="ref-input" placeholder="Email" style={{ marginBottom: '1.2rem' }} />
                                        <div style={{ position: 'relative', marginBottom: '0.5rem' }}>
                                            <input type="password" className="ref-input" placeholder="Enter your password" />
                                            <div style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--ref-text-secondary)', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                    <circle cx="12" cy="12" r="3"></circle>
                                                </svg>
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1.5rem' }}>
                                            <a href="#" style={{ fontSize: '0.85rem', color: 'var(--ref-primary)', textDecoration: 'none' }}>Forgot password?</a>
                                        </div>

                                        <motion.button
                                            whileHover={{ scale: 1.01 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="ref-btn"
                                            type="submit"
                                        >
                                            Log in
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
                                                <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                                            </svg>
                                            Apple
                                        </button>
                                    </div>
                                </>
                            )}

                            {/* ===== SIGNUP STEP 1 ===== */}
                            {!isLogin && signupStep === 1 && (
                                <>
                                    <div style={{ marginBottom: '2.5rem' }}>
                                        <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', fontWeight: 600 }}>Create an account</h2>
                                        <p style={{ color: 'var(--ref-text-secondary)', fontSize: '0.95rem' }}>
                                            Already have an account?{' '}
                                            <span onClick={toggleMode} style={{ color: 'var(--ref-primary)', cursor: 'pointer', textDecoration: 'underline' }}>Log in</span>
                                        </p>
                                    </div>

                                    <form onSubmit={handleCreateAccount} style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                                        <input type="email" className="ref-input" placeholder="Email" style={{ marginBottom: '1.2rem' }} />
                                        <div style={{ position: 'relative', marginBottom: '1.2rem' }}>
                                            <input type="password" className="ref-input" placeholder="Create a password" />
                                            <div style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--ref-text-secondary)', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                    <circle cx="12" cy="12" r="3"></circle>
                                                </svg>
                                            </div>
                                        </div>

                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.5rem' }}>
                                            <input type="checkbox" id="terms" className="custom-checkbox" defaultChecked />
                                            <label htmlFor="terms" style={{ fontSize: '0.85rem', color: 'var(--ref-text-secondary)', cursor: 'pointer' }}>
                                                I agree to the <span style={{ textDecoration: 'underline' }}>Terms & Conditions</span>
                                            </label>
                                        </div>

                                        <motion.button
                                            whileHover={{ scale: 1.01 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="ref-btn"
                                            type="submit"
                                        >
                                            Create account
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
                                                <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                                            </svg>
                                            Apple
                                        </button>
                                    </div>
                                </>
                            )}

                            {/* ===== SIGNUP STEP 2: Personal Details ===== */}
                            {!isLogin && signupStep === 2 && (
                                <>
                                    <div style={{ marginBottom: '2.5rem' }}>
                                        <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', fontWeight: 600 }}>Personal details</h2>
                                        <p style={{ color: 'var(--ref-text-secondary)', fontSize: '0.95rem' }}>
                                            Almost there! Fill in your details.
                                        </p>
                                    </div>

                                    <form onSubmit={handleCreateAccount} style={{ display: 'flex', flexDirection: 'column', flex: 1, gap: '1.2rem' }}>
                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem' }}>
                                            <input type="text" className="ref-input" placeholder="First name" />
                                            <input type="text" className="ref-input" placeholder="Last name" />
                                        </div>
                                        <input type="text" className="ref-input" placeholder="Company / Organization (optional)" />
                                        <input type="tel" className="ref-input" placeholder="Phone number (optional)" />
                                        <select className="ref-input" defaultValue="" style={{ color: 'var(--ref-text-secondary)' }}>
                                            <option value="" disabled>Select your role</option>
                                            <option value="creator">Content Creator</option>
                                            <option value="editor">Video Editor</option>
                                            <option value="designer">Designer</option>
                                            <option value="developer">Developer</option>
                                            <option value="student">Student</option>
                                            <option value="other">Other</option>
                                        </select>

                                        <div style={{ display: 'flex', gap: '1.2rem', marginTop: 'auto', paddingTop: '1rem' }}>
                                            <motion.button
                                                type="button"
                                                whileHover={{ scale: 1.01 }}
                                                whileTap={{ scale: 0.98 }}
                                                className="ref-oauth-btn"
                                                onClick={() => setSignupStep(1)}
                                                style={{ flex: 1, justifyContent: 'center' }}
                                            >
                                                Back
                                            </motion.button>
                                            <motion.button
                                                whileHover={{ scale: 1.01 }}
                                                whileTap={{ scale: 0.98 }}
                                                className="ref-btn"
                                                type="submit"
                                                style={{ flex: 1 }}
                                            >
                                                Get started
                                            </motion.button>
                                        </div>
                                    </form>
                                </>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </motion.div>
        </div>
    );
}
