import React, { useState } from 'react';

const QuestionCreationTool = ({ onAddQuestion }) => {
  const [questionText, setQuestionText] = useState('');
  const [questionType, setQuestionType] = useState('Multiple Choice');

  const handleAddQuestion = () => {
    const newQuestion = {
      id: Date.now(),
      text: questionText,
      type: questionType,
    };
    onAddQuestion(newQuestion);
    setQuestionText('');
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.subtitle}>Create New Question</h2>
      <input
        style={styles.input}
        type="text"
        placeholder="Question Text"
        value={questionText}
        onChange={(e) => setQuestionText(e.target.value)}
      />
      <select
        style={styles.select}
        value={questionType}
        onChange={(e) => setQuestionType(e.target.value)}
      >
        <option value="Multiple Choice">Multiple Choice</option>
        <option value="Short Answer">Short Answer</option>
        <option value="Essay">Essay</option>
      </select>
      <button style={styles.addButton} onClick={handleAddQuestion}>
        Add Question
      </button>
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
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #bdc3c7',
    marginBottom: '10px',
  },
  select: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #bdc3c7',
    marginBottom: '10px',
  },
  addButton: {
    padding: '10px 20px',
    backgroundColor: '#3498db',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default QuestionCreationTool;
