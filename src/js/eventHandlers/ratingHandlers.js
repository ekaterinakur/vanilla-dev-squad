import { setExerciseRating } from '../api/setExerciseRating';
import {
  showRatingModal,
  hideRatingModal,
  updateCurrentRating,
} from '../rendering/renderModals';
import { showNotification, showErrorNotification } from '../rendering/common';

let exerciseId = null;

export function openRatingModal(id) {
  exerciseId = id;

  showRatingModal();
  setupEventListeners();
}

export const setupEventListeners = () => {
  const closeRatingModal = document.getElementById('closeRatingModal');
  const closeExerciseModal = document.getElementById('closeExerciseModal');
  const ratingForm = document.getElementById('ratingForm');

  closeRatingModal.addEventListener('click', hideRatingModal);
  closeExerciseModal.addEventListener('click', hideRatingModal);

  ratingForm.addEventListener('submit', handleRatingSubmit);
  document.querySelectorAll('.stars input').forEach(star => {
    star.addEventListener('change', event =>
      updateCurrentRating(event.target.value)
    );
  });
};

const handleRatingSubmit = async event => {
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

    exerciseId = null;
    hideRatingModal();
  } catch (error) {
    showErrorNotification('Failed to submit rating.');
  }
};
