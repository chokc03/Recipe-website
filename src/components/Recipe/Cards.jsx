/*
  Writer : Kyungchan Cho
  This file helps to list the foods with the following category from the api
  Fisrt written Date : 2021.12.29
  Updated Date : 2022.05.23
*/

import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import CardDetails from './CardDetail';
import { setCategory } from '../../redux/modules/category';
import Loading from '../Loading';
import '../../styles/Cards.scss'

function Cards(props) {
    const selectedCategory = useSelector(state=>state.selectedCategoryReducer.category);
    const dispatch  = useDispatch()
    //Added loading state
    //If loadingFoods is false then the getting data from API is in process
    //If loadingFoods is true then the getting data is complete
    const [loadingFoods,setLoadingFoods] = useState(false);

    useEffect(()=>{
        const fetchCategory=async()=>{
            try{
                await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`)
                .then((res)=>{
                    dispatch(setCategory(res.data));
                })
                setLoadingFoods(true);
            }catch(e){
                console.log(e);
            }
        }
        fetchCategory();   
        //Render only if when the disaptch and the selectedCategory occur
    },[selectedCategory,dispatch])

    return (
        <div className='cards'>
            <h3>{selectedCategory}</h3>
            <div className={loadingFoods?"loading-finish":"loading"}>
                <Loading/>
            </div>
            <div className={loadingFoods?"food-card-grid":"loading-cards"}>
                <CardDetails handleOpen={props.handleOpen}/>                  
            </div>
        </div>
    )
}

export default Cards
