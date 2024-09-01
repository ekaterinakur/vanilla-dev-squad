import { setExerciseRating } from '../api/setExerciseRating';
import {
  showRatingModal,
  hideRatingModal,
  updateCurrentRating,
} from '../rendering/renderModals';
import { showNotification, showErrorNotification } from '../rendering/common';

let exerciseId = null;

export function openRatingModal(id, updateListCallback) {
  exerciseId = id;

  showRatingModal();
  setupEventListeners(updateListCallback);
}

export const setupEventListeners = (updateListCallback) => {
  const closeRatingModal = document.getElementById('closeRatingModal');
  const ratingForm = document.getElementById('ratingForm');

  closeRatingModal.addEventListener('click', hideRatingModal);

  ratingForm.addEventListener('submit', (event) => 
    handleRatingSubmit(event, updateListCallback)
  );
  document.querySelectorAll('.stars input').forEach(star => {
    star.addEventListener('change', event =>
      updateCurrentRating(event.target.value)
    );
  });
};

const handleRatingSubmit = async (event, updateListCallback) => {
  event.preventDefault();

  const form = event.target;
  const ratingRadio = form.querySelector('input[name="rating"]:checked');
  const email = form.elements.email.value.trim();
  const description = form.elements.description.value.trim();
  const rating = parseFloat(ratingRadio.value || '');

  if (!rating) {
    showErrorNotification('Failed to submit rating.');
    return;
  }

  const requestData = { email: email, rate: rating, review: description };

  try {
    await setExerciseRating(exerciseId, requestData);

    showNotification('Rating submitted successfully!');

    form.reset();
    updateCurrentRating(0);
    exerciseId = null;

    updateListCallback && updateListCallback();
    hideRatingModal();
  } catch (error) {
    showErrorNotification('Failed to submit rating.');
  }
};
