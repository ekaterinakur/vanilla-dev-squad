import {
  changeFilter,
  filterSizeDepends,
  filterQuoteLS,
  handleFiltersPagination,
} from './js/eventHandlers/filtersHandlers';

const navFilter = document.querySelector('.main-nav');
const filterPagination = document.querySelector('.pagination-section');

window.addEventListener('resize', () => {
  filterSizeDepends();
});

// Filters
filterSizeDepends();
filterQuoteLS();

navFilter.addEventListener('click', changeFilter);
filterPagination.addEventListener('click', handleFiltersPagination);

// Header Importing event handlers
import { toggleHeaderEventListeners } from './js/eventHandlers/headerHandlers.js';

// Header Setting up event listeners
toggleHeaderEventListeners();

// Header Listening for window resize events - hide burger menu on larger screens
window.addEventListener('resize', toggleHeaderEventListeners);
