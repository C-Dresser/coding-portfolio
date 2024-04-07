import React from 'react';

const styles = {
  header: {
    backgroundColor: '#282a36' ,
    color: 'white',
    textAlign: 'center',
    padding: '10px',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    fontFamily: 'lucida console thin',
  },
};

function Header() {
    return (
      <header style={styles.header}>
        <h1>curtisDresser</h1>
      </header>
    );
  }
  
  export default Header;
  