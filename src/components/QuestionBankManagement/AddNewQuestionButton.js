import React, { useState } from 'react';

const AddNewQuestionButton = ({ onAddQuestion }) => {
  const [questionText, setQuestionText] = useState('');
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');

  const handleAdd = () => {
    if (questionText && category && difficulty) {
      const newQuestion = {
        id: Date.now(),
        text: questionText,
        category: category,
        difficulty: difficulty,
      };
      onAddQuestion(newQuestion);
      setQuestionText('');
      setCategory('');
      setDifficulty('');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.subtitle}>Add New Question</h2>
      <input
        style={styles.input}
        type="text"
        placeholder="Question Text"
        value={questionText}
        onChange={(e) => setQuestionText(e.target.value)}
      />
      <input
        style={styles.input}
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        style={styles.input}
        type="text"
        placeholder="Difficulty (e.g., Easy, Medium, Hard)"
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
      />
      <button style={styles.addButton} onClick={handleAdd}>
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
  addButton: {
    padding: '10px 20px',
    backgroundColor: '#3498db',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default AddNewQuestionButton;
