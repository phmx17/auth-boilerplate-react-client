import { combineReducers } from 'redux';
import {reducer as formReducer } from 'redux-form';
import auth from 'reducers/auth';


export default combineReducers({
    auth,
    form: formReducer
})