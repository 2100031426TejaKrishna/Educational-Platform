import React from 'react';
import AssessmentItem from './AssessmentItem';

const AssessmentList = ({ assessments }) => {
  return (
    <div style={styles.container}>
      {assessments.map((assessment) => (
        <AssessmentItem key={assessment.id} assessment={assessment} />
      ))}
    </div>
  );
};

const styles = {
  container: {
    marginBottom: '20px',
  },
};

export default AssessmentList;
