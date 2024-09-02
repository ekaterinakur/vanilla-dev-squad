import { toggleHeaderEventListeners } from './eventHandlers/headerHandlers.js';
import { filterQuoteLS } from './eventHandlers/filtersHandlers.js';
import { initFavorites, handleFiltersPagination } from './eventHandlers/favoritesHandlers.js';


const filterPagination = document.querySelector('.pagination-section');

filterPagination.addEventListener('click', handleFiltersPagination);

window.addEventListener('resize', () => {
  // Header Listening for window resize events - hide burger menu on larger screens
  toggleHeaderEventListeners();
  initFavorites();
});

toggleHeaderEventListeners();

filterQuoteLS();

initFavorites();
