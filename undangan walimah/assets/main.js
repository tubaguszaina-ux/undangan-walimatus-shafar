// Smooth Scroll & Active Nav
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    document.querySelector('.navbar').style.background = 
        window.scrollY > 100 ? 'rgba(15,15,35,0.98)' : 'rgba(15,15,35,0.95)';
});

// Countdown Timer
function initCountdown(targetDate) {
    const countdownEls = document.querySelectorAll('.countdown-item');
    const update = setInterval(() => {
        const now = new Date().getTime();
        const distance = new Date(targetDate).getTime() - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        if (countdownEls.length === 4) {
            countdownEls[0].querySelector('.countdown-number').textContent = days;
            countdownEls[1].querySelector('.countdown-number').textContent = hours;
            countdownEls[2].querySelector('.countdown-number').textContent = minutes;
            countdownEls[3].querySelector('.countdown-number').textContent = seconds;
        }
        
        if (distance < 0) clearInterval(update);
    }, 1000);
}

// PWA Ready
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js');
}