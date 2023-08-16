import { Section, SectionTitle, MoviesList } from './PopularMovies.styled';
import { useState, useEffect } from 'react';
import { APIservices } from 'utils';
import MovieCard from 'components/MovieCard';

const PopularMovies = () => {
  const [status, setStatus] = useState('pending');
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const getMoviesData = async () => {
      try {
        const moviesData = await APIservices.fetchTrendingMovies();
        setTrendingMovies(moviesData.results);
        setStatus('resolved');
      } catch (error) {
        setStatus('rejected');
        console.log(error);
      }
    };

    getMoviesData();
  }, []);

  console.log(trendingMovies);

  if (status === 'pending') {
    return <div>Loading...</div>;
  }

  if (status === 'rejected') {
    return <div>Oooops, something went wrong...</div>;
  }

  if (status === 'resolved') {
    return (
      <Section>
        <SectionTitle>Popular movies</SectionTitle>
        <MoviesList>
          {trendingMovies.map(movie => (
            <MovieCard
              to={`/movies/${movie.id}`}
              key={movie.id}
              props={movie}
            />
          ))}
        </MoviesList>
      </Section>
    );
  }
};

export default PopularMovies;
