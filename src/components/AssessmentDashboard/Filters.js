import React from 'react';

const Filters = () => {
  return (
    <div style={styles.container}>
      <button style={styles.filterButton}>All</button>
      <button style={styles.filterButton}>Recent</button>
      <button style={styles.filterButton}>Completed</button>
    </div>
  );
};

const styles = {
  container: {
    marginBottom: '20px',
  },
  filterButton: {
    backgroundColor: '#ecf0f1',
    padding: '8px 15px',
    margin: '0 10px 10px 0',
    borderRadius: '5px',
    border: '1px solid #bdc3c7',
    cursor: 'pointer',
  },
};

export default Filters;
