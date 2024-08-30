import {
  decorateFilter,
  renderImg,
  renderBtn,
  renderQuote,
  filtersParam,
} from '../rendering/filtersRender';
import { getFilters } from '../api/getFilters';
import { getQuote } from '../api/getQuote';
import moment from 'moment';

const imagesList = document.querySelector('.filter-list');
const filterBtns = document.querySelector('.filter-buttons');

export async function changeFilter(event) {
  decorateFilter(event);
  filtersParam.filter = event.target.dataset.filter;
  imagesList.innerHTML = '';
  filterBtns.innerHTML = '';
  filtersParam.page = 1;
  const filtersData = await getFilters(filtersParam);
  renderImg(filtersData);
  renderBtn(filtersData);
}

export async function filterQuoteLS() {
  let data = {};
  const today = moment().format('L');
  const dataFromLS = JSON.parse(localStorage.getItem('quote-data'));

  if (!dataFromLS || dataFromLS.date !== today) {
    const quoteData = await getQuote();
    renderQuote(quoteData);
    data['date'] = today;
    data['quote'] = quoteData.quote;
    data['author'] = quoteData.author;
    localStorage.clear('quote-data');
    localStorage.setItem('quote-data', JSON.stringify(data));
  } else {
    renderQuote(dataFromLS);
  }
}
