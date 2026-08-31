import "./App.css";

function App() {
  return (
    <div className="app">
      
      <nav className="navbar">
        <h2 className="logo">SKYE</h2>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>

        <section className="hero">
          <p className="intro">Hello, I'm</p>

          <h1>Skye Dela Cruz</h1>

          <h2>
            Computer Science Student & Aspiring Software Engineer
          </h2>

          <p className="hero-description">
            I'm a fourth-year Computer Science student at TU Dublin,
            interested in software engineering and building practical
            applications that solve real-world problems.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="button primary">
              View My Projects
            </a>

            <a href="#contact" className="button secondary">
              Get In Touch
            </a>
          </div>
        </section>


        <section id="about" className="section">
          <p className="section-label">ABOUT ME</p>

          <h2>A little about me</h2>

          <p>
            I'm currently studying Computer Science at TU Dublin and
            developing my skills across software development, databases
            and full-stack web development.
          </p>

          <p>
            I'm particularly interested in building useful software,
            learning new technologies and developing my skills through
            practical projects.
          </p>
        </section>


        <section id="projects" className="section">
          <p className="section-label">PROJECTS</p>

          <h2>What I've built</h2>

          <div className="project-card">
            <h3>JobTrack</h3>

            <p>
              A full-stack job application management platform designed
              to help students organise, track and manage their graduate
              job applications.
            </p>

            <p className="technologies">
              Python · PostgreSQL · React · JavaScript
            </p>

            <div className="project-links">
              <a href="#">GitHub</a>
              <a href="#">Live Demo</a>
            </div>
          </div>
        </section>


        <section id="skills" className="section">
          <p className="section-label">SKILLS</p>

          <h2>Technical skills</h2>

          <div className="skills-list">
            <span>Python</span>
            <span>Java</span>
            <span>C</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>PostgreSQL</span>
            <span>Git</span>
            <span>GitHub</span>
          </div>
        </section>


        <section id="contact" className="section contact">
          <p className="section-label">CONTACT</p>

          <h2>Let's connect</h2>

          <p>
            I'm currently looking for graduate software engineering
            opportunities and internships where I can continue developing
            my skills.
          </p>

          <div className="contact-links">
            <a href="mailto:your-email@example.com">Email</a>
            <a href="#">LinkedIn</a>
            <a href="#">GitHub</a>
          </div>
        </section>

      </main>

      <footer>
        <p>© 2026 Skye Dela Cruz</p>
      </footer>

    </div>
  );
}

export default App;