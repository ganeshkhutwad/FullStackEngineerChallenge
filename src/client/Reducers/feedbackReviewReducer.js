/**
 *  Reducer to update application state based on action type.
    @author Ganesh Khutwad
 */
import { actionTypes } from 'Actions';

const { LOAD_FEEDBACK_QUESTIONS_SUCCESS, ADD_FEEDBACK_SUCCESS, UNSET_FEEDBACK_ADDED_STATUS } = actionTypes;

const initialState = {
    feedbackQuestions: [],
    feedbackAdded: false
};

export default function feedbackReviewReducer(state = initialState, action) {
    switch(action.type) {

        case LOAD_FEEDBACK_QUESTIONS_SUCCESS: {
            return {
                ...state,
                feedbackQuestions: action.feedbackQuestions
            };
        }

        case ADD_FEEDBACK_SUCCESS: {
            return {
                ...state,
                feedbackAdded: true
            };
        }

        case UNSET_FEEDBACK_ADDED_STATUS: {
            return {
                ...state,
                feedbackAdded: false
            }
        }

        default: {
            return state;
        }
            
    }
}