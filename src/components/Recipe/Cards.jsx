/*
  Writer : Kyungchan Cho
  This file helps to list the foods with the following category from the api
  Fisrt written Date : 2021.12.29
  Updated Date : 2022.01.09
*/

import React, {useEffect} from 'react';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import CardDetails from './CardDetail';
import { setCategory } from '../../redux/modules/category';
import '../../styles/Cards.scss'

function Cards(props) {
    const selectedCategory = useSelector(state=>state.selectedCategoryReducer.category);
    const dispatch  = useDispatch()

    useEffect(()=>{
        const fetchCategory=async()=>{
            try{
                const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`)
                dispatch(setCategory(res.data));
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
            <div className="food-card-grid">
                <CardDetails handleOpen={props.handleOpen}/>                  
            </div>
        </div>
    )
}

export default Cards
