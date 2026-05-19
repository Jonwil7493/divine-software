import { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';

function App() {
  const navRef = useRef(null);

  const closeNav = () => {
    const nav = navRef.current;
    if (nav && nav.classList.contains('show')) {
      nav.classList.remove('show');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    window.location.href = `mailto:Jonathan.williams.Divinesoftware@gmail.com?subject=New Inquiry from ${name}&body=${encodeURIComponent(message)}%0A%0AReply to: ${email}`;
    e.target.reset();
  };

  return (
    <>
      <div>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow">
          <div className="container">
            <a className="navbar-brand" href="#home">
              <img src="/public/DivineSoftwareSolutionsLogo.png" width="40" height="40" className="d-inline-block align-top" alt="Divine Software Solutions Logo" />
              {' '}Divine Software Solutions
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav" ref={navRef}>
              <ul className="navbar-nav ms-auto">
                <li className="nav-item"><a className="nav-link" href="#home" onClick={closeNav}>Home</a></li>
                <li className="nav-item"><a className="nav-link" href="#about" onClick={closeNav}>About</a></li>
                <li className="nav-item"><a className="nav-link" href="#services" onClick={closeNav}>Services</a></li>
                <li className="nav-item"><a className="nav-link" href="#portfolio" onClick={closeNav}>Portfolio</a></li>
                <li className="nav-item"><a className="nav-link" href="#contact" onClick={closeNav}>Contact</a></li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <header id="home" className="hero-section text-center">
          <div className="container">
            <h1 className="display-4">Agency Quality. Real world Pricing</h1>
            <p className="lead">Custom websites, apps, and AI solutions for small businesses and entrepreneurs who deserve great technology without the agency pricing</p>
            <a href="#contact" className="btn btn-primary btn-lg mt-3">Get Started</a>
          </div>
        </header>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-5 bg-light">
          <div className="container text-center">
            <h2 className="highlight-gold">Our Work</h2>
            <p className="text-muted mb-4">Projects coming soon — we're just getting started.</p>
            <div className="row mt-2">

              <div className="col-12 col-md-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body d-flex flex-column align-items-center justify-content-center" style={{minHeight: '180px', background: '#1a1a2e'}}>
                    <span style={{fontSize: '2.5rem'}}>🌐</span>
                    <h5 className="text-light mt-2">Small Business Website</h5>
                    <p className="text-secondary">Custom responsive site for a local business</p>
                  </div>
                  <div className="card-footer text-muted">Web Development</div>
                </div>
              </div>

              <div className="col-12 col-md-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body d-flex flex-column align-items-center justify-content-center" style={{minHeight: '180px', background: '#1a1a2e'}}>
                    <span style={{fontSize: '2.5rem'}}>🤖</span>
                    <h5 className="text-light mt-2">AI Chatbot Integration</h5>
                    <p className="text-secondary">Automated customer support solution</p>
                  </div>
                  <div className="card-footer text-muted">AI Solutions</div>
                </div>
              </div>

              <div className="col-12 col-md-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body d-flex flex-column align-items-center justify-content-center" style={{minHeight: '180px', background: '#1a1a2e'}}>
                    <span style={{fontSize: '2.5rem'}}>📊</span>
                    <h5 className="text-light mt-2">Tech Strategy Consulting</h5>
                    <p className="text-secondary">Roadmap planning for a growing startup</p>
                  </div>
                  <div className="card-footer text-muted">Consulting</div>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* Services Section */}
        <section id="services" className="py-5">
          <div className="container text-center">
            <h2 className="highlight-gold">Our Services</h2>
            <div className="row mt-4">

              {/* Web Dev */}
              <div className="col-12 col-md-6 col-lg-4 mb-4">
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <h5>Web Development</h5>
                      <p>We design and develop modern, responsive websites that not only look amazing but perform flawlessly across all devices.</p>
                    </div>
                    <div className="flip-card-back">
                      <h5 className="highlight-gold">Pricing</h5>
                      <p>Landing Page: $750</p>
                      <p>Business Site: $1,250</p>
                      <p>E-commerce: $1,800+</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Solutions */}
              <div className="col-12 col-md-6 col-lg-4 mb-4">
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <h5>AI Solutions</h5>
                      <p>Automate your business with smart AI tools like chatbots, workflow automation, and machine learning integrations.</p>
                    </div>
                    <div className="flip-card-back">
                      <h5 className="highlight-gold">Pricing</h5>
                      <p>Chatbot Integration: $500+</p>
                      <p>AI Workflows: $800+</p>
                      <p>Custom AI Tools: $1,500+</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tech Consulting */}
              <div className="col-12 col-md-6 col-lg-4 mb-4">
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <h5>Tech Consulting</h5>
                      <p>We guide you in choosing the right technologies and building smarter systems with expert planning and support.</p>
                    </div>
                    <div className="flip-card-back">
                      <h5 className="highlight-gold">Pricing</h5>
                      <p>Hourly: $100</p>
                      <p>Startup Package: $500</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* About Section */}
