import React from 'react';
import AssessmentTitle from './AssessmentTitle';
import TimerDisplay from './TimerDisplay';
import QuestionNavigation from './QuestionNavigation';
import SaveProgressButton from './SaveProgressButton';
import SubmitAssessmentButton from './SubmitAssessmentButton';

const StudentAssessmentPage = () => {
  const handleAssessmentSubmit = () => {
    alert('Assessment submitted successfully!');
  };

  return (
    <div style={styles.container}>
      <AssessmentTitle />
      <TimerDisplay />
      <QuestionNavigation />
      <SaveProgressButton />
      <SubmitAssessmentButton onSubmit={handleAssessmentSubmit} />
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f7f7f7',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
  },
};

export default StudentAssessmentPage;
