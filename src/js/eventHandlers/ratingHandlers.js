import { setExerciseRating } from '../api/setExerciseRating';
import {
  showRatingModal,
  hideRatingModal,
  updateCurrentRating,
  hideExerciseModal,
  giveRatingBtn,
  closeRatingModal,
  closeExerciseModal,
  ratingForm,
} from '../rendering/renderModals';
import { showNotification, showErrorNotification } from '../rendering/common';

export const setupEventListeners = () => {
  giveRatingBtn.addEventListener('click', showRatingModal);

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
  const email = form.elements.email.value.trim();
  const description = form.elements.description.value.trim();
  const rating = form.querySelector('input[name="rating"]:checked')?.value;

  form.elements.email.value = '';
  form.elements.description.value = '';

  if (!rating) {
    showErrorNotification('Failed to submit rating.');
    return;
  }

  const exerciseId = form.dataset.exerciseId;
  const requestData = { email: email, rate: rating, review: description };

  try {
    const response = await setExerciseRating(exerciseId, requestData);

    if (response.status === 200) {
      hideRatingModal();

      form.reset();
      document.querySelectorAll('.stars input').forEach(star => {
        star.checked = false;
      });
      updateCurrentRating(0);

      showNotification('Rating submitted successfully!');

      setTimeout(() => {
        hideExerciseModal();
      }, 3000);
    }
  } catch (error) {
    let errorMessage = 'An error occurred';

    if (error.response) {
      switch (error.response.status) {
        case 400:
          errorMessage = 'Bad request (invalid request body)';
          break;
        case 404:
          errorMessage = 'Such exercise not found';
          break;
        case 409:
          errorMessage = 'Such email already exists';
          break;
        case 500:
          errorMessage = 'Server error';
          break;
        default:
          errorMessage = error.response.data.message || errorMessage;
          break;
      }
    }
    showErrorNotification('Failed to submit rating.');
  }
};
