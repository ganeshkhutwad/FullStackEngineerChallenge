/**
    @author Ganesh Khutwad
    This file contains action creators related to Login.
 */
import axios from 'axios';
import actionTypes from './actionTypes';

// Action Types.
const { LOGIN_SUCCESS } = actionTypes;

// Returns object when successful login. 
const loadLoginSucces = (userInfo) => {
    return {
        userInfo,
        type: LOGIN_SUCCESS
    };
};

// Wrapped all Action Creators to easily accessible outside module.
const loginActions = {
    // Action creator to login.
    login: (credentials) => {
        return (dispatch) => {
            return axios.post('/login', credentials)
                .then((res) => dispatch(loadLoginSucces(res.data)))
                .catch((error) => { throw(error) });
        };
   
    }
};

export default loginActions;