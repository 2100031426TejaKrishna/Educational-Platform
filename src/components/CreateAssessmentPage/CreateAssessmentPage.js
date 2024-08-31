import React, { useState } from 'react';
import AssessmentTitleField from './AssessmentTitleField';
import AssessmentTypeSelection from './AssessmentTypeSelection';
import QuestionBankAccess from './QuestionBankAccess';
import QuestionCreationTool from './QuestionCreationTool';

const AssessmentCreationPage = () => {
  const [assessmentTitle, setAssessmentTitle] = useState('');
  const [assessmentType, setAssessmentType] = useState('');
  const [questions, setQuestions] = useState([]);

  const handleAddQuestion = (newQuestion) => {
    setQuestions([...questions, newQuestion]);
  };

  const handleSaveAssessment = () => {
    const newAssessment = {
      title: assessmentTitle,
      type: assessmentType,
      questions: questions,
    };
    console.log('Assessment Saved:', newAssessment);
    // Here you can add functionality to save the assessment to your backend or state management.
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Create New Assessment</h1>
      <AssessmentTitleField value={assessmentTitle} onChange={setAssessmentTitle} />
      <AssessmentTypeSelection value={assessmentType} onChange={setAssessmentType} />
      <QuestionBankAccess onAddQuestion={handleAddQuestion} />
      <QuestionCreationTool onAddQuestion={handleAddQuestion} />
      <div style={styles.buttonContainer}>
        <button style={styles.saveButton} onClick={handleSaveAssessment}>
          Save Assessment
        </button>
      </div>
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
  buttonContainer: {
    marginTop: '20px',
    textAlign: 'center',
  },
  saveButton: {
    padding: '10px 20px',
    backgroundColor: '#2ecc71',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default AssessmentCreationPage;
