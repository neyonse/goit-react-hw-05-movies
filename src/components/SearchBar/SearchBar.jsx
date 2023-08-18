import { Input } from './SearchBar.styled';
import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = e => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSearch(inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="search"
        onChange={handleChange}
        placeholder="search a movie"
      />
    </form>
  );
};

export default SearchBar;
