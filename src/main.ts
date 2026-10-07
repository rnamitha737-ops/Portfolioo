import './style.css';
import { PROJECTS, type Project } from './projectsData';
import { renderNovaMockup, renderGreenhouseMockup, renderFlowMockup, initHeroCanvas } from './graphics';

// --- SVG Icons Map ---
const ICONS = {
  arrowUpRight: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>`,
  arrowDown: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>`,
  copy: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`,
  check: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
  close: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`,
  sun: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`,
  moon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`,
  github: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>`,
  linkedin: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>`,
  dribbble: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path><path d="M12.03 2.05c3 4 5 7.55 6 12"></path><path d="M2.08 12C9 12 13.5 10 18.5 7"></path></svg>`,
  sparkles: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3z"></path></svg>`
};

// --- Render Mockup Router ---
function getMockupSVG(type: string): string {
  switch (type) {
    case 'nova': return renderNovaMockup();
    case 'greenhouse': return renderGreenhouseMockup();
    case 'flow': return renderFlowMockup();
    default: return renderNovaMockup();
  }
}

// --- Main Application Template ---
const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <!-- Toast Notification -->
  <div id="toast" class="toast-notification">Email copied to clipboard!</div>

  <!-- Navigation Header -->
  <header class="site-header" id="siteHeader">
    <div class="container header-container">
      <a href="#" class="brand-logo" aria-label="Alex Morgan Homepage">
        <div class="brand-avatar">AM</div>
        <span>Alex Morgan</span>
        <span class="availability-badge" title="Available for new project opportunities">
          <span class="status-dot"></span> Available
        </span>
      </a>

      <nav aria-label="Main Navigation">
        <ul class="nav-links" id="navLinks">
          <li><a href="#work" class="nav-link">Work</a></li>
          <li><a href="#about" class="nav-link">About</a></li>
          <li><a href="#contact" class="nav-link">Contact</a></li>
        </ul>
      </nav>

      <div style="display: flex; align-items: center; gap: 0.75rem;">
        <button id="themeToggle" class="theme-toggle-btn" aria-label="Toggle light and dark mode">
          ${ICONS.moon}
        </button>

        <button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="Toggle navigation menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </header>

  <main>
    <!-- Hero Section -->
    <section class="hero-section" id="hero">
      <div class="container hero-grid">
        <div class="hero-content fade-in-up">
          <div class="hero-tag">
            ${ICONS.sparkles}
            <span>Multidisciplinary Designer & Developer</span>
          </div>

          <h1 class="hero-headline">Designer & Creative Developer</h1>

          <p class="subtitle hero-description">
            I create clean, thoughtful digital experiences that balance visual design with practical functionality.
          </p>

          <div class="hero-ctas">
            <a href="#work" class="btn btn-primary">
              <span>View My Work</span>
              <span class="btn-icon">${ICONS.arrowDown}</span>
            </a>
            <a href="#contact" class="btn btn-secondary">
              <span>Get In Touch</span>
            </a>
          </div>
        </div>

        <!-- Abstract Interactive Canvas Graphic -->
        <div class="hero-visual-wrapper fade-in-up delay-2">
          <div class="hero-canvas-card">
            <div class="canvas-header">
              <div class="window-dots">
                <span class="dot dot-red"></span>
                <span class="dot dot-yellow"></span>
                <span class="dot dot-green"></span>
              </div>
              <span class="canvas-tag">// CREATIVE_SYSTEMS_v2.4</span>
            </div>

            <div class="hero-art-container">
              <canvas id="heroCanvas"></canvas>
            </div>

            <div class="canvas-footer">
              <span>Design & Code Synergy</span>
              <span class="interactive-pill">
                <span class="status-dot" style="background:#2563EB;"></span> Interactive Node Field
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Selected Work Section -->
    <section class="section" id="work">
      <div class="container">
        <div class="section-header fade-in-up">
          <span class="label-caps">PORTFOLIO SHOWCASE</span>
          <h2 class="section-title">Selected Work</h2>
          <p class="subtitle">A curated selection of brand identity, web design, and digital product projects.</p>
        </div>

        <div class="work-grid">
          ${PROJECTS.map((project, index) => `
            <article class="project-card fade-in-up delay-${(index % 3) + 1}" data-project-id="${project.id}">
              <div class="project-visual">
                <div class="project-mockup-frame">
                  ${getMockupSVG(project.mockupType)}
                </div>
              </div>

              <div class="project-content">
                <span class="project-category">${project.category}</span>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.shortDescription}</p>
                
                <div class="project-tags">
                  ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>

                <div class="project-link">
                  <span>View Project Details</span>
                  ${ICONS.arrowUpRight}
                </div>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="section about-section" id="about">
      <div class="container">
        <div class="about-grid">
          <div class="about-text fade-in-up">
            <span class="label-caps">BACKGROUND & PHILOSOPHY</span>
            <h2 class="section-title" style="margin-bottom: 1.5rem;">A little about me</h2>
            <p>
              I’m Alex Morgan, a multidisciplinary designer and creative developer focused on creating useful, visually engaging digital experiences that communicate purpose and clarity.
            </p>
            <p>
              With a background spanning visual identity, product UI/UX, and front-end code, I bridge the gap between design concepts and seamless web implementations. I strive for simplicity, strong typographic hierarchy, and intuitive user interactions.
            </p>

            <div class="about-highlights">
              <div class="highlight-item">
                <span class="highlight-num">06+</span>
                <span class="highlight-label">Years Experience</span>
              </div>
              <div class="highlight-item">
                <span class="highlight-num">40+</span>
                <span class="highlight-label">Projects Completed</span>
              </div>
              <div class="highlight-item">
                <span class="highlight-num">99%</span>
                <span class="highlight-label">Client Satisfaction</span>
              </div>
              <div class="highlight-item">
                <span class="highlight-num">03</span>
                <span class="highlight-label">Design Honors</span>
              </div>
            </div>
          </div>

          <div class="skills-card fade-in-up delay-2">
            <h3 class="skills-title">
              ${ICONS.sparkles}
              <span>Core Skills & Expertise</span>
            </h3>

            <ul class="skills-list">
              <li class="skill-chip">UI/UX Design</li>
              <li class="skill-chip">Web Design</li>
              <li class="skill-chip">Branding</li>
              <li class="skill-chip">Figma</li>
              <li class="skill-chip">HTML/CSS</li>
              <li class="skill-chip">JavaScript</li>
              <li class="skill-chip">Design Systems</li>
              <li class="skill-chip">Responsive Web</li>
              <li class="skill-chip">Interaction Design</li>
              <li class="skill-chip">Prototyping</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="section contact-section" id="contact">
      <div class="container">
        <div class="contact-card fade-in-up">
          <span class="label-caps">GET IN TOUCH</span>
          <h2 class="contact-headline h1">Have a project in mind?</h2>
          <p class="contact-text">
            Whether you're starting a new venture, looking to elevate your brand, or want to discuss a potential collaboration, I’d love to hear from you.
          </p>

          <div class="contact-actions">
            <button class="btn btn-primary" id="letsTalkBtn" style="font-size: 1.1rem; padding: 1rem 2.25rem;">
              <span>Let's Talk</span>
              <span class="btn-icon">${ICONS.arrowUpRight}</span>
            </button>

            <div class="email-display-box" id="emailCopyBtn" title="Click to copy email address">
              <span>hello@alexmorgan.com</span>
              <span class="copy-icon">${ICONS.copy}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- Footer -->
  <footer class="site-footer">
    <div class="container footer-container">
      <p>© 2026 Alex Morgan. Built with precision and care.</p>
      
      <ul class="social-links">
        <li>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="social-link">
            ${ICONS.linkedin}
            <span>LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="social-link">
            ${ICONS.github}
            <span>GitHub</span>
          </a>
        </li>
        <li>
          <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" class="social-link">
            ${ICONS.dribbble}
            <span>Dribbble</span>
          </a>
        </li>
      </ul>
    </div>
  </footer>

  <!-- Project Detail Modal -->
  <div class="modal-backdrop" id="projectModal">
    <div class="modal-container">
      <button class="modal-close-btn" id="modalCloseBtn" aria-label="Close modal">
        ${ICONS.close}
      </button>

      <div class="modal-header">
        <span class="label-caps" id="modalCategory">Category</span>
        <h2 id="modalTitle" style="margin-top: 0.25rem;">Project Title</h2>
      </div>

      <div class="modal-body" id="modalBody">
        <!-- Dynamic Modal Content Injection -->
      </div>
    </div>
  </div>
`;

// --- Interactive Logic & Controllers ---

// 1. Theme Toggle Controller
const themeToggle = document.querySelector<HTMLButtonElement>('#themeToggle')!;
let currentTheme = localStorage.getItem('theme') || 'light';

function applyTheme(theme: string) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  themeToggle.innerHTML = theme === 'dark' ? ICONS.sun : ICONS.moon;
}

applyTheme(currentTheme);

themeToggle.addEventListener('click', () => {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  applyTheme(currentTheme);
});

// 2. Sticky Header Scroll Effect
const siteHeader = document.querySelector<HTMLElement>('#siteHeader')!;
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    siteHeader.classList.add('scrolled');
  } else {
    siteHeader.classList.remove('scrolled');
  }
});

