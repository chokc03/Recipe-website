/*
  Writer : Kyungchan Cho
  This file combines all the reducers I have in rootReducer
  Fisrt written Date : 2021.12.29
  Updated Date : 2022.01.09
*/

import {combineReducers} from 'redux';
import {categoryReducer, selectedCategoryReducer} from './category';
import {selectedIdReducer} from './ingredient';

//Combine all the reducer into one rootReducer
const rootReducer = combineReducers({
    categoryReducer,
    selectedCategoryReducer,
    selectedIdReducer
});

export default rootReducer;