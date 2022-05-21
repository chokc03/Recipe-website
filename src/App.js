/*
  Writer : Kyungchan Cho
  This file combines all the componenets from one file to another
  Fisrt written Date : 2021.12.29
  Updated Date : 2022.01.09
*/

import React, {useState} from 'react';
import './styles/App.scss';
import Footer from './components/Footer';
import Navbar from './components/Nav/Navbar';
import Cards from './components/Recipe/Cards';
import Recipies from './components/Recipe/Recipies';

function App() {
  
  //Handling recipe instructions card
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
