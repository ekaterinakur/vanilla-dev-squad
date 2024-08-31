import client from './client';

// TODO
export async function getExersiseById(id) {
  try {
    const response = await client.get(`exercises/${id}`);

    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
}
