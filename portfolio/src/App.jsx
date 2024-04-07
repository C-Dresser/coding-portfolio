import { Outlet } from 'react-router-dom';
import Header from './components/header';
import Nav from './components/Nav';
import Footer from './components/footer';


function App() {
  return (
    
    <>
      <Header />
      <Nav />
      <main>
        <Outlet/>
      </main>
      <Footer />
    </>
  );
}

export default App;