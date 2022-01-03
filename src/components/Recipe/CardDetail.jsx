import React from 'react'
import pizza from '../../img/pizza.jpeg'


function CardDetail({handleOpen}) {
    return (
        <>
            <div onClick={handleOpen}className="card-container">
                <div className="food-info">
                    <div className="title">Pizza</div>
                    <div className="details">20m</div>
                </div>
                <img src={pizza} alt="pizza img" />
            </div>
        </>
    )
}

export default CardDetail
