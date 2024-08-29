import { API_PROPERTIES } from '../api/client';
import axios from 'axios';

const { BASE_URL, SUBSCRIPTION } = API_PROPERTIES;
axios.defaults.baseURL = BASE_URL;

const postSubscription = async email => {
  const response = await axios.post(`${SUBSCRIPTION}`, { email });
  return response.data;
};

export { postSubscription };