import client from './client';
import iziToast from 'izitoast';

export const initializeRating = () => {
  const giveRatingBtn = document.getElementById('giveRatingBtn');
  const closeRatingModal = document.getElementById('closeRatingModal');
  const closeExerciseModal = document.getElementById('closeExerciseModal');
  const ratingForm = document.getElementById('ratingForm');
  const exerciseModal = document.getElementById('exerciseModal');
  const ratingModal = document.getElementById('ratingModal');
  const currentRating = document.getElementById('currentRating');

  giveRatingBtn.addEventListener('click', () => {
    ratingModal.style.display = 'block';
    exerciseModal.style.display = 'none';
  });

  closeRatingModal.addEventListener('click', () => {
    ratingModal.style.display = 'none';
    exerciseModal.style.display = 'block';
  });

  closeExerciseModal.addEventListener('click', () => {
    exerciseModal.style.display = 'none';
  });

  document.querySelectorAll('.stars input').forEach(star => {
    star.addEventListener('change', () => {
      const rating = star.value;
      currentRating.textContent = `${rating}.0`;
    });
  });

  ratingForm.addEventListener('submit', async event => {
    event.preventDefault();

    const email = event.target.elements.email.value.trim();
    const description = event.target.elements.description.value.trim();
    const formData = new FormData(ratingForm);
    const rating = formData.get('rating');

    event.target.elements.email.value = '';
    event.target.elements.description.value = '';

    if (!ratingForm.checkValidity()) {
      ratingModal.style.display = 'none';
      exerciseModal.style.display = 'block';

      return;
    }

    const exerciseId = '64f389465ae26083f39b17a4';
    const requestData = {
      rate: rating,
      email: email,
      review: description,
    };

    try {
      const response = await client.post(
        `exercises/${exerciseId}/rating`,
        requestData,
        {
          rate: rating,
          email: email,
          review: description,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('Server Response:', response);

      if (response.status === 200) {
        ratingModal.style.display = 'none';
        exerciseModal.style.display = 'block';

        setTimeout(() => {
          exerciseModal.style.display = 'none';
        }, 3000);

        iziToast.success({
          title: 'Success',
          message: 'Rating submitted successfully!',
          position: 'topRight',
        });
      }
    } catch (error) {
      console.error('Error in server request:', error);
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

      iziToast.error({
        title: 'Error',
        message: errorMessage,
        position: 'topRight',
      });
    }
  });
};
