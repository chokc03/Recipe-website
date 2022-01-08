import {combineReducers} from 'redux';
import { categoryReducer, selectedCategoryReducer } from './category';
import {recipeReducer, selectedIdReducer} from './ingredient';

const rootReducer = combineReducers({
    categoryReducer,
    selectedCategoryReducer,
    selectedIdReducer
});

export default rootReducer;