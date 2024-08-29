import { getFilters } from '../api/getFilters';
import { filtersParam } from '../base/filters';

const quoteSection = document.querySelector('.quote-text-wrapper');
const imagesList = document.querySelector('.filter-list');
const filterBtns = document.querySelector('.filter-buttons');

export function renderImg(imagesData) {
  const markUp = imagesData.results
    .map(image => {
      return `
    <li class="filter-item">
        <button type="submit" class="filter-btn untreated data-filter=${image.filter} data-name=${image.name}">
          <div class="filter-container">
            <img class="filter-img" src="${image.imgURL}" width=335 height=225>
            <div class="filter-overlay"></div>
            <p class="filter-name">${image.name}</p>
            <p class="filter-filter">${image.filter}</p>
          </div>  
        </button>
    </li>`;
    })
    .join('');
  imagesList.insertAdjacentHTML('beforeend', markUp);
}

export function renderBtn(imagesData) {
  for (let i = 1; i <= imagesData.totalPages; i++) {
    if (i === 1) {
      filterBtns.insertAdjacentHTML(
        'beforeend',
        `<button type="submit" class="pagination-btn untreated active" data-page=${i}>${i}</button>`
      );
    } else {
      filterBtns.insertAdjacentHTML(
        'beforeend',
        `<button type="submit" class="pagination-btn untreated" data-page=${i}>${i}</button>`
      );
    }
  }
  const paginationsBtn = document.querySelectorAll('.pagination-btn');

  paginationsBtn.forEach(button => {
    button.addEventListener('click', async () => {
      filtersParam.page = button.dataset.page;
      imagesList.innerHTML = '';
      await getFilters(new URLSearchParams(filtersParam)).then(imagesData => {
        renderImg(imagesData);
      });

      paginationsBtn.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
    });
  });
}

export function renderQuote(quoteData) {
  const quoteMarkUp = `
    <p class="quote-text">${quoteData.quote}</p>
    <p class="quote-author">${quoteData.author}</p>
    `;
  quoteSection.insertAdjacentHTML('beforeend', quoteMarkUp);
}
