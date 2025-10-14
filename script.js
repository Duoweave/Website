// ===============================================
// DUOWEAVE WEBSITE JAVASCRIPT
// Professional, Modern, Dynamic Interactions
// ===============================================

// ===============================================
// NAVIGATION
// ===============================================
const navbar = document.getElementById('navbar');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navLinks = document.getElementById('navLinks');

// Sticky navbar on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
mobileMenuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    });
});

// ===============================================
// SMOOTH SCROLLING
// ===============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===============================================
// SCREENSHOT CAROUSEL
// ===============================================
const carouselTrack = document.querySelector('.carousel-track');
const carouselPrev = document.getElementById('carouselPrev');
const carouselNext = document.getElementById('carouselNext');
const carouselItems = document.querySelectorAll('.carousel-item');
const carouselDotsContainer = document.getElementById('carouselDots');

let currentIndex = 0;
const itemWidth = carouselItems[0] ? carouselItems[0].offsetWidth + 32 : 0; // width + gap

// Build dots
if (carouselDotsContainer) {
    carouselItems.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
        dot.addEventListener('click', () => {
            currentIndex = i;
            updateCarousel();
            updateDots();
        });
        carouselDotsContainer.appendChild(dot);
    });
}

function updateDots() {
    if (!carouselDotsContainer) return;
    const dots = carouselDotsContainer.querySelectorAll('button');
    dots.forEach((d, i) => d.classList.toggle('active', i === currentIndex));
}

function updateCarousel() {
    const scrollAmount = currentIndex * itemWidth;
    carouselTrack.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
    updateDots();
}

carouselPrev.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

carouselNext.addEventListener('click', () => {
    if (currentIndex < carouselItems.length - 1) {
        currentIndex++;
        updateCarousel();
    }
});

// Touch/swipe support for carousel
let touchStartX = 0;
let touchEndX = 0;

carouselTrack.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

carouselTrack.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    if (touchEndX < touchStartX - 50 && currentIndex < carouselItems.length - 1) {
        currentIndex++;
        updateCarousel();
    }
    if (touchEndX > touchStartX + 50 && currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
}

// Auto-play carousel
let autoplayInterval;

function startAutoplay() {
    autoplayInterval = setInterval(() => {
        if (currentIndex < carouselItems.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarousel();
    }, 5000);
}

function stopAutoplay() {
    clearInterval(autoplayInterval);
}

// Start autoplay on page load
startAutoplay();

// Pause autoplay on hover
carouselTrack.addEventListener('mouseenter', stopAutoplay);
carouselTrack.addEventListener('mouseleave', startAutoplay);

// Back-to-top behavior
const backToTop = document.getElementById('backToTop');
if (backToTop) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ===============================================
// INTERSECTION OBSERVER (AOS Alternative)
// ===============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
        }
    });
}, observerOptions);

// Observe all elements with data-aos attribute
document.querySelectorAll('[data-aos]').forEach(el => {
    observer.observe(el);
});

// ===============================================
// APP STORE LINKS (PLACEHOLDERS)
// ===============================================
const appStoreLink = document.getElementById('appStoreLink');
const playStoreLink = document.getElementById('playStoreLink');
const appleDownload = document.getElementById('appleDownload');
const googleDownload = document.getElementById('googleDownload');

// Placeholder links - will be updated when actual app store links are available
const APP_STORE_URL = '#'; // Replace with actual App Store URL
const PLAY_STORE_URL = '#'; // Replace with actual Play Store URL

if (appStoreLink) {
    appStoreLink.href = APP_STORE_URL;
}

if (playStoreLink) {
    playStoreLink.href = PLAY_STORE_URL;
}

if (appleDownload) {
    appleDownload.href = APP_STORE_URL;
    appleDownload.addEventListener('click', (e) => {
        if (APP_STORE_URL === '#') {
            e.preventDefault();
            showComingSoonModal('iOS');
        }
    });
}

if (googleDownload) {
    googleDownload.href = PLAY_STORE_URL;
    googleDownload.addEventListener('click', (e) => {
        if (PLAY_STORE_URL === '#') {
            e.preventDefault();
            showComingSoonModal('Android');
        }
    });
}

