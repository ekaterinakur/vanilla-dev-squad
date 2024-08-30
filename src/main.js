// TODO listeners for actions
import { filterSizeDepends } from './js/rendering/filtersRender';
import { filterQuoteLS } from './js/eventHandlers/filtersHandlers';
import { changeFilter } from './js/eventHandlers/filtersHandlers';

const navFilter = document.querySelector('.main-nav');

filterSizeDepends();
filterQuoteLS();
window.addEventListener('resize', filterSizeDepends);
navFilter.addEventListener('click', changeFilter);
