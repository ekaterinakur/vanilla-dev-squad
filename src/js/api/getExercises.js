import client from './client';

export async function getExercises({
  page = 1,
  limit = 12,
  bodypart,
  muscles,
  equipment,
  keyword,
}) {
  try {
    const response = await client.get('exercises', {
      params: {
        page,
        limit,
        bodypart,
        muscles,
        equipment,
        keyword,
      },
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
}
