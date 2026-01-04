import { Heart } from './Icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              Portfolio
            </a>
            <p className="footer-description">
              Creating beautiful, functional digital experiences that make a difference. 
              Let's build the future together.
            </p>
            
            {/* Netflix-style Bench branding */}
            <div className="footer-bench-container">
              <span className="footer-bench-text">Bench</span>
              <div className="footer-bench-logo">
                <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 6L6 16L16 26L26 16L16 6Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 12L20 20" stroke="currentColor" strokeWidth="2"/>
                  <path d="M20 12L12 20" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
            </div>
          </div>
          
          <div className="footer-links">
            <h4 className="footer-links-title">Quick Links</h4>
            <ul className="footer-links-list">
              <li><a href="#home" className="footer-link">Home</a></li>
              <li><a href="#about" className="footer-link">About</a></li>
              <li><a href="#skills" className="footer-link">Skills</a></li>
              <li><a href="#projects" className="footer-link">Projects</a></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4 className="footer-links-title">Connect</h4>
            <ul className="footer-links-list">
              <li><a href="" className="footer-link">Facebook</a></li>
              <li><a href="" className="footer-link">Instagram</a></li>
              <li><a href="" className="footer-link">Tiktok</a></li>
              <li><a href="" className="footer-link">Github</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Portfolio. Made with <Heart size={16} className="footer-heart" /> by Bench Lipang.
          </p>
          <p className="footer-built">
            💖 Built With Passion And Love 💖
          </p>
        </div>
      </div>
    </footer>
  );
};

// Add CSS for Footer component
const footerStyles = `
.footer {
  background: var(--gray-900);
  color: var(--gray-300);
  border-top: 1px solid var(--gray-800);
  margin-top: auto;
}

.dark-mode .footer {
  background: #0a0a0a;
}

.footer-container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 60px 20px 40px;
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  margin-bottom: 60px;
}

@media (min-width: 768px) {
  .footer-content {
    grid-template-columns: 2fr 1fr 1fr;
  }
}

.footer-brand {
  max-width: 400px;
}

.footer-logo {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-decoration: none;
  margin-bottom: 20px;
  display: inline-block;
}

.footer-description {
  color: var(--gray-500);
  line-height: 1.7;
  margin-bottom: 0;
}

/* Netflix-style Bench branding */
.footer-bench-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 8px;
  border-top: 1px solid var(--gray-700);
  position: relative;
}

/* Desktop: translateY(50px) */
@media (min-width: 768px) {
  .footer-bench-container {
    transform: translateY(50px);
  }
}

/* Mobile: fixed position */
@media (max-width: 767px) {
  .footer-bench-container {
    transform: none;
    margin-top: 30px; /* Add some spacing on mobile */
  }
}

.footer-bench-text {
  font-size: 50px;
  font-weight: 800;
  color: white;
  letter-spacing: 1px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
  text-transform: uppercase;
  position: relative;
  padding-left: 16px;
  line-height: 1;
}

/* Mobile adjustment for the large font */
@media (max-width: 767px) {
  .footer-bench-text {
    font-size: 40px; /* Slightly smaller on mobile */
  }
}

@media (max-width: 480px) {
  .footer-bench-text {
    font-size: 32px; /* Even smaller on very small screens */
    padding-left: 12px;
  }
}

.footer-bench-text::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 6px;
  height: 35px;
  background: linear-gradient(to bottom, var(--accent-color), var(--primary-color));
  border-radius: 3px;
}

/* Mobile adjustment for accent bar */
@media (max-width: 767px) {
  .footer-bench-text::before {
    height: 30px;
  }
}

@media (max-width: 480px) {
  .footer-bench-text::before {
    height: 25px;
    width: 5px;
  }
}

.footer-bench-logo {
  color: var(--accent-color);
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  padding: 6px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  width: 48px;
  height: 48px;
}

/* Mobile adjustment for logo */
@media (max-width: 767px) {
  .footer-bench-logo {
    width: 44px;
    height: 44px;
  }
  
  .footer-bench-logo svg {
    width: 28px;
    height: 28px;
  }
}

@media (max-width: 480px) {
  .footer-bench-logo {
    width: 40px;
    height: 40px;
  }
  
  .footer-bench-logo svg {
    width: 24px;
    height: 24px;
  }
}

.footer-bench-logo:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: var(--accent-color);
  transform: translateY(-2px);
}

.footer-links-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
  margin-bottom: 20px;
}

.footer-links-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-link {
  color: var(--gray-500);
  text-decoration: none;
  transition: var(--transition);
  font-size: 0.95rem;
}

.footer-link:hover {
  color: var(--accent-color);
  transform: translateX(5px);
}

/* Center Quick Links and Connect on mobile */
@media (max-width: 767px) {
  .footer-links {
    text-align: center;
  }
  
  .footer-links-list {
    align-items: center;
  }
  
  .footer-links-list li {
    width: 100%;
    text-align: center;
  }
  
  .footer-link {
    justify-content: center;
    display: inline-block;
  }
  
  .footer-link:hover {
    transform: translateY(-2px); /* Change from X to Y translation on mobile */
  }
}

.footer-bottom {
  border-top: 1px solid var(--gray-800);
  padding-top: 40px;
  text-align: center;
}

.footer-copyright {
  color: var(--gray-500);
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  flex-wrap: wrap;
}

.footer-heart {
  color: #ff4757;
  fill: #ff4757;
  animation: heartbeat 1.5s ease-in-out infinite;
}

@keyframes heartbeat {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

.footer-built {
  color: var(--gray-600);
  font-size: 0.9rem;
}
`;

const styleSheet = document.createElement("style");
styleSheet.textContent = footerStyles;
document.head.appendChild(styleSheet);

export default Footer;