// ===============================================
// COMING SOON MODAL
// ===============================================
function showComingSoonModal(platform) {
    // Create modal
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        animation: fadeIn 0.3s ease-out;
    `;
    
    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background: white;
        padding: 2rem;
        border-radius: 1rem;
        max-width: 400px;
        text-align: center;
        animation: slideIn 0.3s ease-out;
    `;
    
    modalContent.innerHTML = `
        <h2 style="font-size: 1.5rem; margin-bottom: 1rem; color: #1F2937;">
            ${platform} App Coming Soon! 🚀
        </h2>
        <p style="color: #6B7280; margin-bottom: 1.5rem;">
            We're working hard to bring DuoWeave to ${platform}. Stay tuned for updates!
        </p>
        <button id="closeModal" style="
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            border: none;
            padding: 0.75rem 2rem;
            border-radius: 0.5rem;
            font-weight: 600;
            cursor: pointer;
            font-size: 1rem;
        ">
            Got it!
        </button>
    `;
    
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    
    // Close modal
    const closeBtn = document.getElementById('closeModal');
    closeBtn.addEventListener('click', () => {
        modal.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(modal);
        }, 300);
    });
    
    // Close on backdrop click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.animation = 'fadeOut 0.3s ease-out';
            setTimeout(() => {
                document.body.removeChild(modal);
            }, 300);
        }
    });
}

// ===============================================
// PARALLAX EFFECT FOR GRADIENT ORBS
// ===============================================
window.addEventListener('mousemove', (e) => {
    const orbs = document.querySelectorAll('.gradient-orb');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    orbs.forEach((orb, index) => {
        const speed = (index + 1) * 0.05;
        const x = (mouseX - 0.5) * 100 * speed;
        const y = (mouseY - 0.5) * 100 * speed;
        orb.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// ===============================================
// STATS COUNTER ANIMATION
// ===============================================
function animateCounter(element, target, duration) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Observe stats section
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const stats = entry.target.querySelectorAll('.stat h3');
            stats.forEach(stat => {
                const target = stat.textContent.trim();
                if (target === '100%') {
                    let count = 0;
                    const interval = setInterval(() => {
                        count += 5;
                        if (count >= 100) {
                            stat.textContent = '100%';
                            clearInterval(interval);
                        } else {
                            stat.textContent = count + '%';
                        }
                    }, 30);
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const downloadStats = document.querySelector('.download-stats');
if (downloadStats) {
    statsObserver.observe(downloadStats);
}

// ===============================================
// PAGE LOAD ANIMATIONS
// ===============================================
window.addEventListener('load', () => {
    // Fade in hero elements
    const heroElements = document.querySelectorAll('.animate-fade-in');
    heroElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
        }, index * 200);
    });
    
    // Add loaded class to body
    document.body.classList.add('loaded');
});

// ===============================================
// PERFORMANCE OPTIMIZATIONS
// ===============================================
// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Debounce resize events
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Recalculate carousel item width
        const firstItem = carouselItems[0];
        if (firstItem) {
            const newItemWidth = firstItem.offsetWidth + 32;
            updateCarousel();
        }
    }, 250);
});

// ===============================================
// ANALYTICS TRACKING (PLACEHOLDER)
// ===============================================
function trackEvent(category, action, label) {
    // Gate analytics behind consent
    try {
        const consent = JSON.parse(localStorage.getItem('dw_cookie_consent') || '{}');
        if (!consent.analytics) return;
        // Replace with actual analytics provider call
        console.log('Event tracked:', { category, action, label });
    } catch (e) {
        // no-op
    }
}

// Track button clicks
document.querySelectorAll('.btn, .store-button').forEach(btn => {
    btn.addEventListener('click', () => {
        const label = btn.textContent.trim();
        trackEvent('Button', 'Click', label);
    });
});

// Track section visibility
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            trackEvent('Section', 'View', sectionId);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('section[id]').forEach(section => {
    sectionObserver.observe(section);
});

// ===============================================
// THEME TOGGLE & SYSTEM PREFERENCE DETECTION
// ===============================================
class ThemeManager {
    constructor() {
        this.themeToggle = document.getElementById('themeToggle');
        this.sunIcon = document.getElementById('sunIcon');
        this.moonIcon = document.getElementById('moonIcon');
        this.currentTheme = this.getStoredTheme() || this.getSystemTheme();
        
        this.init();
    }
    
