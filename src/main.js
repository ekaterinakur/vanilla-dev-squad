import './js/up-btn.js';

import { toggleHeaderEventListeners } from './js/eventHandlers/headerHandlers.js';
import {
  changeFilter,
  filterSizeDepends,
  filterQuoteLS,
  handleFiltersPagination,
} from './js/eventHandlers/filtersHandlers';
import { handleSubmitSubscription } from './js/eventHandlers/handleSubscription.js';
import { openExerciseDialog } from './js/eventHandlers/exerciseHandlers.js';

const navFilter = document.querySelector('.main-nav');
const filterPagination = document.querySelector('.pagination-section');
const subscriptionForm = document.querySelector('.subscribe__form');

window.addEventListener('resize', () => {
  // Header Listening for window resize events - hide burger menu on larger screens
  toggleHeaderEventListeners();
  filterSizeDepends();
});

// Header Setting up event listeners
toggleHeaderEventListeners();

// Filters
filterSizeDepends();
filterQuoteLS();

navFilter.addEventListener('click', changeFilter);
filterPagination.addEventListener('click', handleFiltersPagination);

// Subscription Form
subscriptionForm.addEventListener('submit', handleSubmitSubscription);
