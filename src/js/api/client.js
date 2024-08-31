import axios from 'axios';

const client = axios.create({
  baseURL: 'https://your-energy.b.goit.study/api/',
  timeout: 3000,
});

export default client;
