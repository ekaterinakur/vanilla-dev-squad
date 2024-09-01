import * as basicLightbox from 'basiclightbox';
import { getExersiseById } from '../api/getExerciseById';
import {
  getDialogTemplate,
  updateFavoritesButton,
} from '../rendering/exerciseDialog';
import { openRatingModal } from './ratingHandlers';

let instance;
const favoritesKey = 'favorites';
let favorites = [];
let exercise;

export async function openExerciseDialog(exerciseId) {
  const data = await getExersiseById(exerciseId);

  exercise = data;

  favorites = localStorage.getItem(favoritesKey)
    ? JSON.parse(localStorage.getItem(favoritesKey))
    : [];

  const isFavorite = favorites.findIndex(ex => ex._id === exercise._id) !== -1;

  const template = getDialogTemplate(exercise, isFavorite);
  instance = basicLightbox.create(template, {
    closable: true,
    onClose: () => removeDialogListeners(),
  });

  instance.show();
	addDialogListeners();
}

function addDialogListeners() {
  const closeBtn = document.getElementById('dialogIconClose');
  closeBtn.addEventListener('click', closeDialogHandler);

  document.addEventListener('keydown', closeDialogHandler);

  const favoritesBtn = document.getElementById('favoritesBtn');
  favoritesBtn.addEventListener('click', updateFavorites);

  const ratingBtn = document.getElementById('giveRatingBtn');
  ratingBtn.addEventListener('click', () => openRatingModal(exercise._id));
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

export function updateFavorites() {
  const foundIndex = favorites.findIndex(ex => ex._id === exercise._id);

  if (foundIndex !== -1) {
    favorites.splice(foundIndex, 1);
  } else {
    favorites.push(exercise);
  }

  localStorage.setItem(favoritesKey, JSON.stringify(favorites));

  updateFavoritesButton(foundIndex !== -1);
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
