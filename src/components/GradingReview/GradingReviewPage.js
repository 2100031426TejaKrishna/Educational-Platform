import React from 'react';
import StudentSubmissionsList from './StudentSubmissionsList';
import QuestionByQuestionGrading from './QuestionByQuestionGrading';
import BulkGradingOptions from './BulkGradingOptions';

const GradingReviewPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Grading Review</h1>
      <StudentSubmissionsList />
      <QuestionByQuestionGrading />
      <BulkGradingOptions />
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f4f4f4',
    boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
  },
  title: {
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '28px',
  },
};

export default GradingReviewPage;
