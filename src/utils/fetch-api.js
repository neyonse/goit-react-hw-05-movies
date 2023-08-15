const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '8e2c1bb8d05e4876a0d4092a42278d28';

async function fetchTrendingMovies() {
  const url = `${BASE_URL}/trending/movie/day?language=en-US&api_key=${API_KEY}`;

  try {
    const response = await fetch(url).then(res => res.json());
    return response;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

async function fetchMoviePoster(id) {
  const url = `${BASE_URL}/trending/movie/${id}/images?api_key=${API_KEY}`;

  try {
    const response = await fetch(url).then(res => res.json());
    return response;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

const APIservices = {
  fetchTrendingMovies,
  fetchMoviePoster,
};

export default APIservices;
