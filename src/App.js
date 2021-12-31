import './App.css';
import Footer from './components/Footer'
import Navbar from './components/Nav/Navbar'
import Cards from './components/Recipe/Cards';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