<section id="about" className="bg-light py-5">
  <div className="container">
    <h2 className="text-center mb-5">About Us</h2>
    <div className="row align-items-center">

      {/* Photo Column */}
      <div className="col-12 col-md-4 text-center mb-4 mb-md-0">
        <img
          src="/public/Headshot.jpg"
          alt="Jonathan Williams-Baxter"
          className="img-fluid rounded-circle shadow"
          style={{ maxWidth: '250px' }}
        />
      </div>

      {/* Text Column */}
      <div className="col-12 col-md-8">
        <p>
          I'm Jonathan, founder of Divine Software Solutions and a software engineer 
          who believes great technology shouldn't be out of reach for small businesses 
          and startups.
        </p>
        <p>
          Too many business owners have been quoted outrageous prices by agencies that 
          treat them like a ticket number. I built Divine Software Solutions to be 
          different — a personal, approachable partner who actually listens to your goals, 
          builds something that works, and stays in your corner after launch.
        </p>
        <p>
          Whether you're a local business that needs a professional online presence or 
          an entrepreneur ready to bring a big idea to life, I'll work with you directly 
          from day one to deliver something you're proud of — at a price that makes sense.
        </p>
        <p>Let's build something divine together.</p>
      </div>

    </div>
  </div>
</section>



        {/* FAQ Section */}
        <section className="py-5">
          <div className="container">
            <h2 className="text-center highlight-gold mb-4">Frequently Asked Questions</h2>
            <div className="accordion" id="faqAccordion">

              <div className="accordion-item bg-dark text-light">
                <h2 className="accordion-header" id="faq1">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1">
                    How long does a project take?
                  </button>
                </h2>
                <div id="collapse1" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                    Most sites are ready in 2–4 weeks. More advanced AI tools or e-commerce builds may take longer.
                  </div>
                </div>
              </div>

              <div className="accordion-item bg-dark text-light">
                <h2 className="accordion-header" id="faq2">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2">
                    Do I get to keep everything?
                  </button>
                </h2>
                <div id="collapse2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                    Yes — you own the final code, designs, and files. We hand everything off when the project is complete.
                  </div>
                </div>
              </div>

              <div className="accordion-item bg-dark text-light">
                <h2 className="accordion-header" id="faq3">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3">
                    Can I request updates later?
                  </button>
                </h2>
                <div id="collapse3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                    Absolutely! We offer ongoing maintenance and support packages — or one-off updates whenever you need them.
                  </div>
                </div>
              </div>

              <div className="accordion-item bg-dark text-light">
                <h2 className="accordion-header" id="faq4">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4">
                    Do you work with businesses outside of Virginia?
                  </button>
                </h2>
                <div id="collapse4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                    Absolutely! We work with clients remotely across the US. Whether you're local to Winchester, VA or across the country, we've got you covered.
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-5 bg-light">
          <div className="container">
            <h2 className="text-center">Ready to Grow?</h2>
            <p className="text-center mb-4">Let's build something powerful together.</p>
            <div className="row justify-content-center">
              <div className="col-12 col-md-8 col-lg-6">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Your Name</label>
                    <input type="text" className="form-control" id="name" name="name" placeholder="Jonathan Williams" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input type="email" className="form-control" id="email" name="email" placeholder="you@example.com" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Tell us about your project</label>
                    <textarea className="form-control" id="message" name="message" rows="4" placeholder="I need a website for my business..." required></textarea>
                  </div>
                  <div className="d-grid">
                    <button type="submit" className="btn btn-success btn-lg">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-dark py-4">
        <div className="container text-center text-light">
          <p className="mb-1">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-light me-3">Instagram</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-light me-3">LinkedIn</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-light">X / Twitter</a>
          </p>
          <p className="mb-1 mt-2 text-secondary" style={{fontSize: '0.85rem'}}>Northernstar collective Company</p>
          <p className="mb-0 text-secondary" style={{fontSize: '0.85rem'}}>&copy; 2026 Divine Software Solutions. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
