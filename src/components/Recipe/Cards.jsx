import React from 'react';
import CardDetails from './CardDetail';
import '../../styles/Cards.css'

function Cards() {
    return (
        <div>
            <div className="card-columns">
                <div className="1st-column">
                    <CardDetails/>
                    <CardDetails/>
                    <CardDetails/>
                    <CardDetails/>                    
                </div>
                <div className="2nd-column">
                    <CardDetails/>
                </div>
                <div className="3rd-column">
                    <CardDetails/>
                </div>
            </div>
        </div>
    )
}

export default Cards
