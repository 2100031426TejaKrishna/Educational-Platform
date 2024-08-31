import React from 'react';

const QuestionByQuestionGrading = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Question-by-Question Grading</h2>
      {/* Grading controls */}
      <div style={styles.questionContainer}>
        <p style={styles.questionText}>Question 1: What is React?</p>
        <input type="text" placeholder="Grade" style={styles.input} />
      </div>
      <div style={styles.questionContainer}>
        <p style={styles.questionText}>Question 2: Explain state and props.</p>
        <input type="text" placeholder="Grade" style={styles.input} />
      </div>
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
  questionContainer: {
    marginBottom: '15px',
  },
  questionText: {
    color: '#2c3e50',
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #bdc3c7',
  },
};

export default QuestionByQuestionGrading;
