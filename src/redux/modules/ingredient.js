const SET_RECIPE='ingredients/SET_RECIPE'
const SELECTED_RECIPE = 'ingredients/SELECTED_RECIPE'

export const setRecipe = (recipe) =>{
    return{
        type:SET_RECIPE,
        payload:recipe,
    }
}

export const selectedRecipe = (recipe)=>{
    return{
        type:SELECTED_RECIPE,
        payload:recipe,
    }
}

const initialRecipeState ={
    recipe:[]
}

const initialSelectedIdState={
    recipeId:[]
}

export const recipeReducer =(state=initialRecipeState, action)=>{
    switch (action.type){
        case SET_RECIPE:
            return{
                ...state,
                recipe:action.payload
            }
        default:
            return state
    }
}

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