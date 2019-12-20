import React, { Fragment } from 'react';

const FeedbackReviewDetails = (props) => {
    const keys = Object.keys(props.feedback);
    return (
        <Fragment>
            {keys.map(key => {
                return (
                    <div>{key} : {props.feedback[key]}</div>
                )
            })}
        </Fragment>
    );
};

export default FeedbackReviewDetails;
