styles = {
    footer: {
        backgroundColor: 'black',
        color: 'white',
        textAlign: 'center',
        padding: '10px',
    },
}

function Footer() {
    return (
        <footer style={styles.footer} className="footer">
            <p>This React application was created by Curtis Dresser</p>
        </footer>
    );
}