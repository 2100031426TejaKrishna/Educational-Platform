import React from 'react';

const StudentSubmissionsList = () => {
  const submissions = [
    { id: 1, studentName: 'John Doe', submitted: true },
    { id: 2, studentName: 'Jane Smith', submitted: true },
  ];

  return (
    <div className="student-submissions-list">
      <h3>Submissions:</h3>
      <ul>
        {submissions.map((submission) => (
          <li key={submission.id}>
            {submission.studentName} - {submission.submitted ? 'Submitted' : 'Not Submitted'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentSubmissionsList;
