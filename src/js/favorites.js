import { openExerciseDialog } from './eventHandlers/exerciseHandlers.js';
import {filterQuoteLS} from './eventHandlers/filtersHandlers.js';
const favorites = JSON.parse(localStorage.getItem('favorites'));
const container = document.querySelector('.favorites-container');

const emptyLocalStorage =
  "It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future";

filterQuoteLS();
  
export const renderFavoritesList = () => {
  if (document.querySelector('.favorites-container-empty')) {
    document.querySelector('.favorites-container-empty').remove();
  }
  const markup = favorites
    .map(item => {
      return `<li class="favorites-container-list-item">
      <div class="list-item-header">
        <div class="list-item-header-text-wrapper">
          <p class="list-item-header-text">Workout</p>
          <button class="list-item-header-button-delete">
            <svg class="list-item-header-icon" width="16" height="16">
              <use href="../img/sprite.svg#icon-trash"></use>
            </svg>
          </button>
        </div>
        <button class="list-item-header-button-start list-item-header-button-text" data-id="${item._id}">
          Start
          <svg class="list-item-header-button-icon" width="13" height="13">
            <use href="../img/sprite.svg#icon-arrow"></use>
          </svg>
        </button>
      </div>
      <div class="list-item-content">
        <div class="item-content-icon-wrapper">
          <svg class="item-content-icon" width="14" height="16">
            <use href="../img/sprite.svg#icon-running-man"></use>
          </svg>
        </div>
        <p class="item-content-text">${item.name}</p>
      </div>
      <div class="list-item-footer">
        <p class="item-footer-title">
          Burned calories:<span class="item-footer-text">${item.burnedCalories}</span>
        </p>
        <p class="item-footer-title">
          Body part:<span class="item-footer-text">${item.bodyPart}</span>
        </p>
        <p class="item-footer-title">
          Target:<span class="item-footer-text">${item.target}</span>
        </p>
      </div>
    </li>`;
    })
    .join('');
  container.insertAdjacentHTML(
    'beforeend',
    `<ul class="favorites-container-list">${markup}</ul>`
  );
};

export const renderEmptyListNotification = () => {
  if (document.querySelector('.favorites-container-list')) {
    document.querySelector('.favorites-container-list').remove();
  }
  container.insertAdjacentHTML(
    'beforeend',
    `<p class="favorites-container-empty">${emptyLocalStorage}</p>`
  );
};

if (favorites) {
  renderFavoritesList();
} else {
  renderEmptyListNotification();
}

const startButtons = document.querySelectorAll(
  '.list-item-header-button-start'
);
startButtons.forEach(button => {
  button.addEventListener('click', event => {
    const exerciseId = event.target.dataset.id;
    openExerciseDialog(exerciseId);
  });
});
