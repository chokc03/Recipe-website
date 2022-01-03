import React from 'react'
import pizza from '../../img/pizza.jpeg'
import '../../styles/Recipe.css';
import {CgCloseO} from 'react-icons/cg';

function Recipies({close, handleClose}) {
    return (
        <div className={close?'recipe-container':'recipe-off'}>
            <div className="header">
                <h2>Pizza</h2>
                <div onClick={handleClose} className="close"><CgCloseO /></div>
            </div>
            <img src={pizza} alt="pizza img" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ipsa voluptates ab tenetur laborum, sed saepe eligendi ipsam non. Nostrum, hic qui consequuntur ipsum praesentium aliquam saepe quam libero sed!</p>
            <div className="ingredients">
                   <span>Ingredients :</span>
                    hello askdjfaklfj
            </div>
            <div className="recipe-info">
                    <span>Recipe :<br /></span> 
                    <ol>
                        <li>!kasdflkajsdfkljsadfklasdjfhajsdhf</li>
                        <li>!asdjfajksd</li>
                        <li>!</li>
                    </ol>
            </div>
        </div>
    )
}

export default Recipies
