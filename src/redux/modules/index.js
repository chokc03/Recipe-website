import {combineReducers} from 'redux';
import { categoryReducer, selectedCategoryReducer } from './category';

const rootReducer = combineReducers({
    categoryReducer,
    selectedCategoryReducer
});

export default rootReducer;