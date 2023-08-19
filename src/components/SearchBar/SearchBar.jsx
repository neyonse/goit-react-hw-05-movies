import { Input } from './SearchBar.styled';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const queryFromParams = searchParams.get('query') ?? '';

    setQuery(queryFromParams);

    onSearch(queryFromParams);
  }, [searchParams, onSearch]);

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const trimmedQuery = query.trim();

    if (trimmedQuery === '') {
      setSearchParams({});
    } else {
      setSearchParams({ query: trimmedQuery });
    }

    onSearch(trimmedQuery);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="search"
        value={query}
        onChange={handleChange}
        placeholder="search a movie"
      />
    </form>
  );
};

export default SearchBar;
