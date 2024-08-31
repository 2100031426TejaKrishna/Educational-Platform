import React from 'react';

const AssessmentItem = ({ assessment }) => {
  return (
    <div style={styles.item}>
      <h3 style={styles.title}>{assessment.title}</h3>
      <p style={styles.date}>Date: {assessment.date}</p>
    </div>
  );
};

const styles = {
  item: {
    padding: '10px',
    marginBottom: '10px',
    backgroundColor: '#ecf0f1',
    borderRadius: '5px',
  },
  title: {
    margin: '0 0 5px 0',
    fontSize: '18px',
  },
  date: {
    margin: '0',
    fontSize: '14px',
    color: '#7f8c8d',
  },
};

export default AssessmentItem;
