import React from 'react';

const QuestionBankAccess = ({ onAddQuestion }) => {
  const sampleQuestions = [
    { id: 1, text: 'What is Java?', type: 'Short Answer' },
    { id: 2, text: 'Explain OOP concepts.', type: 'Essay' },
  ];

  const handleAddQuestion = (question) => {
    onAddQuestion(question);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.subtitle}>Question Bank</h2>
      {sampleQuestions.map((question) => (
        <div key={question.id} style={styles.questionItem}>
          <p>{question.text} ({question.type})</p>
          <button style={styles.addButton} onClick={() => handleAddQuestion(question)}>
            Add
          </button>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    marginBottom: '20px',
  },
  subtitle: {
    fontSize: '18px',
    marginBottom: '10px',
  },
  questionItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: '#ecf0f1',
    borderRadius: '5px',
    marginBottom: '10px',
  },
  addButton: {
    padding: '5px 10px',
    backgroundColor: '#3498db',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default QuestionBankAccess;
