import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Nav/Navbar';
import Cards from './components/Recipe/Cards';
import Recipies from './components/Recipe/Recipies';

function App() {
  const[categories,setCategories]=useState({})
  const[close, setClose] = useState(false);
  const handleOpen=()=>{
    setClose(true);
  }
  const handleClose=()=>{
    setClose(false);
  }
  useEffect(()=>{
    const fetchCategoryData = async()=>{
      try{
        const res = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
        setCategories(res.data);
      }catch(e){
        console.log(e);
      };
    }
    fetchCategoryData();
  },[]);
  

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
