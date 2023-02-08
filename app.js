// !TOGGLE ICONS //

const themeToggleButton = document.querySelector('.theme-toggle-button');
const bodyElement = document.body;
const currentTheme = localStorage.getItem('darkTheme');

if (currentTheme) {
   bodyElement.classList.add('dark-theme');
};

const toggleTheme = () => {
   bodyElement.classList.toggle('dark-theme');

   if (bodyElement.classList.contains('dark-theme')) {
      localStorage.setItem('darkTheme', 'active');
   } else {
      localStorage.removeItem('darkTheme');
   }
};

themeToggleButton.addEventListener('click', toggleTheme);

//!Scroll Reveal

const sr = ScrollReveal({
   distance: '50px',
   duration: 1500,
   easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
});

sr.reveal('.main-title', { origin: 'top' });
sr.reveal('.scroll-reveal-left', { origin: 'left' });
sr.reveal('.scroll-reveal-right', { origin: 'right' });
sr.reveal('.tech-stack-item', { interval: 250 });
sr.reveal('.tech-stack-item', { origin: 'top', interval: 250 });
sr.reveal('.portfolio-card', { interval: 500 });
