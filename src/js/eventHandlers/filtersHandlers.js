import moment from 'moment';
import {
  decorateFilter,
  renderImg,
  renderPagination,
  renderQuote,
  resetFilterView,
  updatePaginationView,
} from '../rendering/filtersSection';
import { getFilters } from '../api/getFilters';
import { getQuote } from '../api/getQuote';
import { listTypeVisible } from './exerciseListHandlers';

export const filtersParam = {
  filter: 'Muscles',
  page: 1,
  limit: null,
};

export async function changeFilter(event) {
  if (event.target.classList.contains('nav-btn')) {
    decorateFilter(event);
    resetFilterView(true);
    filtersParam.page = 1;
    filtersParam.filter = event.target.dataset.filter;
    const filtersData = await getFilters(filtersParam);
    renderImg(filtersData);
    renderPagination(filtersData);
  }
}

export async function filterQuoteLS() {
  const today = moment().format('L');
  const dataFromLS = JSON.parse(localStorage.getItem('quote-data'));

  if (!dataFromLS || dataFromLS.date !== today) {
    const quoteData = await getQuote();
    renderQuote(quoteData);
    const data = {};
    data['date'] = today;
    data['quote'] = quoteData.quote;
    data['author'] = quoteData.author;
    localStorage.clear('quote-data');
    localStorage.setItem('quote-data', JSON.stringify(data));
  } else {
    renderQuote(dataFromLS);
  }
}

export async function filterSizeDepends() {
  if (listTypeVisible === 'exercises') return;

  const windowWidth = window.innerWidth;
  let tempLimit = null;

  if (windowWidth > 1439) {
    tempLimit = 12;
  } else {
    tempLimit = 9;
  }

  if (tempLimit !== filtersParam.limit) {
    resetFilterView(true);
    filtersParam.page = 1;
    filtersParam.limit = tempLimit;
    const filtersData = await getFilters(filtersParam);
    renderImg(filtersData);
    renderPagination(filtersData);
  }
}

export async function handleFiltersPagination(event) {
  if (event.target.classList.contains('pagination-btn')) {
    resetFilterView();
    const pageBtn = event.target;
    filtersParam.page = pageBtn.dataset.page;
    const filtersData = await getFilters(filtersParam);
    renderImg(filtersData);
    updatePaginationView(pageBtn);
  }
}
