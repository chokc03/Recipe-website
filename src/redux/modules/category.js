const SET_CATEGORY = 'category/SET_CATEGORY';
const SELECTED_CATEGORY = 'category/SELECTED_CATEGORY'

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

const initialCategoryState ={
    categories:[]
}
const initialSelectedCategoryState ={
    category:["Beef"]
}

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



