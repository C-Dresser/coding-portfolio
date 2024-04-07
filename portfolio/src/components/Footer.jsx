import React from 'react';

const styles = {
    footer: {
      backgroundColor: 'black',
      color: 'white',
      textAlign: 'center',
      padding: '10px',
      position: 'fixed',
      left: 0,
      bottom: 0,
      width: '100%',
    },
  };

function Footer() {
    return (
        <footer style={styles.footer}>
            <p>This React application was created by Curtis Dresser</p>
        </footer>
    );
}

export default Footer;