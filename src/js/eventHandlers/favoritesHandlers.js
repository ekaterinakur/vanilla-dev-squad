import {
  container,
  renderFavoritesEmpty,
  renderFavoritesList,
  renderPagination,
  updatePaginationView
} from '../rendering/renderFavorites.js';
import { openExerciseDialog, FAVORITES_KEY_LS } from './exerciseHandlers.js';


const imagesList = document.querySelector('.favorites-container-list');
let favorites = [];
const itemsPerPage = 8;


export function initFavorites() {
  favorites = JSON.parse(localStorage.getItem('favorites'));

  
  if (favorites?.length > 0) {
    if (window.innerWidth >= 1440) {
      renderFavoritesList(favorites);
    }
    else {
      renderFavoritesList(renderPage(1));
      renderPagination(Math.ceil(favorites.length / 8));
    }
  } else {
    renderFavoritesEmpty();
  }

  const startButtons = container.querySelectorAll('.start-btn');
  startButtons.forEach(button => {
    button.addEventListener('click', event => {
      const exerciseId = event.target.dataset.id;
      openExerciseDialog(exerciseId, initFavorites);
    });
  });

  const deleteFavoriteButtons = container.querySelectorAll('#deleteFavorite');
  deleteFavoriteButtons.forEach(button => {
    button.addEventListener('click', event => {
      const exerciseId = event.currentTarget.dataset.id;
      removeFromFavorites(exerciseId);
    });
  });
}

export function removeFromFavorites(id) {
  const foundIndex = favorites.findIndex(ex => ex._id === id);

  if (foundIndex !== -1) {
    favorites.splice(foundIndex, 1);
  }

  localStorage.setItem(FAVORITES_KEY_LS, JSON.stringify(favorites));

	initFavorites();
}

export async function handleFiltersPagination(event) {
  if (event.target.classList.contains('pagination-btn')) {
    resetFilterView();
    const pageBtn = event.target;
    let currentPageNumber = pageBtn.dataset.page;
    renderFavoritesList(renderPage(currentPageNumber));

    updatePaginationView(pageBtn);
  }
}

export function resetFilterView(resetAll) {
  imagesList.innerHTML = '';
  if (resetAll) {
    filterBtns.innerHTML = '';
  }
}

function renderPage(pageNumber) {
  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageItems = favorites.slice(startIndex, endIndex);
  return currentPageItems
}