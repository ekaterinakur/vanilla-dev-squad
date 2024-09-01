import client from './client';

// TODO
export async function setExerciseRating(id, { email, rate, review }) {
  try {
    const response = await client.patch(`exercises/${id}/rating`, {
      email,
      rate,
      review,
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
}
