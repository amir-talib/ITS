// Mission Section Interactivity
document.addEventListener('DOMContentLoaded', function() {
    const missionPillars = document.querySelectorAll('.mission-pillar');
    const prevArrow = document.querySelector('.mission-arrow-prev');
    const nextArrow = document.querySelector('.mission-arrow-next');
    
    if (!missionPillars.length) return;
    
    // Initialize ScrollReveal
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '30px',
        duration: 1000,
        delay: 200,
        easing: 'ease',
        reset: false
    });
    
    // Reveal mission section elements
    sr.reveal('.section-title', { delay: 100 });
    sr.reveal('.mission-tagline', { delay: 300 });
    sr.reveal('.mission-pillars', { delay: 500 });
    sr.reveal('.mission-arrow', { delay: 800, distance: '20px', origin: 'right' });
    
    // Handle mission pillar navigation
    function showPillar(index) {
        // Hide all pillars
        missionPillars.forEach(pillar => {
            pillar.style.opacity = '0';
            pillar.style.transform = 'translateX(50px)';
            pillar.style.pointerEvents = 'none';
        });
        
        // Show selected pillar with animation
        const selectedPillar = document.querySelector(`.mission-pillar[data-index="${index}"]`);
        if (selectedPillar) {
            setTimeout(() => {
                selectedPillar.style.opacity = '1';
                selectedPillar.style.transform = 'translateX(0)';
                selectedPillar.style.pointerEvents = 'auto';
            }, 300);
        }
    }
    
    // Navigate to previous pillar
    function prevPillar() {
        currentPillarIndex = currentPillarIndex - 1;
        if (currentPillarIndex < 1) {
            currentPillarIndex = totalPillars;
        }
        showPillar(currentPillarIndex);
        resetAutoRotation();
    }
    
    // Navigate to next pillar
    function nextPillar() {
        currentPillarIndex = currentPillarIndex % totalPillars + 1;
        showPillar(currentPillarIndex);
        resetAutoRotation();
    }
    
    // Add click event listeners to arrows
    if (prevArrow) {
        prevArrow.addEventListener('click', prevPillar);
    }
    
    if (nextArrow) {
        nextArrow.addEventListener('click', nextPillar);
    }
    
    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            prevPillar();
        } else if (e.key === 'ArrowRight') {
            nextPillar();
        }
    });
    
    // Auto-rotate through mission pillars every 7 seconds
    let currentPillarIndex = 1;
    const totalPillars = missionPillars.length;
    let pillarRotationInterval;
    
    function startAutoRotation() {
        pillarRotationInterval = setInterval(() => {
            nextPillar();
        }, 7000);
    }
    
    function resetAutoRotation() {
        clearInterval(pillarRotationInterval);
        startAutoRotation();
    }
    
    // Start auto rotation
    startAutoRotation();
    
    // Add parallax effect to the mission background
    const missionSection = document.querySelector('.mission-section');
    const missionBg = document.querySelector('.mission-bg-overlay');
    
    if (missionSection && missionBg) {
        missionSection.addEventListener('mousemove', (e) => {
            const x = (window.innerWidth - e.pageX * 2) / 100;
            const y = (window.innerHeight - e.pageY * 2) / 100;
            
            missionBg.style.transform = `translateX(${x}px) translateY(${y}px)`;
        });
    }
});
