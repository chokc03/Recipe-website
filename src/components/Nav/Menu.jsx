import React from 'react'

function Menu({categories}) {
    return (
        <div>
            <ul>
                {categories.map(category=>(
                    <li>{category.strCategory}</li>
                ))}    
            </ul>
        </div>
    )
}

export default Menu
