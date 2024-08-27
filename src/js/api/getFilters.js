import client from './client';

// TODO
export async function getFilters({ page = 1, limit = 12, filter }) {
  try {
    const response = await client.get('filters', {
      params: {
        page,
        limit,
        filter,
      },
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response?.status || error.message);
  }
}
