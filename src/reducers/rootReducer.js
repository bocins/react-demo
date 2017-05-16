/**
 * Created by nabokov on 15.05.2017.
 */
import { combineReducers } from 'redux';
import formReducer from './formReducer';
import pageReducer from './pageReducer';

export default combineReducers({
    form: formReducer,
    page: pageReducer,
})