    init() {
        // Set initial theme
        this.setTheme(this.currentTheme);
        
        // Add event listener for theme toggle
        if (this.themeToggle) {
            this.themeToggle.addEventListener('click', () => {
                this.toggleTheme();
            });
        }
        
        // Listen for system theme changes
        if (window.matchMedia) {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            mediaQuery.addEventListener('change', (e) => {
                // Only auto-switch if user hasn't manually set a preference
                if (!localStorage.getItem('theme')) {
                    this.setTheme(e.matches ? 'dark' : 'light');
                }
            });
        }
    }
    
    getSystemTheme() {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        return 'light';
    }
    
    getStoredTheme() {
        return localStorage.getItem('theme');
    }
    
    setTheme(theme) {
        this.currentTheme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        
        // Update icons
        if (theme === 'dark') {
            this.sunIcon.style.display = 'none';
            this.moonIcon.style.display = 'block';
        } else {
            this.sunIcon.style.display = 'block';
            this.moonIcon.style.display = 'none';
        }
        
        // Add smooth transition
        document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
        setTimeout(() => {
            document.body.style.transition = '';
        }, 300);
    }
    
    toggleTheme() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
        
        // Track theme change
        trackEvent('Theme', 'Toggle', newTheme);
    }
}

// Initialize theme manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ThemeManager();
    initSmartBanner();
    initCookieBanner();
});

// ===============================================
// FAQ ACCORDION
// ===============================================
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        const isActive = faqItem.classList.contains('active');
        
        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Toggle current item
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});

// ===============================================
// WAITLIST FORM HANDLING
// ===============================================
const waitlistForm = document.getElementById('waitlistForm');
if (waitlistForm) {
    waitlistForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('waitlistEmail').value;
        console.log('Waitlist signup:', email);
        // TODO: Connect to email service
        alert('Thanks for joining the waitlist! We\'ll be in touch soon.');
        waitlistForm.reset();
    });
}

// ===============================================
// COMMUNITY STATS COUNTER ANIMATION
// ===============================================
const statNumbers = document.querySelectorAll('.stat-number');
const statsObserverForCounters = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = parseInt(entry.target.dataset.target);
            animateCounter(entry.target, target, 2000);
            statsObserverForCounters.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

statNumbers.forEach(stat => statsObserverForCounters.observe(stat));

// ===============================================
// STICKY CTA
// ===============================================
const stickyCta = document.getElementById('stickyCta');
const stickyCtaClose = document.getElementById('stickyCtaClose');

if (stickyCta && stickyCtaClose) {
    // Show sticky CTA after scrolling down
    window.addEventListener('scroll', () => {
        if (window.scrollY > 1000 && !sessionStorage.getItem('stickyCtaClosed')) {
            stickyCta.classList.add('show');
        }
    });
    
    // Close sticky CTA
    stickyCtaClose.addEventListener('click', () => {
        stickyCta.classList.remove('show');
        sessionStorage.setItem('stickyCtaClosed', 'true');
    });
}

// ===============================================
// EXIT INTENT POPUP
// ===============================================
const exitPopup = document.getElementById('exitPopup');
const exitPopupClose = document.getElementById('exitPopupClose');
const exitPopupForm = document.getElementById('exitPopupForm');

if (exitPopup && !sessionStorage.getItem('exitPopupShown')) {
    let exitIntentTriggered = false;
    
    document.addEventListener('mouseleave', (e) => {
        if (e.clientY < 0 && !exitIntentTriggered && !sessionStorage.getItem('exitPopupShown')) {
            exitIntentTriggered = true;
            exitPopup.classList.add('show');
            sessionStorage.setItem('exitPopupShown', 'true');
        }
    });
    
    if (exitPopupClose) {
        exitPopupClose.addEventListener('click', () => {
            exitPopup.classList.remove('show');
        });
    }
    
    // Close on overlay click
    const exitPopupOverlay = document.querySelector('.exit-popup-overlay');
    if (exitPopupOverlay) {
        exitPopupOverlay.addEventListener('click', () => {
            exitPopup.classList.remove('show');
        });
    }
    
    if (exitPopupForm) {
        exitPopupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = exitPopupForm.querySelector('input[type="email"]').value;
            console.log('Exit popup signup:', email);
            // TODO: Connect to email service
            alert('Thanks for joining! Check your email for confirmation.');
            exitPopup.classList.remove('show');
        });
    }
}

