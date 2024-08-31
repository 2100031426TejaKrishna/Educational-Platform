import React from 'react';

const TeacherComments = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Teacher's Comments</h2>
      <p style={styles.commentsText}>
        You've done a fantastic job in this assessment. Keep up the great work and continue to refine your skills. I'm particularly impressed with your analytical thinking.
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    border: '1px solid #e67e22',
    borderRadius: '10px',
    marginBottom: '20px',
    backgroundColor: '#fdfbfb',
  },
  heading: {
    color: '#d35400',
    marginBottom: '10px',
    fontSize: '24px',
  },
  commentsText: {
    color: '#2c3e50',
    lineHeight: '1.6',
  },
};

export default TeacherComments;
