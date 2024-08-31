import React from 'react';

const DetailedFeedback = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Detailed Feedback</h2>
      <p style={styles.feedbackText}>
        Great effort overall! You demonstrated a strong understanding of the key concepts, but there's room for improvement in the practical application of the material.
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    border: '1px solid #3498db',
    borderRadius: '10px',
    marginBottom: '20px',
    backgroundColor: '#ecf0f1',
  },
  heading: {
    color: '#2980b9',
    marginBottom: '10px',
    fontSize: '24px',
  },
  feedbackText: {
    color: '#2c3e50',
    lineHeight: '1.6',
  },
};

export default DetailedFeedback;
