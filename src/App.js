import React, {useState} from 'react';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Nav/Navbar';
import Cards from './components/Recipe/Cards';
import Recipies from './components/Recipe/Recipies';

function App() {
  const[close, setClose] = useState(false);
  const handleOpen=()=>{
    setClose(true);
  }
  const handleClose=()=>{
    setClose(false);
  }
  return (
    <div className="App">
      <Navbar/>
      <Cards handleOpen={handleOpen}/>
      <Recipies close={close} handleClose={handleClose}/>
      <Footer/>
    </div>
  ); 
}

export default App;
