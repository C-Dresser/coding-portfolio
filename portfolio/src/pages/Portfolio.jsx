export default function Portfolio() {

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
          <h2>Portfolio</h2>
          <p style={styles.innerContainer}>
          Here are some of the projects I have worked on:
        </p>
      </div>
    );
  }