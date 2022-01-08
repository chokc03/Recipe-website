import React,{useState,useEffect} from 'react'
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { selectedCategory } from '../../redux/modules/category';

function Menu() {
    const dispatch = useDispatch();
    const[categories,setCategories]=useState([]);
    const handleCategory=(e)=>{
        dispatch(selectedCategory(e.target.innerHTML))
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
                    <li onClick={handleCategory} key={category.idCategory}>
                      {category.strCategory}
                      
                    </li>
                ))}    
            </ul>
        </div>
    )
}
export default Menu
