import { useState } from 'react';
import MoviesList from 'components/MoviesList';
import SearchBar from 'components/SearchBar';

const Movies = () => {
  const [query, setQuery] = useState('');

  const handleSearch = inputValue => setQuery(inputValue);

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <MoviesList newQuery={query} />
    </>
  );
};

export default Movies;
