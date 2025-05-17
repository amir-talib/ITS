// Services Section Interactivity
document.addEventListener('DOMContentLoaded', function() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    // Initialize ScrollReveal for animations
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '30px',
        duration: 800,
        delay: 100,
        easing: 'ease',
        reset: false
    });
    
    // Reveal services section elements with staggered delay
    sr.reveal('.services-title', { delay: 100 });
    sr.reveal('.services-subtitle', { delay: 200 });
    sr.reveal('.service-card', { 
        delay: 300, 
        interval: 200,
        distance: '20px',
        origin: 'bottom'
    });
    
    // Add hover interactions to service cards
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Subtle scale effect for icons on card hover
            const icon = this.querySelector('.service-icon svg');
            if (icon) {
                icon.style.transform = 'scale(1.1)';
                icon.style.transition = 'transform 0.3s ease';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            // Reset icon scale on mouse leave
            const icon = this.querySelector('.service-icon svg');
            if (icon) {
                icon.style.transform = 'scale(1)';
            }
        });
    });
    
    // Make service cards interactive on click
    serviceCards.forEach(card => {
        card.addEventListener('click', function() {
            const link = this.querySelector('.service-link');
            if (link) {
                // Simulate link click when card is clicked
                link.classList.add('pulse');
                setTimeout(() => {
                    link.classList.remove('pulse');
                }, 300);
            }
        });
    });
});
