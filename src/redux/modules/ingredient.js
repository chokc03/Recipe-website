const SELECTED_RECIPE = 'ingredients/SELECTED_RECIPE'


export const selectedRecipe = (recipe)=>{
    return{
        type:SELECTED_RECIPE,
        payload:recipe,
    }
}

const initialSelectedIdState={
    recipeId:[]
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