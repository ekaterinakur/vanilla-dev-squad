import axios from 'axios';

// TODO
export async function getFilters(param) {
  const response = await axios.get(
    `https://your-energy.b.goit.study/api/filters?${param}`
  );
  return response.data;
}
