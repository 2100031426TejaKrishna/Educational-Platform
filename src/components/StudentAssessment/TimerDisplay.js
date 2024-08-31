import React, { useState, useEffect } from 'react';

const TimerDisplay = () => {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.timerText}>Time Left: {formatTime(timeLeft)}</h2>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginBottom: '20px',
    padding: '10px',
    backgroundColor: '#e74c3c',
    color: '#fff',
    borderRadius: '5px',
  },
  timerText: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
};

export default TimerDisplay;
