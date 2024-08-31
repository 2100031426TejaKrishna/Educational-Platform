import React from 'react';

const QuestionList = ({ questions }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.subtitle}>Questions</h2>
      {questions.length > 0 ? (
        questions.map((question) => (
          <div key={question.id} style={styles.questionItem}>
            <p>{question.text}</p>
            <p>Category: {question.category}</p>
            <p>Difficulty: {question.difficulty}</p>
          </div>
        ))
      ) : (
        <p>No questions found.</p>
      )}
    </div>
  );
};

const styles = {
  container: {
    marginTop: '20px',
  },
  subtitle: {
    fontSize: '18px',
    marginBottom: '10px',
  },
  questionItem: {
    padding: '10px',
    backgroundColor: '#ecf0f1',
    borderRadius: '5px',
    marginBottom: '10px',
  },
};

export default QuestionList;
