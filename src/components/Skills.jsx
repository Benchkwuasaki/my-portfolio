import { Code, Palette, Database } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import html from '../assets/Html free icons designed by Freepik.jpg';
import css from '../assets/CSS.jpg';
import js from '../assets/Difference between JavaScript and PHP.jpg';
import mysql from '../assets/MySQL.jpg';
import figma from '../assets/Figma logo vector in _EPS, .AI, .SVG free download - Brandlogos.jpg';
import react from '../assets/React js.jpg';
import tailwind from '../assets/Tailwind CSS - Rapidly build modern websites without ever leaving your HTML_.jpg';
import boostrap from '../assets/Download Bootstrap logo in vector (_EPS + .jpg';
import fluuter from '../assets/Flutter Vector Logo.jpg';
import codeigniter from '../assets/How to Build a Shopping Cart using CodeIgniter and jQuery _ Envato Tuts+.jpg';
import firebase from '../assets/Firebase icon logo in PNG and vector formats (SVG, AI).jpg';
import python from '../assets/python logo.jpg';
import php from '../assets/File_PHP-logo_svg - Wikimedia Commons.jpg';
import laravel from '../assets/Laravel logo vector (_AI + .SVG + .jpg';
import supabase from '../assets/Supabase Logo PNG Vector (SVG) Free Download.jpg';
import adobe from '../assets/Adobe Photoshop Icon PNG.jpg';

