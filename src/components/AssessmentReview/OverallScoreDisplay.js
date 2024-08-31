import React from 'react';

const OverallScoreDisplay = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Overall Score</h2>
      <div style={styles.score}>85%</div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    border: '2px solid #2ecc71',
    borderRadius: '10px',
    marginBottom: '20px',
    backgroundColor: '#ecf0f1',
    textAlign: 'center',
  },
  heading: {
    color: '#2c3e50',
    marginBottom: '10px',
    fontSize: '24px',
  },
  score: {
    color: '#27ae60',
    fontSize: '36px',
    fontWeight: 'bold',
  },
};

export default OverallScoreDisplay;
