import './js/up-btn.js';

import {
	changeFilter,
	filterSizeDepends,
  filterQuoteLS,
  handleFiltersPagination,
} from './js/eventHandlers/filtersHandlers';
import { handleSubmitSubscription } from './js/eventHandlers/handleSubscription.js';

const navFilter = document.querySelector('.main-nav');
const filterPagination = document.querySelector('.pagination-section');
const subscriptionForm = document.querySelector('.subscribe__form');

window.addEventListener('resize', () => {
  filterSizeDepends();
});

// Filters
filterSizeDepends();
filterQuoteLS();

navFilter.addEventListener('click', changeFilter);
filterPagination.addEventListener('click', handleFiltersPagination);

// Subscription Form
subscriptionForm.addEventListener('submit', handleSubmitSubscription);
