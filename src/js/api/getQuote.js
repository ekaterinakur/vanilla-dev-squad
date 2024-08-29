import axios from 'axios';

// TODO
export async function getQuote() {
  const response = await axios.get(
    `https://your-energy.b.goit.study/api/quote`
  );
  return response.data;
}
