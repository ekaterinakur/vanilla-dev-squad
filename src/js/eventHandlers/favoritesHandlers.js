import {
  clearPagination,
  container,
  renderFavoritesEmpty,
  renderFavoritesList,
  renderPagination,
  updatePaginationView,
} from '../rendering/renderFavorites.js';
import { openExerciseDialog, FAVORITES_KEY_LS } from './exerciseHandlers.js';

const imagesList = document.querySelector('.favorites-container-list');
let favorites = [];
let currentPageNumber = 1;
let itemsPerPage;

export function initFavorites(shouldUpdatePagination = true) {
  favorites = JSON.parse(localStorage.getItem(FAVORITES_KEY_LS));

  if (favorites?.length > 0) {
    if (window.innerWidth >= 1440) {
      renderFavoritesList(favorites);
      shouldUpdatePagination && clearPagination();
    } else if (window.innerWidth < 768) {
      itemsPerPage = 8;
      renderFavoritesList(renderPage(currentPageNumber));
      shouldUpdatePagination &&
        renderPagination(Math.ceil(favorites.length / itemsPerPage));
    } else {
      itemsPerPage = 10;
      renderFavoritesList(renderPage(currentPageNumber));
      shouldUpdatePagination &&
        renderPagination(Math.ceil(favorites.length / itemsPerPage));
    }

    initFavoritesListeners();
  } else {
    renderFavoritesEmpty();
  }
}

export function updateFavorites() {
  initFavorites(false);
}

export function initFavoritesListeners() {
  const startButtons = container.querySelectorAll('.start-btn');
  startButtons.forEach(button => {
    button.addEventListener('click', event => {
      const exerciseId = event.target.dataset.id;
      openExerciseDialog(exerciseId, updateFavorites);
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

  updateFavorites();
}

export async function handleFiltersPagination(event) {
  if (event.target.classList.contains('pagination-btn')) {
    resetFilterView();
    const pageBtn = event.target;
    currentPageNumber = pageBtn.dataset.page;
    updateFavorites();

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
  let startIndex = (pageNumber - 1) * itemsPerPage;
  if (startIndex > favorites.length - 1) {
    currentPageNumber = pageNumber = pageNumber - 1;
    startIndex = (currentPageNumber - 1) * itemsPerPage;
    renderPagination(Math.ceil(favorites.length / itemsPerPage));
  }
  const endIndex = startIndex + itemsPerPage;
  const currentPageItems = favorites.slice(startIndex, endIndex);

  return currentPageItems;
}
