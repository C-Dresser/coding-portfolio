import React from 'react';

const styles = {
    footer: {
      backgroundColor: '#24242e',
      color: '#6272a4',
      textAlign: 'center',
      padding: '10px',
      position: 'fixed',
      left: 0,
      bottom: 0,
      width: '100%',
    },
    text: {
      fontFamily: 'lucida console thin',
      color: '#6272a4',
      display: 'flex',
      justifyContent: 'space-around',
    },
  };

  function Footer() {
    return (
      <footer style={styles.footer}>
        <div style={styles.text}>
          <a href="https://github.com/C-Dresser" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/curtis-dresser-16a792302/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://www.facebook.com/curtis.dresser/" target="_blank" rel="noopener noreferrer">Facebook</a>
        </div>
      </footer>
    );
  }
  
  export default Footer;