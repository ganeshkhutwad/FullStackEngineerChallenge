/**
 *  Reducer to update application state based on action type.
    @author Ganesh Khutwad.
 */
import { actionTypes } from 'Actions';

const {
    ADD_EMPLOYEE_SUCCESS,
    LOAD_EMPLOYEES_SUCCESS,
    UPDATE_EMPLOYEE_SUCCESS,
    DELETE_EMPLOYEE_SUCCESS,
    SET_ADD_OPERATION_SUCCESS
} = actionTypes;

const initialState = {
    employees: [],
    addOperationSuccess: false
};

export default function employeeReducer(state = initialState, action) {
    switch(action.type) {

        case LOAD_EMPLOYEES_SUCCESS: {
            return {
                ...state,
                employees: action.employees
            };
        }

        case SET_ADD_OPERATION_SUCCESS: {
            return {
                ...state,
                addOperationSuccess: action.addOperationSuccess
            };
        }

        default: {
            return state;
        }
            
    }
}