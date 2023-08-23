import { SearchForm, SearchIcon, Input } from './SearchBar.styled';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { LuSearch } from 'react-icons/lu';
import PropTypes from 'prop-types';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const queryFromParams = searchParams.get('query') ?? '';

    setQuery(queryFromParams);

    onSearch(queryFromParams);
  }, [searchParams, onSearch]);

  const handleChange = e => setQuery(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();

    const trimmedQuery = query.trim();

    if (trimmedQuery === '') {
      setSearchParams({});
    } else {
      setSearchParams({ query: trimmedQuery, page: 1 });
    }

    onSearch(trimmedQuery);
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchIcon aria-hidden="true">
        <LuSearch />
      </SearchIcon>
      <Input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search"
      />
    </SearchForm>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
