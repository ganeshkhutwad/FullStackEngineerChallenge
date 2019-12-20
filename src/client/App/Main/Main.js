/**
 * To define route config.
 * @author Ganesh Khutwad.
 */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
    EmployeeContainer,
    PerformanceReviewContainer,
    EmployeeDetailsContainer,
    ViewContainer,
    LoginContainer,
    FeedbackReviewContainer
} from 'Containers';

const Main = () => {
    return (
        <Switch>
            <Route exact path='/' component={LoginContainer} />
            <Route path='/views' component={ViewContainer} />
            <Route exact path='/employee' component={EmployeeContainer} />
            <Route path='/reviews' component={PerformanceReviewContainer} />
            <Route path='/employee/:id' component={EmployeeDetailsContainer} />
            <Route path='/feedbackQuestions/:id' component={FeedbackReviewContainer} />
        </Switch>
    );
};

export default Main;
