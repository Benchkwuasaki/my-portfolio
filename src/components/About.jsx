import { Award, Briefcase, GraduationCap, Sparkles, Calendar, Code, Database, Cpu, Image as GalleryIcon, X } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';


const About = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const sectionRef = useRef(null);
  
  const stats = [
    { icon: <Briefcase size={24} />, label: 'Experience', value: '1+ Years' },
    { icon: <Award size={24} />, label: 'Projects', value: '20+' },
    { icon: <GraduationCap size={24} />, label: 'Camiguin Polytechnic State College', value: "Master's" },
    { icon: <Sparkles size={24} />, label: 'AI Integration / Manual integration', value: 'Expert' },
  ];

  const skills = [
    { category: 'Frontend', description: 'React, HTML, Vanilla JavaScript, Tailwind CSS, CSS Vanilla, Flutter, Bootstrap,CodeIgniter 4' },
    { category: 'Backend', description: 'PHP Vanilla, Python, Laravel, MySQL,node js,supabase,firebase' },
    { category: 'Tools', description: 'Figma, Artificial Intelligence' },
    { category: 'Soft Skills', description: 'Problem-solving, Team Leadership, Agile, Artist' },
  ];

  const learningJourney = [
    {
      year: '2022',
      title: 'HTML & CSS Foundations',
      description: 'I Started web development journey with core frontend technologies',
      icon: <Code size={20} />,
      color: '#4361ee',
      progress: 100
    },
    {
      year: '2023',
      title: 'JavaScript & PHP Mastery',
      description: 'Advanced from basics to complex programming concepts and server-side development',
      icon: <Code size={20} />,
      color: '#4cc9f0',
      progress: 100
    },
    {
      year: '2024',
      title: 'Database & Backend Systems',
      description: 'Mastered Firebase, MySQL, and database management from basic to advanced',
      icon: <Database size={20} />,
      color: '#7209b7',
      progress: 100
    },
    {
      year: '2025',
      title: 'Modern Frameworks & AI Integration',
      description: 'Advanced learning React, and Laravel then tailwind, and independent learning through AI-assisted development and Other Programming language With The Help Of Ai.',
      icon: <Cpu size={20} />,
      color: '#f72585',
      progress: 100
    }
  ];

  // Sample gallery images (replace with your actual images)
  const galleryImages = [
    { id: 1, src: '../assets/gallery/IrUzjKGs.jpg', alt: 'Professional Headshot' },
    { id: 2, src: '/images/profile-2.jpg', alt: 'Working on Project' },
    { id: 3, src: '/images/profile-3.jpg', alt: 'Team Collaboration' },
    { id: 4, src: '/images/profile-4.jpg', alt: 'Speaking at Event' },
  ];

  useEffect(() => {
    // Check if dark mode is enabled on document
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains('dark-mode');
      setIsDarkMode(isDark);
    };
    
    checkDarkMode();
    
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    return () => observer.disconnect();
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
        threshold: 0.1, // Trigger when 10% of the section is visible
        rootMargin: '0px 0px -100px 0px' // Slight offset for better timing
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

  // Prevent body scroll when gallery is open
  useEffect(() => {
    if (showGallery) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showGallery]);

  return (
    <>
      <section 
        id="about" 
        ref={sectionRef}
        className={`about-section ${isDarkMode ? 'dark-mode' : ''} ${isVisible ? 'visible' : ''}`}
      >
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">About Me</span>
            <h2 className="section-title">Crafting Digital Excellence</h2>
            <p className="section-description">
              Full-stack developer bridging design & development with modern technologies
            </p>
          </div>

          <div className="about-grid">
            {/* Left Column - Introduction & Stats */}
            <div className="about-intro">
              <div className="intro-content">
                <h3 className="intro-title">Turning Vision into Reality</h3>
                <div className="intro-text">
                  <p>
                      I specialize in creating elegant, performant web applications that solve real-world problems. 
                    With expertise across the entire stack, I deliver solutions that are both beautiful and functional.
                  </p>
                  <p>
                      My approach combines technical excellence with user-centric design, ensuring every 
                    project meets both business objectives and user expectations.
                  </p>
                </div>

                {/* Learning Journey Timeline */}
                <div className="learning-journey">
                  <div className="journey-header">
                    <Calendar size={20} />
                    <h4 className="journey-title">My Learning Journey Into having strong foundation on each Prog Langauage</h4>
                  </div>
                  <p className="journey-subtitle">My progression from foundations to modern development</p>
                  
                  <div className="journey-timeline">
                    {learningJourney.map((item, index) => (
                      <div key={index} className="timeline-item">
                        <div className="timeline-year" style={{ backgroundColor: item.color }}>
                          {item.year}
                        </div>
                        <div className="timeline-content">
                          <div className="timeline-header">
                            <div className="timeline-icon" style={{ color: item.color }}>
                              {item.icon}
                            </div>
                            <h5 className="timeline-title">{item.title}</h5>
                          </div>
                          <p className="timeline-description">{item.description}</p>
                          <div className="progress-container">
                            <div className="progress-bar">
                              <div 
                                className="progress-fill" 
                                style={{ 
                                  backgroundColor: item.color,
                                  width: `${item.progress}%`
                                }}
                              ></div>
                            </div>
                            <span className="progress-text">{item.progress}% Mastery</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Unique Value Proposition */}
                <div className="value-card">
                  <div className="value-header">
                    <div className="value-icon">
                      <Sparkles size={20} />
                    </div>
                    <h4>Strategic AI Integration</h4>
                  </div>
                  <p className="value-description">
                    I leverage AI as a <span className="highlight">problem-solving partner</span>, 
                    not a replacement for human creativity. This approach accelerates development while 
                    maintaining <span className="highlight">innovative, original solutions</span>.
                  </p>
                </div>

                {/* Stats Grid */}
                <div className="stats-grid">
                  {stats.map((stat, index) => (
                    <div key={index} className="stat-item">
                      <div className="stat-icon-wrapper">
                        {stat.icon}
                      </div>
                      <div className="stat-content">
                        <div className="stat-value">{stat.value}</div>
                        <div className="stat-label">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Skills */}
            <div className="skills-section">
              <div className="skills-header">
                <h3 className="skills-title">Technical Arsenal</h3>
                <p className="skills-subtitle">Comprehensive skills for full-stack development</p>
              </div>

              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-card">
                    <div className="skill-card-header">
                      <div className="skill-dot" style={{ '--dot-color': `var(--skill-color-${index + 1})` }}></div>
                      <h4 className="skill-category">{skill.category}</h4>
                    </div>
                    <p className="skill-description">{skill.description}</p>
                  </div>
                ))}
              </div>

              {/* AI Skill Highlight */}
              <div className="ai-highlight">
                <div className="ai-header">
                  <Sparkles size={18} />
                  <h4>AI-Powered Development</h4>
                </div>
                <div className="ai-tags">
                  <span className="ai-tag">Intelligent Debugging</span>
                  <span className="ai-tag">Workflow Automation</span>
                  <span className="ai-tag">Code Optimization</span>
                  <span className="ai-tag">Predictive Solutions</span>
                </div>
              </div>

              {/* Gallery Button - Added below AI-Powered Development */}
              <div className="gallery-button-container">
                <button 
                  className="gallery-button"
                  onClick={() => setShowGallery(true)}
                  aria-label="Open Gallery"
                >
                  <div className="gallery-button-content">
                    <GalleryIcon size={20} />
                    <span>View Professional Gallery</span>
                  </div>
                  <div className="gallery-button-hint">
                    Click to see professional photos
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .about-section {
            padding: 5rem 0;
            background: linear-gradient(135deg, 
              rgba(67, 97, 238, 0.02) 0%, 
              rgba(76, 201, 240, 0.02) 50%, 
              rgba(255, 255, 255, 0) 100%);
            position: relative;
            overflow: hidden;
            border-radius: 14px;
            
            /* Animation properties */
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s ease, transform 0.8s ease;
          }

          .about-section.visible {
            opacity: 1;
            transform: translateY(0);
          }

          /* Staggered animations for child elements */
          .about-section.visible .section-header {
            animation: fadeInUp 0.6s ease 0.2s forwards;
            opacity: 0;
            transform: translateY(20px);
          }

          .about-section.visible .about-intro {
            animation: fadeInUp 0.6s ease 0.4s forwards;
            opacity: 0;
            transform: translateY(20px);
          }

          .about-section.visible .skills-section {
            animation: fadeInUp 0.6s ease 0.6s forwards;
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

          .about-section.dark-mode {
            background: linear-gradient(135deg, 
              rgba(67, 97, 238, 0.05) 0%, 
              rgba(76, 201, 240, 0.05) 50%, 
              rgba(0, 0, 0, 0.3) 100%);
          }

          .about-section::before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 300px;
            height: 300px;
            background: radial-gradient(circle, 
              rgba(67, 97, 238, 0.05) 0%, 
              transparent 70%);
            transform: translate(30%, -30%);
          }

          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1.5rem;
            position: relative;
            z-index: 1;
          }

          .section-header {
            text-align: center;
            margin-bottom: 4rem;
          }

          .section-subtitle {
            display: inline-block;
            font-size: 0.875rem;
            font-weight: 600;
            color: #4361ee;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            margin-bottom: 1rem;
            padding: 0.5rem 1rem;
            background: rgba(67, 97, 238, 0.1);
            border-radius: 2rem;
          }

          .section-title {
            font-size: 2.5rem;
            font-weight: 700;
            color: #1a1a1a;
            margin-bottom: 1rem;
            line-height: 1.2;
          }

          .about-section.dark-mode .section-title {
            color: #ffffff;
          }

          .section-description {
            font-size: 1.125rem;
            color: #666666;
            max-width: 600px;
            margin: 0 auto;
            line-height: 1.6;
          }

          .about-section.dark-mode .section-description {
            color: #e0e0e0;
          }

          .about-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          @media (min-width: 992px) {
            .about-grid {
              grid-template-columns: 1fr 1fr;
              gap: 4rem;
            }
            
            .skills-section {
              position: relative;
              left: -20px;
            }
          }

          .about-intro {
            display: flex;
            flex-direction: column;
            gap: 2rem;
          }

          .intro-title {
            font-size: 1.75rem;
            font-weight: 600;
            color: #1a1a1a;
            margin-bottom: 1.5rem;
            line-height: 1.3;
          }

          .about-section.dark-mode .intro-title {
            color: #ffffff;
          }

          .intro-text {
            display: flex;
            flex-direction: column;
            gap: 1.25rem;
            margin-bottom: 2rem;
          }

          .intro-text p {
            font-size: 1.125rem;
            color: #555555;
            line-height: 1.7;
          }

          .about-section.dark-mode .intro-text p {
            color: #e0e0e0;
          }

          /* Learning Journey Styles */
          .learning-journey {
            background: white;
            border-radius: 1rem;
            padding: 2rem;
            border: 1px solid #e5e7eb;
            margin-bottom: 2.5rem;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
          }

          .about-section.dark-mode .learning-journey {
            background: linear-gradient(135deg, 
              rgba(30, 30, 40, 0.9) 0%, 
              rgba(40, 40, 55, 0.9) 100%);
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
          }

          .journey-header {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            margin-bottom: 0.75rem;
          }

          .journey-header svg {
            color: #4361ee;
          }

          .about-section.dark-mode .journey-header svg {
            color: #4cc9f0;
          }

          .journey-title {
            font-size: 1.25rem;
            font-weight: 600;
            color: #1a1a1a;
            margin: 0;
          }

          .about-section.dark-mode .journey-title {
            color: #ffffff;
          }

          .journey-subtitle {
            font-size: 0.9375rem;
            color: #666666;
            margin-bottom: 1.5rem;
          }

          .about-section.dark-mode .journey-subtitle {
            color: #e0e0e0;
          }

          .journey-timeline {
            position: relative;
          }

          .journey-timeline::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 2px;
            background: linear-gradient(to bottom, 
              rgba(67, 97, 238, 0.3), 
              rgba(76, 201, 240, 0.3),
              rgba(114, 9, 183, 0.3),
              rgba(247, 37, 133, 0.3));
          }

          .timeline-item {
            position: relative;
            padding-left: 2rem;
            margin-bottom: 2rem;
          }

          .timeline-item:last-child {
            margin-bottom: 0;
          }

          .timeline-year {
            position: absolute;
            left: -10px;
            top: 0;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: 700;
            font-size: 0.875rem;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            z-index: 2;
          }

          .timeline-content {
            padding-left: 0.5rem;
          }

          .timeline-header {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            margin-bottom: 0.75rem;
          }

          .timeline-icon {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            background: rgba(67, 97, 238, 0.1);
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .about-section.dark-mode .timeline-icon {
            background: rgba(255, 255, 255, 0.1);
          }

          .timeline-title {
            font-size: 1.125rem;
            font-weight: 600;
            color: #1a1a1a;
            margin: 0;
          }

          .about-section.dark-mode .timeline-title {
            color: #ffffff;
          }

          .timeline-description {
            font-size: 0.9375rem;
            color: #666666;
            margin-bottom: 1rem;
            line-height: 1.5;
          }

          .about-section.dark-mode .timeline-description {
            color: #e0e0e0;
          }

          .progress-container {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-top: 0.5rem;
          }

          .progress-bar {
            flex: 1;
            height: 6px;
            background: rgba(0, 0, 0, 0.1);
            border-radius: 3px;
            overflow: hidden;
          }

          .about-section.dark-mode .progress-bar {
            background: rgba(255, 255, 255, 0.1);
          }

          .progress-fill {
            height: 100%;
            border-radius: 3px;
            transition: width 1.5s ease-in-out;
          }

          .progress-text {
            font-size: 0.75rem;
            font-weight: 600;
            color: #666666;
            min-width: 70px;
          }

          .about-section.dark-mode .progress-text {
            color: #e0e0e0;
          }

          .value-card {
            background: linear-gradient(135deg, 
              rgba(67, 97, 238, 0.08) 0%, 
              rgba(76, 201, 240, 0.08) 100%);
            border-radius: 1rem;
            padding: 1.75rem;
            border: 1px solid rgba(67, 97, 238, 0.1);
            margin-bottom: 2.5rem;
            position: relative;
            overflow: hidden;
          }

          .value-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 4px;
            height: 100%;
            background: linear-gradient(to bottom, 
              #4361ee, 
              #4cc9f0);
          }

          .about-section.dark-mode .value-card {
            background: linear-gradient(135deg, 
              rgba(67, 97, 238, 0.15) 0%, 
              rgba(76, 201, 240, 0.15) 100%);
            border: 1px solid rgba(67, 97, 238, 0.2);
          }

          .value-header {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            margin-bottom: 1rem;
          }

          .value-icon {
            width: 2.5rem;
            height: 2.5rem;
            background: linear-gradient(135deg, 
              #4361ee, 
              #4cc9f0);
            border-radius: 0.75rem;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
          }

          .value-header h4 {
            font-size: 1.25rem;
            font-weight: 600;
            color: #1a1a1a;
            margin: 0;
          }

          .about-section.dark-mode .value-header h4 {
            color: #ffffff;
          }

          .value-description {
            font-size: 1.0625rem;
            color: #555555;
            line-height: 1.7;
            margin: 0;
          }

          .about-section.dark-mode .value-description {
            color: #e0e0e0;
          }

          .highlight {
            background: linear-gradient(120deg, 
              rgba(67, 97, 238, 0.15) 0%, 
              rgba(76, 201, 240, 0.15) 100%);
            padding: 0.125rem 0.375rem;
            border-radius: 0.25rem;
            font-weight: 600;
            color: #4361ee;
          }

          .about-section.dark-mode .highlight {
            background: linear-gradient(120deg, 
              rgba(67, 97, 238, 0.3) 0%, 
              rgba(76, 201, 240, 0.3) 100%);
            color: #5de1ff;
          }

          .stats-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1.25rem;
          }

          @media (min-width: 768px) {
            .stats-grid {
              grid-template-columns: repeat(4, 1fr);
            }
          }

          .stat-item {
            background: white;
            border-radius: 0.875rem;
            padding: 1.5rem;
            text-align: center;
            border: 1px solid #e5e7eb;
            transition: all 0.3s ease;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .about-section.dark-mode .stat-item {
            background: #1a1a1a;
            border-color: #333333;
          }

          .stat-item:hover {
            transform: translateY(-4px);
            border-color: #4361ee;
            box-shadow: 0 8px 32px rgba(67, 97, 238, 0.12);
          }

          .stat-icon-wrapper {
            width: 3.5rem;
            height: 3.5rem;
            background: linear-gradient(135deg, 
              #4361ee, 
              #4cc9f0);
            border-radius: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1rem;
            color: white;
          }

          .stat-value {
            font-size: 1.75rem;
            font-weight: 700;
            color: #1a1a1a;
            line-height: 1;
            margin-bottom: 0.25rem;
          }

          .about-section.dark-mode .stat-value {
            color: #ffffff;
          }

          .stat-label {
            font-size: 0.875rem;
            color: #666666;
            font-weight: 500;
          }

          .about-section.dark-mode .stat-label {
            color: #e0e0e0;
          }

          /* Skills Section - ORANGE BACKGROUND IN DARK MODE */
          .skills-section {
            background: white;
            border-radius: 1.5rem;
            padding: 2.5rem;
            border: 1px solid #e5e7eb;
            box-shadow: 0 4px 24px rgba(0, 0, 0, 0.05);
          }

          /* ORANGE BACKGROUND IN DARK MODE */
          .about-section.dark-mode .skills-section {
            background: linear-gradient(135deg, 
              rgba(255, 137, 53, 1) 0%, 
              rgba(255, 166, 0, 1) 100%) !important;
            border-color: rgba(255, 140, 0, 0.8) !important;
            box-shadow: 0 4px 24px rgba(255, 107, 0, 0.3) !important;
          }

          .skills-header {
            margin-bottom: 2.5rem;
            text-align: center;
          }

          .skills-title {
            font-size: 1.75rem;
            font-weight: 600;
            color: #1a1a1a;
            margin-bottom: 0.75rem;
          }

          .about-section.dark-mode .skills-title {
            color: #ffffff !important;
          }

          .skills-subtitle {
            font-size: 1.0625rem;
            color: #666666;
            margin: 0;
          }

          .about-section.dark-mode .skills-subtitle {
            color: #ffffff !important;
          }

          .skills-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1.25rem;
            margin-bottom: 2.5rem;
          }

          @media (min-width: 640px) {
            .skills-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          .skill-card {
            padding: 1.5rem;
            border-radius: 1rem;
            border: 1px solid #e5e7eb;
            transition: all 0.3s ease;
            background: linear-gradient(to bottom right, 
              rgba(255, 255, 255, 0.9), 
              rgba(255, 255, 255, 0.5));
          }

          .about-section.dark-mode .skill-card {
            background: rgba(255, 255, 255, 0.95);
            border-color: rgba(255, 255, 255, 0.3);
          }

          .skill-card:hover {
            transform: translateY(-3px);
            border-color: #4361ee;
            box-shadow: 0 6px 20px rgba(67, 97, 238, 0.1);
          }

          .about-section.dark-mode .skill-card:hover {
            border-color: #ff6b00;
            box-shadow: 0 6px 20px rgba(255, 107, 0, 0.4);
          }

          .skill-card-header {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            margin-bottom: 0.875rem;
          }

          .skill-dot {
            width: 0.75rem;
            height: 0.75rem;
            border-radius: 50%;
            background: var(--dot-color);
          }

          .about-section.dark-mode .skill-dot {
            background: #ff6b00;
          }

          .skill-category {
            font-size: 1.125rem;
            font-weight: 600;
            color: #1a1a1a;
            margin: 0;
          }

          .about-section.dark-mode .skill-category {
            color: #222222;
          }

          .skill-description {
            color: #555555;
            font-size: 0.9375rem;
            line-height: 1.6;
            margin: 0;
          }

          .about-section.dark-mode .skill-description {
            color: #444444;
          }

          :root {
            --skill-color-1: #4361ee;
            --skill-color-2: #4cc9f0;
            --skill-color-3: #7209b7;
            --skill-color-4: #f72585;
          }

          /* AI Highlight */
          .ai-highlight {
            background: linear-gradient(135deg, 
              rgba(67, 97, 238, 0.06) 0%, 
              rgba(139, 92, 246, 0.06) 100%);
            border-radius: 1rem;
            padding: 1.75rem;
            border: 1px solid rgba(139, 92, 246, 0.2);
            margin-bottom: 1.5rem;
          }

          .about-section.dark-mode .ai-highlight {
            background: linear-gradient(135deg, 
              rgba(255, 87, 0, 0.9) 0%, 
              rgba(255, 140, 0, 0.9) 100%);
            border: 1px solid rgba(255, 255, 255, 0.3);
          }

          .ai-header {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            margin-bottom: 1.25rem;
          }

          .ai-header svg {
            color: #8b5cf6;
          }

          .about-section.dark-mode .ai-header svg {
            color: #ffffff;
          }

          .ai-header h4 {
            font-size: 1.125rem;
            font-weight: 600;
            color: #1a1a1a;
            margin: 0;
          }

          .about-section.dark-mode .ai-header h4 {
            color: #ffffff;
          }

          .ai-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.75rem;
          }

          .ai-tag {
            font-size: 0.875rem;
            padding: 0.5rem 1rem;
            background: rgba(139, 92, 246, 0.1);
            color: #8b5cf6;
            border-radius: 2rem;
            font-weight: 500;
            border: 1px solid rgba(139, 92, 246, 0.2);
          }

          .about-section.dark-mode .ai-tag {
            background: rgba(255, 255, 255, 0.25);
            color: #ffffff;
            border: 1px solid rgba(255, 255, 255, 0.4);
          }

          /* Gallery Button Styles */
          .gallery-button-container {
            margin-top: 1.5rem;
          }

          .gallery-button {
            width: 100%;
            padding: 1.25rem;
            background: linear-gradient(135deg, 
              rgba(67, 97, 238, 0.1) 0%, 
              rgba(76, 201, 240, 0.1) 100%);
            border: 2px dashed rgba(67, 97, 238, 0.3);
            border-radius: 1rem;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.75rem;
          }

          .about-section.dark-mode .gallery-button {
            background: linear-gradient(135deg, 
              rgba(255, 255, 255, 0.1) 0%, 
              rgba(255, 255, 255, 0.05) 100%);
            border: 2px dashed rgba(255, 255, 255, 0.3);
          }

          .gallery-button:hover {
            background: linear-gradient(135deg, 
              rgba(67, 97, 238, 0.15) 0%, 
              rgba(76, 201, 240, 0.15) 100%);
            border-color: #4361ee;
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(67, 97, 238, 0.15);
          }

          .about-section.dark-mode .gallery-button:hover {
            background: linear-gradient(135deg, 
              rgba(255, 255, 255, 0.2) 0%, 
              rgba(255, 255, 255, 0.1) 100%);
            border-color: #ff6b00;
            box-shadow: 0 8px 24px rgba(255, 107, 0, 0.2);
          }

          .gallery-button-content {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            color: #4361ee;
            font-weight: 600;
            font-size: 1.0625rem;
          }

          .about-section.dark-mode .gallery-button-content {
            color: #ffffff;
          }

          .gallery-button-content svg {
            stroke-width: 2;
          }

          .gallery-button-hint {
            font-size: 0.875rem;
            color: #666666;
            opacity: 0.8;
          }

          .about-section.dark-mode .gallery-button-hint {
            color: rgba(255, 255, 255, 0.9);
          }

          /* Responsive Adjustments */
          @media (max-width: 768px) {
            .about-section {
              padding: 3rem 0;
            }

            .section-title {
              font-size: 2rem;
            }

            .skills-section {
              padding: 2rem;
              margin: 0;
              left: 0 !important;
            }

            .stats-grid {
              gap: 1rem;
            }

            .stat-item {
              padding: 1.25rem;
            }

            .learning-journey {
              padding: 1.5rem;
            }

            .timeline-item {
              padding-left: 1.5rem;
            }

            .timeline-year {
              width: 36px;
              height: 36px;
              left: -8px;
              font-size: 0.75rem;
            }

            .gallery-button {
              padding: 1rem;
            }

            .gallery-button-content {
              font-size: 1rem;
            }
          }

          @media (max-width: 480px) {
            .container {
              padding: 0 1rem;
            }

            .section-title {
              font-size: 1.75rem;
            }

            .intro-title {
              font-size: 1.5rem;
            }

            .value-card {
              padding: 1.5rem;
            }

            .skills-grid {
              grid-template-columns: 1fr;
            }

            .ai-tags {
              justify-content: center;
            }
            
            .skills-section {
              padding: 1.5rem;
              margin: 0;
            }

            .stats-grid {
              grid-template-columns: repeat(2, 1fr);
            }

            .gallery-button-content {
              flex-direction: column;
              text-align: center;
              gap: 0.5rem;
            }

            .gallery-button-hint {
              text-align: center;
            }
          }
        `}</style>
      </section>

      {/* Gallery Modal */}
      {showGallery && (
        <div className="gallery-modal">
          <div className="gallery-modal-overlay" onClick={() => setShowGallery(false)} />
          <div className="gallery-modal-content">
            <div className="gallery-modal-header">
              <h3 className="gallery-modal-title">Professional Gallery</h3>
              <button 
                className="gallery-modal-close"
                onClick={() => setShowGallery(false)}
                aria-label="Close Gallery"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="gallery-grid">
              {galleryImages.map((image) => (
                <div key={image.id} className="gallery-item">
                  <div className="gallery-item-inner">
                    {/* Placeholder image - replace with your actual images */}
                    <div className="gallery-image-placeholder">
                      <div className="placeholder-text">
                        <GalleryIcon size={48} />
                        <span>{image.alt}</span>
                      </div>
                    </div>
                    <p className="gallery-image-caption">{image.alt}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="gallery-modal-footer">
              <p className="gallery-modal-hint">
                Professional photos showcasing work, events, and collaborations
              </p>
            </div>
          </div>

          <style jsx>{`
            .gallery-modal {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              z-index: 9999;
              padding: 1rem;
            }

            .gallery-modal-overlay {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: rgba(0, 0, 0, 0.85);
              backdrop-filter: blur(8px);
              animation: fadeIn 0.3s ease;
            }

            .gallery-modal-content {
              position: relative;
              background: white;
              border-radius: 1.5rem;
              width: 100%;
              max-width: 1200px;
              max-height: 90vh;
              overflow: hidden;
              animation: slideUp 0.4s ease;
              box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            }

            .about-section.dark-mode ~ .gallery-modal-content {
              background: linear-gradient(135deg, 
                rgba(30, 30, 40, 0.95) 0%, 
                rgba(40, 40, 55, 0.95) 100%);
              border: 1px solid rgba(255, 255, 255, 0.1);
            }

            .gallery-modal-header {
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 1.5rem 2rem;
              border-bottom: 1px solid #e5e7eb;
            }

            .about-section.dark-mode ~ .gallery-modal-content .gallery-modal-header {
              border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            }

            .gallery-modal-title {
              font-size: 1.5rem;
              font-weight: 600;
              color: #1a1a1a;
              margin: 0;
            }

            .about-section.dark-mode ~ .gallery-modal-content .gallery-modal-title {
              color: #ffffff;
            }

            .gallery-modal-close {
              width: 40px;
              height: 40px;
              border-radius: 50%;
              border: none;
              background: rgba(0, 0, 0, 0.05);
              color: #666666;
              cursor: pointer;
              display: flex;
              align-items: center;
              justify-content: center;
              transition: all 0.2s ease;
            }

            .gallery-modal-close:hover {
              background: rgba(0, 0, 0, 0.1);
              color: #1a1a1a;
            }

            .about-section.dark-mode ~ .gallery-modal-content .gallery-modal-close {
              background: rgba(255, 255, 255, 0.1);
              color: rgba(255, 255, 255, 0.8);
            }

            .about-section.dark-mode ~ .gallery-modal-content .gallery-modal-close:hover {
              background: rgba(255, 255, 255, 0.2);
              color: #ffffff;
            }

            .gallery-grid {
              display: grid;
              grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
              gap: 1.5rem;
              padding: 2rem;
              overflow-y: auto;
              max-height: calc(90vh - 140px);
            }

            .gallery-item {
              aspect-ratio: 4/3;
            }

            .gallery-item-inner {
              height: 100%;
              display: flex;
              flex-direction: column;
              gap: 0.75rem;
            }

            .gallery-image-placeholder {
              flex: 1;
              background: linear-gradient(135deg, 
                rgba(67, 97, 238, 0.1) 0%, 
                rgba(76, 201, 240, 0.1) 100%);
              border-radius: 1rem;
              display: flex;
              align-items: center;
              justify-content: center;
              border: 2px dashed rgba(67, 97, 238, 0.2);
            }

            .about-section.dark-mode ~ .gallery-modal-content .gallery-image-placeholder {
              background: linear-gradient(135deg, 
                rgba(67, 97, 238, 0.15) 0%, 
                rgba(76, 201, 240, 0.15) 100%);
              border: 2px dashed rgba(255, 255, 255, 0.2);
            }

            .placeholder-text {
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 0.75rem;
              color: #4361ee;
              text-align: center;
            }

            .about-section.dark-mode ~ .gallery-modal-content .placeholder-text {
              color: #4cc9f0;
            }

            .placeholder-text svg {
              opacity: 0.7;
            }

            .placeholder-text span {
              font-size: 0.875rem;
              font-weight: 500;
              max-width: 80%;
            }

            .gallery-image-caption {
              font-size: 0.875rem;
              color: #666666;
              text-align: center;
              margin: 0;
            }

            .about-section.dark-mode ~ .gallery-modal-content .gallery-image-caption {
              color: rgba(255, 255, 255, 0.8);
            }

            .gallery-modal-footer {
              padding: 1rem 2rem;
              border-top: 1px solid #e5e7eb;
              text-align: center;
            }

            .about-section.dark-mode ~ .gallery-modal-content .gallery-modal-footer {
              border-top: 1px solid rgba(255, 255, 255, 0.1);
            }

            .gallery-modal-hint {
              font-size: 0.875rem;
              color: #666666;
              margin: 0;
              opacity: 0.8;
            }

            .about-section.dark-mode ~ .gallery-modal-content .gallery-modal-hint {
              color: rgba(255, 255, 255, 0.7);
            }

            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }

            @keyframes slideUp {
              from { 
                opacity: 0;
                transform: translateY(20px);
              }
              to { 
                opacity: 1;
                transform: translateY(0);
              }
            }

            @media (max-width: 768px) {
              .gallery-grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 1rem;
                padding: 1.5rem;
              }

              .gallery-modal-header {
                padding: 1.25rem 1.5rem;
              }

              .gallery-modal-footer {
                padding: 1rem 1.5rem;
              }
            }

            @media (max-width: 480px) {
              .gallery-grid {
                grid-template-columns: 1fr;
              }

              .gallery-modal-header {
                padding: 1rem 1.25rem;
              }

              .gallery-modal-title {
                font-size: 1.25rem;
              }

              .gallery-modal-content {
                max-height: 95vh;
              }

              .gallery-grid {
                max-height: calc(95vh - 120px);
              }
            }
          `}</style>
        </div>
      )}
    </>
  );
};

export default About;