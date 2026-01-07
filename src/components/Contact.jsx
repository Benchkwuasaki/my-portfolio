import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState, useEffect } from 'react';
import facebookIcon from '../assets/Facebook – Wikipedie.jpg';
import tiktok from '../assets/Similar PNG - Download 250K free PNG images with transparent background in best resolution_.jpg';
import instagram from '../assets/Download Instagram logo_ Instagram Social media icon.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Fire animation state (moved from Hero)
  const [activeFireIcon, setActiveFireIcon] = useState(0);
  const [firePosition, setFirePosition] = useState({ x: 0, y: 0, moving: false });

  useEffect(() => {
    const fireInterval = setInterval(() => {
      const positions = [
        { x: 0, y: 0 },
        { x: 73, y: 0 },
        { x: 146, y: 0 }
      ];
      
      setFirePosition({ ...positions[activeFireIcon], moving: true });
      
      setTimeout(() => {
        setActiveFireIcon((prev) => (prev + 1) % 3);
      }, 1000);
      
    }, 2000);

    return () => clearInterval(fireInterval);
  }, [activeFireIcon]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      title: 'Email:',
      info: 'lipangbenjoy41gmail.com',
      action: 'mailto:lipangbenjoy41@gmail.com',
    },
    {
      icon: <Phone size={20} />,
      title: 'Phone:',
      info: '09356790848',
      action: 'tel:09356790848',
    },
    {
      icon: <MapPin size={20} />,
      title: 'Address:',
      info: 'Rocky village,123 Main Street',
      subInfo: 'Yumbing, Mambajao, Camiguin',
      thirdInfo: 'Phillippines',
      action: '#',
    },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-layout">
          {/* Left Column - Contact Info */}
          <div className="contact-info-column">
            <h2 className="contact-main-title">Get in touch</h2>
            
            <div className="contact-details-wrapper">
              {contactInfo.map((item, index) => (
                <div key={index} className="contact-detail-item">
                  <div className="contact-detail-header">
                    <span className="contact-detail-icon">
                      {item.icon}
                    </span>
                    <span className="contact-detail-title">{item.title}</span>
                  </div>
                  <div className="contact-detail-content">
                    <div className="contact-detail-info">{item.info}</div>
                    {item.subInfo && (
                      <div className="contact-detail-subinfo">{item.subInfo}</div>
                    )}
                    {item.thirdInfo && (
                      <div className="contact-detail-subinfo">{item.thirdInfo}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="follow-section">
              <h3 className="follow-title">Follow us</h3>
              <div className="contact-social">
                <div 
                  className="jumping-fire"
                  style={{
                    transform: `translate(${firePosition.x}px, ${firePosition.y}px)`,
                    transition: firePosition.moving ? 'transform 1s cubic-bezier(0.68, -0.55, 0.27, 1.55)' : 'none'
                  }}
                >
                  <div className="fire-flame"></div>
                  <div className="fire-sparkle"></div>
                </div>
                
                <div className="social-icons-container">
                  <a
                    href="https://www.facebook.com/ka.benjoy.3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-link ${activeFireIcon === 0 ? 'fire-active' : ''}`}
                    aria-label="Facebook"
                  >
                    <img 
                      src={facebookIcon} 
                      alt="Facebook" 
                      className="social-icon-image"
                    />
                  </a>
                  <a
                    href="https://tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-link ${activeFireIcon === 1 ? 'fire-active' : ''}`}
                    aria-label="TikTok"
                  >
                    <img 
                      src={tiktok} 
                      alt="TikTok" 
                      className="social-icon-image"
                    />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-link ${activeFireIcon === 2 ? 'fire-active' : ''}`}
                    aria-label="Instagram"
                  >
                    <img 
                      src={instagram} 
                      alt="Instagram" 
                      className="social-icon-image"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="contact-form-column">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-field">
                <label className="form-label">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Your full name"
                />
              </div>

              <div className="form-field">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Your email address"
                />
              </div>

              <div className="form-field">
                <label className="form-label">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="form-textarea"
                  placeholder="Write something...."
                />
              </div>

              <button
                type="submit"
                className="submit-button"
              >
                Send Message
                <Send size={20} className="send-icon" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// CSS Styles
const contactStyles = `
.contact-section {
  padding: 80px 20px;
  
  min-height: 100vh;
  display: flex;
  align-items: center;
  transition: background-color 0.3s ease;
}

.dark-mode .contact-section {
 
}

.contact-container {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.contact-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.dark-mode .contact-layout {
  background: var(--gray-800);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
}

@media (min-width: 768px) {
  .contact-layout {
    grid-template-columns: 1fr 1fr;
    min-height: 500px;
  }
}

/* Left Column Styles */
.contact-info-column {
  padding: 40px 30px;
  background: white;
  display: flex;
  flex-direction: column;
  transition: background-color 0.3s ease;
}

.dark-mode .contact-info-column {
  background: var(--gray-800);
}

.contact-main-title {
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 30px;
  position: relative;
  transition: color 0.3s ease;
}

.dark-mode .contact-main-title {
  color: var(--gray-100);
}

.contact-main-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 50px;
  height: 3px;
  background: var(--primary-color);
  transition: background-color 0.3s ease;
}

.contact-details-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 40px;
}

.contact-detail-item {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}

.contact-detail-header {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 90px;
}

.contact-detail-icon {
  color: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.3s ease;
}

.dark-mode .contact-detail-icon {
  color: var(--accent-color);
}

.contact-detail-title {
  font-weight: 600;
  color: var(--text-dark);
  font-size: 0.95rem;
  transition: color 0.3s ease;
}

.dark-mode .contact-detail-title {
  color: var(--gray-300);
}

.contact-detail-content {
  flex: 1;
}

.contact-detail-info {
  color: var(--gray-700);
  font-weight: 500;
  margin-bottom: 4px;
  transition: color 0.3s ease;
}

.dark-mode .contact-detail-info {
  color: var(--gray-300);
}

.contact-detail-subinfo {
  color: var(--gray-600);
  font-size: 0.9rem;
  line-height: 1.4;
  transition: color 0.3s ease;
}

.dark-mode .contact-detail-subinfo {
  color: var(--gray-400);
}

.follow-section {
  margin-top: auto;
  padding-top: 20px;
  border-top: 1px solid var(--gray-200);
  transition: border-color 0.3s ease;
}

.dark-mode .follow-section {
  border-top: 1px solid var(--gray-700);
}

.follow-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 10px;
  transition: color 0.3s ease;
}

.dark-mode .follow-title {
  color: var(--gray-300);
}

/* Social Media Styles (moved from Hero) */
.contact-social {
  position: relative;
  width: 168px;
  height: 48px;
  margin-top: 15px;
}

.contact-social .social-icons-container {
  display: flex;
  gap: 20px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
}

.contact-social .social-link {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--gray-100);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gray-700);
  text-decoration: none;
  transition: var(--transition);
  position: relative;
  z-index: 3;
  overflow: hidden;
}

.contact-social .social-link:hover {
  background: var(--primary-color);
  color: white;
  transform: translateY(-3px);
}

.dark-mode .contact-social .social-link {
  background: var(--gray-800);
  color: var(--gray-300);
}

.contact-social .social-icon-image {
  width: 60%;
  height: 60%;
  object-fit: contain;
  border-radius: 50%;
}

.contact-social .fire-active {
  box-shadow: 0 0 25px rgba(255, 69, 0, 0.7),
              0 0 45px rgba(255, 140, 0, 0.4);
}

.contact-social .jumping-fire {
  position: absolute;
  top: 0;
  left: 0;
  width: 48px;
  height: 48px;
  z-index: 1;
  pointer-events: none;
}

.contact-social .fire-flame {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, 
    #ff4500 0%,
    #ff8c00 30%,
    #ffd700 60%,
    transparent 80%
  );
  animation: fireFlicker 0.3s infinite alternate;
  filter: blur(5px);
  opacity: 0.9;
}

