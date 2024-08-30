import client from './client';

// TODO
export async function getQuote() {
  try {
    const response = await client.get('quote');

    return response.data;
  } catch (error) {
    throw new Error(error.response?.status || error.message);
  }
}
