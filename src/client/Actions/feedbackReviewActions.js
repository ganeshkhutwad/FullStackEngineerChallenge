/**
 *  This file contains action creators related to feedback review.
    @author Ganesh Khutwad
 */
import axios from 'axios';
import actionTypes from './actionTypes';

// Action Types.
const { LOAD_FEEDBACK_QUESTIONS_SUCCESS, ADD_FEEDBACK_SUCCESS } = actionTypes;

// Returns object when successful response received for feedback questions. 
const loadFeedbackQuestionsSuccess = (feedbackQuestions) => {
    return {
        feedbackQuestions,
        type: LOAD_FEEDBACK_QUESTIONS_SUCCESS
    };
};

// Returns object when successful response received after adding feedback. 
const addFeedbackSuccess = () => {
    return { type: ADD_FEEDBACK_SUCCESS };
};

// Wrapped all Action Creators to easily accessible outside module.
const feedbackReviewActions = {
    // Action creator to load feedback questions.
    loadFeedbackQuestions: () => {
        return (dispatch) => {
            return axios.get(`/feedbackQuestion`)
                .then(res => dispatch(loadFeedbackQuestionsSuccess(res.data)))
                .catch(error => { throw(error) });
        };
    },

    // Action creator to add new feedback.
    addFeedback: (payload) => {
        return (dispatch) => {
            return axios.put('/feedbackQuestion', payload)
                .then(() => {
                    dispatch(addFeedbackSuccess());
                })
                .catch((error) => {
                    throw error;
                });
        }
    },
};

export default feedbackReviewActions;
