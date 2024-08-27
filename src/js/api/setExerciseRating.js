import client from './client';

// TODO
export async function setExerciseRating(id, { rate, review }) {
  try {
    const response = await client.patch(`exercises/${id}/rating`, {
      email: 'test@gmail.com',
      rate,
      review,
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response?.status || error.message);
  }
}
