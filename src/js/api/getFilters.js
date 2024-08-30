import client from './client';

// TODO
export async function getFilters(params) {
  try {
    const response = await client.get('filters', {
      params,
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response?.status || error.message);
  }
}
