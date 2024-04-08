import React from 'react';
import Project from '../components/project.jsx';
import gitCat from '../assets/github-mark-white.png';

export default function Portfolio() {

  const styles = {
    container: {
      margin: '20px',
    },
    innerContainer: {
      padding: '20px',
      borderLeft: '1px solid #efefef',
      borderColor: '#6272a4',
    },
    projectGrid: {
      display: 'grid',
      justifyContent: 'center',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '20px',
    },
  };

  return (
    <div style={styles.container}>
      <h2>Portfolio</h2>
      <p style={styles.innerContainer}>
        Here are some of the projects I have worked on:
      </p>
      <div style={styles.projectGrid}>
      <Project
        imageUrl="https://raw.githubusercontent.com/C-Dresser/password-generator/main/Assets/Images/Password-Generator-image.png"
        title="Password Generator"
        link="https://c-dresser.github.io/password-generator/"
      />
      <Project
        imageUrl="https://raw.githubusercontent.com/C-Dresser/coding-quiz/main/Assets/Images/quiz-question-screen.png"
        title="Multiple Choice Quiz"
        link="https://c-dresser.github.io/coding-quiz/"
      />
      <Project
        imageUrl="https://raw.githubusercontent.com/C-Dresser/work-day-scheduler/main/Assets/Work-Day-Scheduler-schedule-screen.png"
        title="Workday Scheduler"
        link="https://c-dresser.github.io/work-day-scheduler/"
      />
      <Project
        imageUrl="https://raw.githubusercontent.com/C-Dresser/weather-dashboard/main/assets/weather-dashboard-screenshot.png"
        title="Weather Dashboard"
        link="https://c-dresser.github.io/weather-dashboard/"
      />
      <Project
        imageUrl={gitCat}
        title="Express Note Taker"
        link="https://c-dresser.github.io/express-note-taker/"
      />
      <Project
        imageUrl={gitCat}
        title="Employee Tracker"
        link="https://github.com/C-Dresser/sql-employee-tracker/blob/main/README.md"
      />
      </div>
    </div>
  );
}