// ===============================================
// ROTATING HEADLINE ANIMATION (Geneva-style)
// ===============================================
function initRotatingHeadline() {
    const rotatingText = document.querySelector('.rotating-text');
    if (!rotatingText) return;
    
    const spans = rotatingText.querySelectorAll('span');
    let currentIndex = 0;
    
    setInterval(() => {
        spans[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % spans.length;
        spans[currentIndex].classList.add('active');
    }, 3000);
}

// ===============================================
// VIDEO PERFORMANCE OPTIMIZATION
// ===============================================
function optimizeVideos() {
    const videos = document.querySelectorAll('video');
    
    videos.forEach(video => {
        // Pause video when not visible to save resources
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    video.play().catch(err => {
                        console.log('Video autoplay prevented:', err);
                    });
                } else {
                    video.pause();
                }
            });
        }, { threshold: 0.25 });
        
        observer.observe(video);
        
        // Reduce playback rate slightly for smoother loop
        video.playbackRate = 0.95;
    });
}

// Initialize video features on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    // Freeze headline at first line to avoid fading/rotation for now
    // initRotatingHeadline();
    optimizeVideos();
});

// ===============================================
// CONSOLE EASTER EGG
// ===============================================
console.log('%c👋 Hey there, developer!', 'font-size: 20px; font-weight: bold; color: #667eea;');
console.log('%cWant to join the DuoWeave team? We\'re hiring!', 'font-size: 14px; color: #6B7280;');
console.log('%cCheck out our careers page or email us at careers@duoweave.com', 'font-size: 14px; color: #6B7280;');
console.log('%c🚀 Built with passion. Verified with AI. Connected with purpose.', 'font-size: 12px; font-style: italic; color: #667eea;');

// ===============================================
// SMART APP BANNER / DEEP LINK
// ===============================================
function initSmartBanner() {
    const banner = document.getElementById('smartBanner');
    const closeBtn = document.getElementById('smartBannerClose');
    const openBtn = document.getElementById('openInApp');

    if (!banner) return;

    // Show only on mobile and if not dismissed
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile && !localStorage.getItem('dw_banner_closed')) {
        banner.classList.add('show');
    }

    // Try to open deep link, fallback to download section
    if (openBtn) {
        openBtn.addEventListener('click', (e) => {
            // Attempt deep link
            const now = Date.now();
            window.location.href = 'duoweave://open';
            // After 800ms, if user is still here, fallback
            setTimeout(() => {
                if (Date.now() - now < 2000) {
                    document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' });
                }
            }, 800);
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            banner.classList.remove('show');
            localStorage.setItem('dw_banner_closed', '1');
        });
    }
}

// ===============================================
// COOKIE CONSENT BANNER
// ===============================================
function initCookieBanner() {
    const banner = document.getElementById('cookieBanner');
    if (!banner) return;

    try {
        const existing = localStorage.getItem('dw_cookie_consent');
        if (existing) return; // already set
    } catch (e) {}

    banner.style.display = 'block';

    const accept = document.getElementById('cookieAccept');
    const essential = document.getElementById('cookieEssential');
    const customize = document.getElementById('cookieCustomize');

    const save = (prefs) => {
        localStorage.setItem('dw_cookie_consent', JSON.stringify(prefs));
        banner.style.display = 'none';
    };

    if (accept) accept.addEventListener('click', () => save({ essential: true, analytics: true }));
    if (essential) essential.addEventListener('click', () => save({ essential: true, analytics: false }));
    if (customize) customize.addEventListener('click', () => {
        // Simple toggle prompt; replace with full modal if desired
        const allowAnalytics = confirm('Allow anonymous analytics to improve DuoWeave?');
        save({ essential: true, analytics: !!allowAnalytics });
    });
}
document.addEventListener('DOMContentLoaded', () => {
    // ... (keep all your existing code)

    // --- Mobile Menu Toggle ---
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.getElementById('navLinks');

    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active'); // Optional: for styling the 'X' state
        });
    }
});

