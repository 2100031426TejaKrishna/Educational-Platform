import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Search Assessments..."
        value={searchTerm}
        onChange={handleSearchChange}
        style={styles.input}
      />
    </div>
  );
};

const styles = {
  container: {
    marginBottom: '20px',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #bdc3c7',
  },
};

export default SearchBar;
