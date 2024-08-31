import client from './client';

export async function setSubscription(email) {
  try {
    const response = await client.post('subscription', {
      email,
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
}
