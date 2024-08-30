import * as basicLightbox from 'basiclightbox';
import { getExersiseById } from '../api/getExerciseById';

let instance;
const favoritesKey = "favorites";
let favorites = [];
let exercise;

export async function openExerciseDialog(exerciseId) {
  const data = await getExersiseById(exerciseId);
  exercise = data;

  favorites = localStorage.getItem(favoritesKey)
    ? JSON.parse(localStorage.getItem(favoritesKey))
    : [];

  const template = getDialogTemplate();
  instance = basicLightbox.create(template,
    {
      closable: true,
      onClose: (dialogInstance) => removeDialogListeners()
    });

  instance.show();
  addDialogListeners();
}

function getDialogTemplate() {
  return `<svg id="dialogIconClose" class="dialog-icon-close" width="28" height="28">
      <use href="./img/sprite.svg#icon-close"></use>
    </svg>
  <div class="exercise-dialog">    
    <div class="exercise-image-container">
      <img class="exercise-image" src="${exercise.gifUrl}" alt="Exercise GIF">
    </div>
    <div class="exercise-content">
      <div class="exercise-name">${capitalizeFirstLetter(exercise.name)}</div>
      <div class="exercise-rating">${exercise.rating}${generateStars(exercise.rating)}</div>
      <div class="exercise-details">
        <div class="exercise-details-item"><span>Target</span> ${capitalizeFirstLetter(exercise.target)}</div>
        <div class="exercise-details-item"><span>Body Part</span> ${capitalizeFirstLetter(exercise.bodyPart)}</div>
        <div class="exercise-details-item"><span>Equipment</span> ${capitalizeFirstLetter(exercise.equipment)}</div>
        <div class="exercise-details-item"><span>Popular</span> ${exercise.popularity}</div>
        <div class="exercise-details-item"><span>Burned calories</span> ${exercise.burnedCalories}/${exercise.time} min</div>
      </div>
      <div class="exercise-description">${exercise.description}</div>
    </div>
  </div>
  <div class="exercise-actions">
      ${generateFavoritesBtn()}
      <button id="giveRatingBtn" class="base-btn give-rating-btn" type="button">Give a rating</button>
    </div>`;
}

function generateStars(rating) {
  let stars = '';

  for (let i = 1; i <= 5; i++) {
    stars += i <= Math.floor(rating)
      ? `<svg class="exercise-icon-star  checked" width="18" height="18">
          <use href="./img/sprite.svg#icon-star"></use>
        </svg>`
      : `<svg class="exercise-icon-star" width="18" height="18">
          <use href="./img/sprite.svg#icon-star"></use>
        </svg>`;
  }

  return stars;
}

function capitalizeFirstLetter(name) {
  return name
    ? name.charAt(0).toUpperCase() + name.slice(1)
    : '';
}

function generateFavoritesBtn() {
  const foundExercise = favorites.find(ex => ex._id === exercise._id);

  return `<button id="favoritesBtn" class="base-btn favorites-btn" type="button">
            ${foundExercise ? 'Remove from favorites' : 'Add to favorites'}
            <svg class="exercise-icon-heart" width="18" height="18">
                <use href="./img/sprite.svg#${foundExercise ? 'icon-delete' : 'icon-heart'}"></use>
            </svg>
        </button>`;
}

function updateFavorites() {
  console.log(exercise);
  const foundIndex = favorites.findIndex(ex => ex._id === exercise._id);
  const favoritesBtn = document.getElementById("favoritesBtn");

  if (foundIndex !== -1) {
    favorites.splice(foundIndex, 1);
    favoritesBtn.innerHTML = `
        Add to favorites
        <svg class="exercise-icon-heart" width="18" height="18">
            <use href="./img/sprite.svg#icon-heart"></use>
        </svg>`;
  }
  else {
    favorites.push(exercise);
    favoritesBtn.innerHTML = `
            Remove from favorites
           <svg class="exercise-icon-heart" width="18" height="18">
            <use href="./img/sprite.svg#icon-delete"></use>
        </svg>`;
  }

  const favoritesStr = JSON.stringify(favorites);
  localStorage.setItem(favoritesKey, favoritesStr);
}

function addDialogListeners() {
  const closeBtn = document.getElementById("dialogIconClose");
  closeBtn.addEventListener("click", closeDialogHandler);

  document.addEventListener('keydown', closeDialogHandler);

  const favoritesBtn = document.getElementById("favoritesBtn");
  favoritesBtn.addEventListener("click", updateFavorites);
}

function removeDialogListeners() {
  const closeBtn = document.getElementById("dialogIconClose");
  closeBtn.removeEventListener("click", closeDialogHandler);

  document.removeEventListener('keydown', closeDialogHandler);

  const favoritesBtn = document.getElementById("favoritesBtn");
  favoritesBtn.removeEventListener("click", updateFavorites);
}

function closeDialogHandler(event) {
  if (event instanceof PointerEvent) {
    instance.close();
  }

  if (event instanceof KeyboardEvent) {
    if (event.key === 'Escape') {
      //if esc key was not pressed in combination with ctrl or alt or shift
      const isNotCombinedKey = !(event.ctrlKey || event.altKey || event.shiftKey);
      if (isNotCombinedKey) {
        instance.close();
      }
    }
  }
}
