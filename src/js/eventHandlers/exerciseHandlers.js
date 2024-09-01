import * as basicLightbox from 'basiclightbox';
import { getExersiseById } from '../api/getExerciseById';
import {
  getDialogTemplate,
  updateFavoritesButton,
} from '../rendering/exerciseDialog';
import { openRatingModal } from './ratingHandlers';

export const FAVORITES_KEY_LS = 'favorites';

let instance;
let favorites = [];
let exercise;

export async function openExerciseDialog(exerciseId, updateListCallback) {
  const data = await getExersiseById(exerciseId);

  exercise = data;

  favorites = localStorage.getItem(FAVORITES_KEY_LS)
    ? JSON.parse(localStorage.getItem(FAVORITES_KEY_LS))
    : [];

  const isFavorite = favorites.findIndex(ex => ex._id === exercise._id) !== -1;

  const template = getDialogTemplate(exercise, isFavorite);
  instance = basicLightbox.create(template, {
    closable: true,
    onClose: () => removeDialogListeners(),
  });

  instance.show();
	addDialogListeners(updateListCallback);
}

function addDialogListeners(updateListCallback) {
  const closeBtn = document.getElementById('dialogIconClose');
  closeBtn.addEventListener('click', closeDialogHandler);

  document.addEventListener('keydown', closeDialogHandler);

  const favoritesBtn = document.getElementById('favoritesBtn');
  favoritesBtn.addEventListener('click', () => updateFavorites(updateListCallback));

  const ratingBtn = document.getElementById('giveRatingBtn');
  ratingBtn.addEventListener('click', () => openRatingModal(exercise._id, updateListCallback));
}

function removeDialogListeners() {
  const closeBtn = document.getElementById('dialogIconClose');
  closeBtn.removeEventListener('click', closeDialogHandler);

  document.removeEventListener('keydown', closeDialogHandler);

  const favoritesBtn = document.getElementById('favoritesBtn');
  favoritesBtn.removeEventListener('click', updateFavorites);

  const ratingBtn = document.getElementById('giveRatingBtn');
  ratingBtn.addEventListener('click', openRatingModal);
}

export function updateFavorites(updateListCallback) {
  const foundIndex = favorites.findIndex(ex => ex._id === exercise._id);

  if (foundIndex !== -1) {
    favorites.splice(foundIndex, 1);
  } else {
    favorites.push(exercise);
  }

  localStorage.setItem(FAVORITES_KEY_LS, JSON.stringify(favorites));

  updateFavoritesButton(foundIndex !== -1);
  updateListCallback && updateListCallback();
}

function closeDialogHandler(event) {
  if (event instanceof PointerEvent) {
    instance.close();
  }

  if (event instanceof KeyboardEvent) {
    if (event.key === 'Escape') {
      //if esc key was not pressed in combination with ctrl or alt or shift
      const isNotCombinedKey = !(
        event.ctrlKey ||
        event.altKey ||
        event.shiftKey
      );
      if (isNotCombinedKey) {
        instance.close();
      }
    }
  }
}
