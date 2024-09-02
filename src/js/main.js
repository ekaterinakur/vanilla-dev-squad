import './up-btn.js';

import { toggleHeaderEventListeners } from './eventHandlers/headerHandlers.js';
import {
  changeFilter,
  filterSizeDepends,
  filterQuoteLS,
  handleFiltersPagination,
} from './eventHandlers/filtersHandlers.js';
import { handleSubmitSubscription } from './eventHandlers/handleSubscription.js';
import {
  exercisesSizeDepends,
  initExercises,
} from './eventHandlers/exerciseListHandlers.js';

const navFilter = document.querySelector('.main-nav');
const filterPagination = document.querySelector('.pagination-section');
const subscriptionForm = document.querySelector('.subscribe__form');

window.addEventListener('resize', () => {
  // Header Listening for window resize events - hide burger menu on larger screens
  toggleHeaderEventListeners();
  filterSizeDepends();
  exercisesSizeDepends();
});

// Header Setting up event listeners
toggleHeaderEventListeners();

// Filters
filterSizeDepends();
filterQuoteLS();

navFilter.addEventListener('click', changeFilter);
filterPagination.addEventListener('click', handleFiltersPagination);

// Exercises
initExercises();

// Subscription Form
subscriptionForm.addEventListener('submit', handleSubmitSubscription);
