/*
  Writer : Kyungchan Cho
  This file makes the elements for the reducer for ingredients
  Fisrt written Date : 2021.12.29
  Updated Date : 2022.01.09
*/
//Action Type
const SELECTED_RECIPE = 'ingredients/SELECTED_RECIPE'

//Actions
export const selectedRecipe = (recipe)=>{
    return{
        type:SELECTED_RECIPE,
        payload:recipe,
    }
}

//IntialState
const initialSelectedIdState={
    recipeId:[]
}

//Reducer
export const selectedIdReducer = (state=initialSelectedIdState,action)=>{
    switch (action.type) {
        case SELECTED_RECIPE:
            return{
                ...state,
                recipeId:action.payload
            }
        default:
            return state
    }
}