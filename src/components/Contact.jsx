import { Mail, MapPin, Phone, Send, Clock, Globe, User } from 'lucide-react';
import { useState, useEffect } from 'react';

// If images are not loading, let's use alternative approaches
// You can either use local images or use CDN URLs

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  // Fire animation state
  const [activeFireIcon, setActiveFireIcon] = useState(0);
  const [firePosition, setFirePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const fireInterval = setInterval(() => {
      const positions = [
        { x: 0, y: 0 },
        { x: 73, y: 0 },
        { x: 146, y: 0 }
      ];
      
      setFirePosition(positions[activeFireIcon]);
      setActiveFireIcon((prev) => (prev + 1) % 3);
      
    }, 3000);

    return () => clearInterval(fireInterval);
  }, [activeFireIcon]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    // Simulate sending email
    setTimeout(() => {
      console.log('Form Data:', formData);
      setSubmitStatus({
        type: 'success',
        message: '✅ Thank you for your message! I\'ll respond within 24-48 hours.'
      });
      setFormData({ 
        name: '', 
        email: '', 
        phone: '', 
        subject: '', 
        message: '' 
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Primary Email',
      info: 'lipangbenjoy41@gmail.com',
      description: 'For all inquiries and collaborations',
      action: 'mailto:lipangbenjoy41@gmail.com',
      className: 'email-item'
    },
    {
      icon: <Phone size={24} />,
      title: 'Mobile Number',
      info: '+63 935 679 0848',
      description: 'Call Me • Available 9AM-6PM',
      action: 'tel:+639356790848',
      className: 'phone-item'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      info: 'Camiguin, Philippines',
      description: 'Rocky Village, Yumbing, Mambajao',
      subInfo: 'Philippines • 9101',
      action: 'https://maps.google.com/?q=Camiguin+Philippines',
      className: 'location-item'
    },
    {
      icon: <Clock size={24} />,
      title: 'Business Hours',
      info: 'Monday - Saturday',
      description: '9:00 AM - 6:00 PM',
      subInfo: 'Closed on Sundays',
      action: null,
      className: 'hours-item'
    },
    {
      icon: <Globe size={24} />,
      title: 'Timezone',
      info: 'Philippine Time (PHT)',
      description: 'UTC/GMT +8 hours',
      action: null,
      className: 'timezone-item'
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <header className="contact-header">
          <h1 className="contact-title">Let's Connect</h1>
          <p className="contact-subtitle">
            Have questions or want to work together? Send me a message and I'll get back to you as soon as possible.
          </p>
        </header>

        <div className="contact-layout">
          {/* Left Column - Contact Information */}
          <div className="contact-info-column">
            <div className="info-section">
              <h2 className="info-title">Contact Information</h2>
              <p className="info-description">
                Feel free to reach out through any of these channels. I typically respond within 24 hours.
              </p>
              
              <div className="contact-details-grid">
                {contactInfo.map((item, index) => (
                  <div key={index} className={`contact-detail-card ${item.className}`}>
                    <div className="detail-card-header">
                      <div className="detail-icon-wrapper">
                        {item.icon}
                      </div>
                      <h3 className="detail-title">{item.title}</h3>
                    </div>
                    
                    <div className="detail-card-content">
                      <p className="detail-main-info">{item.info}</p>
                      <p className="detail-description">{item.description}</p>
                      {item.subInfo && (
                        <p className="detail-sub-info">{item.subInfo}</p>
                      )}
                    </div>
                    
                    {item.action && (
                      <a 
                        href={item.action} 
                        className="detail-action-link"
                        target={item.action.includes('http') ? '_blank' : '_self'}
                        rel={item.action.includes('http') ? 'noopener noreferrer' : ''}
                      >
                        {item.action.includes('mailto') ? 'Send Email' : 
                         item.action.includes('tel') ? 'Call Now' : 
                         item.action.includes('maps') ? 'View on Map' : 'Open Link'}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media Section */}
            <div className="social-section">
              <h3 className="social-title">Connect on Social Media</h3>
              <p className="social-description">
                Follow for updates, behind-the-scenes, and more content
              </p>
              
              <div className="contact-social">
                <div 
                  className="jumping-fire"
                  style={{
                    transform: `translate(${firePosition.x}px, ${firePosition.y}px)`,
                    transition: 'transform 1s ease-in-out'
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
                    <div className="social-icon-wrapper facebook-icon">
                      {/* Using SVG or text as fallback if image doesn't load */}
                      <svg className="social-icon-image facebook-svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </div>
                    <span className="social-link-label">Facebook</span>
                  </a>
                  <a
                    href="https://tiktok.com/@yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-link ${activeFireIcon === 1 ? 'fire-active' : ''}`}
                    aria-label="TikTok"
                  >
                    <div className="social-icon-wrapper tiktok-icon">
                      {/* TikTok SVG icon */}
                      <svg className="social-icon-image tiktok-svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.3.002.598.066.88.19v-3.26a8.11 8.11 0 0 0-1-.05A6.07 6.07 0 0 0 5 20.1a6.07 6.07 0 0 0 10.14-4.61v-7a8.29 8.29 0 0 0 4.7 1.44v-3.2a4.85 4.85 0 0 1-.25-.04z"/>
                      </svg>
                    </div>
                    <span className="social-link-label">TikTok</span>
                  </a>
                  <a
                    href="https://instagram.com/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-link ${activeFireIcon === 2 ? 'fire-active' : ''}`}
                    aria-label="Instagram"
                  >
                    <div className="social-icon-wrapper instagram-icon">
                      {/* Instagram SVG icon */}
                      <svg className="social-icon-image instagram-svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </div>
                    <span className="social-link-label">Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="contact-form-column">
            <div className="form-section">
              <h2 className="form-title">Send a Message</h2>
              <p className="form-description">
                Fill out the form below and I'll get back to you promptly.
              </p>
              
              <form onSubmit={handleSubmit} className="contact-form">
                {/* Status Messages */}
                {submitStatus.message && (
                  <div className={`form-status ${submitStatus.type}`}>
                    {submitStatus.message}
                  </div>
                )}
                
                <div className="form-row">
                  <div className="form-field half">
                    <label className="form-label">
                      <User size={16} /> Your Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="Enter your full name"
                      minLength="2"
                    />
                  </div>
                  
                  <div className="form-field half">
                    <label className="form-label">
                      <Mail size={16} /> Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-field half">
                    <label className="form-label">
                      <Phone size={16} /> Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="+63 XXX XXX XXXX"
                    />
                  </div>
                  
                  <div className="form-field half">
                    <label className="form-label">Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="Enter your subject"
                      minLength="3"
                    />
                  </div>
                </div>
                
                <div className="form-field">
                  <label className="form-label">Your Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="form-textarea"
                    placeholder="Please provide details about your inquiry..."
                    minLength="10"
                  />
                  <div className="character-count">
                    {formData.message.length} characters
                  </div>
                </div>
                
                <div className="form-footer">
                  <button
                    type="submit"
                    className="submit-button"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner"></span>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={20} className="send-icon" />
                      </>
                    )}
                  </button>
                  
                  <div className="form-note">
                    <p>
                      <small>
                        * Required fields. Form data will be logged to console for now.
                        For actual email sending, set up EmailJS or Formspree.
                      </small>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// CSS Styles
const contactStyles = `
.contact-section {
  padding: 100px 20px;
  min-height: 100vh;
  
  display: flex;
  align-items: center;
  justify-content: center;
}

.dark-mode .contact-section {
  
}

.contact-container {
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
}

.contact-header {
  text-align: center;
  margin-bottom: 60px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.contact-title {
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(135deg, #4ade80 0%, #16a34a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 16px;
}

.dark-mode .contact-title {
  background: linear-gradient(135deg, #86efac 0%, #4ade80 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.contact-subtitle {
  font-size: 1.25rem;
  color: #64748b;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
}

.dark-mode .contact-subtitle {
  color: #cbd5e1;
}

.contact-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 60px;
  animation: fadeIn 0.6s ease-out;
}

@media (min-width: 1024px) {
  .contact-layout {
    grid-template-columns: 1.2fr 1fr;
    gap: 80px;
  }
}

/* Left Column Styles */
.contact-info-column {
  display: flex;
  flex-direction: column;
  gap: 60px;
}

.info-section {
  background: white;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
}

.dark-mode .info-section {
  background: #1e293b;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
}

.info-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 12px;
}

.dark-mode .info-title {
  color: #f1f5f9;
}

.info-description {
  color: #64748b;
  margin-bottom: 32px;
  line-height: 1.6;
}

.dark-mode .info-description {
  color: #cbd5e1;
}

.contact-details-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 24px;
}

.contact-detail-card {
  background: #f8fafc;
  border-radius: 12px;
  padding: 24px;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
}

.dark-mode .contact-detail-card {
  background: #2d3748;
  border-color: #4a5568;
}

.contact-detail-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  border-color: #4ade80;
}

.dark-mode .contact-detail-card:hover {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

.detail-card-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.detail-icon-wrapper {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #4ade80 0%, #16a34a 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.detail-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1e293b;
}

.dark-mode .detail-title {
  color: #f1f5f9;
}

.detail-card-content {
  margin-bottom: 20px;
}

.detail-main-info {
  font-size: 1.25rem;
  font-weight: 700;
  color: #22c55e;
  margin-bottom: 8px;
}

.detail-description {
  color: #64748b;
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 4px;
}

.dark-mode .detail-description {
  color: #cbd5e1;
}

.detail-sub-info {
  color: #94a3b8;
  font-size: 0.9rem;
}

.detail-action-link {
  display: inline-block;
  padding: 8px 20px;
  background: #22c55e;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.detail-action-link:hover {
  background: #16a34a;
  transform: translateY(-2px);
}

/* Social Section Styles */
.social-section {
  background: white;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
}

.dark-mode .social-section {
  background: #1e293b;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
}

.social-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 8px;
}

.dark-mode .social-title {
  color: #f1f5f9;
}

.social-description {
  color: #64748b;
  margin-bottom: 32px;
}

.dark-mode .social-description {
  color: #cbd5e1;
}

.contact-social {
  position: relative;
  width: 100%;
  height: 60px;
  margin-bottom: 24px;
}

.social-icons-container {
  display: flex;
  gap: 20px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
}

.social-link {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #f8fafc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  border: 2px solid #e2e8f0;
}

.dark-mode .social-link {
  background: #2d3748;
  border-color: #4a5568;
}

.social-link:hover {
  transform: translateY(-5px) scale(1.05);
  border-color: #4ade80;
}

/* Social Icon Wrapper - Perfectly centers icons */
.social-icon-wrapper {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

/* Social Icon SVGs */
.social-icon-image {
  width: 100%;
  height: 100%;
}

/* Facebook Icon - Blue background with white F */
.facebook-icon {
  background-color: #1877F2;
  border-radius: 8px;
  padding: 6px;
}

.facebook-svg {
  color: white;
}

/* TikTok Icon - Black background with white music note */
.tiktok-icon {
  background-color: #000000;
  border-radius: 6px;
  padding: 6px;
}

.tiktok-svg {
  color: white;
}

/* Instagram Icon - Gradient background */
.instagram-icon {
  background: linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #F77737, #FCAF45, #FFDC80);
  border-radius: 10px;
  padding: 6px;
}

.instagram-svg {
  color: white;
}

.social-link-label {
  font-size: 0.7rem;
  color: #64748b;
  font-weight: 500;
  margin-top: 2px;
}

.dark-mode .social-link-label {
  color: #cbd5e1;
}

/* Fire animation - Original orange colors */
.fire-active {
  border-color: #f97316;
  box-shadow: 0 0 20px rgba(249, 115, 22, 0.4);
}

.jumping-fire {
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  height: 60px;
  z-index: 1;
  pointer-events: none;
}

.fire-flame {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, 
    #ff6b00 0%,
    #ff8c00 30%,
    #ffd700 60%,
    transparent 80%
  );
  animation: fireFlicker 0.5s infinite alternate;
  filter: blur(8px);
  opacity: 0.7;
}

.fire-sparkle {
  position: absolute;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: radial-gradient(circle, #fff 0%, transparent 70%);
  top: -8px;
  left: 50%;
  transform: translateX(-50%);
  animation: sparkleFloat 1s infinite alternate;
  filter: blur(2px);
  opacity: 0.9;
}

/* Right Column - Form Styles */
.contact-form-column {
  display: flex;
  flex-direction: column;
}

.form-section {
  background: white;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
  height: fit-content;
  position: sticky;
  top: 40px;
}

.dark-mode .form-section {
  background: #1e293b;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
}

.form-title {
  font-size: 2rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 12px;
}

.dark-mode .form-title {
  color: #f1f5f9;
}

.form-description {
  color: #64748b;
  margin-bottom: 32px;
  line-height: 1.6;
}

.dark-mode .form-description {
  color: #cbd5e1;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.form-row {
  display: flex;
  gap: 16px;
}

.form-field {
  width: 100%;
}

.form-field.half {
  flex: 1;
}

.form-label {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  font-weight: 600;
  color: #1e293b;
  font-size: 0.95rem;
}

.dark-mode .form-label {
  color: #f1f5f9;
}

.form-input,
.form-select,
.form-textarea {
  width: 100%;
  padding: 14px 16px;
  background: #f8fafc;
  border: 2px solid #e2e8f0;
  border-radius: 10px;
  font-family: inherit;
  font-size: 1rem;
  color: #1e293b;
  transition: all 0.3s ease;
}

.dark-mode .form-input,
.dark-mode .form-select,
.dark-mode .form-textarea {
  background: #2d3748;
  border-color: #4a5568;
  color: #f1f5f9;
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  outline: none;
  border-color: #4ade80;
  box-shadow: 0 0 0 3px rgba(74, 222, 128, 0.1);
  background: white;
}

.dark-mode .form-input:focus,
.dark-mode .form-select:focus,
.dark-mode .form-textarea:focus {
  background: #374151;
  box-shadow: 0 0 0 3px rgba(74, 222, 128, 0.2);
}

.form-textarea {
  resize: vertical;
  min-height: 150px;
  line-height: 1.6;
}

.character-count {
  text-align: right;
  font-size: 0.85rem;
  color: #94a3b8;
  margin-top: 4px;
}

/* Status Messages */
.form-status {
  padding: 16px;
  border-radius: 12px;
  margin-bottom: 20px;
  font-weight: 500;
  animation: slideDown 0.3s ease-out;
  border: 2px solid;
  line-height: 1.6;
}

.form-status.success {
  background: rgba(34, 197, 94, 0.1);
  color: #166534;
  border-color: #86efac;
}

.dark-mode .form-status.success {
  background: rgba(34, 197, 94, 0.2);
  color: #bbf7d0;
}

.form-status.error {
  background: rgba(239, 68, 68, 0.1);
  color: #991b1b;
  border-color: #fca5a5;
}

.dark-mode .form-status.error {
  background: rgba(239, 68, 68, 0.2);
  color: #fecaca;
}

/* Submit Button */
.form-footer {
  margin-top: 8px;
}

.submit-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 100%;
  padding: 18px 32px;
  background: linear-gradient(135deg, #4ade80 0%, #16a34a 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.submit-button:hover:not(:disabled) {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(74, 222, 128, 0.3);
}

.submit-button:active:not(:disabled) {
  transform: translateY(-1px);
}

.submit-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.spinner {
  width: 20px;
  height: 20px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s linear infinite;
}

.form-note {
  margin-top: 16px;
  text-align: center;
  color: #64748b;
  font-size: 0.9rem;
}

.dark-mode .form-note {
  color: #94a3b8;
}

.form-note a {
  color: #4ade80;
  text-decoration: underline;
}

/* Animations */
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

@keyframes fireFlicker {
  0%, 100% {
    transform: scale(1) rotate(0deg);
    opacity: 0.7;
  }
  25% {
    transform: scale(1.05) rotate(5deg);
    opacity: 0.6;
  }
  50% {
    transform: scale(0.95) rotate(-5deg);
    opacity: 0.8;
  }
  75% {
    transform: scale(1.1) rotate(3deg);
    opacity: 0.5;
  }
}

@keyframes sparkleFloat {
  0% {
    transform: translateX(-50%) translateY(0) scale(1);
    opacity: 0.9;
  }
  100% {
    transform: translateX(-50%) translateY(-15px) scale(1.3);
    opacity: 0.4;
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* Responsive Design */
@media (max-width: 1023px) {
  .contact-section {
    padding: 60px 15px;
  }
  
  .contact-title {
    font-size: 2.5rem;
  }
  
  .contact-subtitle {
    font-size: 1.125rem;
  }
  
  .form-row {
    flex-direction: column;
    gap: 20px;
  }
  
  .contact-details-grid {
    grid-template-columns: 1fr;
  }
  
  .form-section {
    position: static;
  }
}

@media (max-width: 640px) {
  .contact-title {
    font-size: 2rem;
  }
  
  .info-section,
  .social-section,
  .form-section {
    padding: 30px 20px;
  }
  
  .contact-detail-card {
    padding: 20px;
  }
  
  .social-icons-container {
    gap: 12px;
  }
  
  .social-link {
    width: 50px;
    height: 50px;
  }
  
  .social-icon-wrapper {
    width: 26px;
    height: 26px;
  }
  
  .social-link-label {
    display: none;
  }
  
  .jumping-fire {
    width: 50px;
    height: 50px;
  }
}
`;

// Append styles to document
const styleSheet = document.createElement("style");
styleSheet.textContent = contactStyles;
document.head.appendChild(styleSheet);

export default Contact;