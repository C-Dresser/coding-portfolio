export default function Resume() {

    const styles = {
        container: {
            margin: '20px',
            },
        innerContainer: {
            padding: '20px',
            borderLeft: '1px solid #efefef',
            borderColor: '#6272a4',
            },
        };
    
      return (
        <div style={styles.container}>
          <h2>Resume</h2>
          <p style={styles.innerContainer}>
          My qualifications include a certificate in Full Stack Web Development and experience with HTML, CSS, JavaScript, Express, SQL, Handlebars, React, Node.js, and MongoDB. Take a look at my resume:
        </p>
      </div>
    );
  }