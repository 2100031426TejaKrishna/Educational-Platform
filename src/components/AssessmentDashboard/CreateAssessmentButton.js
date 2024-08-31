import React, { useState } from 'react';

const CreateAssessmentButton = ({ onCreate }) => {
  const [showForm, setShowForm] = useState(false);
  const [assessmentTitle, setAssessmentTitle] = useState('');

  const handleCreate = () => {
    const newAssessment = {
      id: Date.now(),
      title: assessmentTitle,
      date: new Date().toISOString().split('T')[0],
    };
    onCreate(newAssessment);
    setAssessmentTitle('');
    setShowForm(false);
  };

  return (
    <div style={styles.container}>
      <button style={styles.button} onClick={() => setShowForm(!showForm)}>
        Create New Assessment
      </button>
      {showForm && (
        <div style={styles.form}>
          <input
            style={styles.input}
            type="text"
            placeholder="Assessment Title"
            value={assessmentTitle}
            onChange={(e) => setAssessmentTitle(e.target.value)}
          />
          <button style={styles.createButton} onClick={handleCreate}>
            Create
          </button>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    marginBottom: '20px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#3498db',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  form: {
    marginTop: '10px',
  },
  input: {
    padding: '10px',
    width: '70%',
    borderRadius: '5px',
    border: '1px solid #bdc3c7',
    marginRight: '10px',
  },
  createButton: {
    padding: '10px 20px',
    backgroundColor: '#2ecc71',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default CreateAssessmentButton;
