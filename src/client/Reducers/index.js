/**
@author Ganesh Khutwad
Create root reducer by combining all reducers.
 */
import { combineReducers } from 'redux';
import employee from './employeeReducer';
import view from './viewReducer';
import login from './loginReducer';
import feedbackReview from './feedbackReviewReducer';

const rootReducer = combineReducers({
    employee,
    view,
    login,
    feedbackReview
});

export default rootReducer;
