import { toggleHeaderEventListeners } from './eventHandlers/headerHandlers.js';

window.addEventListener('resize', () => {
  // Header Listening for window resize events - hide burger menu on larger screens
  toggleHeaderEventListeners();
});

// Header Setting up event listeners
toggleHeaderEventListeners();
