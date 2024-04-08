import React from 'react';
import SvgComponent from '../components/svgComponent.jsx';

export default function About() {
  const styles = {
    container: {
      margin: '20px',
    },
    innerContainer: {
      padding: '20px',
      borderLeft: '1px solid #efefef',
      borderColor: '#6272a4',
    },
    svgContainer: {
      display: 'flex',
      justifyContent: 'center',
      transform: 'scale(0.6)',
    },
  };

  return (
    <>
      <div style={styles.svgContainer}>
        <SvgComponent />
      </div>
      <div style={styles.container}>
        <h2>About Me</h2>
        <p style={styles.innerContainer}>
          I am a full stack web developer with a background in design. I have a passion for problem-solving and creating user-friendly applications. I am a lifelong learner and enjoy collaborating with others to create innovative solutions.
        </p>
      </div>
    </>
  );
}
