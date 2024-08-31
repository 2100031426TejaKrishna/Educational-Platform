import React from 'react';

const BulkGradingOptions = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Bulk Grading Options</h2>
      {/* Bulk grading controls */}
      <button style={styles.button}>Apply Grade to All</button>
      <button style={styles.button}>Clear All Grades</button>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    border: '1px solid #27ae60',
    borderRadius: '10px',
    marginBottom: '20px',
    backgroundColor: '#ecf0f1',
    textAlign: 'center',
  },
  heading: {
    color: '#27ae60',
    marginBottom: '10px',
    fontSize: '24px',
  },
  button: {
    padding: '10px 20px',
    margin: '5px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#2ecc71',
    color: '#fff',
    cursor: 'pointer',
  },
};

export default BulkGradingOptions;
