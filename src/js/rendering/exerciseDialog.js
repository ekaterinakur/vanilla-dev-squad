import { capitalizeFirstLetter } from '../utils';
import sprite from '../../img/sprite.svg';

export function getDialogTemplate(exercise, isFavorite) {
  return `
    <svg id="dialogIconClose" class="dialog-icon-close" width="28" height="28">
      <use href="${sprite}#icon-close"></use>
    </svg>
    <div class="exercise-dialog">    
      <div class="exercise-image-container">
        <img class="exercise-image" src="${exercise.gifUrl}" alt="Exercise GIF">
      </div>
      <div class="exercise-content">
        <div class="exercise-name">${capitalizeFirstLetter(exercise.name)}</div>
        <div class="exercise-rating">
          ${exercise.rating}${generateStars(exercise.rating)}
        </div>
        <div class="exercise-details">
          <div class="exercise-details-item"><span>Target</span> ${capitalizeFirstLetter(
            exercise.target
          )}</div>
          <div class="exercise-details-item"><span>Body Part</span> ${capitalizeFirstLetter(
            exercise.bodyPart
          )}</div>
          <div class="exercise-details-item"><span>Equipment</span> ${capitalizeFirstLetter(
            exercise.equipment
          )}</div>
          <div class="exercise-details-item"><span>Popular</span> ${
            exercise.popularity
          }</div>
          <div class="exercise-details-item"><span>Burned calories</span> ${
            exercise.burnedCalories
          }/${exercise.time} min</div>
        </div>
        <div class="exercise-description">${exercise.description}</div>
      </div>
    </div>
    <div class="exercise-actions">
      ${generateFavoritesBtn(isFavorite)}
      <button id="giveRatingBtn" class="base-btn give-rating-btn" type="button">Give a rating</button>
    </div>
  `;
}

function generateStars(rating) {
  let stars = '';

  for (let i = 1; i <= 5; i++) {
    const isChecked = i <= Math.floor(rating);
    stars += `
      <svg class="exercise-icon-star${
        isChecked ? ' checked' : ''
      }" width="18" height="18">
        <use href="${sprite}#icon-star"></use>
      </svg>
    `;
  }

  return stars;
}

function generateFavoritesBtn(isFavorite) {
  return `
    <button id="favoritesBtn" class="base-btn favorites-btn" type="button">
      ${isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      <svg class="exercise-icon-heart" width="18" height="18">
        <use href="${sprite}#${isFavorite ? 'trash' : 'icon-heart'}"></use>
      </svg>
    </button>
  `;
}

export function updateFavoritesButton(isFavorite) {
  const favoritesBtn = document.getElementById('favoritesBtn');

  if (isFavorite) {
    favoritesBtn.innerHTML = `
      Add to favorites
      <svg class="exercise-icon-heart" width="18" height="18">
        <use href="${sprite}#icon-heart"></use>
      </svg>
    `;
  } else {
    favoritesBtn.innerHTML = `
      Remove from favorites
      <svg class="exercise-icon-heart" width="18" height="18">
        <use href="${sprite}#trash"></use>
      </svg>
    `;
  }
}
