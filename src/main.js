import './js/footer.js';
import './js/up_btn.js';

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
