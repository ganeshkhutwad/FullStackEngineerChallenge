import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const PerformanceReview = (props) => {

    useEffect(() => {
        if (props.user.role === 'employee') {
            props.history.push('/employee');
        }
    }, []);
    return (
        <h3>Performance Review Component</h3>
    );
};

export default withRouter(PerformanceReview);
