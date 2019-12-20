import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { FeedbackReview } from 'Components';
import { feedbackReviewActions } from 'Actions';

const mapStateToProps = (state) => {
    return {
        user: state.login.userInfo,
        feedbackQuestions: state.feedbackReview.feedbackQuestions,
        feedbackAdded: state.feedbackReview.feedbackAdded
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(feedbackReviewActions, dispatch)
    };
};

const FeedbackReviewContainer = connect(mapStateToProps, mapDispatchToProps)(FeedbackReview);

export default FeedbackReviewContainer;