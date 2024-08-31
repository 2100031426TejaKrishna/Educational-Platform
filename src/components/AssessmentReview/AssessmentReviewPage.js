import React from 'react';
import OverallScoreDisplay from './OverallScoreDisplay';
import DetailedFeedback from './DetailedFeedback';
import TeacherComments from './TeacherComments';

const AssessmentReviewPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Assessment Review</h1>
      <OverallScoreDisplay />
      <DetailedFeedback />
      <TeacherComments />
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
  },
  title: {
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: '20px',
  },
};

export default AssessmentReviewPage;
