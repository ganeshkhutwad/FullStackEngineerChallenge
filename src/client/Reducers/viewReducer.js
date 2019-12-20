/**
    Reducer to update application state based on action type.
    @author Ganesh Khutwad
*/
import { actionTypes } from 'Actions';

const { LOAD_USER_INFO_SUCCESS } = actionTypes;

const initialState = {
    userInfo: null
};

export default function viewReducer(state = initialState, action) {
    switch(action.type) {

        case LOAD_USER_INFO_SUCCESS: {
            return {
                ...state,
                userInfo: action.userInfo
            };
        }

        default: { return state; }
            
    }
}