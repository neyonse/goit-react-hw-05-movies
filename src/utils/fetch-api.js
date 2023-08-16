const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '8e2c1bb8d05e4876a0d4092a42278d28';
// const API_KEY = '8e2c1bb8d05e4876a0d4092a42278d2';

async function fetchTrendingMovies() {
  const url = `${BASE_URL}/trending/movie/day?language=en-US&api_key=${API_KEY}`;

  // fetch(url)
  //   .then(res => res.json())
  //   .catch(error => {
  //     throw new Error(error.response.data.message);
  //   });

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        `Status code: ${data.status_code}. Status message: ${data.status_message}`
      );
    }

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

const APIservices = {
  fetchTrendingMovies,
};

export default APIservices;
