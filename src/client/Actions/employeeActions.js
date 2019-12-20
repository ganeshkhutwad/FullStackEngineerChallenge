/**
 *  This file contains action creators related to employee managament feature.
    @author Ganesh Khutwad
 */
import axios from 'axios';
import actionTypes from './actionTypes';

// Action Types.
const {
    ADD_EMPLOYEE_SUCCESS,
    LOAD_EMPLOYEES_SUCCESS,
    UPDATE_EMPLOYEE_SUCCESS,
    DELETE_EMPLOYEE_SUCCESS,
    SET_ADD_OPERATION_SUCCESS,
    UNSET_FEEDBACK_ADDED_STATUS
} = actionTypes;

// Returns object when successful response received on get employees. 
const loadEmployeesSuccess = (dispatch, employees) => {
    dispatch({
        employees,
        type: LOAD_EMPLOYEES_SUCCESS
    });
    dispatch({ type: UNSET_FEEDBACK_ADDED_STATUS });
};

// Wrapped all Action Creators to easily accessible outside module.
const employeesActions = {
    // Action creator to load employees.
    loadEmployees: (userId) => {
        return (dispatch) => {
            return axios.get(`/employee`, {headers: {userId}})
                .then(res => loadEmployeesSuccess(dispatch, res.data))
                .catch(error => { throw(error) });
        };
    },

    // Action creator to add new employee.
    addEmployee: (employeeInfo) => {
        return (dispatch) => {
            return axios.post('/employee', employeeInfo)
                .then(() => dispatch(employeesActions.setAddOperationSuccess(true)))
                .catch(error => { throw error; });
        };
    },

    setAddOperationSuccess: (addOperationSuccess) => ({ addOperationSuccess, type: SET_ADD_OPERATION_SUCCESS })
};

export default employeesActions;
