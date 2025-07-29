const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Floating Background Orbs */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="floating-orb"></div>
        <div className="floating-orb"></div>
        <div className="floating-orb"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card rounded-none border-l-0 border-r-0 border-t-0">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-glow">Portfolio</div>
            <div className="hidden md:flex space-x-6">
              <a href="#hero" className="hover:text-primary transition-colors duration-300">Home</a>
              <a href="#about" className="hover:text-primary transition-colors duration-300">About</a>
              <a href="#projects" className="hover:text-primary transition-colors duration-300">Projects</a>
              <a href="#blog" className="hover:text-primary transition-colors duration-300">Blog</a>
              <a href="#resume" className="hover:text-primary transition-colors duration-300">Resume</a>
              <a href="#contact" className="hover:text-primary transition-colors duration-300">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative px-6">
        <div className="text-center space-y-8 animate-slide-in-up">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-glow">
              Alex Chen
            </h1>
            <h2 className="text-2xl md:text-3xl text-secondary text-glow-secondary">
              Student & Aspiring Full Stack Developer
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate about learning and building web projects that make a difference
            </p>
          </div>
          <div className="space-y-6">
            <a href="#projects" className="neon-button inline-block">
              View My Work
            </a>
            <div className="flex justify-center space-x-6">
              <a href="#contact" className="text-primary hover:text-secondary transition-colors duration-300">
                Get In Touch
              </a>
              <a href="#resume" className="text-primary hover:text-secondary transition-colors duration-300">
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="glass-card animate-slide-in-left">
            <h2 className="text-4xl font-bold mb-8 text-center text-glow">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  I'm currently a Computer Science student at Tech University, passionate about creating 
                  innovative web applications and exploring the latest technologies. My journey in programming 
                  started with curiosity and has evolved into a deep love for problem-solving and creating 
                  digital experiences.
                </p>
                <p className="text-lg leading-relaxed">
                  When I'm not coding, you can find me contributing to open-source projects, reading tech blogs, 
                  or experimenting with new frameworks. I believe in continuous learning and pushing the 
                  boundaries of what's possible with code.
                </p>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-secondary">Skills & Technologies</h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'HTML/CSS',
                    'Git', 'PostgreSQL', 'MongoDB', 'Tailwind CSS', 'Express.js', 'Firebase'
                  ].map((skill) => (
                    <span key={skill} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-accent">Academic Timeline</h4>
                  <div className="space-y-3">
                    <div className="glass rounded-lg p-4">
                      <h5 className="font-semibold text-primary">2022 - Present</h5>
                      <p>Bachelor of Computer Science - Tech University</p>
                      <p className="text-sm text-muted-foreground">GPA: 3.8/4.0</p>
                    </div>
                    <div className="glass rounded-lg p-4">
                      <h5 className="font-semibold text-primary">2023</h5>
                      <p>Full Stack Web Development Certification</p>
                      <p className="text-sm text-muted-foreground">FreeCodeCamp</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold mb-12 text-center text-glow animate-slide-in-up">Featured Projects</h2>
          <div className="project-grid">
            {/* Project 1 */}
            <div className="glass-card animate-slide-in-up">
              <div className="h-48 glass rounded-lg mb-6 flex items-center justify-center">
                <div className="text-6xl animate-glow">🚀</div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-primary">TaskFlow</h3>
              <p className="text-muted-foreground mb-4">
                A modern task management application built with React and Firebase. Features real-time 
                collaboration, drag-and-drop interface, and team analytics.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['React', 'Firebase', 'TypeScript', 'Tailwind'].map((tech) => (
                  <span key={tech} className="skill-badge text-xs">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a href="#" className="text-primary hover:text-secondary transition-colors duration-300">
                  Live Demo →
                </a>
                <a href="#" className="text-primary hover:text-secondary transition-colors duration-300">
                  GitHub →
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="glass-card animate-slide-in-up">
              <div className="h-48 glass rounded-lg mb-6 flex items-center justify-center">
                <div className="text-6xl animate-glow">🎵</div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-primary">MusicVibe</h3>
              <p className="text-muted-foreground mb-4">
                A music discovery platform that helps users find new songs based on their mood and preferences. 
                Integrates with Spotify API for seamless playback.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['Node.js', 'Express', 'MongoDB', 'Spotify API'].map((tech) => (
                  <span key={tech} className="skill-badge text-xs">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a href="#" className="text-primary hover:text-secondary transition-colors duration-300">
                  Live Demo →
                </a>
                <a href="#" className="text-primary hover:text-secondary transition-colors duration-300">
                  GitHub →
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="glass-card animate-slide-in-up">
              <div className="h-48 glass rounded-lg mb-6 flex items-center justify-center">
                <div className="text-6xl animate-glow">📊</div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-primary">DataViz Dashboard</h3>
              <p className="text-muted-foreground mb-4">
                An interactive data visualization dashboard for analyzing student performance metrics. 
                Built with Python backend and React frontend.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['Python', 'Flask', 'React', 'D3.js', 'PostgreSQL'].map((tech) => (
                  <span key={tech} className="skill-badge text-xs">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a href="#" className="text-primary hover:text-secondary transition-colors duration-300">
                  Live Demo →
                </a>
                <a href="#" className="text-primary hover:text-secondary transition-colors duration-300">
                  GitHub →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center text-glow animate-slide-in-up">Latest Blog Posts</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Blog Post 1 */}
            <div className="glass-card animate-slide-in-left">
              <div className="h-32 glass rounded-lg mb-6 flex items-center justify-center">
                <div className="text-4xl animate-glow">💻</div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">Getting Started with React Hooks</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                A comprehensive guide to understanding and implementing React Hooks in your projects.
              </p>
              <div className="text-xs text-accent">December 15, 2023</div>
            </div>

            {/* Blog Post 2 */}
            <div className="glass-card animate-slide-in-up">
              <div className="h-32 glass rounded-lg mb-6 flex items-center justify-center">
                <div className="text-4xl animate-glow">🔧</div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">Building APIs with Node.js</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Learn the fundamentals of creating RESTful APIs using Node.js and Express.
              </p>
              <div className="text-xs text-accent">December 10, 2023</div>
            </div>

            {/* Blog Post 3 */}
            <div className="glass-card animate-slide-in-right">
              <div className="h-32 glass rounded-lg mb-6 flex items-center justify-center">
                <div className="text-4xl animate-glow">🎨</div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">CSS Grid vs Flexbox</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Understanding when to use CSS Grid vs Flexbox for your layout needs.
              </p>
              <div className="text-xs text-accent">December 5, 2023</div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="glass-card animate-slide-in-up">
            <h2 className="text-4xl font-bold mb-8 text-center text-glow">Resume</h2>
            <div className="text-center mb-8">
              <a href="#" className="neon-button">
                Download PDF Resume
              </a>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-secondary">Education</h3>
                <div className="space-y-4">
                  <div className="glass rounded-lg p-4">
                    <h4 className="font-bold text-primary">Bachelor of Computer Science</h4>
                    <p className="text-muted-foreground">Tech University</p>
                    <p className="text-sm text-accent">2022 - 2026 (Expected)</p>
                    <p className="text-sm">GPA: 3.8/4.0</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-secondary">Certifications</h3>
                <div className="space-y-4">
                  <div className="glass rounded-lg p-4">
                    <h4 className="font-bold text-primary">Full Stack Web Development</h4>
                    <p className="text-muted-foreground">FreeCodeCamp</p>
                    <p className="text-sm text-accent">2023</p>
                  </div>
                  <div className="glass rounded-lg p-4">
                    <h4 className="font-bold text-primary">JavaScript Algorithms & Data Structures</h4>
                    <p className="text-muted-foreground">FreeCodeCamp</p>
                    <p className="text-sm text-accent">2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="glass-card animate-slide-in-up">
            <h2 className="text-4xl font-bold mb-8 text-center text-glow">Get In Touch</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-secondary">Let's Connect</h3>
                <p className="text-muted-foreground">
                  I'm always excited to connect with fellow developers, potential collaborators, 
                  or anyone interested in technology. Feel free to reach out!
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-primary text-xl">📧</div>
                    <span>alex.chen@email.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-primary text-xl">🔗</div>
                    <a href="#" className="text-primary hover:text-secondary transition-colors duration-300">
                      linkedin.com/in/alexchen
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-primary text-xl">🐙</div>
                    <a href="#" className="text-primary hover:text-secondary transition-colors duration-300">
                      github.com/alexchen
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input type="text" className="glass-input w-full" placeholder="Your Name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input type="email" className="glass-input w-full" placeholder="your.email@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea rows={4} className="glass-input w-full" placeholder="Your message here..."></textarea>
                  </div>
                  <button type="submit" className="neon-button w-full">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t glass-border">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6">
            <div className="flex justify-center space-x-8">
              <a href="#" className="text-primary hover:text-secondary transition-all duration-300 hover:scale-110">
                <span className="text-2xl">🔗</span>
              </a>
              <a href="#" className="text-primary hover:text-secondary transition-all duration-300 hover:scale-110">
                <span className="text-2xl">🐙</span>
              </a>
              <a href="#" className="text-primary hover:text-secondary transition-all duration-300 hover:scale-110">
                <span className="text-2xl">📧</span>
              </a>
              <a href="#" className="text-primary hover:text-secondary transition-all duration-300 hover:scale-110">
                <span className="text-2xl">📱</span>
              </a>
            </div>
            <p className="text-muted-foreground">
              © 2023 Alex Chen. Built with passion and futuristic vibes.
            </p>
            <p className="text-sm text-accent">
              Designed with glassmorphism • Powered by modern CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;