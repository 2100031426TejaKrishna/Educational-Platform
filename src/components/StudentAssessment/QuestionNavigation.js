import React from 'react';

const QuestionNavigation = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Questions</h2>
      <div style={styles.question}>
        <p style={styles.questionText}>1. What is a Java class?</p>
        <textarea style={styles.answerInput} placeholder="Write your answer here..." />
      </div>
      <div style={styles.question}>
        <p style={styles.questionText}>2. Explain the concept of inheritance in Java.</p>
        <textarea style={styles.answerInput} placeholder="Write your answer here..." />
      </div>
      <div style={styles.question}>
        <p style={styles.questionText}>3. How does the `final` keyword affect a variable, method, or class in Java?</p>
        <textarea style={styles.answerInput} placeholder="Write your answer here..." />
      </div>
    </div>
  );
};

const styles = {
  container: {
    marginBottom: '20px',
  },
  heading: {
    color: '#2c3e50',
    marginBottom: '15px',
    fontSize: '22px',
  },
  question: {
    marginBottom: '20px',
  },
  questionText: {
    color: '#34495e',
    fontWeight: 'bold',
  },
  answerInput: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #bdc3c7',
    resize: 'vertical',
    minHeight: '60px',
  },
};

export default QuestionNavigation;
