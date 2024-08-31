import React from 'react';

const SaveProgressButton = () => {
  const handleSaveProgress = () => {
    alert('Progress saved successfully!');
  };

  return (
    <button style={styles.button} onClick={handleSaveProgress}>
      Save Progress
    </button>
  );
};

const styles = {
  button: {
    display: 'block',
    width: '100%',
    padding: '10px',
    backgroundColor: '#3498db',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginBottom: '10px',
  },
};

export default SaveProgressButton;
