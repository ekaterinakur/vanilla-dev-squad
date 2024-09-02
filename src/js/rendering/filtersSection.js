const quoteSection = document.querySelector('.quote-text-wrapper');
const imagesList = document.querySelector('.filter-list');
const filterBtns = document.querySelector('.pagination-section');

export function renderImg(imagesData) {
  const markUp = imagesData.results
    .map(image => {
      return `
        <li class="filter-item filter-btn untreated" data-filter=${image.filter} data-name=${image.name}>
          <div class="filter-container">
            <img class="filter-img" src="${image.imgURL}" alt="${image.name}" width=335 height=225>
            <div class="filter-overlay"></div>
            <p class="filter-name">${image.name}</p>
            <p class="filter-filter">${image.filter}</p>
          </div>
        </li>
      `;
    })
    .join('');
  imagesList.insertAdjacentHTML('beforeend', markUp);
}

export function renderPagination(imagesData) {
  let buttonsHTML = '';
  for (let i = 1; i <= imagesData.totalPages; i++) {
    buttonsHTML += `
      <button type="button" class="pagination-btn untreated${
        i === 1 ? ' active' : ''
      }" data-page=${i}>${i}</button>
    `;
  }
  filterBtns.insertAdjacentHTML('beforeend', buttonsHTML);
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

export function resetFilterView(resetAll) {
  imagesList.innerHTML = '';
  if (resetAll) {
    filterBtns.innerHTML = '';
  }
}

export function updatePaginationView(button) {
  const filterPaginationBtn = filterBtns.querySelectorAll('.pagination-btn');
  filterPaginationBtn.forEach(btn => btn.classList.remove('active'));
  button.classList.add('active');
  const filterWrapper = document.querySelector('.main-title');
  window.scrollTo({
    top: filterWrapper.offsetTop,
    behavior: 'smooth',
  });
}
