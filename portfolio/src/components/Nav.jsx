import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Nav() {
  const styles = {
    link: {
      cursor: 'pointer',
      fontFamily: 'lucida console thin',
      fontWeight: 'lighter',
      position: 'relative',
      margin: '0 10px', // Add margin to separate links
    },
    navItem: {
      display: 'flex', // Display list items as flex items
      alignItems: 'center', // Center items vertically
    },
  };

  const currentPage = useLocation().pathname;

  return (
    <nav>
      <section
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          padding: '10px',
          position: 'fixed',
          left: 0,
          top: 130,
          backgroundColor: '#24242e',
          width: '100%',
        }}
      >
        <div style={styles.navItem}>
          <Link
            to="/About"
            className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
            style={styles.link}
          >
            About
          </Link>
        </div>
        <div style={styles.navItem}>
          <Link
            to="/Portfolio"
            className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
            style={styles.link}
          >
            Portfolio
          </Link>
        </div>
        <div style={styles.navItem}>
          <Link
            to="/Contact"
            className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
            style={styles.link}
          >
            Contact
          </Link>
        </div>
        <div style={styles.navItem}>
          <Link
            to="/Resume"
            className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
            style={styles.link}
          >
            Resume
          </Link>
        </div>
      </section>
    </nav>
  );
}
