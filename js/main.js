// =================================
// MAIN APPLICATION
// =================================

class CVWebsite {
    constructor() {
        this.data = window.cvData;
        this.init();
    }

    init() {
        // Aspetta che il DOM sia pronto
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.start());
        } else {
            this.start();
        }
    }

    start() {
        console.log('🚀 CV Website inizializzato');
        
        // Inizializza componenti
        this.initializeAnimations();
        this.setupNavigation();
        this.populateContent();
        this.setupEventListeners();
        this.handleProfileImage();
    }

    // =================================
    // ANIMATIONS
    // =================================

    initializeAnimations() {
        // Salva l'AnimationObserver in una variabile globale per usarlo dopo
        window.animationObserver = new AnimationObserver();
        new ScrollEffects();
        new SmoothScroll();
        new LoadingAnimations();
        
        // Parallax solo su desktop
        if (window.innerWidth > 768) {
            new ParallaxEffect();
        }
    }

    // =================================
    // NAVIGATION
    // =================================

    setupNavigation() {
        const navToggle = document.getElementById('navToggle');
        const navMenu = document.getElementById('navMenu');
        
        if (navToggle && navMenu) {
            navToggle.addEventListener('click', () => {
                navToggle.classList.toggle('active');
                navMenu.classList.toggle('active');
            });

            // Chiudi menu quando si clicca fuori
            document.addEventListener('click', (e) => {
                if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                    navToggle.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            });
        }
    }

    // =================================
    // POPULATE CONTENT
    // =================================

    populateContent() {
        this.populateExperience();
        this.populateEducation();
        this.populateSkills();
        this.populateProjects();
        this.populateCertifications();
    }

    populateExperience() {
        const timeline = document.getElementById('experienceTimeline');
        if (!timeline || !this.data?.experience) return;

        timeline.innerHTML = this.data.experience.map((exp, index) => `
            <div class="timeline-item" data-aos="fade-up" data-aos-delay="${index * 100}">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <span class="timeline-date">${exp.period}</span>
                    <h3 class="timeline-title">${exp.title}</h3>
                    <div class="timeline-company">${exp.company} • ${exp.location}</div>
                    <p class="timeline-description">${exp.description}</p>
                    <div class="timeline-tags">
                        ${exp.tags.map(tag => `<span class="timeline-tag">${tag}</span>`).join('')}
                    </div>
                </div>
            </div>
        `).join('');

        // Re-osserva i nuovi elementi
        setTimeout(() => {
            const items = timeline.querySelectorAll('[data-aos]');
            items.forEach(item => {
                if (window.animationObserver) {
                    window.animationObserver.observe(item);
                }
            });
        }, 100);
    }

    populateEducation() {
        const grid = document.getElementById('educationGrid');
        if (!grid || !this.data?.education) return;

        grid.innerHTML = this.data.education.map((edu, index) => `
            <div class="education-card" data-aos="fade-up" data-aos-delay="${index * 100}">
                <div class="education-icon">${edu.icon}</div>
                <div class="education-date">${edu.period}</div>
                <h3 class="education-title">${edu.degree}</h3>
                <div class="education-institution">${edu.institution}</div>
                <p class="education-description">${edu.description}</p>
            </div>
        `).join('');

        // Re-osserva i nuovi elementi
        setTimeout(() => {
            const cards = grid.querySelectorAll('[data-aos]');
            cards.forEach(card => {
                if (window.animationObserver) {
                    window.animationObserver.observe(card);
                }
            });
        }, 100);
    }

    populateSkills() {
        this.populateSkillCategory('technicalSkills', this.data.skills.technical);
        this.populateSkillCategory('softSkills', this.data.skills.soft);
        this.populateSkillCategory('languageSkills', this.data.skills.languages);
    }

    populateSkillCategory(elementId, skills) {
        const container = document.getElementById(elementId);
        if (!container || !skills) {
            console.log('⚠️ Container not found or no skills:', elementId, skills);
            return;
        }

        container.innerHTML = skills.map(skill => `
            <div class="skill-item">
                <div class="skill-header">
                    <span class="skill-name">${skill.name}</span>
                    <span class="skill-level">${skill.level}</span>
                </div>
                <div class="skill-bar">
                    <div class="skill-progress" data-width="${skill.percentage}"></div>
                </div>
            </div>
        `).join('');
        
        console.log(`✅ Popolate ${skills.length} skills in ${elementId}`);
        
        // Re-osserva le barre di progresso dopo averle create
        setTimeout(() => {
            const progressBars = container.querySelectorAll('.skill-progress');
            console.log(`🔍 Osservo ${progressBars.length} barre in ${elementId}`);
            progressBars.forEach(bar => {
                if (window.animationObserver) {
                    window.animationObserver.observe(bar);
                }
            });
        }, 100);
    }

    populateProjects() {
        const grid = document.getElementById('projectsGrid');
        if (!grid || !this.data?.projects) return;

        grid.innerHTML = this.data.projects.map((project, index) => `
            <div class="project-card" data-aos="fade-up" data-aos-delay="${index * 100}">
                <div class="project-image" style="background-image: url('${project.image}'); background-size: cover; background-position: center; background-repeat: no-repeat;">
                </div>
                <div class="project-content">
                    <div class="project-header">
                        <h3 class="project-title">${project.title}</h3>
                        <span class="project-status">${project.status}</span>
                    </div>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tech">
                        ${project.technologies.map(tech => 
                            `<span class="project-tech-tag">${tech}</span>`
                        ).join('')}
                    </div>
                    ${project.links.length > 0 ? `
                        <div class="project-links">
                            ${project.links.map(link => `
                                <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="project-link">
                                    ${this.getLinkIcon(link.type)}
                                    ${this.getLinkText(link.type)}
                                </a>
                            `).join('')}
                        </div>
                    ` : ''}
                </div>
            </div>
        `).join('');

        // Re-osserva i nuovi elementi
        setTimeout(() => {
            const cards = grid.querySelectorAll('[data-aos]');
            cards.forEach(card => {
                if (window.animationObserver) {
                    window.animationObserver.observe(card);
                }
            });
        }, 100);
    }

    getLinkIcon(type) {
        const icons = {
            github: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>',
            demo: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>',
            website: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>'
        };
        return icons[type] || icons.website;
    }

    getLinkText(type) {
        const texts = {
            github: 'GitHub',
            demo: 'Demo',
            website: 'Website'
        };
        return texts[type] || 'Link';
    }

    populateCertifications() {
        const grid = document.getElementById('certificationsGrid');
        if (!grid || !this.data?.certifications) return;

        grid.innerHTML = this.data.certifications.map((cert, index) => `
            <div class="certification-card" data-aos="zoom-in" data-aos-delay="${index * 100}">
                <div class="certification-logo">
                    <img src="${cert.logo}" alt="${cert.issuer}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22%3E%3Crect fill=%22%236366f1%22 width=%22100%22 height=%22100%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2240%22 fill=%22white%22%3E${cert.issuer.charAt(0)}%3C/text%3E%3C/svg%3E'">
                </div>
                <div class="certification-info">
                    <h4 class="certification-name">${cert.name}</h4>
                    <p class="certification-issuer">${cert.issuer}</p>
                </div>
            </div>
        `).join('');

        // Re-osserva i nuovi elementi
        setTimeout(() => {
            const cards = grid.querySelectorAll('[data-aos]');
            cards.forEach(card => {
                if (window.animationObserver) {
                    window.animationObserver.observe(card);
                }
            });
        }, 100);
    }

    // =================================
    // EVENT LISTENERS
    // =================================

    setupEventListeners() {
        // Download CV button
        const downloadBtn = document.getElementById('downloadCV');
        if (downloadBtn) {
            downloadBtn.addEventListener('click', () => {
                console.log('📥 Download CV');
            });
        }

        // Contact cards
        document.querySelectorAll('.contact-card').forEach(card => {
            card.addEventListener('click', (e) => {
                console.log('📧 Contact clicked:', e.currentTarget.href);
            });
        });

        // Handle window resize
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                this.handleResize();
            }, 250);
        });
    }

    handleResize() {
        // Reinitialize parallax on desktop
        if (window.innerWidth > 768 && !this.parallaxInitialized) {
            new ParallaxEffect();
            this.parallaxInitialized = true;
        }
    }

    // =================================
    // PROFILE IMAGE
    // =================================

    handleProfileImage() {
        const profileImg = document.getElementById('profileImage');
        if (!profileImg) return;

        // Gestisci errore caricamento immagine
        profileImg.addEventListener('error', () => {
            console.log('⚠️ Immagine profilo non trovata, uso placeholder');
            profileImg.src = this.generatePlaceholderImage();
        });

        // Aggiungi effetto hover
        profileImg.addEventListener('mouseenter', () => {
            profileImg.style.transform = 'scale(1.05) rotate(2deg)';
        });

        profileImg.addEventListener('mouseleave', () => {
            profileImg.style.transform = 'scale(1) rotate(0deg)';
        });
    }

    generatePlaceholderImage() {
        // Genera un placeholder SVG con le iniziali
        const initials = 'FDS';
        const svg = `
            <svg width="350" height="350" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#6366f1;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#8b5cf6;stop-opacity:1" />
                    </linearGradient>
                </defs>
                <circle cx="175" cy="175" r="175" fill="url(#grad)"/>
                <text x="50%" y="50%" text-anchor="middle" dy=".3em" 
                      font-family="Space Grotesk, sans-serif" font-size="120" 
                      font-weight="800" fill="white">
                    ${initials}
                </text>
            </svg>
        `;
        return 'data:image/svg+xml;base64,' + btoa(svg);
    }
}

// =================================
// INITIALIZE APP
// =================================

const app = new CVWebsite();

// =================================
// CONSOLE EASTER EGG
// =================================

console.log(`
%c👨‍💻 Francesco Domenico Saltarelli

%cCiao! Se stai guardando questa console, 
probabilmente siamo sulla stessa lunghezza d'onda! 😄

%c📧 Contattami: fd.saltarelli@gmail.com
🔗 LinkedIn: linkedin.com/in/fd-saltarelli
💻 GitHub: github.com/FDSwiki

%cStack: SwiftUI • Python • Figma • Business Strategy • AI
`,
    'color: #6366f1; font-size: 24px; font-weight: bold;',
    'color: #a1a1aa; font-size: 14px;',
    'color: #8b5cf6; font-size: 14px;',
    'color: #71717a; font-size: 12px; font-style: italic;'
);
