// Get variable --breakpoint-md from variables.css:root
const headerMenu = document.querySelector('.js-header-menu');
const headerOverlay = document.querySelector('.overlay');
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
  headerMenu.classList.toggle('open');
  headerOverlay.classList.toggle('open');
  document.body.classList.toggle('no-scroll');
  document.documentElement.style.overflow = headerMenu.classList.contains(
    'open'
  )
    ? 'hidden'
    : '';
}

// Event handler for toggling the mobile menu
export function toggleHeaderEventListeners() {
  if (window.innerWidth >= breakpointMd) {
    //Hide mobile menu for larger screens
    headerMenu.classList.remove('open'); // Hide menu on larger screens
    headerOverlay.classList.remove('open'); // Hide Overlay on larger screens
    document.body.classList.remove('no-scroll');
    document.documentElement.style.overflow = '';
    removeButtonListeners();
  } else {
    addButtonListeners();
  }
}
