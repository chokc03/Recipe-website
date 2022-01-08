import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectedRecipe } from '../../redux/modules/ingredient';

function CardDetail({handleOpen}) {
    const categories = useSelector(state => state.categoryReducer.categories.meals);
    const dispatch = useDispatch();
    return (
        <>
            {categories&&categories.map((category)=>(
                <div onClick={handleOpen} key={category.idMeal}>
                    <div onClick={()=>dispatch(selectedRecipe(category.idMeal))} className="card-container">
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
