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
      <input type="search" onChange={handleChange} />
    </form>
  );
};

export default SearchBar;
