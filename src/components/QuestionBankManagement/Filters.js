import React, { useState } from 'react';

const Filters = ({ onFilter }) => {
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');

  const handleApplyFilter = () => {
    onFilter({ category, difficulty });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.subtitle}>Filters</h2>
      <input
        style={styles.input}
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        style={styles.input}
        type="text"
        placeholder="Difficulty"
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
      />
      <button style={styles.filterButton} onClick={handleApplyFilter}>
        Apply Filters
      </button>
    </div>
  );
};

const styles = {
  container: {
    marginBottom: '20px',
  },
  subtitle: {
    fontSize: '18px',
    marginBottom: '10px',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #bdc3c7',
    marginBottom: '10px',
  },
  filterButton: {
    padding: '10px 20px',
    backgroundColor: '#2ecc71',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Filters;
