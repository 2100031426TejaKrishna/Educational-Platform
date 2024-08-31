import React from 'react';

const EditDeleteOptions = () => {
  return (
    <div style={styles.container}>
      <button style={styles.button}>Edit</button>
      <button style={styles.button}>Delete</button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    gap: '10px',
    justifyContent: 'center',
    marginTop: '10px',
  },
  button: {
    backgroundColor: '#e74c3c',
    color: 'white',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '14px',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#c0392b',
  },
};

export default EditDeleteOptions;
