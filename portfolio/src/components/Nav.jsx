import React from 'react';

export default function Nav() {
  const linkStyle = { border: '1px black', padding: '5px' };

  return (
    <nav className="main-header-menu" style={{ backgroundColor: 'black', color: 'white' }}>
      <section
        style={{
          display: 'flex',
          fontFamily: 'helvetica',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'space-around',
          padding: '10px',
          position: 'fixed',
          left: 0,
          top: 130,
          backgroundColor: '#333333',
          width: '100%',
        }}
      >
        <div style={linkStyle}>
          <a href="/pages/About.jsx">About Me</a>
        </div>
        <div style={linkStyle}>
          <a href="/pages/Portfolio">Portfolio</a>
        </div>
        <div style={linkStyle}>
          <a href="/pages/Contact">Contact</a>
        </div>
        <div style={linkStyle}>
          <a href="/pages/Resume">Resume</a>
        </div>
      </section>
    </nav>
  );
}
