import React from 'react';

const styles = {
  header: {
    backgroundColor: 'black',
    color: 'white',
    textAlign: 'center',
    padding: '10px',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
  },
};

function Header({ pageTitle }) {
  const currentPage = window.location.pathname.split('/').pop();
    return (
      <header style={styles.header}>
        <h1>{currentPage}</h1>
      </header>
    );
  }
  
  export default Header;
  