import { renderExercise } from './renderExercises';

export const container = document.querySelector('.favorites-container-list');

export const renderFavoritesList = favorites => {
  const markup = favorites
    .map(exercise => renderExercise(exercise, true))
    .join('');

  container.innerHTML = markup;
};

export const renderFavoritesEmpty = () => {
  container.innerHTML = `
		<p class="favorites-container-empty">
			It appears that you haven't added any exercises to your favorites yet. 
			To get started, you can add exercises that you like to your favorites for easier access in the future.
		</p>
	`;
};

const filterBtns = document.querySelector('.pagination-section');

export function renderPagination(num) {
  let buttonsHTML = '';
  for (let i = 1; i <= num; i++) {
    buttonsHTML += `
      <button type="button" class="pagination-btn untreated${
        i === 1 ? ' active' : ''
      }" data-page=${i}>${i}</button>
    `;
  }
  filterBtns.innerHTML = buttonsHTML;
}

export function clearPagination() {
  filterBtns.innerHTML = '';
}

export function updatePaginationView(button) {
  const filterPaginationBtn = filterBtns.querySelectorAll('.pagination-btn');
  filterPaginationBtn.forEach(btn => btn.classList.remove('active'));
  button.classList.add('active');
  const filterWrapper = document.querySelector('.favorites-container-list');
  window.scrollTo({
    top: filterWrapper.offsetTop,
    behavior: 'smooth',
  });
}
