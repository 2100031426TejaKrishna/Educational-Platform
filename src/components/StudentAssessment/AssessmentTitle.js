import React from 'react';

const AssessmentTitle = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Java Programming Assessment</h1>
      <p style={styles.instructions}>Please answer the following questions within the given time.</p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  title: {
    color: '#34495e',
    fontSize: '28px',
    marginBottom: '10px',
  },
  instructions: {
    color: '#7f8c8d',
    fontSize: '16px',
  },
};

export default AssessmentTitle;
