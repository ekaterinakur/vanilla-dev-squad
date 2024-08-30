// TODO listeners for actions

// Header Importing event handlers
import {
  handleMenuToggle,
  addButtonListeners as addHeaderMenuButtonListeners,
  removeButtonListeners as removeHeaderMenuButtonListeners,
} from './js/eventHandlers/headerMenuHandlers.js';

// Header Setting up event listeners
addHeaderMenuButtonListeners();

// Get variable --breakpoint-md from variables.css:root
const rootStyles = getComputedStyle(document.documentElement);
const breakpointMd = rootStyles.getPropertyValue('--breakpoint-md').trim();

// Header Listening for window resize events - hide burger menu on larger screens
window.addEventListener('resize', () => {
  if (window.innerWidth >= breakpointMd) {
    handleMenuToggle(false); // Hide menu on larger screens
    removeHeaderMenuButtonListeners();
  } else {
    addHeaderMenuButtonListeners();
  }
});
