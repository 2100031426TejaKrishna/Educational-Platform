import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div style={styles.container}>
      <div style={styles.overlay}>
        <h1 style={styles.title}>Welcome to the Educational Platform</h1>
        <div style={styles.buttonContainer}>
          <button style={styles.button} onClick={() => handleNavigation('/assessment-dashboard')}>
            Assessment Dashboard
          </button>
          <button style={styles.button} onClick={() => handleNavigation('/assessment-review')}>
            Assessment Review
          </button>
          <button style={styles.button} onClick={() => handleNavigation('/grading-review')}>
            Grading Review
          </button>
          <button style={styles.button} onClick={() => handleNavigation('/question-bank-management')}>
            Question Bank Management
          </button>
          <button style={styles.button} onClick={() => handleNavigation('/student-assessment')}>
            Student Assessment
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: '100vh',
    backgroundImage: 'url("https://img.freepik.com/free-vector/students-using-e-learning-platform-video-laptop-graduation-cap-online-education-platform-e-learning-platform-online-teaching-concept_335657-795.jpg?w=1060&t=st=1725080211~exp=1725080811~hmac=0ecdd9a410fc3657064c427e18889afbe0f473f47681092d3d88c380290e427c")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '40px',
    borderRadius: '10px',
    textAlign: 'center',
  },
  title: {
    color: '#fff',
    fontSize: '36px',
    marginBottom: '30px',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  button: {
    padding: '15px 30px',
    fontSize: '18px',
    color: '#fff',
    backgroundColor: '#3498db',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default HomePage;
