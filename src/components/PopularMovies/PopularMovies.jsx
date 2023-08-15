import {
  Section,
  SectionTitle,
  MoviesList,
  MoviesListItem,
  Link,
} from './PopularMovies.styled';
import { useState, useEffect } from 'react';
import { APIservices } from 'utils';

// let movies = [
//   { name: 'Movie 1', id: '001' },
//   { name: 'Movie 2', id: '002' },
//   { name: 'Movie 3', id: '003' },
// ];

const PopularMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMoviesData = async () => {
      try {
        const moviesData = await APIservices.fetchTrendingMovies();
        setMovies(moviesData.results);
        // setStatus('resolved');
      } catch (error) {
        // setStatus('rejected');
      }
    };

    getMoviesData();
  }, []);

  const getMoviePoster = async id => {
    try {
      const moviePoster = await APIservices.fetchMoviePoster(id);
      console.log(moviePoster);
      return moviePoster;
      // setStatus('resolved');
    } catch (error) {
      // setStatus('rejected');
    }
  };

  // const moviePoster = getMoviePoster(id);

  console.log(movies);

  return (
    <Section>
      <SectionTitle>Popular movies</SectionTitle>
      <MoviesList>
        {movies.map(movie => (
          <MoviesListItem key={movie.id}>
            <img
              style={{ display: 'block', width: '40px', height: '40px' }}
              src={movie => getMoviePoster(movie.id)}
              alt=""
            />
            <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
          </MoviesListItem>
        ))}
      </MoviesList>
    </Section>
  );
};

export default PopularMovies;
