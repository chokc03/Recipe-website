/*
  Writer : Kyungchan Cho
  This file makes the elements for the reducer for category
  Fisrt written Date : 2021.12.29
  Updated Date : 2022.01.09
*/

//Action Types
const SET_CATEGORY = 'category/SET_CATEGORY';
const SELECTED_CATEGORY = 'category/SELECTED_CATEGORY'

//Actions
export const setCategory = (category)=>{
    return{
        type:SET_CATEGORY,
        payload:category,
    }
}

export const selectedCategory = (category)=>{
    return{
        type:SELECTED_CATEGORY, 
        payload:category
    }
}

//InitialStates
const initialCategoryState ={
    categories:[]
}
const initialSelectedCategoryState ={
    category:["Beef"]
}

//Reducers
export const categoryReducer =(state=initialCategoryState, action)=>{
    switch (action.type){
        case SET_CATEGORY:
            return{
                ...state,
                categories:action.payload
            }
        default:
            return state
    }
}
export const selectedCategoryReducer =(state=initialSelectedCategoryState, action)=>{
    switch (action.type){
        case SELECTED_CATEGORY:
            return{
                ...state,
                category:action.payload,
            }
        default:
            return state
    }
}



