// TODO listeners for actions
import { filterSizeDepends } from './js/base/filters';
import { filterQuoteLS } from './js/base/filters';
import { changeFilter } from './js/base/filters';

const navFilter = document.querySelector('.main-nav');

filterSizeDepends();
filterQuoteLS();
window.addEventListener('resize', filterSizeDepends);
navFilter.addEventListener('click', changeFilter);
