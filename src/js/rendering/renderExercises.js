import { openExerciseDialog } from '../eventHandlers/exerciseHandlers';
import sprite from '../../img/sprite.svg';

export function renderExercises(exercises) {
  const exerciseListEl = document.getElementById('exercise-list');

  if (!Array.isArray(exercises)) {
    console.error(
      'Expected exercises to be an array, but received:',
      exercises
    );
    return;
  }

  exerciseListEl.innerHTML = exercises
    .map(exercise => {
      const roundedRating = Math.round(exercise.rating);

      return `
        <div class="exercise-card">
            <div class="exercise-card-rating">
                <div class="exercise-card-wrapper">
                    <span class="exercise-card-workout">workout</span>
                <p class="exercise-card-ret">${roundedRating.toFixed(1)}</p>
                <svg class="exercize-icon-star" width="18" height="18">
                    <use href="${sprite}#icon-star"></use>
                </svg>
                </div>
                <button class="start-btn" data-id="${exercise._id}">
                    Start
                    <svg class="exercize-icon-arrow" width="16" height="16">
                        <use href="${sprite}#arrow"></use>
                    </svg>
                </button>
            </div>
            <div class="exercise-card-name">
                <svg class="exercize-icon-cross" width="24" height="24">
                    <use href="${sprite}#running-stick-figure-border"></use>
                </svg>
                <h3 class="exercise-card-name-title">${exercise.name}</h3>
            </div>
            <div class="exercise-card-info">
                <p class="exercise-card-info-cal">Burned calories: ${
                  exercise.burnedCalories
                } / ${exercise.time} min </p>
                <p class="exercise-card-info-body">Body part: ${
                  exercise.bodyPart
                }</p>
                <p class="exercise-card-info-terget">Target: ${
                  exercise.target
                }</p>
            </div>
        </div>
    `;
    })
    .join('');

  const startButtons = document.querySelectorAll('.start-btn');
  startButtons.forEach(button => {
    button.addEventListener('click', event => {
      const exerciseId = event.target.dataset.id;
      // console.log(event.target);
      openExerciseDialog(exerciseId);
    });
  });
}

// function updateVisibleExercises() {
//     const screenWidth = window.innerWidth;
//     let exercisesToShow;

//     if (screenWidth <= parseInt(getComputedStyle(document.documentElement).getPropertyValue('--breakpoint-sm'))) {
//         exercisesToShow = 8;  // Для мобильных устройств
//     } else if (screenWidth <= parseInt(getComputedStyle(document.documentElement).getPropertyValue('--breakpoint-md'))) {
//         exercisesToShow = 10; // Для планшетов
//     } else {
//         exercisesToShow = 10; // Для ноутбуков и больших экранов
//     }

//     const visibleExercises = allExercises.slice(0, exercisesToShow);
//     renderExercises(visibleExercises);
// }

// // Обработчик события изменения размера окна
// window.addEventListener('resize', updateVisibleExercises);

// // Первоначальный рендеринг упражнений при загрузке страницы
// document.addEventListener('DOMContentLoaded', () => {
//     updateVisibleExercises();
// });
