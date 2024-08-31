import { getFilters } from '../api/getFilters';

const quoteSection = document.querySelector('.quote-text-wrapper');
const imagesList = document.querySelector('.filter-list');
const filterBtns = document.querySelector('.pagination-section');

export const filtersParam = {
  filter: 'Muscles',
  page: 1,
  limit: null,
};

export function renderImg(imagesData) {
  const markUp = imagesData.results
    .map(image => {
      return `
    <li class="filter-item">
        <button type="submit" class="filter-btn untreated data-filter=${image.filter} data-name=${image.name}">
          <div class="filter-container">
            <img class="filter-img" src="${image.imgURL}" alt="${image.name}" width=335 height=225>
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
      const filtersData = await getFilters(filtersParam);
      renderImg(filtersData);
      window.scrollTo(0, 0);

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

export function decorateFilter(event) {
  const navBtn = document.querySelectorAll('.nav-btn');
  navBtn.forEach(btn => btn.classList.remove('decorated'));
  event.target.classList.add('decorated');
}

export async function filterSizeDepends() {
  const windowWidth = window.innerWidth;
  let tempLimit = null;

  if (windowWidth < 768) {
    tempLimit = 9;
  } else if (windowWidth > 1439) {
    tempLimit = 12;
  } else {
    tempLimit = 9;
  }

  if (tempLimit !== filtersParam.limit) {
    filtersParam.limit = tempLimit;
    imagesList.innerHTML = '';
    filterBtns.innerHTML = '';
    const filtersData = await getFilters(filtersParam);
    renderImg(filtersData);
    renderBtn(filtersData);
  }
}
