/**
 * To display employee details.
 * @author Ganesh Khutwad.
 */
import React, { Fragment } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import _ from 'lodash';

import { FeedbackReviewDetails } from '../FeedbackReview';

const getReviewPermissions = (employees, reviewsList) => {
    const empHashMap = _.keyBy(employees, '_id');
    const list = reviewsList.map(id => {
        const empInfo = empHashMap[id];
        return `${empInfo.firstName} ${empInfo.lastName}`;
    });

    return list.toString();
};

// EmployeeDetails Component.
const EmployeeDetails = (props) => {
    const id = props.match.params.id;
    const getEmployee = id => props.employees.filter(employee => employee._id === id);
    const employee = getEmployee(id)[0];
    const reviewPermissions = getReviewPermissions(props.employees, employee.reviews);
    return (
        <Fragment>
        <h3>Employee Details Component</h3>
        <Card>
            <CardContent>
                <Typography variant="body2" component="p">{`${employee.firstName} ${employee.lastName}`}</Typography>
                <Typography variant="body2" component="p">{employee.email}</Typography>
                <Typography variant="body2" component="p">{`Can add reviews for: ${reviewPermissions}`}</Typography>
                <Typography variant="body2" component="p">Feedback Reviews</Typography>
                {employee.feedbacks.map(feedback => 
                    <FeedbackReviewDetails key={feedback.reviewedBy} feedback={feedback} />
                )}
            </CardContent>
        </Card>
        </Fragment>
    );
};

export default EmployeeDetails;
