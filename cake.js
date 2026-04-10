// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Cake slice modal functionality
const cakeCards = document.querySelectorAll('.cake-card');
const modal = document.getElementById('sliceModal');
const sliceDisplay = document.getElementById('sliceDisplay');
const sliceTitle = document.getElementById('sliceTitle');
const closeBtn = document.querySelector('.close');
const mainCake = document.getElementById('mainCake');

// Cake card click handlers
cakeCards.forEach(card => {
    card.addEventListener('click', () => {
        const flavor = card.dataset.slice;
        showSlice(flavor, card.querySelector('h3').textContent);
    });
});

// Main cake click handler
mainCake.addEventListener('click', () => {
    showSlice('rainbow', 'Rainbow Celebration Cake');
});

// Show slice modal
function showSlice(flavor, title) {
    sliceTitle.textContent = title;
    sliceDisplay.className = `slice-display ${flavor}`;
    
    // Add slice animation
    sliceDisplay.style.animation = 'none';
    setTimeout(() => {
        sliceDisplay.style.animation = 'sliceCut 0.6s ease-out';
    }, 10);
    
    modal.style.display = 'block';
}

// Close modal
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Order button animation
document.getElementById('orderBtn').addEventListener('click', function() {
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
        this.style.transform = '';
        // Simulate order animation
        createConfetti();
    }, 150);
});

// Floating particles background
function createParticles() {
    for (let i = 0; i < )
    }