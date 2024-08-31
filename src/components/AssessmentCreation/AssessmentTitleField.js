import React, { useState } from 'react';

const AssessmentTitleField = () => {
  const [title, setTitle] = useState('');

  const handleChange = (e) => setTitle(e.target.value);

  return (
    <div style={styles.fieldContainer}>
      <label htmlFor="title" style={styles.label}>Assessment Title:</label>
      <input
        id="title"
        type="text"
        value={title}
        onChange={handleChange}
        placeholder="Enter assessment title"
        style={styles.input}
      />
    </div>
  );
};

const styles = {
  fieldContainer: {
    marginBottom: '20px',
  },
  label: {
    fontWeight: '500',
    marginBottom: '8px',
    display: 'inline-block',
    color: '#34495e',
  },
  input: {
    width: '100%',
    padding: '12px',
    borderRadius: '5px',
    border: '1px solid #dcdcdc',
    fontSize: '16px',
    boxSizing: 'border-box',
  },
};

export default AssessmentTitleField;
