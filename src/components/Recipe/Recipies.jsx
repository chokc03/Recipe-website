/*
  Writer : Kyungchan Cho
  This file helps give a detail instruction from the selected food from the card
  Fisrt written Date : 2021.12.29
  Updated Date : 2022.01.09
*/

import React,{useState, useEffect} from 'react'
import '../../styles/Recipe.scss';
import axios from 'axios';
import {CgCloseO} from 'react-icons/cg';
import { useSelector} from 'react-redux';


function Recipies({close, handleClose}) {
    const id = useSelector(state=>state.selectedIdReducer.recipeId);
    const [details, setDetails] = useState([]);
    useEffect(()=>{
        const fetchDetail=async()=>{
            try{
                const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
                setDetails(res.data.meals[0]);
            }
            catch(e){
                console.log(e);
            }
        }
        fetchDetail();
    },[id])
    
    return (
        <>
            <div className={close?'recipe-container':'recipe-off'}>
                <div className="header">
                    <h2>{details.strMeal}</h2>
                    <div onClick={handleClose} className="close"><CgCloseO /></div>
                </div>
                <img src={details.strMealThumb} alt={details.strMeal} />
                <a target="_blank" rel="noreferrer" href={details.strYoutube}>{details.strYoutube}</a>
                <div className="ingredients">
                    <span>Instructions :</span>
                    {details.strInstructions}
                </div>
            </div>
        </>
    )
}

export default Recipies
