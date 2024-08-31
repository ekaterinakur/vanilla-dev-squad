export const giveRatingBtn = document.getElementById('giveRatingBtn');
export const closeRatingModal = document.getElementById('closeRatingModal');
export const closeExerciseModal = document.getElementById('closeExerciseModal');
export const ratingModal = document.getElementById('ratingModal');
export const exerciseModal = document.getElementById('exerciseModal');
const modalContent = document.querySelector('#ratingModal .modal-content');

export const showRatingModal = () => {
  ratingModal.style.display = 'block';
  ratingModal.classList.remove('modal-closing');
};

export const hideRatingModal = () => {
  modalContent.classList.add('dispersing');
  ratingModal.classList.add('modal-closing');

  setTimeout(() => {
    ratingModal.style.display = 'none';
    modalContent.classList.remove('dispersing');
    ratingModal.classList.remove('modal-closing');
  }, 600);
};

export const hideExerciseModal = () => {
  exerciseModal.style.display = 'none';
};

export const updateCurrentRating = rating => {
  const currentRating = document.getElementById('currentRating');
  currentRating.textContent = `${rating}.0`;
};
