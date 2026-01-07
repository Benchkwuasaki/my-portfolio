import { ExternalLink, Github, Star } from 'lucide-react';
import { useState, useEffect } from 'react';
import iecs_alumni from '../assets/image.png';
import oinktrade from '../assets/Screenshot 2025-12-24 170700.png';
import Yumbing_choir from '../assets/Screenshot 2025-12-26 094449.png';
import artist from '../assets/Screenshot 2025-12-26 101535.png';
import acces from '../assets/Screenshot 2026-01-03 190102.png';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  // Check for responsive breakpoints
  useEffect(() => {
    const checkResponsive = () => {
      const width = window.innerWidth;
      setIsMobile(width < 640);
      setIsTablet(width >= 640 && width < 1024);
    };
    
    checkResponsive();
    window.addEventListener('resize', checkResponsive);
    
    return () => window.removeEventListener('resize', checkResponsive);
  }, []);

  const projects = [
    {
      id: 1,
      title: 'IECS-GRADUATE ALUMNI TRACER',
      description: 'A web system that records and monitors IECS alumni data, including graduate profiles and employment information, for institutional tracking and analysis. Hosted Online.',
      tags: ['React', 'PHP-LARAVEL', 'MYSQL', 'HTML', 'CSS'],
      image: iecs_alumni,
      github: null,
      live: 'https://iecs-tracer.kesug.com/',
      featured: true,
      category: 'fullstack',
    },
    {
      id: 2,
      title: 'Oinktrade',
      description: 'A web-based trading platform designed to manage buying and selling transactions with a user-friendly interface and real-time data handling. Locally Hosted',
      tags: ['Codeigniter4', 'Vanilla Php', 'Mysql', 'HTML', 'CSS', 'Javascript'],
      image: oinktrade,
      github: null,
      live: null,
      featured: true,
      category: 'fullstack',
    },
    {
      id: 4,
      title: 'Real-time Dashboard',
      description: 'Interactive dashboard for data visualization and analytics with live updates and customizable charts. locally Hosted.',
      tags: ['Vue.js', 'D3.js', 'WebSocket'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600',
      github: 'https://github.com',
      live: 'https://demo.com',
      category: 'frontend',
    },
    {
      id: 6,
      title: 'Yumbing Choir Online Printing',
      description: 'A web-based online printing system that allows users to customize, submit, and manage printing orders efficiently. Designed to simplify the ordering process and improve communication between customers and the printing service. locally Hosted.',
      tags: ['HTML', 'CSS', 'Supabase', 'JavaScript'],
      image: Yumbing_choir,
      github: null,
      live: null,
      featured: true,
      category: 'fullstack',
    },
    {
      id: 7,
      title: 'Bench Art Sale',
      description: 'A web-based art selling platform where artists can showcase and sell their artworks, allowing customers to browse collections, view artwork details, and place orders through a simple and user-friendly interface. Locally Hosted',
      tags: ['Flutter', 'Dart', 'Firebase'],
      image: artist,
      github: null,
      live: null,
      category: 'mobile'
    },
    {
      id: 8,
      title: 'Procurement Management System',
      description: 'A comprehensive Procurement Management System designed to streamline and automate the procurement process, from requisition to purchase order generation and vendor management in Our College Campus. Locally Hosted',
      tags:['Microsoft Access', 'VBA', 'SQL'],
      image: acces,
      github: null,
      live:null,
      category: 'Microsoft'
    }
  ];

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'featured', label: 'Featured' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'mobile', label: 'Mobile' },
    { id:'Microsoft', label: 'MS Access'}
  ];

  const filteredProjects = projects.filter((project) => {
    if (filter === 'all') return true;
    if (filter === 'featured') return project.featured;
    return project.category === filter;
  });

  return (
    <section id="projects" className="section projects">
      <div className="main-container">
        <div className="projects-header">
          <div className="projects-title-section">
            <h2 className="section-title">Featured Projects</h2>
            <p className="projects-description">
              A curated collection of my notable projects showcasing full-stack web development,
              mobile applications, and innovative solutions built with modern technologies.
              Some projects were developed for local use, while others are already hosted online.
              Due to the large number of projects I've created, only selected works are featured here.
            </p>
          </div>
          
          <div className="projects-filter">
            <div className="filters-scroll-container">
              {filters.map((filterItem) => (
                <button
                  key={filterItem.id}
                  onClick={() => setFilter(filterItem.id)}
                  className={`filter-btn ${filter === filterItem.id ? 'active' : ''}`}
                  aria-label={`Filter by ${filterItem.label}`}
                >
                  {filterItem.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="project-card fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-img"
                  loading="lazy"
                />
                {project.featured && (
                  <div className="project-featured">
                    <Star size={isMobile ? 10 : 12} />
                    <span>Featured</span>
                  </div>
                )}
                {(project.github || project.live) && (
                  <div className="project-overlay">
                    <div className="project-links">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                          title="View Code"
                          aria-label="GitHub repository"
                        >
                          <Github size={isMobile ? 16 : 20} />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                          title="Live Demo"
                          aria-label="Live demo"
                        >
                          <ExternalLink size={isMobile ? 16 : 20} />
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">
                  {project.description}
                </p>
                
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="project-tag"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-action-btn"
                      aria-label="View code on GitHub"
                    >
                      <Github size={isMobile ? 14 : 18} />
                      <span>Code</span>
                    </a>
                  ) : (
                    <span className="project-action-btn disabled">
                      <Github size={isMobile ? 14 : 18} />
                      <span>Private</span>
                    </span>
                  )}
                  
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-action-btn primary"
                      aria-label="View live demo"
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={isMobile ? 12 : 16} />
                    </a>
                  ) : (
                    <span className="project-action-btn primary disabled">
                      <span>View Details</span>
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive CSS - All in one file */}
      <style jsx="true">{`
        /* Mobile-first responsive CSS */
        .projects {
          background: linear-gradient(135deg, rgba(114, 9, 183, 0.03), rgba(67, 97, 238, 0.03));
          border-radius: var(--border-radius-lg);
          margin: 20px 10px;
          padding: 30px 0;
          width: 100%;
          overflow: hidden;
        }

        .main-container {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 15px;
        }

        /* Header Styles - Mobile First */
        .projects-header {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 40px;
        }

        .projects-title-section {
          text-align: center;
          width: 100%;
        }

        .section-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--text-dark);
          margin-bottom: 15px;
          line-height: 1.2;
        }

        .dark-mode .section-title {
          color: var(--text-light);
        }

        .projects-description {
          color: var(--gray-600);
          font-size: 0.95rem;
          line-height: 1.5;
          max-width: 100%;
          margin: 0 auto;
          text-align: center;
          padding: 0 10px;
        }

        .dark-mode .projects-description {
          color: var(--gray-400);
        }

        /* Filter Styles - Horizontal Scroll on Mobile */
        .projects-filter {
          width: 100%;
          overflow: hidden;
          padding: 5px 0 15px;
        }

        .filters-scroll-container {
          display: flex;
          gap: 8px;
          padding-bottom: 10px;
          overflow-x: auto;
          overflow-y: hidden;
          scrollbar-width: thin;
          scrollbar-color: var(--primary-color) transparent;
          -webkit-overflow-scrolling: touch;
        }

        .filters-scroll-container::-webkit-scrollbar {
          height: 4px;
        }

        .filters-scroll-container::-webkit-scrollbar-track {
          background: transparent;
        }

        .filters-scroll-container::-webkit-scrollbar-thumb {
          background: var(--primary-color);
          border-radius: 2px;
        }

        .filter-btn {
          padding: 8px 16px;
          border: 2px solid var(--gray-200);
          background: transparent;
          border-radius: 30px;
          font-weight: 500;
          font-size: 0.85rem;
          color: var(--gray-700);
          cursor: pointer;
          transition: var(--transition);
          white-space: nowrap;
          flex-shrink: 0;
          min-height: 36px;
        }

        .dark-mode .filter-btn {
          border-color: var(--gray-700);
          color: var(--gray-300);
        }

        .filter-btn:hover {
          border-color: var(--primary-color);
          color: var(--primary-color);
          transform: translateY(-1px);
        }

        .filter-btn.active {
          background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
          border-color: transparent;
          color: white;
          box-shadow: var(--shadow-sm);
        }

        /* Grid Styles - Responsive */
        .projects-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 25px;
          width: 100%;
        }

        /* Project Card - Mobile Optimized */
        .project-card {
          background: var(--light-color);
          border-radius: var(--border-radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-md);
          transition: var(--transition);
          border: 1px solid var(--gray-200);
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .dark-mode .project-card {
          background: var(--gray-800);
          border-color: var(--gray-700);
        }

        .project-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-xl);
        }

        /* Image Container */
        .project-image {
          position: relative;
          height: 180px;
          overflow: hidden;
        }

        .project-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .project-card:hover .project-img {
          transform: scale(1.05);
        }

        .project-featured {
          position: absolute;
          top: 12px;
          left: 12px;
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 4px 10px;
          background: linear-gradient(135deg, #ffd700, #ff9500);
          color: #000;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
          z-index: 2;
          backdrop-filter: blur(4px);
        }

        .project-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(67, 97, 238, 0.9), rgba(76, 201, 240, 0.9));
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .project-links {
          display: flex;
          gap: 15px;
        }

        .project-link {
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary-color);
          text-decoration: none;
          transition: var(--transition);
        }

        .project-link:hover {
          background: white;
          transform: scale(1.1);
        }

        /* Content Styles */
        .project-content {
          padding: 20px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .project-title {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 10px;
          color: var(--text-dark);
          line-height: 1.3;
        }

        .dark-mode .project-title {
          color: var(--text-light);
        }

        .project-desc {
          color: var(--gray-700);
          font-size: 0.9rem;
          line-height: 1.5;
          margin-bottom: 15px;
          flex: 1;
        }

        .dark-mode .project-desc {
          color: var(--gray-300);
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 20px;
        }

        .project-tag {
          padding: 4px 10px;
          background: var(--gray-100);
          color: var(--gray-700);
          border-radius: 15px;
          font-size: 0.75rem;
          font-weight: 500;
          line-height: 1;
        }

        .dark-mode .project-tag {
          background: var(--gray-700);
          color: var(--gray-300);
        }

        /* Actions */
        .project-actions {
          display: flex;
          gap: 10px;
          margin-top: auto;
        }

        .project-action-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 8px 12px;
          border: 2px solid var(--gray-200);
          border-radius: var(--border-radius);
          color: var(--gray-700);
          text-decoration: none;
          font-weight: 500;
          font-size: 0.85rem;
          transition: var(--transition);
          cursor: pointer;
          background: transparent;
          min-height: 40px;
        }

        .dark-mode .project-action-btn {
          border-color: var(--gray-700);
          color: var(--gray-300);
        }

        .project-action-btn:hover {
          background: var(--gray-100);
          transform: translateY(-2px);
        }

        .dark-mode .project-action-btn:hover {
          background: var(--gray-700);
        }

        .project-action-btn.primary {
          background: linear-gradient(135deg, #10b981, #059669);
          border-color: transparent;
          color: white;
        }

        .project-action-btn.primary:hover {
          background: linear-gradient(135deg, #059669, #10b981);
          box-shadow: var(--shadow-md);
        }

        .project-action-btn.disabled {
          opacity: 0.6;
          cursor: not-allowed;
          pointer-events: none;
        }

        .project-action-btn.disabled:hover {
          transform: none;
          background: transparent;
          box-shadow: none;
        }

        .project-action-btn.primary.disabled {
          opacity: 0.6;
          background: linear-gradient(135deg, #10b981, #059669);
        }

        .project-action-btn.primary.disabled:hover {
          background: linear-gradient(135deg, #10b981, #059669);
          box-shadow: none;
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

        .fade-in {
          animation: fadeIn 0.5s ease forwards;
        }

        /* Tablet Styles (640px and up) */
        @media (min-width: 640px) {
          .projects {
            margin: 30px 15px;
            padding: 40px 0;
          }
          
          .section-title {
            font-size: 2rem;
          }
          
          .projects-description {
            font-size: 1rem;
            max-width: 600px;
            padding: 0;
          }
          
          .projects-grid {
            grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
            gap: 30px;
          }
          
          .project-image {
            height: 200px;
          }
          
          .project-content {
            padding: 25px;
          }
          
          .project-title {
            font-size: 1.3rem;
          }
          
          .project-desc {
            font-size: 0.95rem;
          }
          
          .filter-btn {
            padding: 10px 20px;
            font-size: 0.9rem;
          }
          
          .project-link {
            width: 45px;
            height: 45px;
          }
        }

        /* Desktop Styles (768px and up) */
        @media (min-width: 768px) {
          .projects {
            margin: 40px 20px;
            padding: 50px 0;
          }
          
          .projects-header {
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
            gap: 30px;
          }
          
          .projects-title-section {
            text-align: left;
            flex: 1;
          }
          
          .projects-description {
            text-align: left;
            margin: 10px 0 0;
          }
          
          .projects-filter {
            width: auto;
            min-width: 300px;
            padding: 0;
          }
          
          .filters-scroll-container {
            flex-wrap: wrap;
            justify-content: flex-end;
            overflow: visible;
            padding-bottom: 0;
          }
          
          .projects-grid {
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          }
          
          .section-title {
            font-size: 2.2rem;
          }
        }

        /* Large Desktop (1024px and up) */
        @media (min-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
          }
          
          .project-content {
            padding: 30px;
          }
          
          .project-title {
            font-size: 1.4rem;
          }
          
          .project-desc {
            font-size: 1rem;
          }
        }

        /* Extra Large Screens (1280px and up) */
        @media (min-width: 1280px) {
          .projects-grid {
            grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
          }
        }

        /* Small Mobile Devices (360px and below) */
        @media (max-width: 360px) {
          .projects {
            margin: 15px 5px;
            padding: 25px 0;
          }
          
          .section-title {
            font-size: 1.6rem;
          }
          
          .projects-description {
            font-size: 0.9rem;
            padding: 0 5px;
          }
          
          .project-image {
            height: 160px;
          }
          
          .project-content {
            padding: 15px;
          }
          
          .project-title {
            font-size: 1.1rem;
          }
          
          .project-desc {
            font-size: 0.85rem;
          }
          
          .project-action-btn {
            padding: 6px 10px;
            font-size: 0.8rem;
            min-height: 36px;
          }
          
          .filter-btn {
            padding: 6px 14px;
            font-size: 0.8rem;
          }
        }

        /* Landscape Mobile */
        @media (max-height: 500px) and (orientation: landscape) {
          .project-image {
            height: 150px;
          }
          
          .project-content {
            padding: 15px;
          }
        }

        /* Print Styles */
        @media print {
          .projects {
            margin: 0;
            padding: 20px 0;
            background: none;
          }
          
          .project-card {
            break-inside: avoid;
            box-shadow: none;
            border: 1px solid #ddd;
          }
          
          .project-overlay,
          .project-action-btn:hover {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

// Only add styles once
if (!document.getElementById('projects-styles')) {
  const styleSheet = document.createElement("style");
  styleSheet.id = 'projects-styles';
  styleSheet.textContent = ``; // Empty - styles are inline now
  document.head.appendChild(styleSheet);
}

export default Projects;