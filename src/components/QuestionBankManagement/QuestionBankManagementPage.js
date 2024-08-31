import React, { useState } from 'react';
import QuestionList from './QuestionList';
import AddNewQuestionButton from './AddNewQuestionButton';
import Filters from './Filters';

const QuestionBankManagementPage = () => {
  const [questions, setQuestions] = useState([
    { id: 1, text: 'What is polymorphism in Java?', category: 'Java', difficulty: 'Medium' },
    { id: 2, text: 'Explain the MVC architecture.', category: 'Design Patterns', difficulty: 'Hard' },
    { id: 3, text: 'What is React?', category: 'JavaScript', difficulty: 'Easy' },
  ]);

  const [filteredQuestions, setFilteredQuestions] = useState(questions);

  const handleAddQuestion = (newQuestion) => {
    setQuestions([...questions, newQuestion]);
    setFilteredQuestions([...questions, newQuestion]);
  };

  const handleFilter = (filters) => {
    let filtered = questions;
    if (filters.category) {
      filtered = filtered.filter(q => q.category === filters.category);
    }
    if (filters.difficulty) {
      filtered = filtered.filter(q => q.difficulty === filters.difficulty);
    }
    setFilteredQuestions(filtered);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Question Bank Management</h1>
      <AddNewQuestionButton onAddQuestion={handleAddQuestion} />
      <Filters onFilter={handleFilter} />
      <QuestionList questions={filteredQuestions} />
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
  },
  title: {
    fontSize: '24px',
    marginBottom: '20px',
    textAlign: 'center',
  },
};

export default QuestionBankManagementPage;
