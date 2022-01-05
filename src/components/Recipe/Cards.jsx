import React from 'react';
import CardDetails from './CardDetail';
import '../../styles/Cards.css'

function Cards(props) {
    return (
        <div className='card-grid-container'>
            <div className="card-grid">
                <CardDetails handleOpen={props.handleOpen}/>
                <CardDetails handleOpen={props.handleOpen}/>
                <CardDetails handleOpen={props.handleOpen}/>
                <CardDetails handleOpen={props.handleOpen}/>                    
            </div>
        </div>
    )
}

export default Cards
