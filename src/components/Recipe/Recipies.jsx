/*
  Writer : Kyungchan Cho
  This file helps give a detail instruction from the selected food from the card
  Fisrt written Date : 2021.12.29
  Updated Date : 2022.05.23
*/

import React,{useState, useEffect} from 'react'
import '../../styles/Recipe.scss';
import axios from 'axios';
import {CgCloseO} from 'react-icons/cg';
import Loading from '../Loading';
import { useSelector} from 'react-redux';


function Recipies({close, handleClose}) {
    const id = useSelector(state=>state.selectedIdReducer.recipeId);
    const [details, setDetails] = useState([]);
    const [loadingFoods,setLoadingFoods] = useState(false);

    useEffect(()=>{
        const fetchDetail=async()=>{
            try{
                //Initialize the data and the loading state in order to prevent collapsing with previous data
                setLoadingFoods(false);
                setDetails([]);
                await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
                .then((res)=>{
                    setDetails(res.data.meals[0]);
                })
                setLoadingFoods(true);
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
                <div className={loadingFoods?"loading-finish":"loading"}>
                    <Loading/>
                </div>
                <div className={loadingFoods?"recipe":"loading-recipe"}>
                    <div className="header">
                        <h2>{details.strMeal}</h2>
                        <div onClick={handleClose} className="close"><CgCloseO /></div>
                    </div>
                    <a target="_blank" rel="noreferrer" href={details.strYoutube}>
                        <img src={details.strMealThumb} alt={details.strMeal} />
                    </a>
                    <div className="ingredients">
                        <span>Instructions :</span>
                        <p>{details.strInstructions}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Recipies
