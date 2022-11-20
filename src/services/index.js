import axios from 'axios';

const API_KEY = '30db7c62';

export const getVideoList = async (search = 'american', page = 1) => {
  try {
    const response = await axios.get(`http://www.omdbapi.com/?s=${search}&apikey=${API_KEY}&page=${page}`);
    console.log(response);
    return response.data.Search;
  } catch (error) {
    console.error(error);
  }
};
