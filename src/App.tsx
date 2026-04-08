import React, { useState, useEffect } from 'react';
import profileImg from './profile.jpg';

const App: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches('a[href^="#"]')) {
        e.preventDefault();
        const id = target.getAttribute('href');
        if (id) {
          const el = document.querySelector(id);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };
    
    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <>
      <header className="nav-wrap">
        <nav className="nav container">
          <div className="brand">
            <div className="logo-sc">SC</div>
            <span className="brand-name">Sanjay Cheerlancha</span>
          </div>

          <ul className={`nav-links ${menuOpen ? 'active' : ''}`} id="navLinks">
            <li><a href="#home" className="nav-link" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#about" className="nav-link" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#resume" className="nav-link" onClick={() => setMenuOpen(false)}>Resume</a></li>
            <li><a href="#projects" className="nav-link" onClick={() => setMenuOpen(false)}>Portfolio</a></li>
            <li><a href="#skills" className="nav-link" onClick={() => setMenuOpen(false)}>Skills</a></li>
            <li><a href="#contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>

          <div className="cta-group">
            <a className="btn-primary" href="#contact">Let's Connect</a>
            <button 
              className="mobile-menu-btn" 
              id="mobileBtn"
              aria-label="open menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>
          </div>
        </nav>
      </header>

      <section id="home" className="hero">
        <div className="hero-inner container">
          <div className="hero-left">
            <h3 className="eyebrow">Hello — I'm</h3>
            <h1 className="hero-title">Sanjay Cheerlancha</h1>
            <p className="hero-sub">Java Full Stack Developer • Spring Boot • React • MySQL • REST APIs</p>

            <div className="hero-actions">
              <a className="btn-primary" href="#projects">View Work</a>
              <div className="social-links">
                <a href="https://github.com/sanjay1650" target="_blank" rel="noreferrer" className="social-icon" aria-label="GitHub">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" style={{ filter: 'invert(1)' }} />
                </a>
                <a href="https://www.linkedin.com/in/sanjay-cheerlancha-73267a316/" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" />
                </a>
              </div>
            </div>

            <ul className="hero-meta">
              <li><strong>Email:</strong> sanjaycheerlancha@gmail.com</li>
              <li><strong>Location:</strong> Siddipet, Telangana</li>
            </ul>
          </div>

          <div className="hero-right">
            <div className="card-portrait">
              <div className="portrait-frame">
                <img src={profileImg} alt="Sanjay portrait" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-glow"></div>
      </section>

      <section id="about" className="section about">
        <div className="container about-center">
          <h2 className="about-title">About Me</h2>
          <p className="about-text">
            I'm Sanjay Cheerlancha, a passionate Java Full Stack Developer skilled in Java,
            Spring Boot, React.js, MySQL, REST APIs, and modern web architecture.
            I enjoy building scalable backend systems and clean frontend interfaces.
          </p>
          <ul className="about-list">
            <li><strong>Education:</strong> B.Tech CSE — Class of 2025</li>
            <li><strong>Location:</strong> Siddipet, Telangana</li>
            <li><strong>Contact:</strong> +91 9347654729</li>
          </ul>
          <a href="#contact" className="btn-primary about-btn">Connect With Me</a>
        </div>
      </section>

      <section id="resume" className="section resume-section">
        <div className="container">
          <div className="section-head">
            <h2>Resume</h2>
            <p>Check out my professional background and qualifications.</p>
          </div>

          <div className="resume-wrapper">
            <div className="resume-card">
              <div className="resume-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <div className="resume-details">
                <h3>Sanjay Cheerlancha</h3>
                <p>Full Stack Developer Resume</p>
              </div>
              <div className="resume-actions">
                <a href="/assets/sanjay-cheerlancha-fullstack-resume.pdf" target="_blank" rel="noreferrer" className="btn-primary">View</a>
                <a href="/assets/sanjay-cheerlancha-fullstack-resume.pdf" download className="btn-ghost">Download</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section projects">
        <div className="container">
          <div className="section-head">
            <h2>Featured Projects</h2>
            <p>Selected projects showing full-stack & ML work.</p>
          </div>

          <div className="projects-grid">
            <article className="project-card">
              <div className="project-body">
                <h3>DineDesk</h3>
                <p>Next.js SaaS Landing Page for Restaurant Management, built with modern web technologies and React.</p>
                <div className="card-actions">
                  <a href="https://github.com/sanjay1650/DineDesk.git" target="_blank" rel="noreferrer" className="link">Github</a>
                </div>
              </div>
            </article>

            <article className="project-card">
              <div className="project-body">
                <h3>BakeBite</h3>
                <p>Full-stack bakery platform tailored for showcasing treats and taking orders seamlessly across devices.</p>
                <div className="card-actions">
                  <a href="https://github.com/sanjay1650/BakeBite.git" target="_blank" rel="noreferrer" className="link">Github</a>
                </div>
              </div>
            </article>
            
            <article className="project-card">
              <div className="project-body">
                <h3>Student Management System</h3>
                <p>Spring Boot + React + MySQL — JWT authentication, CRUD, REST APIs.</p>
                <div className="card-actions">
                  <a href="https://github.com/sanjay1650/StudentManagemantSystem.git" target="_blank" rel="noreferrer" className="link">Github</a>
                </div>
              </div>
            </article>

            <article className="project-card">
              <div className="project-body">
                <h3>Currency Converter</h3>
                <p>React app integrating live exchange-rate API; responsive UI and validations.</p>
                <div className="card-actions">
                  <a href="https://github.com/sanjay1650/currency-converter.git" target="_blank" rel="noreferrer" className="link">Github</a>
                </div>
              </div>
            </article>

            <article className="project-card">
              <div className="project-body">
                <h3>Patient Health Analysis</h3>
                <p>Python ML models (Logistic Regression, Random Forest), Power BI visualization.</p>
                <div className="card-actions">
                  <a href="https://github.com/sanjay1650/Patients-health-analysis-Project1-.git" target="_blank" rel="noreferrer" className="link">Github</a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="skills" className="section skills">
        <div className="container">
          <div className="section-head">
            <h2>Skills & Tools</h2>
            <p>The technologies I use to bring ideas to life.</p>
          </div>
          <div className="skills-grid">
            <div className="skill-card">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" />
              <span>Java</span>
            </div>
            <div className="skill-card">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring Boot" />
              <span>Spring Boot</span>
            </div>
            <div className="skill-card">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
              <span>React</span>
            </div>
            <div className="skill-card">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" />
              <span>MySQL</span>
            </div>
            <div className="skill-card">
              <img src="https://cdn-icons-png.flaticon.com/512/8297/8297437.png" alt="REST API" style={{ filter: 'invert(1)' }} />
              <span>REST APIs</span>
            </div>
            <div className="skill-card">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg" alt="Hibernate" />
              <span>Hibernate</span>
            </div>
            <div className="skill-card">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
              <span>Git</span>
            </div>
            <div className="skill-card">
              <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="Postman" />
              <span>Postman</span>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <div className="container contact-grid">
          <div className="contact-card">
            <h2>Contact</h2>
            <p>I'm open to roles and collaborations. Reach out and let's build something great.</p>
            <form id="contactForm" className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <input type="text" name="name" placeholder="Your name" required />
              <input type="email" name="email" placeholder="Email" required />
              <textarea name="message" rows={4} placeholder="Message" required></textarea>
              <div className="form-actions">
                <button type="submit" className="btn-primary">Send Message</button>
                <a className="btn-ghost" href="mailto:sanjaycheerlancha@gmail.com">Email Me</a>
              </div>
            </form>
          </div>
          <aside className="contact-info">
            <div className="info-block">
              <h4>Phone</h4>
              <p>+91 9347654729</p>
            </div>
            <div className="info-block">
              <h4>Location</h4>
              <p>Siddipet, Telangana</p>
            </div>
            <div className="info-block">
              <h4>Social Profiles</h4>
              <div className="social-links" style={{ marginTop: '10px' }}>
                <a href="https://github.com/sanjay1650" target="_blank" rel="noreferrer" className="social-icon" aria-label="GitHub">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" style={{ filter: 'invert(1)' }} />
                </a>
                <a href="https://www.linkedin.com/in/sanjay-cheerlancha-73267a316/" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" />
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>© 2026 Sanjay Cheerlancha — Java Full Stack Developer</p>
        </div>
      </footer>
    </>
  );
};

export default App;
