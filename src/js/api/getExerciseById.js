import client from './client';

// TODO
export async function getExersiseById(id) {
  try {
    const response = await client.get(`exercises/${id}`);

    return response.data;
  } catch (error) {
    throw new Error(error.response?.status || error.message);
  }
}
