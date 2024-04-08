import React from 'react';

function Project({ imageUrl, title, link }) {
  const styles = {
    container: {
      textAlign: 'center',
      marginBottom: '20px',
    },
    image: {
      width: '200px', // Adjust as needed
      height: 'auto',
      marginBottom: '10px',
    },
    title: {
      color: 'blue',
      textDecoration: 'underline',
    },
  };

  return (
    <div style={styles.container}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={imageUrl} alt={title} style={styles.image} />
      </a>
      <div style={styles.title}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </div>
    </div>
  );
}

export default Project;