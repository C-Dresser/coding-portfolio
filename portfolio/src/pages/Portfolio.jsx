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
      <ui>
        <li>
          <a href="https://c-dresser.github.io/password-generator/" target="_blank" rel="noopener noreferrer" style={styles.link}>Password Generator</a>
        </li>
        <li>
          <a href="https://c-dresser.github.io/coding-quiz/" target="_blank" rel="noopener noreferrer" style={styles.link}>Multiple Choice Quiz</a>
        </li>
        <li>
          <a href="https://c-dresser.github.io/work-day-scheduler/" target="_blank" rel="noopener noreferrer" style={styles.link}>Workday Scheduler</a>
        </li>
        <li>
          <a href="https://rachaelkstokes.github.io/trailblazerz/" target="_blank" rel="noopener noreferrer" style={styles.link}>Trailblazerz</a>
        </li>
        <li>
          <a href="https://github.com/C-Dresser/express-note-taker/blob/main/readme.md" target="_blank" rel="noopener noreferrer" style={styles.link}>Express Note Taker</a>
        </li>
        <li>
          <a href="https://github.com/C-Dresser/sql-employee-tracker/blob/main/README.md" target="_blank" rel="noopener noreferrer" style={styles.link}>SQL Employee Tracker</a>
        </li>
      </ui>
    </div>
  );
}