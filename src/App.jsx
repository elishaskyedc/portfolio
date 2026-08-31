import './App.css'

function App() {
  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <a href="#home" className="logo">
          SKYE
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
      <main>
        {/* Hero */}
        <section id="home" className="hero">
          <p className="intro">HELLO, I'M</p>
          <h1>Elisha Skye Dela Cruz</h1>
          <h2>
            Computer Science Student & Aspiring Software Engineer
          </h2>
          <p className="hero-description">
            I'm a fourth-year Computer Science International student at
            TU Dublin, graduating in 2027. I enjoy developing practical
            applications and exploring how technology can solve
            real-world problems.
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
        {/* About */}
        <section id="about" className="section">
          <p className="section-label">01 — ABOUT</p>
          <h2>About Me</h2>
          <p>
            I'm Skye, a Computer Science International student at
            Technological University Dublin, currently preparing to
            enter my fourth year of study.
          </p>
          <p>
            Throughout my degree, I've developed applications across
            web and mobile platforms, gaining experience with backend
            development, databases, APIs and user-focused interfaces.
          </p>
          <p>
            I'm particularly interested in software development and
            building technology that solves practical problems. I'm
            currently looking for internship and graduate opportunities
            where I can continue developing my technical skills while
            contributing to a professional development team.
          </p>
        </section>
        {/* Skills */}
        <section id="skills" className="section">
          <p className="section-label">02 — SKILLS</p>
          <h2>Technical Skills</h2>
          <div className="skills-category">
            <h3>Programming Languages</h3>
            <div className="skills-list">
              <span>Java</span>
              <span>Python</span>
              <span>C</span>
              <span>Kotlin</span>
              <span>JavaScript</span>
              <span>SQL</span>
            </div>
          </div>
          <div className="skills-category">
            <h3>Web Development</h3>
            <div className="skills-list">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>Node.js</span>
              <span>REST APIs</span>
            </div>
          </div>
          <div className="skills-category">
            <h3>Mobile Development</h3>
            <div className="skills-list">
              <span>Kotlin</span>
              <span>Android Studio</span>
              <span>Room Database</span>
              <span>Android APIs</span>
            </div>
          </div>
          <div className="skills-category">
            <h3>Databases & Concepts</h3>
            <div className="skills-list">
              <span>PostgreSQL</span>
              <span>SQL</span>
              <span>CRUD</span>
              <span>Authentication</span>
              <span>Object-Oriented Programming</span>
              <span>Database Design</span>
              <span>API Integration</span>
            </div>
          </div>
          <div className="skills-category">
            <h3>Tools</h3>
            <div className="skills-list">
              <span>Git</span>
              <span>GitHub</span>
              <span>VS Code</span>
            </div>
          </div>
        </section>
        {/* Projects */}
        <section id="projects" className="section">
          <p className="section-label">03 — PROJECTS</p>
          <h2>What I've Built</h2>
          <p className="section-intro">
            A selection of projects I've developed throughout my
            Computer Science degree.
          </p>
          {/* FitCheck */}
          <article className="project-card">
            <div className="project-header">
              <span className="project-number">01</span>
              <span className="project-year">2026</span>
            </div>
            <h3>FitCheck</h3>
            <p className="project-type">
              Android Application
            </p>
            <p>
              FitCheck is an Android application designed to help
              users make better clothing size decisions when shopping
              online.
            </p>
            <p>
              Users can enter their measurements and use their camera
              to capture an item of clothing that fits them well.
              Anchor points are used to align the clothing image,
              allowing it to be compared with clothing they are
              interested in purchasing.
            </p>
            <div className="project-role">
              <strong>My contribution</strong>
              <p>
                Worked as part of a four-person development team,
                primarily focusing on frontend design while also
                contributing to the overall application code.
                Collaborated regularly with the development team,
                client and project mentor through weekly meetings.
              </p>
            </div>
            <div className="technologies">
              Kotlin · Android Studio · Mobile Development · UI/UX ·
              Team Collaboration
            </div>
          </article>
          {/* PixelPlay */}
          <article className="project-card">
            <div className="project-header">
              <span className="project-number">02</span>
              <span className="project-year">2025</span>
            </div>
            <h3>PixelPlay</h3>
            <p className="project-type">
              Full-Stack Web Application
            </p>
            <p>
              PixelPlay is a web application for discovering and
              purchasing games. The application allows users to
              create accounts, search for games and interact with
              a database-backed review system.
            </p>
            <p>
              The project included authentication, CRUD operations,
              advanced search and filtering, asynchronous REST API
              consumption and a persistent PostgreSQL database.
            </p>
            <div className="project-role">
              <strong>My contribution</strong>
              <p>
                Worked primarily on the backend as part of a
                two-person development team. Contributed to
                server-side functionality, database interactions,
                reviews and CRUD operations.
              </p>
            </div>
            <div className="technologies">
              Node.js · JavaScript · PostgreSQL · REST APIs · CRUD ·
              Authentication
            </div>
          </article>
          {/* StyleCheck */}
          <article className="project-card">
            <div className="project-header">
              <span className="project-number">03</span>
              <span className="project-year">2025</span>
            </div>
            <h3>StyleCheck</h3>
            <p className="project-type">
              Android Application
            </p>
            <p>
              StyleCheck is an Android wardrobe application that
              allows users to catalogue their clothing, capture
              images and create outfits from their digital wardrobe.
            </p>
            <p>
              The application uses a local Room database to store
              clothing data and implements full CRUD operations.
              It also uses Android's camera functionality to capture
              images and includes multiple screens for interacting
              with the user's wardrobe.
            </p>
            <div className="project-role">
              <strong>My contribution</strong>
              <p>
                Designed and developed the application while gaining
                my first experience with Android Studio, Kotlin and
                Room Database.
              </p>
            </div>
            <div className="technologies">
              Kotlin · Android Studio · Room Database · CRUD ·
              Android APIs
            </div>
          </article>
        </section>
        {/* Experience */}
        <section id="experience" className="section">
          <p className="section-label">04 — EXPERIENCE</p>
          <h2>Work Experience</h2>
          <article className="experience-card">
            <div className="experience-header">
              <div>
                <p className="experience-company">Currys</p>
                <h3>Sales Colleague</h3>
              </div>
            </div>
            <p>
              Worked in a technology-focused retail environment,
              helping customers choose products and providing
              support with technology-related enquiries.
            </p>
            <p>
              Trained to assist customers with device issues,
              troubleshoot problems and determine appropriate
              solutions. When further technical support was required,
              I arranged repairs through the Currys repair centre.
            </p>
            <p>
              This role developed my communication, problem-solving
              and customer service skills while working in a
              fast-paced environment.
            </p>
          </article>
        </section>
        {/* Education */}
        <section className="section">
          <p className="section-label">05 — EDUCATION</p>
          <h2>Education</h2>
          <article className="education-card">
            <p className="education-institution">
              Technological University Dublin
            </p>
            <h3>Computer Science International</h3>
            <p className="education-code">
              TU858
            </p>
            <p>
              Expected graduation: <strong>2027</strong>
            </p>
          </article>
        </section>
        {/* Contact */}
        <section id="contact" className="section contact">
          <p className="section-label">06 — CONTACT</p>
          <h2>Let's connect.</h2>
          <p>
            I'm currently looking for internship and graduate
            opportunities in software development and related
            technology roles.
          </p>
          <div className="contact-links">
            <a href="mailto:YOUR_EMAIL_HERE">
              Email
            </a>
            <a
              href="https://github.com/elishaskyedc"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="YOUR_LINKEDIN_URL_HERE"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer>
        <p>
          © 2026 Elisha Skye Dela Cruz
        </p>
      </footer>
    </div>
  )
}
export default App