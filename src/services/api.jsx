import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  key: '35197019-a7fce12511fd1af60ca1b8895',
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

export const fetchImages = async (searchQuery, page) => {
  const { data } = await axios.get(`?q=${searchQuery}&page=${page}`);
  return data;
};
