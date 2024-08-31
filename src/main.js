// TODO listeners for actions

// Header Importing event handlers
import { toggleHeaderEventListeners } from './js/eventHandlers/headerHandlers.js';

// Header Setting up event listeners
toggleHeaderEventListeners();

// Header Listening for window resize events - hide burger menu on larger screens
window.addEventListener('resize', toggleHeaderEventListeners);
