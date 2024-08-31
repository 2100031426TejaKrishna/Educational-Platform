import React from 'react';

const SubmitAssessmentButton = ({ onSubmit }) => {
  return (
    <button style={styles.button} onClick={onSubmit}>
      Submit Assessment
    </button>
  );
};

const styles = {
  button: {
    display: 'block',
    width: '100%',
    padding: '15px',
    backgroundColor: '#27ae60',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default SubmitAssessmentButton;
