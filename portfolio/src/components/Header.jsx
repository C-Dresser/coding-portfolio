styles = {
    header: {
        backgroundColor: 'black',
        color: 'white',
        textAlign: 'center',
        padding: '10px',
        },
}

function Header() {
    return (
      <header style={styles.header} className="header">
        <h1>Home</h1>
      </header>
    );
  }
  
  export default Header;
  