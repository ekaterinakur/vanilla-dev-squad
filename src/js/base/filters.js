import { getFilters } from '../api/getFilters';
import { getQuote } from '../api/getQuote';
import { renderQuote } from '../rendering/filtersRender';
import { renderImg } from '../rendering/filtersRender';
import { renderBtn } from '../rendering/filtersRender';

const imagesList = document.querySelector('.filter-list');
const dailyText = document.querySelector('.daily-text');
const filterBtns = document.querySelector('.filter-buttons');

export const filtersParam = {
  filter: 'Muscles',
  page: 1,
  limit: null,
};

export async function filterSizeDepends() {
  const windowWidth = window.innerWidth;

  let tempLimit = null;

  if (windowWidth < 768) {
    tempLimit = 9;
    dailyText.innerHTML =
      'The World Health Organization recommends at least 150 minutes of moderate-intensity aerobic physical activity throughout the week for adults aged 18-64. However, what ha...';
  } else if (windowWidth > 1440) {
    tempLimit = 12;
    dailyText.innerHTML =
      'The World Health Organization recommends at least 150 minutes of moderate-intensity aerobic physical activity throughout the week for adults aged 18-64. However, what happens if we adjust that number to 110 minutes every day? While it might seem like a high number to hit, dedicating 110 minutes daily to sporting activities may offer unparalleled benefits to physical health, mental well-being, and overall quality of life.';
  } else {
    tempLimit = 9;
    dailyText.innerHTML =
      'The World Health Organization recommends at least 150 minutes of moderate-intensity aerobic physical activity throughout the week for adults aged 18-64. However, what happens if w...';
  }

  if (tempLimit !== filtersParam.limit) {
    filtersParam.limit = tempLimit;
    imagesList.innerHTML = '';
    filterBtns.innerHTML = '';
    await getFilters(new URLSearchParams(filtersParam))
      .then(imagesData => {
        renderImg(imagesData);
        renderBtn(imagesData);
      })
      .catch(error => console.log(error));
  }
}

export async function filterQuoteLS() {
  let data = {};
  const today = new Date();
  const dataFromLS = JSON.parse(localStorage.getItem('quote-data'));

  if (
    !dataFromLS ||
    (dataFromLS.dateDay !== today.getDate() ||
      dataFromLS.dateMonth !== today.getMonth() ||
      dataFromLS.dateYear !== today.getYear())
  ) {
    await getQuote()
      .then(quoteData => {
        renderQuote(quoteData);
        data['dateDay'] = today.getDate();
        data['dateMonth'] = today.getMonth();
        data['dateYear'] = today.getFullYear();
        data['quote'] = quoteData.quote;
        data['author'] = quoteData.author;
        localStorage.clear('quote-data');
        localStorage.setItem('quote-data', JSON.stringify(data));
      })
      .catch(error => console.log(error));
  } else {
    renderQuote(dataFromLS);
  }
}

export async function changeFilter(event) {
  decorateFilter(event);
  filtersParam.filter = event.target.dataset.filter;
  imagesList.innerHTML = '';
  filterBtns.innerHTML = '';
  filtersParam.page = 1;
  await getFilters(new URLSearchParams(filtersParam))
    .then(imagesData => {
      renderImg(imagesData);
      renderBtn(imagesData);
    })
    .catch(error => console.log(error));
}

function decorateFilter(event) {
  const navBtn = document.querySelectorAll('.nav-btn');
  navBtn.forEach(btn => btn.classList.remove("decorated"))
  event.target.classList.add('decorated');
}