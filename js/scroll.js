// Smooth Scrolling and UI Enhancement Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get all elements that need scroll functionality
    const contactBtn = document.querySelector('.contact-btn');
    const allScrollLinks = document.querySelectorAll('a[href^="#"]');
    
    // Helper function to smooth scroll to an element
    function scrollToElement(elementId) {
        const element = document.querySelector(elementId);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
            return true;
        }
        return false;
    }
    
    // Add highlight effect to the contact form (when scrolled to)
    function highlightContactForm() {
        setTimeout(() => {
            const form = document.querySelector('.contact-form');
            if (form) {
                form.classList.add('highlight-pulse');
                setTimeout(() => form.classList.remove('highlight-pulse'), 1500);
            }
        }, 1000); // Wait for the scroll to complete
    }
    
    // Handle the main contact button with enhanced functionality
    if (contactBtn) {
        contactBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Smooth scroll to contact section
            if (scrollToElement('#contact')) {
                highlightContactForm();
            }
        });
    }
    
    // Add smooth scrolling to all links that point to page sections
    allScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Only process links that point to sections on this page
            const href = this.getAttribute('href');
            if (href.startsWith('#') && href.length > 1) {
                e.preventDefault();
                
                const targetId = href;
                if (scrollToElement(targetId)) {
                    // If scrolling to contact section, add highlight effect
                    if (targetId === '#contact') {
                        highlightContactForm();
                    }
                }
            }
        });
    });
    
    // Add CSS for the highlight effect
    const style = document.createElement('style');
    style.textContent = `
        @keyframes highlightPulse {
            0% { box-shadow: 0 0 0 0 rgba(1, 111, 202, 0.4); }
            70% { box-shadow: 0 0 0 10px rgba(1, 111, 202, 0); }
            100% { box-shadow: 0 0 0 0 rgba(1, 111, 202, 0); }
        }
        
        .highlight-pulse {
            animation: highlightPulse 1.5s ease-out;
            transition: all 0.3s ease;
        }
    `;
    document.head.appendChild(style);
});
