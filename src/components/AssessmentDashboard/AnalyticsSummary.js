import React from 'react';

const AnalyticsSummary = () => {
  return (
    <div style={styles.container}>
      <h3 style={styles.title}>Assessment Analytics</h3>
      <div style={styles.stats}>
        <div style={styles.statItem}>
          <h4 style={styles.statTitle}>Completed</h4>
          <p style={styles.statValue}>75%</p>
        </div>
        <div style={styles.statItem}>
          <h4 style={styles.statTitle}>Pending</h4>
          <p style={styles.statValue}>25%</p>
        </div>
      </div>
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
  stats: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  statItem: {
    textAlign: 'center',
  },
  statTitle: {
    fontSize: '16px',
    color: '#34495e',
  },
  statValue: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#3498db',
  },
};

export default AnalyticsSummary;
