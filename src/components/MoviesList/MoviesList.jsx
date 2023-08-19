import { Section, List } from './MoviesList.styled';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { APIservices } from 'utils';
import MovieCard from 'components/MovieCard';

const MoviesList = () => {
  const [status, setStatus] = useState('idle');
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams();

  const queryFromParams = searchParams.get('query') ?? '';
  console.log(queryFromParams);

  useEffect(() => {
    setQuery(queryFromParams);
  }, [queryFromParams]);

  useEffect(() => {
    if (!query) return;

    const getMoviesData = async () => {
      setStatus('pending');
      try {
        const moviesData = await APIservices.fetchMoviesByName(query);
        setMovies(moviesData.results);
        // console.log(moviesData);
        setStatus('resolved');
      } catch (error) {
        setStatus('rejected');
        console.log(error);
      }
    };

    getMoviesData();
  }, [query]);

  if (status === 'idle') {
    return (
      <div className="message">
        There is no movies yet. Please enter your search query.
      </div>
    );
  }

  if (status === 'pending') {
    return <div className="message">Loading...</div>;
  }

  if (status === 'rejected') {
    return <div className="message">Oooops, something went wrong.</div>;
  }

  if (status === 'resolved') {
    return (
      <Section>
        <h2 className="visually-hidden">Found movies</h2>
        {movies.length === 0 ? (
          <p>No search results for "{query}".</p>
        ) : (
          <List>
            {movies.map(movie => (
              <MovieCard
                to={`/movies/${movie.id}`}
                key={movie.id}
                movie={movie}
              />
            ))}
          </List>
        )}
      </Section>
    );
  }
};

export default MoviesList;
