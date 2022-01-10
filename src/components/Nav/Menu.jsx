/*
  Writer : Kyungchan Cho
  This file helps to list the categories got from the api in the navbar
  Fisrt written Date : 2021.12.29
  Updated Date : 2022.01.09
*/

import React,{useState,useEffect} from 'react'
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { selectedCategory } from '../../redux/modules/category';

function Menu() {
    const dispatch = useDispatch();
    const[categories,setCategories]=useState([]);

    //Adding selected Category into selectedCategory state by using useDispatch
    const handleCategory=(e)=>{
        dispatch(selectedCategory(e.target.innerHTML))
    }
    useEffect(()=>{
        const fetchCategoryData = async()=>{
          //Getting data from API and adding to categories state
          try{
            const res = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
            setCategories(res.data.categories);
          }
          //Catches Error when occur
          catch(e){
            console.log(e);
          };
        };
        fetchCategoryData();
    },[]);
      
    return (
        <div>
            <ul>
                {categories.map(category=>(
                    <li onClick={handleCategory} key={category.idCategory}>
                      {category.strCategory}
                      
                    </li>
                ))}    
            </ul>
        </div>
    )
}
export default Menu
