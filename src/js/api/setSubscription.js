import client from './client';

// TODO
export async function setSubscription() {
  try {
    const response = await client.post('subscription', {
      email: 'test@gmail.com',
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response?.status || error.message);
  }
}
