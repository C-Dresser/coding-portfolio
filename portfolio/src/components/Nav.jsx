import React from 'react';

export default function Nav() {
  const linkStyle = {
    cursor: 'pointer',
    fontFamily: 'lucida console thin',
    fontWeight: 'lighter',
    position: 'relative',
  };

  return (
    <nav>
      <section
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'space-around',
          padding: '10px',
          position: 'fixed',
          left: 0,
          top: 130,
          backgroundColor: '#24242e',
          width: '100%',
        }}
      >
        <div style={linkStyle}>
          <a href="/pages/About">About Me</a>
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
