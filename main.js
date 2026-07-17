document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    // Update active dot on scroll
    window.addEventListener('scroll', () => {
        let currentSlide = 1;
        slides.forEach((slide, index) => {
            const slideTop = slide.offsetTop;
            if (window.scrollY >= slideTop - window.innerHeight / 2) {
                currentSlide = index + 1;
            }
        });
        
        dots.forEach(dot => dot.classList.remove('active'));
        const activeDot = document.querySelector(`.dot[data-target="${currentSlide}"]`);
        if (activeDot) {
            activeDot.classList.add('active');
        }
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optional: unobserve after animating once
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    // Scroll to slide on dot click
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const target = dot.getAttribute('data-target');
            const targetSlide = document.getElementById(`slide-${target}`);
            targetSlide.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
