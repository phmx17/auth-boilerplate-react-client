import axios from 'axios'
import { AUTH_USER, AUTH_ERROR } from 'actions/types';

// signing up
export const signup = (formProps, callback) => async dispatch => {
    try {
    const response = await axios.post('http://localhost:5000/signup', formProps);    
    dispatch({
        type: AUTH_USER,
        payload: response.data.token
    });
    localStorage.setItem('token', response.data.token); // storage in browser in order to persist login state in case refresh button clicked    
    callback(); // activating the re-route to '/feature'
    } catch(e) {
        dispatch({ type: AUTH_ERROR, payload: 'Email already in use !'});
    }
};       

//signing in
export const signin = (formProps, callback) => async dispatch => {
    try {
    const response = await axios.post('http://localhost:5000/signin', formProps);    
    dispatch({
        type: AUTH_USER,
        payload: response.data.token
    });
    localStorage.setItem('token', response.data.token); // storage in browser in order to persist login state in case refresh button clicked    
    callback(); // activating the re-route to '/feature'
    } catch(e) {
        dispatch({ type: AUTH_ERROR, payload: 'Invalid login credentials !'});
    }
};  

//signing out
export const signout = () => {
    localStorage.removeItem('token');
    return {
        type: AUTH_USER,
        payload: ''
    };
};

// clear error messages when component loads
export const refresh = () => async dispatch => {
    dispatch({ type: AUTH_ERROR, payload: ''}); 
}