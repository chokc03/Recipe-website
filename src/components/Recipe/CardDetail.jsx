import React from 'react'
import { useSelector } from 'react-redux'

function CardDetail({handleOpen}) {
    const categories = useSelector(state => state.categoryReducer.categories.meals)
    return (
        <>
            {categories&&categories.map((category)=>(
                <div onClick={handleOpen} key={category.idMeal} className="card-container">
                    <div className="food-info">
                        <div className="title">{category.strMeal}</div>
                    </div>
                    <img src={category.strMealThumb} alt={category.strMeal}/>
                </div>
            ))}
        </>
    )
}

export default CardDetail
