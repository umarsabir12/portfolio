import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './App.css';
import emailjs from '@emailjs/browser';

function App() {
  useEffect(() => {
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your actual public key
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    
    emailjs.sendForm(
      'service_9ob2k5u', // Replace with your EmailJS service ID
      'template_5qz3sz3', // Replace with your EmailJS template ID
      form,
      "WU2Vm9l5Au4SBF8yp"
    )
    .then((result) => {
      alert('Message sent successfully!');
      form.reset();
    }, (error) => {
      alert('Failed to send message. Please try again.');
      console.log(error);
    });
  };

  return (
    <div className="App">
      <nav className="navbar">
        <motion.div 
          className="nav-content"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Umar Sabir</h1>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </motion.div>
      </nav>

      <section id="hero" className="hero-section">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-text">
            <motion.div 
              className="hero-greeting"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="greeting-text">Hello, I'm</span>
              <h1 className="greeting-name">Umar Sabir</h1>
            </motion.div>
            <motion.p 
              className="hero-description"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              A passionate Full Stack Developer crafting elegant solutions to complex problems.
              Specializing in building scalable web applications with modern technologies.
            </motion.p>
            <motion.div 
              className="hero-cta"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <a href="#projects" className="cta-button primary">View My Work</a>
              <a href="#contact" className="cta-button secondary">Get in Touch</a>
            </motion.div>
            <motion.div 
              className="social-links"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              {/* <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaGithub />
                <span>GitHub</span>
              </a> */}
              <a href="https://www.linkedin.com/in/umar-sabir-99b5b5134/" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>
              <a href="mailto:umarsabir1997@gmail.com" className="social-link">
                <FaEnvelope />
                <span>Email</span>
              </a>
            </motion.div>
          </div>
          <motion.div 
            className="hero-image-container"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="image-frame">
              <img src="/picture.JPG" alt="Umar Sabir" className="hero-image" />
              <div className="frame-decoration"></div>
              <div className="experience-badge">
                <span className="years">5+</span>
                <span className="text">Years of Experience</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section id="about" className="about-section">
        <motion.div 
          className="section-content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p className="about-description">
                I'm a passionate Full Stack Developer with over 5 years of experience in building scalable web applications. 
                My journey in software development began with a Bachelor's degree in Computer Science, and since then, 
                I've been dedicated to creating elegant solutions to complex problems.
              </p>
              <p className="about-description">
                My expertise spans across the entire web development stack, from crafting responsive user interfaces 
                to architecting robust backend systems. I'm particularly passionate about building applications that 
                make a difference in people's lives, whether it's improving healthcare access or streamlining business operations.
              </p>
              <div className="about-highlights">
                <div className="highlight-item">
                  <span className="highlight-number">5+</span>
                  <span className="highlight-label">Years Experience</span>
                </div>
                {/* <div className="highlight-item">
                  <span className="highlight-number">20+</span>
                  <span className="highlight-label">Projects Completed</span>
                </div> */}
                {/* <div className="highlight-item">
                  <span className="highlight-number">15+</span>
                  <span className="highlight-label">Happy Clients</span>
                </div> */}
              </div>
            </div>
            {/* <div className="about-image">
              <img src="/about-image.jpg" alt="Umar Sabir" className="about-img" />
            </div> */}
          </div>
        </motion.div>
      </section>

      <section id="projects" className="projects-section">
        <motion.div 
          className="section-content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Featured Projects</h2>
          <div className="projects-grid">
            <motion.div 
              className="project-card"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            > 
              <div className="project-header">
                <h3>TrueAccess</h3>
                <div className="project-tech">
                  <span>Ruby on Rails</span>
                  <span>React</span>
                  <span>PostgreSQL</span>
                </div>
              </div>
              <p className="project-description">Vendor management system for hospital access control with dynamic badge system and custom admin portal.</p>
              <ul className="project-features">
                <li>Dynamic badge system (red/green) indicating access status</li>
                <li>Custom admin portal for user and hospital management</li>
                <li>Document verification workflow with hospital-specific policies</li>
                <li>FHIR API integration for healthcare data interoperability</li>
              </ul>
              <div className="project-links">
                {/* <a href="https://trueaccess.com" target="_blank" rel="noopener noreferrer" className="project-link">
                  <FaGithub /> View Project
                </a> */}
                <a href="https://trueaccess.com" target="_blank" rel="noopener noreferrer" className="project-link">
                  Live Demo
                </a>
              </div>
            </motion.div>

            <motion.div 
              className="project-card"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="project-header">
                <h3>CurbSide</h3>
                <div className="project-tech">
                  <span>Ruby on Rails</span>
                  <span>React.js</span>
                  <span>Python</span>
                </div>
              </div>
              <p className="project-description">Secure hypothesis-testing platform for medical researchers with dynamic data visualization tools.</p>
              <ul className="project-features">
                <li>Dynamic data visualization tools for clinical research analysis</li>
                <li>Role-based access control (Physicians/Researchers/Admins)</li>
                <li>Automated report generation with statistical significance scoring</li>
                <li>HIPAA-compliant document storage with AWS S3 encryption</li>
              </ul>
              <div className="project-links">
                {/* <a href="https://github.com/yourusername/curbside" target="_blank" rel="noopener noreferrer" className="project-link">
                  <FaGithub /> View Project
                </a> */}
                <a href="https://www.curbsidehealth.online/" target="_blank" rel="noopener noreferrer" className="project-link">
                  Live Demo
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              className="project-card"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="project-header">
                <h3>Cash for Cars</h3>
                <div className="project-tech">
                  <span>Ruby on Rails</span>
                  <span>React</span>
                  <span>Stripe</span>
                </div>
              </div>
              <p className="project-description">End-to-end e-commerce platform for vehicle service purchases with custom CRM integration.</p>
              <ul className="project-features">
                <li>Custom CRM for managing 100+ commercial clients</li>
                <li>Stripe integration with multi-step payment processing</li>
                <li>Automated service scheduling with Twilio SMS notifications</li>
                <li>Admin dashboard with real-time sales analytics</li>
              </ul>
              <div className="project-links">
                {/* <a href="https://github.com/yourusername/cashforcars" target="_blank" rel="noopener noreferrer" className="project-link">
                  <FaGithub /> View Project
                </a> */}
                {/* <a href="https://cashforcars.example.com" target="_blank" rel="noopener noreferrer" className="project-link">
                  Live Demo
                </a> */}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section id="skills" className="skills-section">
        <motion.div 
          className="section-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Technical Expertise</h2>
          <div className="skills-grid">
            <motion.div 
              className="skill-category"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="skill-header">
                <h3>Frontend Development</h3>
                <div className="skill-icon">🎨</div>
              </div>
              <ul>
                <li>React.js & Next.js</li>
                <li>JavaScript (ES6+)</li>
                <li>HTML5 & CSS3</li>
                <li>Responsive Design</li>
                <li>State Management</li>
              </ul>
            </motion.div>

            <motion.div 
              className="skill-category"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="skill-header">
                <h3>Backend Development</h3>
                <div className="skill-icon">⚙️</div>
              </div>
              <ul>
                <li>Ruby on Rails</li>
                <li>Node.js</li>
                <li>Python</li>
                <li>SQL & PostgreSQL</li>
                <li>RESTful APIs</li>
              </ul>
            </motion.div>

            <motion.div 
              className="skill-category"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="skill-header">
                <h3>DevOps & Tools</h3>
                <div className="skill-icon">🛠️</div>
              </div>
              <ul>
                <li>Git & GitHub</li>
                <li>Docker & Kubernetes</li>
                <li>AWS Services</li>
                <li>CI/CD Pipelines</li>
                <li>Testing & Debugging</li>
              </ul>
            </motion.div>

            <motion.div 
              className="skill-category"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="skill-header">
                <h3>Soft Skills</h3>
                <div className="skill-icon">🤝</div>
              </div>
              <ul>
                <li>Problem Solving</li>
                <li>Team Collaboration</li>
                <li>Agile Methodologies</li>
                <li>Technical Writing</li>
                <li>Project Management</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section id="contact" className="contact-section">
        <motion.div 
          className="section-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Let's <span className="highlight">Connect</span>
          </motion.h2>
          
          <div className="contact-container">
            <motion.div 
              className="contact-info"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3>Get in Touch</h3>
              <p>I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
              <div className="contact-details">
                <div className="contact-item">
                  <FaEnvelope className="contact-icon" />
                  <div className="contact-text">
                    <h4>Email</h4>
                    <a href="mailto:umarsabir1997@gmail.com">umarsabir1997@gmail.com</a>
                  </div>
                </div>
                <div className="contact-item">
                  <FaLinkedin className="contact-icon" />
                  <div className="contact-text">
                    <h4>LinkedIn</h4>
                    <a href="https://www.linkedin.com/in/umar-sabir-99b5b5134/" target="_blank" rel="noopener noreferrer">
                      linkedin.com/in/yourusername
                    </a>
                  </div>
                </div>
                {/* <div className="contact-item"> */}
                  {/* <FaGithub className="contact-icon" /> */}
                  {/* <div className="contact-text">
                    <h4>GitHub</h4>
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                      github.com/yourusername
                    </a>
                  </div> */}
                {/* </div> */}
              </div>
            </motion.div>

            <motion.form 
              className="contact-form"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
            >
              <motion.div
                className="input-group"
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <input 
                  type="text" 
                  name="name"
                  placeholder=" " 
                  className="form-input"
                  required
                />
                <label className="input-label">Your Name</label>
              </motion.div>
              
              <motion.div
                className="input-group"
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <input 
                  type="email" 
                  name="email"
                  placeholder=" " 
                  className="form-input"
                  required
                />
                <label className="input-label">Email Address</label>
              </motion.div>
              
              <motion.div
                className="input-group"
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <textarea 
                  name="message"
                  placeholder=" "
                  className="form-input textarea"
                  required
                ></textarea>
                <label className="input-label">Your Message</label>
              </motion.div>
              
              <motion.button 
                type="submit"
                className="submit-btn"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 5px 15px rgba(138, 178, 255, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Send Message
                <svg className="send-icon" viewBox="0 0 24 24">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                </svg>
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Umar Sabir. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

