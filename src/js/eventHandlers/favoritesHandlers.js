import {
  container,
  renderFavoritesEmpty,
  renderFavoritesList,
} from '../rendering/renderFavorites.js';
import { openExerciseDialog, FAVORITES_KEY_LS } from './exerciseHandlers.js';

let favorites = [];

export function initFavorites() {
  favorites = JSON.parse(localStorage.getItem('favorites'));

  if (favorites?.length > 0) {
    renderFavoritesList(favorites);
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
