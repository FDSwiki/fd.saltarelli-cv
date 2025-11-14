// =================================
// ANIMATIONS & SCROLL EFFECTS
// =================================

class AnimationObserver {
    constructor() {
        this.observer = null;
        this.init();
    }

    init() {
        // Configura Intersection Observer per le animazioni on scroll
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('aos-animate');
                    
                    // Per le skill bars, anima il progresso
                    if (entry.target.classList.contains('skill-progress')) {
                        this.animateSkillBar(entry.target);
                    }
                }
            });
        }, options);

        // Osserva tutti gli elementi con data-aos
        this.observeElements();
    }

    observeElements() {
        const elements = document.querySelectorAll('[data-aos]');
        elements.forEach(el => this.observer.observe(el));
        
        // Osserva anche le skill bars
        const skillBars = document.querySelectorAll('.skill-progress');
        skillBars.forEach(bar => this.observer.observe(bar));
    }

    animateSkillBar(element) {
        const targetWidth = element.getAttribute('data-width');
        if (targetWidth && !element.classList.contains('animated')) {
            console.log(`📊 Animating skill bar to ${targetWidth}%`);
            element.classList.add('animated');
            // Forza il reflow per far partire l'animazione
            element.offsetHeight;
            setTimeout(() => {
                element.style.width = targetWidth + '%';
            }, 50);
        }
    }

    // Aggiungi nuovi elementi all'observer
    observe(element) {
        this.observer.observe(element);
    }
}

// =================================
// SCROLL EFFECTS
// =================================

class ScrollEffects {
    constructor() {
        this.navbar = document.getElementById('navbar');
        this.scrollIndicator = document.querySelector('.scroll-indicator');
        this.lastScroll = 0;
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => {
            this.handleScroll();
        });
    }

    handleScroll() {
        const currentScroll = window.pageYOffset;

        // Navbar scroll effect
        if (currentScroll > 50) {
            this.navbar?.classList.add('scrolled');
        } else {
            this.navbar?.classList.remove('scrolled');
        }

        // Hide scroll indicator after scrolling
        if (this.scrollIndicator && currentScroll > 100) {
            this.scrollIndicator.style.opacity = '0';
            this.scrollIndicator.style.pointerEvents = 'none';
        } else if (this.scrollIndicator) {
            this.scrollIndicator.style.opacity = '1';
            this.scrollIndicator.style.pointerEvents = 'auto';
        }

        // Active nav link based on scroll position
        this.updateActiveNavLink();

        this.lastScroll = currentScroll;
    }

    updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
}

// =================================
// SMOOTH SCROLL
// =================================

class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        // Smooth scroll per tutti i link interni
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');
                
                // Ignora link vuoti
                if (href === '#' || href === '#!') return;
                
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    const offsetTop = target.offsetTop - 80; // offset per navbar
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });

                    // Chiudi menu mobile se aperto
                    const navMenu = document.getElementById('navMenu');
                    const navToggle = document.getElementById('navToggle');
                    if (navMenu?.classList.contains('active')) {
                        navMenu.classList.remove('active');
                        navToggle?.classList.remove('active');
                    }
                }
            });
        });
    }
}

// =================================
// LOADING ANIMATIONS
// =================================

class LoadingAnimations {
    constructor() {
        this.init();
    }

    init() {
        // Fade in page on load
        document.body.style.opacity = '0';
        window.addEventListener('load', () => {
            document.body.style.transition = 'opacity 0.5s ease-in-out';
            document.body.style.opacity = '1';
        });

        // Stagger animation for timeline items
        this.staggerElements('.timeline-item', 100);
        this.staggerElements('.education-card', 150);
        this.staggerElements('.project-card', 150);
    }

    staggerElements(selector, delay) {
        const elements = document.querySelectorAll(selector);
        elements.forEach((el, index) => {
            el.style.animationDelay = `${index * delay}ms`;
        });
    }
}

// =================================
// PARALLAX EFFECTS
// =================================

class ParallaxEffect {
    constructor() {
        this.orbs = document.querySelectorAll('.gradient-orb');
        this.init();
    }

    init() {
        if (this.orbs.length === 0) return;

        window.addEventListener('scroll', () => {
            this.handleParallax();
        });

        // Mouse move parallax
        document.addEventListener('mousemove', (e) => {
            this.handleMouseParallax(e);
        });
    }

    handleParallax() {
        const scrolled = window.pageYOffset;
        
        this.orbs.forEach((orb, index) => {
            const speed = 0.1 + (index * 0.05);
            const yPos = -(scrolled * speed);
            orb.style.transform = `translateY(${yPos}px)`;
        });
    }

    handleMouseParallax(e) {
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        
        const moveX = (clientX - centerX) / 50;
        const moveY = (clientY - centerY) / 50;

        this.orbs.forEach((orb, index) => {
            const multiplier = 1 + (index * 0.5);
            orb.style.transform = `translate(${moveX * multiplier}px, ${moveY * multiplier}px)`;
        });
    }
}

// =================================
// TYPING EFFECT
// =================================

class TypingEffect {
    constructor(element, texts, typingSpeed = 100, deletingSpeed = 50, delay = 2000) {
        this.element = element;
        this.texts = texts;
        this.typingSpeed = typingSpeed;
        this.deletingSpeed = deletingSpeed;
        this.delay = delay;
        this.textIndex = 0;
        this.charIndex = 0;
        this.isDeleting = false;
    }

    type() {
        const currentText = this.texts[this.textIndex];
        
        if (this.isDeleting) {
            this.element.textContent = currentText.substring(0, this.charIndex - 1);
            this.charIndex--;
        } else {
            this.element.textContent = currentText.substring(0, this.charIndex + 1);
            this.charIndex++;
        }

        let typeSpeed = this.isDeleting ? this.deletingSpeed : this.typingSpeed;

        if (!this.isDeleting && this.charIndex === currentText.length) {
            typeSpeed = this.delay;
            this.isDeleting = true;
        } else if (this.isDeleting && this.charIndex === 0) {
            this.isDeleting = false;
            this.textIndex = (this.textIndex + 1) % this.texts.length;
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }

    start() {
        this.type();
    }
}

// =================================
// COUNTER ANIMATION
// =================================

class CounterAnimation {
    constructor(element, target, duration = 2000) {
        this.element = element;
        this.target = target;
        this.duration = duration;
        this.hasAnimated = false;
    }

    animate() {
        if (this.hasAnimated) return;
        this.hasAnimated = true;

        const start = 0;
        const increment = this.target / (this.duration / 16);
        let current = start;

        const timer = setInterval(() => {
            current += increment;
            if (current >= this.target) {
                this.element.textContent = this.target + '+';
                clearInterval(timer);
            } else {
                this.element.textContent = Math.floor(current) + '+';
            }
        }, 16);
    }
}

// =================================
// EXPORT CLASSES
// =================================

window.AnimationObserver = AnimationObserver;
window.ScrollEffects = ScrollEffects;
window.SmoothScroll = SmoothScroll;
window.LoadingAnimations = LoadingAnimations;
window.ParallaxEffect = ParallaxEffect;
window.TypingEffect = TypingEffect;
window.CounterAnimation = CounterAnimation;
