import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AssessmentDashboard from './components/AssessmentDashboard/AssessmentDashboard';
import AssessmentReviewPage from './components/AssessmentReview/AssessmentReviewPage';
import GradingReviewPage from './components/GradingReview/GradingReviewPage';
import QuestionBankManagementPage from './components/QuestionBankManagement/QuestionBankManagementPage';
import StudentAssessmentPage from './components/StudentAssessment/StudentAssessmentPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/assessment-dashboard" element={<AssessmentDashboard />} />
        <Route path="/assessment-review" element={<AssessmentReviewPage />} />
        <Route path="/grading-review" element={<GradingReviewPage />} />
        <Route path="/question-bank-management" element={<QuestionBankManagementPage />} />
        <Route path="/student-assessment" element={<StudentAssessmentPage />} />
      </Routes>
    </Router>
  );
};

export default App;
