import React,{useState,useEffect} from 'react'
import axios from 'axios';

function Menu() {
    const[categories,setCategories]=useState([]);
    const[selectedCategory,setSelectedCategory]=useState('');
    const handleCategory=(e)=>{
        setSelectedCategory(e.target.innerHTML);
        console.log(selectedCategory);
    }
    useEffect(()=>{
        const fetchCategoryData = async()=>{
          try{
            const res = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
            setCategories(res.data.categories);
          }catch(e){
            console.log(e);
          };
        };
        fetchCategoryData();
      },[]);
    return (
        <div>
            <ul>
                {categories.map(category=>(
                    <li onClick={handleCategory} key={category.idCategory}>{category.strCategory}</li>
                ))}    
            </ul>
        </div>
    )
}
export default Menu
