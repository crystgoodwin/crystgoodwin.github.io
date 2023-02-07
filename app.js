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