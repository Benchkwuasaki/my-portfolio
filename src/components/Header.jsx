import { useState } from 'react';
import { Menu, X, Sun, Moon } from './Icons';
import logoImage from '../assets/Gemini_Generated_Image_d9cjlzd9cjlzd9cj.png';

const Header = ({ darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogoZoomed, setIsLogoZoomed] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
    { label: 'Get in Touch', href: '#contact' },
  ];

  const handleLogoClick = () => {
    setIsLogoZoomed(true);
  };

  const closeZoomModal = () => {
    setIsLogoZoomed(false);
  };

  return (
    <>
      <header className="header">
        <nav className="nav">
          <div className="nav-container">
            <a href="#home" className="logo">
              <span className="logo-text">Bench-Portfolio</span>
              <span className="logo-dot"></span>
              <div className="logo-image-container" onClick={handleLogoClick}>
                <img 
                  src={logoImage}
                  alt="Profile Logo" 
                  className="logo-image"
                />
                <div className="logo-hint">Click to zoom</div>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="nav-desktop">
              <div className="nav-center-group">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="nav-link"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              <div className="nav-actions">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="theme-toggle"
                  aria-label="Toggle theme"
                >
                  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="nav-mobile">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="theme-toggle"
                aria-label="Toggle theme"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="menu-toggle"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="nav-mobile-menu">
              <div className="nav-mobile-links">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="nav-mobile-link"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Logo Zoom Modal */}
      {isLogoZoomed && (
        <div className="logo-zoom-modal" onClick={closeZoomModal}>
          <div className="zoom-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="zoom-close-btn" onClick={closeZoomModal}>
              <X size={24} />
            </button>
            <img 
              src={logoImage} 
              alt="Profile Logo - Zoomed" 
              className="zoomed-logo"
            />
            <div className="zoom-info">
              <h3>Ben Joy D. Lipang</h3>
              <p>Full Stack Developer & UI/UX-Designer</p>
              <div className="zoom-social">
                <span><a href="mailto:lipangbenjoy41@gmail.com">lipangbenjoy41gmail.com</a></span>
                <span>09356790848-TM</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const headerStyles = `
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(var(--light-color-rgb), 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--gray-200);
  transition: var(--transition);
  opacity: 0;
  animation: slideDownFade 1s ease 0.5s forwards;
}

@keyframes slideDownFade {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.dark-mode .header {
  background: rgba(18, 18, 18, 0.9);
  border-bottom: 1px solid var(--gray-800);
}

.nav-container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-dark);
  position: relative;
  z-index: 1001;
  transition: color 0.3s ease;
}

/* FIXED: Make logo text white in dark mode */
.dark-mode .logo {
  color: #ffffff !important;
}

/* Also target the logo-text specifically */
.dark-mode .logo-text {
  color: #ffffff !important;
}

.logo-text {
  position: relative;
}

.logo-dot {
  width: 8px;
  height: 8px;
  background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
  border-radius: 50%;
  animation: pulse 2s infinite;
}

.logo-image-container {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
  margin-left: 8px;
  position: relative;
  transition: var(--transition);
  box-shadow: 0 4px 12px rgba(67, 97, 238, 0.2);
  cursor: pointer;
}

.logo-image-container:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(67, 97, 238, 0.3);
  border-color: var(--accent-color);
}

.logo-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: var(--transition);
}

.logo-image-container:hover .logo-image {
  transform: scale(1.1);
}

.logo-hint {
  position: absolute;
  bottom: -25px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--primary-color);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.7rem;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: var(--transition);
  pointer-events: none;
  z-index: 1001;
  box-shadow: var(--shadow-md);
}

.logo-hint::before {
  content: '';
  position: absolute;
  top: -4px;
  left: 50%;
  transform: translateX(-50%);
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid var(--primary-color);
}

.logo-image-container:hover .logo-hint {
  opacity: 1;
  visibility: visible;
  bottom: -30px;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.7;
  }
}

/* ===== DESKTOP NAVIGATION - CENTERED NAV ITEMS ===== */
.nav-desktop {
  display: none;
}

.nav-mobile {
  display: flex;
  align-items: center;
  gap: 15px;
}

@media (min-width: 992px) {
  .nav-desktop {
    display: flex;
    align-items: center;
    position: relative;
    flex: 1;
    justify-content: flex-end;
  }

  .nav-center-group {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    gap: 30px;
    margin: 0;
    padding: 0;
  }

  .nav-link {
    text-decoration: none;
    color: var(--gray-700);
    font-weight: 500;
    font-size: 1rem;
    position: relative;
    padding: 5px 0;
    transition: var(--transition);
    white-space: nowrap;
  }

  .nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
    transition: width 0.3s ease;
  }

  .nav-link:hover {
    color: var(--primary-color);
  }

  .nav-link:hover::after {
    width: 100%;
  }

  .nav-actions {
    display: flex;
    align-items: center;
  }

  .nav-mobile {
    display: none;
  }
}

/* Alternative grid-based solution (uncomment if preferred)
@media (min-width: 992px) {
  .nav-desktop {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    width: 100%;
  }

  .nav-center-group {
    grid-column: 2;
    display: flex;
    gap: 30px;
    justify-self: center;
  }

  .nav-actions {
    grid-column: 3;
    justify-self: end;
  }
}
*/

.theme-toggle {
  background: var(--gray-100);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: var(--transition);
  color: var(--gray-700);
}

.dark-mode .theme-toggle {
  background: var(--gray-800);
  color: var(--gray-300);
}

.theme-toggle:hover {
  background: var(--gray-200);
  transform: rotate(15deg);
}

.menu-toggle {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--gray-700);
  padding: 8px;
}

.dark-mode .menu-toggle {
  color: var(--gray-300);
}

.nav-mobile-menu {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: var(--light-color);
  border-top: 1px solid var(--gray-200);
  box-shadow: var(--shadow-lg);
  animation: slideDown 0.3s ease;
}

.dark-mode .nav-mobile-menu {
  background: var(--gray-900);
  border-top: 1px solid var(--gray-800);
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.nav-mobile-links {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.nav-mobile-link {
  text-decoration: none;
  color: var(--gray-700);
  font-weight: 500;
  font-size: 1.1rem;
  padding: 10px;
  border-radius: var(--border-radius);
  transition: var(--transition);
}

.nav-mobile-link:hover {
  background: var(--gray-100);
  color: var(--primary-color);
  padding-left: 20px;
}

.dark-mode .nav-mobile-link {
  color: var(--gray-300);
}

.dark-mode .nav-mobile-link:hover {
  background: var(--gray-800);
}

/* Logo Zoom Modal */
.logo-zoom-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  backdrop-filter: blur(5px);
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.zoom-modal-content {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter:blur(2px);
  border-radius: var(--border-radius-lg);
  padding: 14px;
  max-width: 500px;
  width: 90%;
  color:white;
  position: relative;
  animation: zoomIn 0.4s ease;
  box-shadow: var(--shadow-xl);
  border: 2px solid var(--primary-color);
}

.dark-mode .zoom-modal-content {
  background: var(--gray-900);
  border-color: var(--accent-color);
}

@keyframes zoomIn {
  from { 
    opacity: 0;
    transform: scale(0.8);
  }
  to { 
    opacity: 1;
    transform: scale(1);
  }
}

.zoom-close-btn {
  position: absolute;
  top: 15px;
  right: 15px;
  background: var(--gray-200);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: var(--transition);
  color: var(--gray-700);
  z-index: 2001;
}

.dark-mode .zoom-close-btn {
  background: var(--gray-800);
  color: var(--gray-300);
}

.zoom-close-btn:hover {
  background: var(--primary-color);
  color: white;
  transform: rotate(90deg);
}

.zoomed-logo {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid var(--primary-color);
  margin: 0 auto 20px;
  display: block;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: var(--transition);
}

.zoomed-logo:hover {
  transform: scale(1.05);
  border-color: var(--accent-color);
}

.zoom-info {
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid var(--gray-200);
}

.dark-mode .zoom-info {
  border-top: 1px solid var(--gray-800);
}

.zoom-info h3 {
  font-size: 1.8rem;
  margin-bottom: 8px;
  color: var(--text-dark);
  font-family: 'Space Grotesk', sans-serif;
}

.zoom-info p {
  color: var(--gray-700);
  margin-bottom: 15px;
  font-size: 1.1rem;
}

.zoom-social {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 0.9rem;
  color: var(--gray-600);
}

.dark-mode .zoom-social {
  color: var(--gray-400);
}
`;

// Inject styles
const styleSheet = document.createElement("style");
styleSheet.textContent = headerStyles;
document.head.appendChild(styleSheet);

export default Header;