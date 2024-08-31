import React from 'react';

const RecentActivities = () => {
  return (
    <div style={styles.container}>
      <h3 style={styles.title}>Recent Activities</h3>
      <ul style={styles.list}>
        <li style={styles.item}>Graded Math Quiz</li>
        <li style={styles.item}>Created Science Exam</li>
        <li style={styles.item}>Reviewed History Assignment</li>
      </ul>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#f9f9f9',
    padding: '15px',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    marginTop: '20px',
  },
  title: {
    marginBottom: '10px',
    fontSize: '18px',
    color: '#2c3e50',
  },
  list: {
    listStyle: 'none',
    paddingLeft: '0',
  },
  item: {
    padding: '8px 0',
    borderBottom: '1px solid #eee',
    color: '#34495e',
  },
};

export default RecentActivities;
