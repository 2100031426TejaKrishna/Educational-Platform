import React, { useState } from 'react';

const AssessmentTypeSelection = () => {
  const [type, setType] = useState('quiz');

  const handleChange = (e) => setType(e.target.value);

  return (
    <div style={styles.fieldContainer}>
      <label htmlFor="type" style={styles.label}>Assessment Type:</label>
      <select id="type" value={type} onChange={handleChange} style={styles.select}>
        <option value="quiz">Quiz</option>
        <option value="assignment">Assignment</option>
        <option value="survey">Survey</option>
      </select>
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
  select: {
    width: '100%',
    padding: '12px',
    borderRadius: '5px',
    border: '1px solid #dcdcdc',
    fontSize: '16px',
    boxSizing: 'border-box',
  },
};

export default AssessmentTypeSelection;
