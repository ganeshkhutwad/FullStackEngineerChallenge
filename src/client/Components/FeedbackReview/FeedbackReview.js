import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import FeedbackForm from './FeedbackForm';

const FeedbackReview = (props) => {

    useEffect(() => {
        props.actions.loadFeedbackQuestions();
    }, []);

    useEffect(() => {
        if (props.feedbackAdded) {
            props.history.push('/employee');
        }
    }, [props.feedbackAdded])

    const addFeedback = (obj) => {
        let feedback = {...obj, reviewedBy: props.user.email};

        const requestBody = {
            feedback,
            empId: props.match.params.id
        };
        props.actions.addFeedback(requestBody);
    }
    return (
        <FeedbackForm feedbackQuestions={props.feedbackQuestions} addFeedback={addFeedback} />
    );
};

export default withRouter(FeedbackReview);