const Skills = () => {
  const [logos, setLogos] = useState([]);
  const [tooltip, setTooltip] = useState({ visible: false, text: '', x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const actualLogos = [
      { name: 'HTML', category: 'frontend', image: html },
      { name: 'CSS', category: 'frontend', image: css },
      { name: 'JavaScript', category: 'frontend', image: js },
      { name: 'React', category: 'frontend', image: react },
      { name: 'Tailwind', category: 'frontend', image: tailwind },
      { name: 'Bootstrap', category: 'frontend', image: boostrap },
      { name: 'Flutter', category: 'frontend', image: fluuter },
      { name: 'CodeIgniter', category: 'frontend', image: codeigniter },
      { name: 'Firebase', category: 'backend', image: firebase },
      { name: 'Python', category: 'backend', image: python },
      { name: 'MySQL', category: 'backend', image: mysql },
      { name: 'PHP', category: 'backend', image: php },
      { name: 'Laravel', category: 'backend', image: laravel },
      { name: 'Supabase', category: 'backend', image: supabase },
      { name: 'Figma', category: 'design', image: figma },
      { name: 'Adobe', category: 'design', image: adobe },
    ];
    setLogos(actualLogos);
  }, []);

  // Intersection Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, 300); // 300ms delay
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleLogoMouseEnter = (logoName, event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setTooltip({
      visible: true,
      text: logoName,
      x: rect.left + rect.width / 2,
      y: rect.top - 10
    });
  };

  const handleLogoMouseLeave = () => {
    setTooltip({ visible: false, text: '', x: 0, y: 0 });
  };

  const skillCategories = [
    {
      icon: <Code size={28} />,
      title: 'Frontend',
      skills: [
        { name: 'HTML', level: 100 },
        { name: 'Vanilla CSS', level: 100 },
        { name: 'Vanilla JS', level: 98 },
        { name: 'React', level: 99 },
        { name: 'Tailwind CSS', level: 99 },
        { name: 'Bootstrap', level: 99 },
        { name: 'Flutter', level: 60 },
        { name: 'CodeIgniter 4', level: 100 },
      ],
    },
    {
      icon: <Database size={28} />,
      title: 'Backend',
      skills: [
        { name: 'Firebase', level: 96 },
        { name: 'Python', level: 96 },
        { name: 'MySQL', level: 96 },
        { name: 'Vanilla PHP', level: 96 },
        { name: 'Laravel', level: 98 },
        { name: 'Supabase', level: 96 },
      ],
    },
    {
      icon: <Palette size={28} />,
      title: 'Design',
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'UI/UX', level: 80 },
        { name: 'Prototyping', level: 75 },
        { name: 'Adobe Suite', level: 30 },
      ],
    },
  ];

  return (
    <>
      <section 
        id="skills" 
        ref={sectionRef}
        className={`section skills ${isVisible ? 'visible' : ''}`}
      >
        <div className="main-container">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="skills-grid">
            {skillCategories.map((category, catIndex) => (
              <div
                key={catIndex}
                className="skill-category-card"
                style={{ 
                  animationDelay: `${catIndex * 200}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
                }}
              >
                <div className="skill-category-header">
                  <div className="skill-category-icon">
                    {category.icon}
                  </div>
                  <h3 className="skill-category-title">{category.title}</h3>
                </div>
                <div className="skill-list">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Logo Marquee Section */}
          <div 
            className="logo-marquee-container"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.8s ease 0.6s, transform 0.8s ease 0.6s'
            }}
          >
            <div className="logo-marquee-track">
              {logos.map((logo, index) => (
                <div 
                  key={`logo-${index}`} 
                  className="logo-item"
                  onMouseEnter={(e) => handleLogoMouseEnter(logo.name, e)}
                  onMouseLeave={handleLogoMouseLeave}
                >
                  <div className="logo-image-placeholder">
                    {logo.image ? (
                      <img src={logo.image} alt={logo.name} className="logo-img" />
                    ) : (
                      <div className="logo-text">{logo.name}</div>
                    )}
                  </div>
                </div>
              ))}
              {logos.map((logo, index) => (
                <div 
                  key={`logo-dup-${index}`} 
                  className="logo-item"
                  onMouseEnter={(e) => handleLogoMouseEnter(logo.name, e)}
                  onMouseLeave={handleLogoMouseLeave}
                >
                  <div className="logo-image-placeholder">
                    {logo.image ? (
                      <img src={logo.image} alt={logo.name} className="logo-img" />
                    ) : (
                      <div className="logo-text">{logo.name}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tooltip - Render outside the section to avoid style conflicts */}
      {tooltip.visible && (
        <div 
          className="logo-tooltip" 
          style={{
            position: 'fixed',
            left: `${tooltip.x}px`,
            top: `${tooltip.y}px`,
            transform: 'translateX(-50%) translateY(-100%)',
            background: 'var(--gray-900)',
            color: 'white',
            padding: '6px 12px',
            borderRadius: '6px',
            fontSize: '0.85rem',
            fontWeight: '500',
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
            zIndex: '1000',
            animation: 'tooltipFade 0.2s ease',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          }}
        >
          {tooltip.text}
          <style jsx>{`
            @keyframes tooltipFade {
              from {
                opacity: 0;
                transform: translateX(-50%) translateY(-90%);
              }
              to {
                opacity: 1;
                transform: translateX(-50%) translateY(-100%);
              }
            }
            .dark-mode .logo-tooltip {
              background: var(--gray-700);
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
            }
            .logo-tooltip::after {
              content: '';
              position: absolute;
              top: 100%;
              left: 50%;
              transform: translateX(-50%);
              border-width: 5px;
              border-style: solid;
              border-color: var(--gray-900) transparent transparent transparent;
            }
            .dark-mode .logo-tooltip::after {
              border-color: var(--gray-700) transparent transparent transparent;
            }
          `}</style>
        </div>
      )}

      <style jsx>{`
        .skills {
          position: relative;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
          padding: 5rem 0;
        }

        .skills.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Staggered animations for child elements */
        .skills.visible .section-title {
          animation: fadeInUp 0.6s ease 0.2s forwards;
          opacity: 0;
          transform: translateY(20px);
        }

        .skills.visible .skill-category-card {
          animation: fadeInUp 0.6s ease forwards;
          opacity: 0;
          transform: translateY(20px);
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .skills::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(76, 201, 240, 0.1) 0%, transparent 70%);
          z-index: -1;
        }

        .section-title {
          color: var(--text-dark);
          transition: color var(--transition);
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 4rem;
          text-align: center;
        }

        .dark-mode .section-title {
          color: white;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          margin-bottom: 60px;
        }

        .skill-category-card {
          background: var(--light-color);
          border-radius: 1rem;
          padding: 30px;
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          border: 1px solid #e5e7eb;
          transition: opacity 0.8s ease, transform 0.8s ease, all 0.3s ease;
        }

        .dark-mode .skill-category-card {
          background: var(--gray-800);
          border-color: var(--gray-700);
        }

        .skill-category-card:hover {
          transform: translateY(-5px);
          border-color: var(--primary-color);
        }

        .skill-category-header {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 30px;
        }

        .skill-category-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .skill-category-title {
          font-size: 1.5rem;
          color: var(--text-dark);
        }

        .dark-mode .skill-category-title {
          color: white;
        }

        .skill-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .skill-item {
          width: 100%;
        }

        .skill-info {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
        }

        .skill-name {
          color: var(--gray-700);
          font-weight: 500;
          font-size: 0.95rem;
        }

        .dark-mode .skill-name {
          color: var(--gray-300);
        }

        .skill-percentage {
          color: var(--primary-color);
          font-weight: 600;
          font-size: 0.9rem;
        }

        .skill-bar {
          height: 8px;
          background: var(--gray-200);
          border-radius: 4px;
          overflow: hidden;
          position: relative;
        }

        .dark-mode .skill-bar {
          background: var(--gray-700);
        }

        .skill-progress {
          height: 100%;
          background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
          border-radius: 4px;
          position: relative;
          transition: width 1.5s ease-out;
        }

        .skill-progress::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, 
            transparent, 
            rgba(255, 255, 255, 0.3), 
            transparent);
          animation: shimmer 2s infinite;
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        /* Logo Marquee Styles */
        .logo-marquee-container {
          width: 100%;
          overflow: hidden;
          position: relative;
          padding: 20px 0;
          margin-top: 40px;
          background: var(--light-color);
          border-radius: 1rem;
          border: 1px solid #e5e7eb;
        }

        .dark-mode .logo-marquee-container {
          background: transparent;
          border: none;
        }

        .logo-marquee-track {
          display: flex;
          animation: marquee 40s linear infinite;
          width: max-content;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .logo-item {
          flex-shrink: 0;
          margin: 0 20px;
          transition: all 0.3s ease;
          cursor: pointer;
          position: relative;
        }

        .logo-image-placeholder {
          width: 80px;
          height: 80px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          background: transparent;
        }

        .logo-item:hover .logo-image-placeholder {
          transform: scale(1.1);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .dark-mode .logo-item:hover .logo-image-placeholder {
          box-shadow: 0 5px 15px rgba(255, 255, 255, 0.1);
        }

        .logo-text {
          color: var(--gray-700);
          font-weight: 600;
          font-size: 0.8rem;
          text-align: center;
          padding: 5px;
          transition: all 0.3s ease;
        }

        .dark-mode .logo-text {
          color: var(--gray-300);
        }

        .logo-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 15px;
          transition: all 0.3s ease;
          opacity: 0.8;
        }

        .dark-mode .logo-img {
          opacity: 0.9;
          filter: brightness(1.1);
        }

        .logo-item:hover .logo-img {
          transform: scale(1.1);
          opacity: 1;
          filter: brightness(1.2);
          padding: 10px;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .skills {
            padding: 3rem 0;
          }
          
          .section-title {
            font-size: 2rem;
          }
          
          .skills-grid {
            grid-template-columns: 1fr;
          }
          
          .logo-image-placeholder {
            width: 60px;
            height: 60px;
          }
        }
      `}</style>
    </>
  );
};

export default Skills;