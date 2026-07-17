document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    // Update active dot on scroll
    container.addEventListener('scroll', () => {
        let currentSlide = 1;
        slides.forEach((slide, index) => {
            const slideTop = slide.offsetTop;
            if (container.scrollTop >= slideTop - container.clientHeight / 2) {
                currentSlide = index + 1;
            }
        });

        dots.forEach(dot => {
            dot.classList.remove('active');
            if (parseInt(dot.getAttribute('data-target')) === currentSlide) {
                dot.classList.add('active');
            }
        });
    });

    // Scroll to slide on dot click
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const target = dot.getAttribute('data-target');
            const targetSlide = document.getElementById(`slide-${target}`);
            targetSlide.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
