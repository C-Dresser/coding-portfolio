export default function Contact() {
  
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
      <h2>Contact</h2>
      <p style={styles.innerContainer}>
        test
      </p>
    </div>
  );
}