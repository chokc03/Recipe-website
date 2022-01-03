import React from 'react';
import CardDetails from './CardDetail';
import '../../styles/Cards.css'

function Cards(props) {
    return (
        <div>
            <div className="card-columns">
                <div className="1st-column">
                    <CardDetails handleOpen={props.handleOpen}/>
                    <CardDetails handleOpen={props.handleOpen}/>
                    <CardDetails handleOpen={props.handleOpen}/>
                    <CardDetails handleOpen={props.handleOpen}/>                    
                </div>
                <div className="2nd-column">
                    
                </div>
                <div className="3rd-column">
                    
                </div>
            </div>
        </div>
    )
}

export default Cards
