document.addEventListener('DOMContentLoaded', function() {
    // --- PARTICLES.JS CONFIG ---
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: { value: 100, density: { enable: true, value_area: 1000 } },
                color: { value: '#3DDC84' },
                shape: { type: 'circle', stroke: { width: 0, color: '#000000' } },
                opacity: { value: 0.6, random: true, anim: { enable: true, speed: 1.5, opacity_min: 0.2 } },
                size: { value: 4, random: true, anim: { enable: true, speed: 3, size_min: 0.2 } },
                line_linked: { enable: true, distance: 180, color: '#00DDEB', opacity: 0.5, width: 1.5 },
                move: { enable: true, speed: 4, direction: 'none', random: true, straight: false, out_mode: 'out' }
            },
            interactivity: {
                detect_on: 'canvas',
                events: { onhover: { enable: true, mode: 'grab' }, onclick: { enable: true, mode: 'push' }, resize: true },
                modes: { grab: { distance: 250, line_linked: { opacity: 0.6 } }, push: { particles_nb: 5 } }
            },
            retina_detect: true
        });
    }

    // --- MOBILE NAVIGATION ---
    const navToggle = document.querySelector('.nav-toggle');
    const body = document.body;
    const navLinks = document.querySelectorAll('.navbar nav a');

    navToggle.addEventListener('click', function() {
        body.classList.toggle('nav-open');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            body.classList.remove('nav-open');
        });
    });

    // --- FORM SUBMISSION ---
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.querySelector('.form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            formStatus.textContent = "Transmitting your signal...";
            
            setTimeout(() => {
                formStatus.textContent = "Signal received! I'll get back to you soon.";
                contactForm.reset();
                setTimeout(() => {
                    formStatus.textContent = "";
                }, 6000);
            }, 1500);
        });
    }

    // --- GSAP ANIMATIONS ---
    if (typeof gsap !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger, TextPlugin);

        // Hero Section Animation
        const heroTimeline = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.4 } });
        heroTimeline
            .from('.hero-title', { opacity: 0, y: 120, rotateX: 40, delay: 0.4 })
            .from('.hero-subtitle', { opacity: 0, y: 100, rotateX: 30 }, "-=1.4")
            .from('.social-links > a', { opacity: 0, scale: 0, stagger: 0.25, rotate: 360 }, "-=1.2")
            .from('.btn-primary', { opacity: 0, y: 60, scale: 0.7 }, "-=1")
            .from('.hero-img img', { opacity: 0, scale: 0.4, rotateY: 120, duration: 2.2 }, "-=1.4");

        // Animated Text Loop
        const roles = ["Crafting Android Apps.", "Solving Cosmic Challenges.", "Building Next-Gen UI."];
        const animatedText = document.querySelector('.animated-text');
        if (animatedText) {
            let masterTl = gsap.timeline({ repeat: -1 });
            roles.forEach(role => {
                let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1.5 });
                tl.to(animatedText, { duration: 1.5, text: role, ease: "none", paddingRight: "12px" });
                masterTl.add(tl);
            });
        }

        // Section Animations
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            const sectionTitle = section.querySelector('.section-title');
            const cards = section.querySelectorAll('.profile-card, .skill-item, .project-card');

            if (sectionTitle) {
                gsap.to(sectionTitle, {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionTitle,
                        start: 'top 75%',
                        toggleActions: 'play none none none'
                    }
                });
            }

            if (cards.length > 0) {
                gsap.to(cards, {
                    opacity: 1,
                    y: 0,
                    rotateY: 0,
                    duration: 1,
                    stagger: 0.4,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: cards[0],
                        start: 'top 70%',
                        toggleActions: 'play none none none'
                    }
                });
            }
        });

        // Card Hover Effects
        const cards = document.querySelectorAll('.profile-card, .skill-item, .project-card');
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                gsap.to(card, { 
                    scale: 1.05, 
                    boxShadow: '0 24px 48px rgba(61, 220, 132, 0.5)', 
                    duration: 0.6, 
                    ease: 'power3.out',
                    transformStyle: 'preserve-3d'
                });
            });
            card.addEventListener('mouseleave', () => {
                gsap.to(card, { 
                    scale: 1, 
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)', 
                    duration: 0.6, 
                    ease: 'power3.out',
                    transformStyle: 'preserve-3d'
                });
            });
        });
    } else {
        console.error("GSAP or its plugins not loaded!");
    }
});