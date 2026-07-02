/* ==========================================
   Ahmed ElDegla Portfolio — app.js
==========================================
   
   HOW THIS FILE WORKS:
   ====================
   1. This file reads data from data.js and puts it into the HTML
   2. The populateData() function runs when the page loads
   3. It finds HTML elements by their ID and fills them with data
   4. For example: data.personal.name goes into element with id="heroName"
   
   TO UNDERSTAND THE BINDING:
   =========================
   - Look at data.js for the data structure
   - Look at index.html for the element IDs
   - This file connects them together
   
   EXAMPLE:
   ========
   data.personal.name → element with id="heroName"
   data.hero.greeting → element with id="heroGreeting"
   
   DON'T EDIT THIS FILE unless you:
   - Want to change HOW data is displayed
   - Want to add new data bindings
   - Want to change the logic
   
   To change WHAT data is shown, edit data.js instead.
*/

// =========================================
// DATA POPULATION FUNCTION
// =========================================
// This function takes data from data.js and fills the HTML elements
// It runs automatically when the page loads
function populateData() {
    try {
        if (typeof portfolioData === 'undefined') {
            console.error('portfolioData is not defined. Make sure js/data.js is loaded before js/app.js');
            return;
        }

        const data = portfolioData;

        // =========================================
        // HELPER FUNCTIONS
        // =========================================
        
        // safeSet: Sets text or HTML content of an element by ID
        // Usage: safeSet('elementId', 'content', true/false for HTML)
        const safeSet = (id, content, isHtml = false) => {
            const el = document.getElementById(id);
            if (el) {
                if (isHtml) {
                    el.innerHTML = content;  // For HTML content (with tags)
                } else {
                    el.textContent = content;  // For plain text
                }
            } else {
                console.warn(`Element with id "${id}" not found`);
            }
        };

        // safeSetAttr: Sets an attribute of an element by ID
        // Usage: safeSetAttr('elementId', 'attributeName', 'value')
        const safeSetAttr = (id, attr, value) => {
            const el = document.getElementById(id);
            if (el) {
                el.setAttribute(attr, value);
            }
        };

        // =========================================
        // META TAGS (SEO)
        // =========================================
        // These tags help search engines understand your site
        const descMeta = document.querySelector('meta[name="description"]');
        if (descMeta) descMeta.content = data.meta.description;
        
        const keywordsMeta = document.querySelector('meta[name="keywords"]');
        if (keywordsMeta) keywordsMeta.content = data.meta.keywords;
        
        const authorMeta = document.querySelector('meta[name="author"]');
        if (authorMeta) authorMeta.content = data.meta.author;
        
        const ogTitleMeta = document.querySelector('meta[property="og:title"]');
        if (ogTitleMeta) ogTitleMeta.content = data.meta.ogTitle;
        
        const ogDescMeta = document.querySelector('meta[property="og:description"]');
        if (ogDescMeta) ogDescMeta.content = data.meta.ogDescription;
        
        document.title = data.meta.ogTitle;
        
        const favicon = document.querySelector('link[rel="icon"]');
        if (favicon) favicon.href = data.personal.profileImage;

        // =========================================
        // PRELOADER & NAVIGATION
        // =========================================
        // Logo appears in preloader and navbar
        const logoHtml = `${data.personal.name}<span>.</span>`;
        safeSet('preloaderLogo', logoHtml, true);
        safeSet('navLogo', logoHtml, true);

        // =========================================
        // HERO SECTION
        // =========================================
        // Main hero content at the top of the page
        safeSet('heroBadge', data.hero.badge);
        safeSet('heroGreeting', data.hero.greeting);
        safeSet('heroName', `${data.personal.name}`, true);
        safeSet('heroDescription', data.hero.description, true);
        safeSet('typedText', data.personal.title);

        // Profile image in hero visual
        safeSetAttr('profileImage', 'src', data.personal.profileImage);
        safeSetAttr('profileImage', 'alt', `${data.personal.fullName} — ${data.personal.title}`);

        // =========================================
        // ABOUT SECTION
        // =========================================
        // About me content
        safeSet('aboutTitle', `Turning Ideas Into <span class="gradient-text">Powerful Apps</span>`, true);
        safeSet('aboutSubtitle', data.about.description);
        safeSet('aboutContent', data.about.content);
        safeSet('aboutParagraph1', data.about.paragraphs[0]);
        safeSet('aboutParagraph2', data.about.paragraphs[1]);
        safeSetAttr('aboutImage', 'src', data.personal.profileImage);
        safeSetAttr('aboutImage', 'alt', data.personal.fullName);

        // About list (bullet points)
        const aboutList = document.getElementById('aboutList');
        if (aboutList) {
            aboutList.innerHTML = data.about.list.map(item => `<li><i class="fas fa-check-circle"></i> ${item}</li>`).join('');
        }

        // About info (location, email, phone)
        const aboutInfo = document.getElementById('aboutInfo');
        if (aboutInfo) {
            aboutInfo.innerHTML = `
                <div><i class="fas fa-map-marker-alt"></i> ${data.personal.location}</div>
                <div><i class="fas fa-envelope"></i> ${data.personal.email}</div>
                <div><i class="fas fa-phone"></i> ${data.personal.phone}</div>
            `;
        }

        // =========================================
        // FOOTER SECTION
        // =========================================
        safeSet('footerLogo', logoHtml, true);
        safeSet('footerTagline', data.footer.tagline);
        safeSet('footerCopyright', `&copy; 2026 ${data.personal.fullName}. Crafted with <i class="devicon-flutter-plain colored"></i> and passion.`, true);
        safeSet('footerSubtitle', data.footer.subtitle);

        // =========================================
        // DYNAMIC SECTIONS POPULATION
        // =========================================

        // 1. Services
        const servicesGrid = document.getElementById('servicesGrid');
        if (servicesGrid) {
            servicesGrid.innerHTML = data.services.map(service => `
                <div class="service-card${service.featured ? ' featured' : ''}">
                    ${service.featured && service.badge ? `<div class="service-badge">${service.badge}</div>` : ''}
                    <div class="service-icon"><i class="${service.icon}"></i></div>
                    <h3>${service.title}</h3>
                    <p>${service.description}</p>
                    <ul>
                        ${service.features.map(feat => `<li>${feat}</li>`).join('')}
                    </ul>
                </div>
            `).join('');
        }

        // 2. Skills Layout
        const skillsLayout = document.getElementById('skillsLayout');
        if (skillsLayout) {
            skillsLayout.innerHTML = data.skills.categories.map(cat => `
                <div class="skill-category">
                    <h3><i class="${cat.icon}"></i> ${cat.title}</h3>
                    <div class="skill-bars">
                        ${cat.skills.map(s => `
                            <div class="skill-bar">
                                <span>${s.name}</span>
                                <div class="bar"><div style="width:${s.percent}%"></div></div>
                                <em>${s.percent}%</em>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `).join('');
        }

        // 3. Tech Stack
        const techGrid = document.getElementById('techGrid');
        if (techGrid) {
            techGrid.innerHTML = data.skills.techStack.map(tech => `
                <div class="tech-chip"><i class="${tech.icon}"></i> ${tech.name}</div>
            `).join('');
        }

        // 4. Experience Timeline
        const experienceTimeline = document.getElementById('experienceTimeline');
        if (experienceTimeline) {
            experienceTimeline.innerHTML = data.experience.map(exp => `
                <div class="timeline-item">
                    <div class="timeline-date">${exp.date}</div>
                    <div class="timeline-content">
                        <span class="timeline-company"><i class="${exp.companyIcon}"></i> ${exp.company}</span>
                        <h3>${exp.title}</h3>
                        <p>${exp.description}</p>
                        <ul class="timeline-tags">
                            ${exp.tags.map(tag => `<li>${tag}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            `).join('');
        }

        // 5. Projects
        const projectsGrid = document.getElementById('projectsGrid');
        if (projectsGrid) {
            projectsGrid.innerHTML = data.projects.map(proj => {
                const isFeatured = proj.featured ? ' featured-project' : '';
                const accentStyle = proj.accent ? ` style="--accent:${proj.accent}"` : '';
                const statusClass = proj.status === 'live' ? 'live' : 'dev';
                const statusIcon = proj.status === 'live' ? 'fas fa-check-circle' : 'fas fa-code';
                
                const statusMarkup = `
                    <div class="project-overlay">
                        <span class="project-status ${statusClass}"><i class="${statusIcon}"></i> ${proj.statusText}</span>
                    </div>
                `;

                const storeLinksMarkup = proj.storeLinks ? `
                    <div class="project-store-links">
                        ${proj.storeLinks.map(link => `
                            <a href="${link.url}" class="store-link" ${link.url !== '#' ? 'target="_blank" rel="noopener"' : ''}>
                                <i class="fab fa-${link.platform}"></i> ${link.name}
                            </a>
                        `).join('')}
                    </div>
                ` : '';

                const tagsMarkup = proj.tags ? `
                    <div class="project-tags">
                        ${proj.tags.map(tag => `<span>${tag}</span>`).join('')}
                    </div>
                ` : '';

                return `
                    <article class="project-card${isFeatured}" data-category="${proj.category}">
                        <div class="project-img"${accentStyle}>
                            ${statusMarkup}
                            <i class="${proj.icon} project-icon"></i>
                        </div>
                        <div class="project-body">
                            <span class="project-cat">${proj.categoryName}</span>
                            <h3>${proj.title}</h3>
                            <p>${proj.description}</p>
                            ${storeLinksMarkup}
                            ${tagsMarkup}
                        </div>
                    </article>
                `;
            }).join('');
        }

        // 6. Process Steps
        const processGrid = document.getElementById('processGrid');
        if (processGrid) {
            processGrid.innerHTML = data.process.map(proc => `
                <div class="process-step">
                    <div class="step-num">${proc.step}</div>
                    <i class="${proc.icon}"></i>
                    <h3>${proc.title}</h3>
                    <p>${proc.description}</p>
                </div>
            `).join('');
        }

        // 7. Highlights/Testimonials Slider
        const testimonialTrack = document.getElementById('testimonialTrack');
        if (testimonialTrack) {
            testimonialTrack.innerHTML = data.highlights.map(hl => {
                const initials = hl.author ? hl.author.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() : 'AE';
                return `
                    <div class="testimonial-card">
                        <div class="stars"><i class="${hl.icon}"></i></div>
                        <p>"${hl.text}"</p>
                        <div class="testimonial-author">
                            <div class="author-avatar">${initials}</div>
                            <div>
                                <strong>${hl.author}</strong>
                                <span>${hl.role}</span>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
        }

        // 8. Achievements Stats
        const achievementsGrid = document.getElementById('achievementsGrid');
        if (achievementsGrid) {
            achievementsGrid.innerHTML = data.achievements.map(ach => `
                <div class="achievement-card">
                    <i class="${ach.icon}"></i>
                    <h3 data-count="${ach.count}">0</h3>
                    <p>${ach.label}</p>
                </div>
            `).join('');
        }

        // 9. FAQ Accordions
        const faqList = document.getElementById('faqList');
        if (faqList) {
            faqList.innerHTML = data.faq.map(item => `
                <div class="faq-item">
                    <button class="faq-question">
                        ${item.question}
                        <i class="fas fa-chevron-down"></i>
                    </button>
                    <div class="faq-answer">
                        <p>${item.answer}</p>
                    </div>
                </div>
            `).join('');
        }

        // 10. Contact Cards
        const contactGrid = document.getElementById('contactGrid');
        if (contactGrid) {
            const contactMethods = [
                { href: `mailto:${data.personal.email}`, icon: 'fas fa-envelope', title: 'Email Me', desc: 'Send me a message directly', key: 'email' },
                { href: data.personal.whatsapp, icon: 'fab fa-whatsapp', title: 'WhatsApp', desc: 'Chat with me instantly', target: '_blank', key: 'whatsapp' },
                { href: data.personal.linkedin, icon: 'fab fa-linkedin-in', title: 'LinkedIn', desc: 'Connect professionally', target: '_blank', key: 'linkedin' },
                { href: data.personal.github, icon: 'fab fa-github', title: 'GitHub', desc: 'Check out my code', target: '_blank', key: 'github' },
                { href: data.personal.resume, icon: 'fas fa-file-pdf', title: 'Resume', desc: 'Download my CV', target: '_blank', key: 'resume' },
                { href: `tel:${data.personal.phone.replace(/\s+/g, '')}`, icon: 'fas fa-phone', title: 'Call Me', desc: 'Tap to call', key: 'phone' }
            ];

            contactGrid.innerHTML = contactMethods.map(method => `
                <a href="${method.href}" ${method.target ? `target="${method.target}" rel="noopener"` : ''} class="contact-action-card" data-contact="${method.key}">
                    <div class="contact-icon-wrapper">
                        <i class="${method.icon}"></i>
                    </div>
                    <div class="contact-content">
                        <h3>${method.title}</h3>
                        <p>${method.desc}</p>
                    </div>
                    <div class="contact-arrow"><i class="fas fa-arrow-right"></i></div>
                </a>
            `).join('');
        }

        console.log('Data populated successfully');
    } catch (error) {
        console.error('Error populating data:', error);
    }
}

// =========================================
// PAGE INITIALIZATION
// =========================================
// This runs when the HTML is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // First, populate all data from data.js
    populateData();

    /* ===== Preloader ===== */
    // Shows loading screen until page is ready
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', () => {
        setTimeout(() => preloader?.classList.add('hidden'), 1200);
    });

    /* ===== Custom Cursor ===== */
    // Custom animated cursor effect
    const dot = document.getElementById('cursorDot');
    const ring = document.getElementById('cursorRing');
    if (window.matchMedia('(pointer: fine)').matches && dot && ring) {
        let mx = 0, my = 0, rx = 0, ry = 0;
        document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
        const animateCursor = () => {
            rx += (mx - rx) * 0.15;
            ry += (my - ry) * 0.15;
            dot.style.left = mx + 'px';
            dot.style.top = my + 'px';
            ring.style.left = rx + 'px';
            ring.style.top = ry + 'px';
            requestAnimationFrame(animateCursor);
        };
        animateCursor();
        document.querySelectorAll('a, button, .project-card, .service-card').forEach(el => {
            el.addEventListener('mouseenter', () => ring.classList.add('hover'));
            el.addEventListener('mouseleave', () => ring.classList.remove('hover'));
        });
    }

    /* ===== Particle Background ===== */
    // Animated particle effect in background
    const canvas = document.getElementById('particles');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let particles = [];
        const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
        resize();
        window.addEventListener('resize', resize);
        for (let i = 0; i < 60; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                r: Math.random() * 2 + 0.5,
                dx: (Math.random() - 0.5) * 0.4,
                dy: (Math.random() - 0.5) * 0.4,
                o: Math.random() * 0.5 + 0.1
            });
        }
        const drawParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(0,212,255,${p.o})`;
                ctx.fill();
                p.x += p.dx; p.y += p.dy;
                if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
            });
            requestAnimationFrame(drawParticles);
        };
        drawParticles();
    }

    /* ===== Navbar ===== */
    // Navigation bar scroll effect and mobile menu
    const navbar = document.querySelector('.navbar');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    window.addEventListener('scroll', () => {
        navbar?.classList.toggle('scrolled', window.scrollY > 50);
    });

    hamburger?.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks?.classList.toggle('open');
    });

    navLinks?.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger?.classList.remove('active');
            navLinks?.classList.remove('open');
        });
    });

    /* ===== Active Nav Link ===== */
    // Highlights current section in navigation
    const sections = document.querySelectorAll('section[id]');
    const navAnchors = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = 'home';
        sections.forEach(section => {
            if (window.scrollY >= section.offsetTop - 200) {
                current = section.getAttribute('id');
            }
        });
        navAnchors.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === '#' + current);
        });
    });

    /* ===== Smooth Scroll ===== */
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', e => {
            try {
                const href = link.getAttribute('href');
                if (!href || href === '#') return;
                const target = document.querySelector(href);
                if (!target) return;
                e.preventDefault();
                const targetPosition = target.offsetTop - 90;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            } catch (error) {
                console.error('Smooth scroll error:', error);
            }
        });
    });

    /* ===== Reveal on Scroll ===== */
    // Animates elements into view when scrolling
    const revealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    /* ===== Counter Animation ===== */
    // Animates numbers counting up when in view
    const counterObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            const target = parseInt(el.dataset.count, 10);
            if (isNaN(target)) return;
            let current = 0;
            const step = Math.max(1, Math.floor(target / 60));
            const suffix = el.dataset.suffix || '';
            const timer = setInterval(() => {
                current += step;
                if (current >= target) { current = target; clearInterval(timer); }
                const display = current >= 1000 ? (current / 1000).toFixed(0) + 'K' : current;
                el.textContent = display + suffix;
            }, 25);
            counterObserver.unobserve(el);
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('[data-count]').forEach(el => counterObserver.observe(el));

    /* ===== Skill Bars Animation ===== */
    // Animates skill bars filling up when in view
    const skillObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll('.bar').forEach(bar => bar.classList.add('animated'));
                skillObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.skills-layout').forEach(el => skillObserver.observe(el));

    /* ===== Typing Effect ===== */
    // Cycles through job titles in hero section
    const typedEl = document.getElementById('typedText');
    if (typedEl && typeof portfolioData !== 'undefined') {
        const words = portfolioData.hero.typingWords;
        let wi = 0, ci = 0, deleting = false;
        const type = () => {
            const word = words[wi];
            if (!deleting) {
                typedEl.textContent = word.substring(0, ci++);
                if (ci > word.length) { deleting = true; setTimeout(type, 1800); return; }
            } else {
                typedEl.textContent = word.substring(0, ci--);
                if (ci < 0) { deleting = false; wi = (wi + 1) % words.length; ci = 0; }
            }
            setTimeout(type, deleting ? 40 : 80);
        };
        type();
    }

    /* ===== Project Filters ===== */
    // Filters projects by category
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.dataset.filter;
            projectCards.forEach(card => {
                const show = filter === 'all' || card.dataset.category === filter;
                card.classList.toggle('hidden-card', !show);
                if (show) {
                    card.style.animation = 'none';
                    card.offsetHeight;
                    card.style.animation = '';
                }
            });
        });
    });

    /* ===== Testimonials Slider ===== */
    // Auto-sliding testimonials carousel
    const track = document.getElementById('testimonialTrack');
    const prevBtn = document.getElementById('prevTestimonial');
    const nextBtn = document.getElementById('nextTestimonial');
    let slideIndex = 0;
    const totalSlides = track?.children.length || 0;

    const goToSlide = (i) => {
        slideIndex = ((i % totalSlides) + totalSlides) % totalSlides;
        if (track) track.style.transform = `translateX(-${slideIndex * 100}%)`;
    };

    prevBtn?.addEventListener('click', () => goToSlide(slideIndex - 1));
    nextBtn?.addEventListener('click', () => goToSlide(slideIndex + 1));
    setInterval(() => goToSlide(slideIndex + 1), 6000);

    /* ===== FAQ Accordion ===== */
    // Expand/collapse FAQ items
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.parentElement;
            const isActive = item.classList.contains('active');
            document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
            if (!isActive) item.classList.add('active');
        });
    });

    /* ===== Contact Cards ===== */
    // Hover effects for contact action cards
    document.querySelectorAll('.contact-action-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            const icon = card.querySelector('.contact-icon-wrapper i');
            icon.style.transform = 'scale(1.2)';
        });
        card.addEventListener('mouseleave', () => {
            const icon = card.querySelector('.contact-icon-wrapper i');
            icon.style.transform = 'scale(1)';
        });
    });

    /* ===== 3D Tilt on Cards ===== */
    // 3D tilt effect on hover for project and service cards
    document.querySelectorAll('.project-card, .service-card').forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            card.style.transform = `perspective(800px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg) translateY(-8px)`;
        });
        card.addEventListener('mouseleave', () => { card.style.transform = ''; });
    });

    /* ===== Button Ripple ===== */
    // Ripple effect on button clicks
    document.querySelectorAll('.btn, button').forEach(btn => {
        btn.addEventListener('click', function (e) {
            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            const rect = this.getBoundingClientRect();
            ripple.style.left = (e.clientX - rect.left) + 'px';
            ripple.style.top = (e.clientY - rect.top) + 'px';
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });

    /* ===== Hero Card Parallax ===== */
    // 3D parallax effect on hero profile card
    const heroCard = document.querySelector('.glass-card');
    if (heroCard && window.matchMedia('(pointer: fine)').matches) {
        document.addEventListener('mousemove', e => {
            const x = (window.innerWidth / 2 - e.clientX) / 40;
            const y = (window.innerHeight / 2 - e.clientY) / 40;
            heroCard.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
        });
    }
});

/* ===== Scroll Progress Bar ===== */
const progressBar = document.createElement('div');
progressBar.className = 'scroll-progress';
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const scroll = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    progressBar.style.width = (scroll * 100) + '%';
});

/* ===== Scroll To Top ===== */
const scrollTopBtn = document.createElement('button');
scrollTopBtn.className = 'scroll-top';
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopBtn.setAttribute('aria-label', 'Scroll to top');
document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    scrollTopBtn.classList.toggle('visible', window.scrollY > 600);
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
