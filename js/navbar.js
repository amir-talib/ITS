// Navbar scroll effect
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const heroSection = document.querySelector('.hero');
    
    // Function to handle scroll events
    function handleScroll() {
        // Add a subtle dark background when scrolled down for better readability
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Adjust the opacity based on scroll position for a smoother effect
        const scrollPosition = window.scrollY;
        const maxScroll = 200;
        const opacity = Math.min(scrollPosition / maxScroll * 0.3, 0.3);
        
        // Apply a dynamically calculated background based on scroll position
        if (scrollPosition > 10) {
            header.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
        } else {
            header.style.backgroundColor = 'transparent';
        }
    }
    
    // Smooth scroll for anchor links with offset for fixed header
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Initial check in case page is loaded with a hash
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
});