.contact-social .fire-sparkle {
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: radial-gradient(circle, #fff 0%, transparent 70%);
  top: -5px;
  left: 50%;
  transform: translateX(-50%);
  animation: sparkleFloat 0.8s infinite alternate;
  filter: blur(1px);
  opacity: 0.8;
}

@keyframes fireFlicker {
  0%, 100% {
    transform: scale(1) rotate(0deg);
    opacity: 0.9;
  }
  25% {
    transform: scale(1.05) rotate(5deg);
    opacity: 0.8;
  }
  50% {
    transform: scale(0.95) rotate(-5deg);
    opacity: 1;
  }
  75% {
    transform: scale(1.1) rotate(3deg);
    opacity: 0.7;
  }
}

@keyframes sparkleFloat {
  0% {
    transform: translateX(-50%) translateY(0) scale(1);
    opacity: 0.8;
  }
  100% {
    transform: translateX(-50%) translateY(-10px) scale(1.2);
    opacity: 0.4;
  }
}

.contact-social .jumping-fire::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 69, 0, 0.3) 0%, transparent 70%);
  transform: translate(-50%, -50%);
  animation: fireTrail 1s ease-in-out;
}

@keyframes fireTrail {
  0% {
    width: 100%;
    height: 100%;
    opacity: 0.5;
  }
  100% {
    width: 200%;
    height: 200%;
    opacity: 0;
  }
}

