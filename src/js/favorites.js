import { toggleHeaderEventListeners } from './eventHandlers/headerHandlers.js';
import { filterQuoteLS } from './eventHandlers/filtersHandlers.js';
import { initFavorites } from './eventHandlers/favoritesHandlers.js';

window.addEventListener('resize', () => {
  // Header Listening for window resize events - hide burger menu on larger screens
  toggleHeaderEventListeners();
});

toggleHeaderEventListeners();

filterQuoteLS();

initFavorites();