// 3. Mobile Navigation Menu Toggle
const mobileMenuBtn = document.querySelector<HTMLButtonElement>('#mobileMenuBtn')!;
const navLinks = document.querySelector<HTMLElement>('#navLinks')!;

mobileMenuBtn.addEventListener('click', () => {
  mobileMenuBtn.classList.toggle('active');
  navLinks.classList.toggle('open');
});

// Close mobile menu when nav link clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenuBtn.classList.remove('active');
    navLinks.classList.remove('open');
  });
});

// 4. Hero Canvas Graphic Initialization
const heroCanvas = document.querySelector<HTMLCanvasElement>('#heroCanvas')!;
if (heroCanvas) {
  initHeroCanvas(heroCanvas);
}

// 5. Scroll Reveal IntersectionObserver
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in-up').forEach(el => fadeObserver.observe(el));

// 6. Copy Email & Toast Controller
const emailCopyBtn = document.querySelector<HTMLElement>('#emailCopyBtn')!;
const toast = document.querySelector<HTMLElement>('#toast')!;

function copyEmailToClipboard() {
  const email = 'hello@alexmorgan.com';
  navigator.clipboard.writeText(email).then(() => {
    toast.classList.add('visible');
    emailCopyBtn.querySelector('.copy-icon')!.innerHTML = ICONS.check;
    setTimeout(() => {
      toast.classList.remove('visible');
      emailCopyBtn.querySelector('.copy-icon')!.innerHTML = ICONS.copy;
    }, 2500);
  });
}

