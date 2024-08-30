// TODO listeners for actions

// Header Importing event handlers
import { handleMenuToggle } from './js/eventHandlers/headerMenuHandlers.js';

// Header Setting up event listeners
// const menuButton = document.querySelector('.js-toggle-menu');
// menuButton.addEventListener('click', handleMenuToggle);

const toggleButtons = document.querySelectorAll('.js-toggle-menu');
toggleButtons.forEach(button => {
  button.addEventListener('click', handleMenuToggle);
});

// Header Listening for window resize events
window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    handleMenuToggle(false); // Close menu on larger screens
  }
});
