
import { useEffect, useState } from 'react';
import { Code, Sparkles, Terminal, Zap } from 'lucide-react';

const IntroAnimation = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [glitchEffect, setGlitchEffect] = useState(false);
  const [particles, setParticles] = useState([]);

  const introPhrases = [
    'Initializing Portfolio...',
    'Loading Assets...',
    'Compiling Components...',
    'Rendering Interface...',
    'Welcome!'
  ];

  // Particle animation
  useEffect(() => {
    const newParticles = [];
    for (let i = 0; i < 30; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 2 + 0.5,
        color: `hsl(${Math.random() * 60 + 200}, 100%, 70%)`
      });
    }
    setParticles(newParticles);
  }, []);

  // Progress animation
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete(), 500);
          return 100;
        }
        return prev + 0.5;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [onComplete]);

  // Text typing animation
  useEffect(() => {
    if (textIndex >= introPhrases.length) {
      setIsTyping(false);
      setTimeout(() => setShowContent(true), 300);
      return;
    }

    const phrase = introPhrases[textIndex];
    let currentIndex = 0;
    let timeout;

    const type = () => {
      if (currentIndex <= phrase.length) {
        setCurrentText(phrase.substring(0, currentIndex));
        currentIndex++;
        timeout = setTimeout(type, 50);
      } else {
        setTimeout(() => {
          setCurrentText('');
          setTextIndex(prev => prev + 1);
        }, 800);
      }
    };

    type();

    return () => clearTimeout(timeout);
  }, [textIndex]);

  // Glitch effect
  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchEffect(true);
      setTimeout(() => setGlitchEffect(false), 100);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="intro-animation">
      {/* Animated Background */}
      <div className="intro-background">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: particle.color,
              animationDuration: `${5 / particle.speed}s`,
              opacity: 0.6
            }}
          />
        ))}
        
        {/* Grid Pattern */}
        <div className="grid-pattern"></div>
        
        {/* Glitch Overlay */}
        {glitchEffect && <div className="glitch-overlay"></div>}
      </div>

      {/* Main Content */}
      <div className="intro-content">
        {/* Animated Logo/Icon */}
        <div className="intro-icon-container">
          <div className="icon-ring outer">
            <div className="icon-ring middle">
              <div className="icon-ring inner">
                <div className="main-icon">
                  <Terminal size={60} />
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating Icons */}
          <div className="floating-icons">
            <div className="floating-icon code-icon">
              <Code size={24} />
            </div>
            <div className="floating-icon sparkles-icon">
              <Sparkles size={24} />
            </div>
            <div className="floating-icon zap-icon">
              <Zap size={24} />
            </div>
          </div>
        </div>

        {/* Text Display */}
        <div className="intro-text-display">
          <div className="terminal-header">
            <div className="terminal-dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <span className="terminal-title">terminal</span>
          </div>
          
          <div className="text-container">
            <div className="typing-text">
              <span className="prompt">$ </span>
              <span className="text-content">{currentText}</span>
              <span className={`cursor ${isTyping ? 'blinking' : ''}`}>█</span>
            </div>
            
            {/* Progress Bar */}
            <div className="progress-container">
              <div className="progress-bar">
                <div 
                  className="progress-fill"
                  style={{ width: `${progress}%` }}
                />
                <div className="progress-glow" />
              </div>
              <span className="progress-text">{Math.round(progress)}%</span>
            </div>

            {/* Status Indicators */}
            <div className="status-indicators">
              <div className="status-item">
                <div className="status-led active"></div>
                <span className="status-label">SYSTEM</span>
              </div>
              <div className="status-item">
                <div className={`status-led ${progress > 30 ? 'active' : ''}`}></div>
                <span className="status-label">UI</span>
              </div>
              <div className="status-item">
                <div className={`status-led ${progress > 60 ? 'active' : ''}`}></div>
                <span className="status-label">DATA</span>
              </div>
              <div className="status-item">
                <div className={`status-led ${progress > 90 ? 'active' : ''}`}></div>
                <span className="status-label">READY</span>
              </div>
            </div>
          </div>
        </div>

        {/* Welcome Message - Fades in at the end */}
        {showContent && (
          <div className="welcome-message">
            <h1 className="welcome-title">PORTFOLIO</h1>
            <p className="welcome-subtitle">Ben Joy D. Lipang</p>
            <p className="welcome-tagline">Developer & Designer</p>
          </div>
        )}

        {/* Skip Button */}
        <button 
          className="skip-button"
          onClick={() => onComplete()}
        >
          Skip Intro
        </button>
      </div>

      {/* Style Injection */}
      <style jsx>{`
        .intro-animation {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
          z-index: 9999;
          overflow: hidden;
          font-family: 'Courier New', monospace;
        }

        .intro-background {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .particle {
          position: absolute;
          border-radius: 50%;
          animation: float infinite linear;
        }

        @keyframes float {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }

        .grid-pattern {
          position: absolute;
          width: 200%;
          height: 200%;
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: slide 20s linear infinite;
          opacity: 0.3;
        }

        @keyframes slide {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(-50px, -50px);
          }
        }

        .glitch-overlay {
          position: absolute;
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, 
            transparent 48%, 
            rgba(0, 255, 255, 0.1) 49%, 
            rgba(0, 255, 255, 0.1) 51%, 
            transparent 52%
          );
          background-size: 200% 200%;
          animation: glitch 0.3s steps(2, end);
        }

        @keyframes glitch {
          0% {
            background-position: 0 0;
            opacity: 0.3;
          }
          20% {
            background-position: -5% -10%;
            opacity: 0.5;
          }
          40% {
            background-position: 10% 5%;
            opacity: 0.3;
          }
          60% {
            background-position: -15% -5%;
            opacity: 0.5;
          }
          80% {
            background-position: 5% 15%;
            opacity: 0.3;
          }
          100% {
            background-position: 0 0;
            opacity: 0;
          }
        }

        .intro-content {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px;
          z-index: 2;
        }

        .intro-icon-container {
          position: relative;
          margin-bottom: 60px;
        }

        .icon-ring {
          position: absolute;
          border-radius: 50%;
          border: 2px solid;
          animation: rotate infinite linear;
        }

        .icon-ring.outer {
          width: 200px;
          height: 200px;
          border-color: rgba(67, 97, 238, 0.3);
          animation-duration: 20s;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .icon-ring.middle {
          width: 160px;
          height: 160px;
          border-color: rgba(76, 201, 240, 0.4);
          animation-duration: 15s;
          animation-direction: reverse;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .icon-ring.inner {
          width: 120px;
          height: 120px;
          border-color: rgba(114, 9, 183, 0.5);
          animation-duration: 10s;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        @keyframes rotate {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        .main-icon {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: #4cc9f0;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.1);
            opacity: 0.8;
          }
        }

        .floating-icons {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .floating-icon {
          position: absolute;
          color: white;
          animation: floatIcon infinite ease-in-out;
        }

        .code-icon {
          top: 20%;
          left: 20%;
          animation-duration: 8s;
          animation-delay: 0s;
          color: #4361ee;
        }

        .sparkles-icon {
          top: 70%;
          right: 20%;
          animation-duration: 7s;
          animation-delay: 1s;
          color: #7209b7;
        }

        .zap-icon {
          bottom: 20%;
          left: 40%;
          animation-duration: 9s;
          animation-delay: 2s;
          color: #4cc9f0;
        }

        @keyframes floatIcon {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          25% {
            transform: translateY(-20px) rotate(5deg);
          }
          50% {
            transform: translateY(0) rotate(0deg);
          }
          75% {
            transform: translateY(20px) rotate(-5deg);
          }
        }

        .intro-text-display {
          background: rgba(0, 0, 0, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          padding: 20px;
          width: 90%;
          max-width: 600px;
          backdrop-filter: blur(10px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }

        .terminal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 15px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          margin-bottom: 20px;
        }

        .terminal-dots {
          display: flex;
          gap: 8px;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }

        .dot.red { background: #ff5f56; }
        .dot.yellow { background: #ffbd2e; }
        .dot.green { background: #27ca3f; }

        .terminal-title {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.9rem;
          letter-spacing: 1px;
        }

        .text-container {
          padding: 10px 0;
        }

        .typing-text {
          font-family: 'Courier New', monospace;
          font-size: 1.2rem;
          color: #00ff9d;
          margin-bottom: 30px;
          min-height: 30px;
        }

        .prompt {
          color: #4cc9f0;
          font-weight: bold;
        }

        .cursor {
          display: inline-block;
          width: 8px;
          background: #00ff9d;
          margin-left: 2px;
          animation: cursorBlink 1s infinite;
        }

        .cursor.blinking {
          animation: cursorBlink 0.7s infinite;
        }

        @keyframes cursorBlink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        .progress-container {
          margin: 30px 0;
        }

        .progress-bar {
          position: relative;
          height: 8px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          overflow: hidden;
          margin-bottom: 10px;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #4361ee, #4cc9f0);
          border-radius: 4px;
          transition: width 0.3s ease;
          position: relative;
          z-index: 1;
        }

        .progress-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, 
            transparent, 
            rgba(76, 201, 240, 0.3), 
            transparent);
          animation: shimmer 2s infinite;
          filter: blur(2px);
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .progress-text {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.9rem;
          display: block;
          text-align: center;
        }

        .status-indicators {
          display: flex;
          justify-content: space-around;
          margin-top: 40px;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .status-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .status-led {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .status-led.active {
          background: #27ca3f;
          box-shadow: 0 0 10px #27ca3f;
          animation: ledPulse 1s infinite;
        }

        @keyframes ledPulse {
          0%, 100% {
            box-shadow: 0 0 10px #27ca3f;
          }
          50% {
            box-shadow: 0 0 20px #27ca3f;
          }
        }

        .status-label {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.8rem;
          letter-spacing: 1px;
        }

        .welcome-message {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          animation: fadeInUp 1s ease-out;
          z-index: 3;
          background: rgba(0, 0, 0, 0.8);
          padding: 40px;
          border-radius: 20px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translate(-50%, -40%);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%);
          }
        }

        .welcome-title {
          font-size: 3rem;
          background: linear-gradient(135deg, #4361ee, #7209b7, #4cc9f0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 10px;
          letter-spacing: 3px;
          animation: titleGlow 2s infinite alternate;
        }
        @keyframes titleGlow {
          from {
            filter: drop-shadow(0 0 10px rgba(67, 97, 238, 0.5));
          }
          to {
            filter: drop-shadow(0 0 20px rgba(76, 201, 240, 0.8));
          }
        }

        .welcome-subtitle {
          font-size: 1.5rem;
          color: white;
          margin-bottom: 5px;
          letter-spacing: 2px;
        }

        .welcome-tagline {
          color: rgba(255, 255, 255, 0.7);
          font-size: 1rem;
          letter-spacing: 1px;
        }
        .skip-button {
          position: absolute;
          bottom: 30px;
          right: 30px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: rgba(255, 255, 255, 0.7);
          padding: 8px 20px;
          border-radius: 20px;
          cursor: pointer;
          font-family: 'Courier New', monospace;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          z-index: 4;
        }

        .skip-button:hover {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .welcome-title {
            font-size: 2rem;
          }
          
          .welcome-subtitle {
            font-size: 1.2rem;
          }
          
          .intro-text-display {
            width: 95%;
            padding: 15px;
          }
          
          .typing-text {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default IntroAnimation;