emailCopyBtn.addEventListener('click', copyEmailToClipboard);

// 7. Project Modal Detail Controller
const projectModal = document.querySelector<HTMLElement>('#projectModal')!;
const modalCloseBtn = document.querySelector<HTMLButtonElement>('#modalCloseBtn')!;
const modalCategory = document.querySelector<HTMLElement>('#modalCategory')!;
const modalTitle = document.querySelector<HTMLElement>('#modalTitle')!;
const modalBody = document.querySelector<HTMLElement>('#modalBody')!;

function openProjectModal(project: Project) {
  modalCategory.textContent = project.category;
  modalTitle.textContent = project.title;

  modalBody.innerHTML = `
    <div style="margin-bottom: 2rem;">
      <div style="width: 100%; max-width: 600px; margin: 0 auto 2rem auto; border-radius: 12px; overflow: hidden; border: 1px solid var(--border-color);">
        ${getMockupSVG(project.mockupType)}
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 1.25rem; padding: 1.25rem; background: var(--bg-surface-subtle); border-radius: 12px; margin-bottom: 2rem; border: 1px solid var(--border-color);">
        <div>
          <span style="font-size: 0.75rem; color: var(--text-tertiary); font-family: var(--font-mono);">ROLE</span>
          <p style="font-weight: 600; font-size: 0.95rem;">${project.role}</p>
        </div>
        <div>
          <span style="font-size: 0.75rem; color: var(--text-tertiary); font-family: var(--font-mono);">YEAR</span>
          <p style="font-weight: 600; font-size: 0.95rem;">${project.year}</p>
        </div>
        <div>
          <span style="font-size: 0.75rem; color: var(--text-tertiary); font-family: var(--font-mono);">CLIENT</span>
          <p style="font-weight: 600; font-size: 0.95rem;">${project.client}</p>
        </div>
      </div>

      <h4 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.75rem;">Overview</h4>
      <p style="color: var(--text-secondary); font-size: 1.05rem; line-height: 1.7; margin-bottom: 2rem;">${project.fullDescription}</p>

      <h4 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.75rem;">Deliverables</h4>
      <ul style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.5rem; margin-bottom: 2rem; list-style: none;">
        ${project.deliverables.map(item => `
          <li style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.95rem; color: var(--text-secondary);">
            <span style="color: var(--accent-primary);">${ICONS.check}</span>
            <span>${item}</span>
          </li>
        `).join('')}
      </ul>

      <div style="padding: 1rem 1.5rem; background: var(--accent-light); border-radius: 12px; border: 1px solid rgba(37, 99, 235, 0.2);">
        <span style="font-size: 0.75rem; font-weight: 700; color: var(--accent-primary); font-family: var(--font-mono);">PROJECT IMPACT & METRICS</span>
        <p style="font-weight: 700; font-size: 1.05rem; color: var(--text-primary); margin-top: 0.25rem;">${project.metrics}</p>
      </div>
    </div>
  `;

  projectModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  projectModal.classList.remove('active');
  document.body.style.overflow = '';
}

modalCloseBtn.addEventListener('click', closeModal);
projectModal.addEventListener('click', (e) => {
  if (e.target === projectModal) closeModal();
});

// Attach modal triggers to project cards
document.querySelectorAll<HTMLElement>('.project-card').forEach(card => {
  card.addEventListener('click', () => {
    const projectId = card.getAttribute('data-project-id');
    const project = PROJECTS.find(p => p.id === projectId);
    if (project) openProjectModal(project);
  });
});

// 8. Contact CTA Handler
const letsTalkBtn = document.querySelector<HTMLButtonElement>('#letsTalkBtn')!;
letsTalkBtn.addEventListener('click', () => {
  window.location.href = 'mailto:hello@alexmorgan.com?subject=Project%20Inquiry%20from%20Portfolio';
});
