import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const movies = [
  { name: 'Movie 1', id: '001' },
  { name: 'Movie 2', id: '002' },
  { name: 'Movie 3', id: '003' },
  { name: 'Movie 4', id: '004' },
  { name: 'Movie 5', id: '005' },
  { name: 'Movie 6', id: '006' },
];

const MoviesList = ({ newQuery }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (newQuery !== query) {
      setQuery(newQuery);
    }
  }, [newQuery, query]);

  const filteredMovies = movies.filter(({ name }) => name.includes(query));

  return (
    <div>
      <h3>Popular movies</h3>
      <ul style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        {filteredMovies.map(movie => (
          <ul key={movie.id}>
            <NavLink to={`/movies/:${movie.id}`}>{movie.name}</NavLink>
          </ul>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
