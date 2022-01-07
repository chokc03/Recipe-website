import React, {useEffect} from 'react';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import CardDetails from './CardDetail';
import { setCategory } from '../../redux/modules/category';
import '../../styles/Cards.css'

function Cards(props) {
    const selectedCategory = useSelector(state=>state.selectedCategoryReducer.category);
    const dispatch  = useDispatch()

    useEffect(()=>{
        const fetchCategory=async()=>{
            const res = await axios
            .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`)
            .catch((e)=>{
                console.log(e);
            })
            dispatch(setCategory(res.data));
        }
        fetchCategory();        
    },[selectedCategory])

    return (
        <div className='card-grid-container'>
            <h3>{selectedCategory}</h3>
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
