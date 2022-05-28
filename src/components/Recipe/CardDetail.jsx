/*
  Writer : Kyungchan Cho
  This file helps to give the detail foods for the selected category from the api
  Fisrt written Date : 2021.12.29
  Updated Date : 2022.05.23
*/

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectedRecipe } from '../../redux/modules/ingredient';

function CardDetail({handleOpen}) {
    //Using state from redux by using useSelector
    const categories = useSelector(state => state.categoryReducer.categories.meals);
    const dispatch = useDispatch();
    return (
        <>
            {categories&&categories.map((category)=>(
                <div className="food-card-wrapper" onClick={handleOpen} key={category.idMeal}>
                    <div onClick={()=>dispatch(selectedRecipe(category.idMeal))} className="food-card">
                        <div className="food-info">
                            <div className="title">{category.strMeal}</div>
                        </div>
                        <img src={category.strMealThumb} alt={category.strMeal}/>
                    </div>
                </div>
            ))}
        </>
    )
}

export default CardDetail
