import { ExternalLink, Github, Star } from 'lucide-react';
import { useState } from 'react';
import iecs_alumni from '../assets/image.png';
import oinktrade from '../assets/Screenshot 2025-12-24 170700.png';
import Yumbing_choir from '../assets/Screenshot 2025-12-26 094449.png';
import artist from '../assets/Screenshot 2025-12-26 101535.png';
import acces from '../assets/Screenshot 2026-01-03 190102.png';
import ojtDiary from '../assets/Screenshot 2026-01-14 175750.png';
import porftfolio from '../assets/Screenshot 2026-01-14 175750.png';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'IECS-GRADUATE ALUMNI TRACER',
      description: ' This is Our Capstone - Thesis Project A web system that records and monitors IECS alumni data, including graduate profiles and employment information, for institutional tracking and analysis. Hosted Online.',
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
      id: 3,
      title: 'OJT Diary',
      description: 'A web application for tracking and documenting On-the-Job Training experiences, allowing trainees to log daily activities, reflections, and progress. Online Deploy.',
      tags: ['React', 'Node.js', 'MongoDB', 'Express', 'CSS'],
      image: ojtDiary,
      github: null,
      live: null,
      featured: true, // Added to featured as requested
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
      id: 5,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with React and modern CSS to showcase projects and skills. This very site you are viewing! Online Deploy',
      tags: ['React', 'CSS', 'JavaScript', 'Responsive Design'],
      image: porftfolio,
      github: null,
      live:' https://bench-lipang-portfolio.vercel.app/',
      featured: false,
      category: 'frontend', // Changed to frontend as requested
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
      description: 'A comprehensive Procurement Management System designed to sreamline ans automate the procurement process, from requisition to purchase order generation and vendor management in Our College Campus. Locally Hosted',
      tags:['Microsoft Access', 'VBA', 'SQL'],
      image: acces,
      github: null,
      live:null,
      category: 'Microsoft'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'featured', label: 'Featured' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'mobile', label: 'Mobile' },
    { id:'Microsoft', label: 'Microsoft Access'}
    
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
                Due to the Large number of projects I've created, only selected works are featured/Put here.
            </p>

          </div>
          
          <div className="projects-filter">
            {filters.map((filterItem) => (
              <button
                key={filterItem.id}
                onClick={() => setFilter(filterItem.id)}
                className={`filter-btn ${filter === filterItem.id ? 'active' : ''}`}
              >
                {filterItem.label}
              </button>
            ))}
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
                />
                {project.featured && (
                  <div className="project-featured">
                    <Star size={12} />
                    Featured
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
                        >
                          <Github size={20} />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                          title="Live Demo"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">
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
                    >
                      <Github size={18} />
                      Code
                    </a>
                  ) : (
                    <span className="project-action-btn disabled">
                      <Github size={18} />
                      Private
                    </span>
                  )}
                  
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-action-btn primary"
                    >
                      Live Demo
                      <ExternalLink size={16} />
                    </a>
                  ) : (
                    <span className="project-action-btn primary disabled">
                      View Details
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Add CSS for Projects component
const projectsStyles = `
.projects {
  background: linear-gradient(135deg, rgba(114, 9, 183, 0.03), rgba(67, 97, 238, 0.03));
  border-radius: var(--border-radius-lg);
  margin: 40px 20px;
  padding: 40px 0;
}

.projects-header {
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 50px;
}

.projects-title-section {
  text-align: center;
  margin-bottom: 20px;
}

@media (min-width: 768px) {
  .projects-header {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  
  .projects-title-section {
    text-align: left;
    margin-bottom: 0;
    flex: 1;
  }
}

.projects-description {
  color: var(--gray-600);
  font-size: 1rem;
  line-height: 1.6;
  max-width: 600px;
  margin: 10px auto 0;
  text-align: center;
}

.dark-mode .projects-description {
  color: var(--gray-400);
}

@media (min-width: 768px) {
  .projects-description {
    margin: 10px 0 0;
    text-align: left;
  }
}

.projects-filter {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

@media (min-width: 768px) {
  .projects-filter {
    justify-content: flex-end;
  }
}

.filter-btn {
  padding: 8px 20px;
  border: 2px solid var(--gray-200);
  background: transparent;
  border-radius: 30px;
  font-weight: 500;
  font-size: 0.9rem;
  color: var(--gray-700);
  cursor: pointer;
  transition: var(--transition);
}

.dark-mode .filter-btn {
  border-color: var(--gray-700);
  color: var(--gray-300);
}

.filter-btn:hover {
  border-color: var(--primary-color);
  color: var(--primary-color);
}

.filter-btn.active {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  border-color: transparent;
  color: white;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
}

@media (max-width: 480px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}

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
  transform: translateY(-10px);
  box-shadow: var(--shadow-xl);
}

.project-image {
  position: relative;
  height: 200px;
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
  top: 15px;
  left: 15px;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 12px;
  background: linear-gradient(135deg, #ffd700, #ff9500);
  color: #000;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  z-index: 2;
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
  gap: 20px;
}

.project-link {
  width: 50px;
  height: 50px;
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

.project-content {
  padding: 25px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.project-title {
  font-size: 1.3rem;
  margin-bottom: 12px;
  color: var(--text-dark);
}

.dark-mode .project-title {
  color: var(--text-light);
}

.project-description {
  color: var(--gray-700);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 20px;
  flex: 1;
}

.dark-mode .project-description {
  color: var(--gray-300);
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 25px;
}

.project-tag {
  padding: 6px 14px;
  background: var(--gray-100);
  color: var(--gray-700);
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
}

.dark-mode .project-tag {
  background: var(--gray-700);
  color: var(--gray-300);
}

.project-actions {
  display: flex;
  gap: 15px;
  margin-top: auto;
}

.project-action-btn {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 20px;
  border: 2px solid var(--gray-200);
  border-radius: var(--border-radius);
  color: var(--gray-700);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  transition: var(--transition);
  cursor: pointer;
  background: transparent;
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

/* Animation for fade-in */
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
`;

// Only add styles once
if (!document.getElementById('projects-styles')) {
  const styleSheet = document.createElement("style");
  styleSheet.id = 'projects-styles';
  styleSheet.textContent = projectsStyles;
  document.head.appendChild(styleSheet);
}

export default Projects;