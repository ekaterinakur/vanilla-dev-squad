// Get variable --breakpoint-md from variables.css:root
const headerMenu = document.querySelector('.js-header-menu');
const rootStyles = getComputedStyle(document.documentElement);
const breakpointMd = parseInt(
  rootStyles.getPropertyValue('--breakpoint-md').trim()
);

// Function to remove event listeners from buttons (if needed)
function removeButtonListeners() {
  const toggleButtons = document.querySelectorAll('.js-toggle-menu-btn');
  toggleButtons.forEach(button => {
    button.removeEventListener('click', toggleMenu);
  });
}

function addButtonListeners() {
  const toggleButtons = document.querySelectorAll('.js-toggle-menu-btn');
  toggleButtons.forEach(button => {
    button.addEventListener('click', toggleMenu);
  });
}

function toggleMenu() {
  // const headerMenu = document.querySelector('.js-header-menu');
  headerMenu.classList.toggle('open');
}

// Event handler for toggling the mobile menu
export function toggleHeaderEventListeners() {
  // const headerMenu = document.querySelector('.js-header-menu');
  if (window.innerWidth >= breakpointMd) {
    headerMenu.classList.remove('open'); // Hide menu on larger screens
    removeButtonListeners();
  } else {
    addButtonListeners();
  }
}
