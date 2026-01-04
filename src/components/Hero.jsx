import { useEffect, useState } from 'react';
import { ArrowRight } from './Icons';
import logoImage from '../assets/474093244_1695868610995927_8978047970413351123_n.jpg';
import hover_profile from '../assets/482239888_1731346767448111_8414034598668496714_n.jpg';

const Hero = () => {
  const [text, setText] = useState('');
  const phrases = ['Developer', 'UI/Ux Designer', 'Problem Solver', 'Programmer', "Tech Enthusiast","Aspiring Software Engineer"];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [circlePositions, setCirclePositions] = useState([0, 1, 2]); // 0,1,2 represent positions
  const [activeCircle, setActiveCircle] = useState(0);
  const [isJumping, setIsJumping] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[phraseIndex];
      
      if (!isDeleting && text.length === currentPhrase.length) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text.length === 0) {
        setIsDeleting(false);
        setPhraseIndex((phraseIndex + 1) % phrases.length);
      }

      const timeout = setTimeout(() => {
        setText(currentPhrase.substring(0, isDeleting ? text.length - 1 : text.length + 1));
      }, isDeleting ? 50 : 100);

      return () => clearTimeout(timeout);
    };

    const timer = setTimeout(handleTyping, 100);
    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIndex]);

  // Circle switching animation
  useEffect(() => {
    const animationSequence = () => {
      // Step 1: Circle 0 moves to position 1
      setTimeout(() => {
        setActiveCircle(0);
        setIsJumping(true);
        setCirclePositions([1, 0, 2]);
        
        // Step 2: After circle 0 reaches position 1, circle 1 jumps to position 0
        setTimeout(() => {
          setActiveCircle(1);
          setIsJumping(true);
          setCirclePositions([1, 0, 2]); // Keep same positions, circle 1 jumps to top
          
          // Wait 2 seconds
          setTimeout(() => {
            // Step 3: Circle 0 moves to position 2
            setActiveCircle(0);
            setIsJumping(false);
            setCirclePositions([2, 0, 1]);
            
            // Step 4: Circle 2 jumps to position 1
            setTimeout(() => {
              setActiveCircle(2);
              setIsJumping(true);
              setCirclePositions([2, 1, 0]);
              
              // Reset after a delay
              setTimeout(() => {
                setActiveCircle(0);
                setIsJumping(false);
                setCirclePositions([0, 1, 2]);
              }, 2000);
            }, 2000);
          }, 2000);
        }, 2000);
      }, 1000);
    };

    // Start the animation sequence
    const startAnimation = setTimeout(animationSequence, 1000);
    
    // Loop the animation
    const animationInterval = setInterval(animationSequence, 12000); // Full cycle: 12 seconds

    return () => {
      clearTimeout(startAnimation);
      clearInterval(animationInterval);
    };
  }, []);

  // Calculate circle positions
  const getCircleStyle = (circleIndex) => {
    const positions = {
      0: { x: 0, y: 0 },
      1: { x: 73, y: 0 },
      2: { x: 146, y: 0 }
    };
    
    const targetPosition = positions[circlePositions[circleIndex]];
    
    // Special jumping animation for circle 1 when active
    if (circleIndex === activeCircle && isJumping) {
      return {
        transform: `translate(${targetPosition.x}px, -50px)`,
        transition: 'transform 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55)',
        zIndex: 10
      };
    }
    
    // Normal movement
    return {
      transform: `translate(${targetPosition.x}px, ${targetPosition.y}px)`,
      transition: 'transform 1s ease-in-out',
      zIndex: circleIndex + 1
    };
  };

  // Circle colors and labels
  const circleData = [
    { id: 0, color: '#4361ee', label: 'Code' },
    { id: 1, color: '#4cc9f0', label: 'Design' },
    { id: 2, color: '#7209b7', label: 'Create' }
  ];

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm{' '}
              <span className="my-name">Ben joy D. Lipang</span>
            </h1>
            <h2 className="hero-subtitle">
              I'm a{' '}
              <span className="typing-text">
                {text}
                <span className="cursor">|</span>
              </span>
            </h2>
            <div className="hero-description">
              I craft beautiful digital experiences that are fast, accessible, and 
              responsive. Let's build something amazing together.
            </div>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                See My Work <ArrowRight size={20} />
              </a>
              <a href="#contact" className="btn btn-secondary contact-me-btn">
                Contact Me
              </a>
            </div>
            
            {/* Animated Switching Circles */}
            <div className="hero-animation">
              <div className="circle-container">
                {circleData.map((circle) => (
                  <div
                    key={circle.id}
                    className={`circle circle-${circle.id} ${activeCircle === circle.id ? 'active' : ''} ${isJumping && activeCircle === circle.id ? 'jumping' : ''}`}
                    style={getCircleStyle(circle.id)}
                  >
                    <div 
                      className="circle-inner"
                      style={{ backgroundColor: circle.color }}
                    >
                      <div className="circle-number">{circle.id + 1}</div>
                    </div>
                    <div className="circle-glow"></div>
                    <div className="circle-trail"></div>
                  </div>
                ))}
              </div>
              
              {/* Position indicators */}
              <div className="position-indicators">
                <div className="position-indicator pos-0">
                  <div className="indicator-dot"></div>
                  <div className="indicator-line"></div>
                </div>
                <div className="position-indicator pos-1">
                  <div className="indicator-dot"></div>
                  <div className="indicator-line"></div>
                </div>
                <div className="position-indicator pos-2">
                  <div className="indicator-dot"></div>
                  <div className="indicator-line"></div>
                </div>
              </div>
              
              {/* Labels */}
              <div className="animation-labels">
                {circleData.map((circle) => (
                  <div 
                    key={circle.id}
                    className={`animation-label ${circlePositions.indexOf(circle.id) === 1 ? 'active' : ''}`}
                    style={{ 
                      transform: `translateX(${circlePositions.indexOf(circle.id) * 73}px)`,
                      opacity: circlePositions.indexOf(circle.id) === 1 ? 1 : 0.5
                    }}
                  >
                    {circle.label}
                  </div>
                ))}
              </div>
              
              {/* Path visualization */}
              <div className="animation-path">
                <div className="path-line path-line-1"></div>
                <div className="path-line path-line-2"></div>
                <div className="path-dot path-dot-0"></div>
                <div className="path-dot path-dot-1"></div>
                <div className="path-dot path-dot-2"></div>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div 
              className="hero-avatar"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="avatar-glow"></div>
              <div className={`avatar-inner ${isHovering ? 'avatar-hover' : ''}`}>
                <div className={`avatar-content ${isHovering ? 'avatar-content-hover' : ''}`}>
                  <div className="avatar-image-container">
                    <img 
                      src={logoImage}
                      alt="Ben joy D. Lipang" 
                      className={`avatar-image default-image ${isHovering ? 'fade-out' : 'fade-in'}`}
                    />
                    <img 
                      src={hover_profile}
                      alt="Ben joy D. Lipang Hover" 
                      className={`avatar-image hover-image ${isHovering ? 'slide-up' : 'slide-down'}`}
                    />
                  </div>
                </div>
              </div>
              <div className="avatar-back-circle"></div>
            </div>
            <div className="hero-decoration">
              <div className="decoration-1"></div>
              <div className="decoration-2"></div>
              <div className="decoration-3"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const heroStyles = `
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 70px;
  position: relative;
  overflow: hidden;
  opacity: 0;
  animation: fadeInUp 1.5s ease 1.5s forwards;
}

.my-name {
  color: rgba(101, 135, 119, 1);
  font-weight: 700;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 800px;
  height: 800px;
  background: radial-gradient(circle, rgba(67, 97, 238, 0.1) 0%, transparent 70%);
  z-index: -1;
}

.dark-mode .hero::before {
  background: radial-gradient(circle, rgba(67, 97, 238, 0.05) 0%, transparent 70%);
}

.hero-container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 60px;
  align-items: center;
}

@media (min-width: 992px) {
  .hero-content {
    grid-template-columns: 1fr 1fr;
  }
}

.hero-title {
  margin-bottom: 20px;
  font-family: 'Space Grotesk', sans-serif;
}

.hero-subtitle {
  font-size: clamp(1.5rem, 4vw, 2rem);
  margin-bottom: 30px;
  color: var(--gray-700);
  min-height: 60px;
}

.typing-text {
  color: rgba(158, 226, 194, 1);
  font-weight: 700;
}

.cursor {
  animation: blink 1s infinite;
}

.hero-description {
  font-size: 1.1rem;
  max-width: 600px;
  margin-bottom: 40px;
  line-height: 1.7;
}

.hero-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 60px;
}

/* Contact Me Button - Green border on hover */
#home .hero-container .hero-content .hero-text .hero-buttons .btn.contact-me-btn {
  border-color: #e74c3c !important;
  color: #e74c3c !important;
  background: transparent !important;
  transition: all 0.3s ease !important;
  position: relative;
  overflow: hidden;
}

#home .hero-container .hero-content .hero-text .hero-buttons .btn.contact-me-btn:hover {
  border-color: #2ecc71 !important;
  color: #2ecc71 !important;
  box-shadow: 0 0 15px rgba(46, 204, 113, 0.4) !important;
}

#home .hero-container .hero-content .hero-text .hero-buttons .btn.contact-me-btn::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 5px;
  height: 5px;
  background: rgba(46, 204, 113, 0.5);
  opacity: 0;
  border-radius: 100%;
  transform: scale(1, 1) translate(-50%);
  transform-origin: 50% 50%;
}

#home .hero-container .hero-content .hero-text .hero-buttons .btn.contact-me-btn:hover::after {
  animation: ripple 1s ease-out;
}

@keyframes ripple {
  0% {
    transform: scale(0, 0);
    opacity: 0.5;
  }
  20% {
    transform: scale(25, 25);
    opacity: 0.3;
  }
  100% {
    opacity: 0;
    transform: scale(40, 40);
  }
}

/* New Switching Circles Animation */
.hero-animation {
  position: relative;
  width: 168px;
  height: 150px;
  margin-top: 20px;
}

.circle-container {
  position: relative;
  width: 168px;
  height: 48px;
}

.circle {
  position: absolute;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.circle-inner {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.circle.active .circle-inner {
  animation: circleGlow 2s ease-in-out infinite;
}

.circle.jumping .circle-inner {
  animation: jumpPulse 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite;
}

@keyframes circleGlow {
  0%, 100% {
    box-shadow: 0 4px 20px rgba(67, 97, 238, 0.6);
  }
  50% {
    box-shadow: 0 4px 30px rgba(67, 97, 238, 0.9);
  }
}

@keyframes jumpPulse {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 4px 25px rgba(67, 97, 238, 0.8);
  }
  50% {
    transform: scale(1.2);
    box-shadow: 0 4px 40px rgba(67, 97, 238, 1);
  }
}

.circle-number {
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.circle-glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, 
    rgba(255, 255, 255, 0.8) 0%,
    transparent 70%);
  opacity: 0;
  z-index: 1;
}

.circle.active .circle-glow {
  opacity: 0.5;
  animation: glowPulse 2s ease-in-out infinite;
}

@keyframes glowPulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.3;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.6;
  }
}

.circle-trail {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: radial-gradient(circle, currentColor 0%, transparent 70%);
  transform: translate(-50%, -50%);
  opacity: 0;
  z-index: 0;
}

.circle.jumping .circle-trail {
  animation: trailEffect 0.8s ease-out;
}

@keyframes trailEffect {
  0% {
    transform: translate(-50%, -50%) scale(0.5);
    opacity: 0.7;
  }
  100% {
    transform: translate(-50%, -50%) scale(2);
    opacity: 0;
  }
}

/* Position indicators */
.position-indicators {
  display: flex;
  justify-content: space-between;
  width: 168px;
  margin-top: 60px;
  position: relative;
}

.position-indicator {
  position: relative;
  width: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.indicator-dot {
  width: 8px;
  height: 8px;
  background: var(--gray-400);
  border-radius: 50%;
  margin-bottom: 5px;
  transition: all 0.3s ease;
}

.indicator-line {
  width: 2px;
  height: 20px;
  background: linear-gradient(to top, var(--gray-400), transparent);
  transition: all 0.3s ease;
}

.pos-1 .indicator-dot {
  background: var(--primary-color);
  box-shadow: 0 0 10px rgba(67, 97, 238, 0.5);
}

.pos-1 .indicator-line {
  background: linear-gradient(to top, var(--primary-color), transparent);
}

/* Animation labels */
.animation-labels {
  position: absolute;
  top: 70px;
  left: 0;
  width: 168px;
  display: flex;
}

.animation-label {
  position: absolute;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--gray-700);
  transition: all 1s ease;
  text-align: center;
  width: 48px;
}

.dark-mode .animation-label {
  color: var(--gray-300);
}

.animation-label.active {
  color: var(--primary-color);
  font-weight: 700;
  text-shadow: 0 0 10px rgba(67, 97, 238, 0.3);
}

.dark-mode .animation-label.active {
  color: var(--accent-color);
}

/* Path visualization */
.animation-path {
  position: absolute;
  top: 24px;
  left: 0;
  width: 168px;
  height: 1px;
  opacity: 0.3;
}

.path-line {
  position: absolute;
  height: 2px;
  background: var(--primary-color);
  border-radius: 1px;
  transition: all 1s ease;
}

.path-line-1 {
  width: 73px;
  left: 24px;
  transform-origin: left center;
}

.path-line-2 {
  width: 73px;
  left: 97px;
  transform-origin: right center;
}

.path-dot {
  position: absolute;
  width: 6px;
  height: 6px;
  background: var(--primary-color);
  border-radius: 50%;
  top: -2px;
  transition: all 1s ease;
}

.path-dot-0 { left: 24px; }
.path-dot-1 { left: 73px; }
.path-dot-2 { left: 122px; }

/* Animation states */
@keyframes moveToSecond {
  from {
    transform: translateX(0px);
  }
  to {
    transform: translateX(73px);
  }
}

@keyframes jumpToFirst {
  0% {
    transform: translateX(73px) translateY(0);
  }
  50% {
    transform: translateX(36.5px) translateY(-50px);
  }
  100% {
    transform: translateX(0px) translateY(0);
  }
}

@keyframes moveToThird {
  from {
    transform: translateX(73px);
  }
  to {
    transform: translateX(146px);
  }
}

@keyframes jumpToSecond {
  0% {
    transform: translateX(146px) translateY(0);
  }
  50% {
    transform: translateX(109.5px) translateY(-50px);
  }
  100% {
    transform: translateX(73px) translateY(0);
  }
}

.hero-visual {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

.hero-avatar {
  position: relative;
  width: 320px;
  height: 320px;
}

.avatar-glow {
  position: absolute;
  inset: -20px;
  background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
  border-radius: 50%;
  opacity: 0.2;
  filter: blur(20px);
  animation: float 6s ease-in-out infinite;
}

.avatar-inner {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--gray-100), var(--gray-200));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-xl);
  overflow: hidden;
  z-index: 2;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.avatar-inner.avatar-hover {
  background: transparent !important;
  box-shadow: none !important;
}

.dark-mode .avatar-inner {
  background: linear-gradient(135deg, var(--gray-800), var(--gray-900));
}

.dark-mode .avatar-inner.avatar-hover {
  background: transparent !important;
}

.avatar-content {
  width: 260px;
  height: 260px;
  background: linear-gradient(135deg, rgba(67, 97, 238, 0.1), rgba(76, 201, 240, 0.1));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 4px solid var(--light-color);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  position: relative;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.avatar-content.avatar-content-hover {
  background: transparent !important;
  border-color: transparent !important;
  box-shadow: none !important;
}

.dark-mode .avatar-content {
  border-color: var(--gray-900);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.dark-mode .avatar-content.avatar-content-hover {
  background: transparent !important;
  border-color: transparent !important;
}

.avatar-image-container {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
}

.avatar-image {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 50%;
}

.default-image {
  opacity: 1;
  transform: scale(1);
}

.hover-image {
  opacity: 0;
  transform: translateY(100%) scale(0.9);
}

.default-image.fade-out {
  opacity: 0;
  transform: scale(0.95);
}

.default-image.fade-in {
  opacity: 1;
  transform: scale(1);
}

.hover-image.slide-up {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.hover-image.slide-down {
  opacity: 0;
  transform: translateY(100%) scale(0.9);
}

.avatar-back-circle {
  position: absolute;
  width: 340px;
  height: 340px;
  background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
  border-radius: 50%;
  opacity: 0.1;
  z-index: 1;
  animation: pulse 4s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.15;
  }
}

.hero-decoration {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.decoration-1,
.decoration-2,
.decoration-3 {
  position: absolute;
  border-radius: 50%;
  border: 2px dashed var(--primary-color);
  opacity: 0.3;
}

.decoration-1 {
  width: 400px;
  height: 400px;
  top: -50px;
  left: -50px;
  animation: spin 30s linear infinite reverse;
}

.decoration-2 {
  width: 350px;
  height: 350px;
  bottom: -30px;
  right: -30px;
  animation: spin 40s linear infinite;
}

.decoration-3 {
  width: 200px;
  height: 200px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: spin 20s linear infinite reverse;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Primary button styles */
#home .hero-container .hero-content .hero-text .hero-buttons .btn.btn-primary {
  background: #5a8b6eff !important;
  border-color: #2ecc71 !important;
  color: white !important;
}
`;

const styleSheet = document.createElement("style");
styleSheet.textContent = heroStyles;
document.head.appendChild(styleSheet);

export default Hero;