import React, { useState } from 'react';
import CreateAssessmentButton from './CreateAssessmentButton';
import SearchBar from './SearchBar';
import Filters from './Filters';
import AssessmentList from './AssessmentList';
import RecentActivities from './RecentActivities';
import AnalyticsSummary from './AnalyticsSummary';

const AssessmentDashboard = () => {
  const [assessments, setAssessments] = useState([
    { id: 1, title: 'Java Basics Quiz', date: '2024-08-01' },
    { id: 2, title: 'OOP Concepts Exam', date: '2024-08-10' },
    { id: 3, title: 'Data Structures Assignment', date: '2024-08-20' },
  ]);

  const [filteredAssessments, setFilteredAssessments] = useState(assessments);

  const handleCreateAssessment = (newAssessment) => {
    setAssessments([...assessments, newAssessment]);
    setFilteredAssessments([...assessments, newAssessment]);
  };

  const handleSearch = (searchTerm) => {
    const filtered = assessments.filter((assessment) =>
      assessment.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredAssessments(filtered);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>My Assessments</h1>
      <CreateAssessmentButton onCreate={handleCreateAssessment} />
      <SearchBar onSearch={handleSearch} />
      <Filters />
      <AssessmentList assessments={filteredAssessments} />
      <RecentActivities />
      <AnalyticsSummary />
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

export default AssessmentDashboard;
