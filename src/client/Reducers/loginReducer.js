/**
    Reducer to update application state based on action type.
    @author Ganesh Khutwad
*/
import { actionTypes } from 'Actions';

const { LOGIN_SUCCESS } = actionTypes;

const initialState = {
    userInfo: null,
    loginStatus: false
};

export default function loginReducer(state = initialState, action) {
    switch(action.type) {

        case LOGIN_SUCCESS: {
            return {
                ...state,
                userInfo: action.userInfo,
                loginStatus: true
            };
        }

        default: { return state; }
            
    }
}