/* Right Column Styles */
.contact-form-column {
  padding: 40px 30px;
  background: var(--gray-50);
  display: flex;
  align-items: center;
  transition: background-color 0.3s ease;
}

.dark-mode .contact-form-column {
  background: var(--gray-850);
}

.contact-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-field {
  width: 100%;
}

.form-label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: var(--text-dark);
  font-size: 0.95rem;
  transition: color 0.3s ease;
}

.dark-mode .form-label {
  color: var(--gray-300);
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 14px 18px;
  background: white;
  border: 1px solid var(--gray-300);
  border-radius: 8px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 1rem;
  color: var(--text-dark);
  transition: all 0.3s ease;
}

.dark-mode .form-input,
.dark-mode .form-textarea {
  background: var(--gray-900);
  border-color: var(--gray-700);
  color: var(--gray-300);
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(var(--primary-color-rgb), 0.1);
}

.dark-mode .form-input:focus,
.dark-mode .form-textarea:focus {
  box-shadow: 0 0 0 3px rgba(var(--primary-color-rgb), 0.2);
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: var(--gray-500);
  transition: color 0.3s ease;
}

.dark-mode .form-input::placeholder,
.dark-mode .form-textarea::placeholder {
  color: var(--gray-500);
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.submit-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 28px;
  background: var(--primary-color);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 10px;
}

.submit-button:hover {
  background: var(--primary-dark);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(var(--primary-color-rgb), 0.3);
}

.dark-mode .submit-button {
  background: var(--accent-color);
}

.dark-mode .submit-button:hover {
  background: var(--accent-dark);
}

.submit-button:active {
  transform: translateY(0);
}

.send-icon {
  transition: transform 0.3s ease;
}

.submit-button:hover .send-icon {
  transform: translateX(5px);
}

/* Responsive Design */
@media (max-width: 767px) {
  .contact-section {
    padding: 60px 15px;
  }
  
  .contact-info-column,
  .contact-form-column {
    padding: 30px 25px;
  }
  
  .contact-main-title {
    font-size: 1.8rem;
    margin-bottom: 25px;
  }
  
  .contact-details-wrapper {
    gap: 20px;
    margin-bottom: 30px;
  }
  
  .contact-detail-item {
    flex-direction: column;
    gap: 8px;
  }
  
  .contact-detail-header {
    min-width: auto;
  }
}

@media (max-width: 480px) {
  .contact-main-title {
    font-size: 1.6rem;
  }
  
  .contact-info-column,
  .contact-form-column {
    padding: 25px 20px;
  }
  
  .form-input,
  .form-textarea {
    padding: 12px 15px;
  }
  
  .submit-button {
    padding: 12px 24px;
    font-size: 0.95rem;
  }
}

/* Animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.contact-layout {
  animation: fadeIn 0.6s ease-out;
}

.contact-detail-item {
  animation: fadeIn 0.6s ease-out;
  animation-fill-mode: both;
}

.contact-detail-item:nth-child(1) { animation-delay: 0.1s; }
.contact-detail-item:nth-child(2) { animation-delay: 0.2s; }
.contact-detail-item:nth-child(3) { animation-delay: 0.3s; }
`;

// Append styles to document
const styleSheet = document.createElement("style");
styleSheet.textContent = contactStyles;
document.head.appendChild(styleSheet);

export default Contact;