// Mobile Navigation Handling
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navItems = document.querySelector('.nav-items');
    const navLinks = document.querySelectorAll('.nav-items a, .nav-items button');
    
    // Toggle mobile menu
    function toggleMobileMenu() {
        navItems.classList.toggle('active');
        document.body.classList.toggle('menu-open');
        
        // Toggle animation for hamburger icon
        const spans = mobileMenuBtn.querySelectorAll('span');
        spans.forEach(span => span.classList.toggle('active'));
    }
    
    // Close mobile menu when clicking outside
    function handleOutsideClick(e) {
        if (navItems.classList.contains('active') && 
            !navItems.contains(e.target) && 
            !mobileMenuBtn.contains(e.target)) {
            toggleMobileMenu();
        }
    }
    
    // Close menu when clicking a link
    function closeMenuOnNavigation() {
        if (navItems.classList.contains('active')) {
            toggleMobileMenu();
        }
    }
    
    // Event listeners
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }
    
    document.addEventListener('click', handleOutsideClick);
    
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenuOnNavigation);
    });
});
