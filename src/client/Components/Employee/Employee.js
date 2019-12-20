/**
 * For Employee List.
 * @author Ganesh Khutwad.
 */
import React, { Fragment, useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';

import { SubHeader } from '../Shared';
import AddEmployeeView from './AddEmployee';

// Employee Component.
const Employee = (props) => {
    const [isAddView, setAddView] = useState(false);

    // Load employees when component loaded.
    useEffect(() => {
        props.actions.loadEmployees(props.user._id);
    }, []);

    // Load employees whenever new employee gets added.
    useEffect(() => {
        if (props.addOperationSuccess) {
            props.actions.loadEmployees(props.user._id);
        }
    }, [props.addOperationSuccess]);

    const listClickHandler = (employee) => {
        if (props.user.role === 'admin') {
            props.history.push(`/employee/${employee._id}`);
        } else {
            props.history.push(`/feedbackQuestions/${employee._id}`);
        }
    };

    const backButtonHandler = () => {
        if (isAddView) {
            setAddView(false);
        } else {
            props.history.push('/');
        }
    };

    const addEmployeeHandler = () => {
        setAddView(true);
        props.actions.setAddOperationSuccess(false);
    };

    const submitEmployeeInfo = (values) => {
        setAddView(false);
        props.actions.addEmployee(values);
    };

    const getReviewStatus = employee => {
        const found = employee.feedbacks.filter(feedback => feedback.reviewedBy === props.user.email);
        if (found.length) {
            return true;
        } else {
            return false;
        }
    };

    const getEmployeeView = () => {
        if (props.user.role === 'admin' && isAddView) {
            return (
                <AddEmployeeView
                    employees={props.employees}
                    addEmployee={submitEmployeeInfo}
                />
            );
        } else {
            return (
                <List>
                    {props.employees.map(employee =>
                        <ListItem key={employee._id} button>
                            <ListItemAvatar>
                                <Avatar
                                    alt={`Avatar ${employee.firstName} ${employee.lastName}`}
                                    src="./images/person1.png"
                                />
                            </ListItemAvatar>
                            <ListItemText id={employee._id} primary={`${employee.firstName} ${employee.lastName}`} />
                            {(props.user.role === 'admin' || !(employee.feedbacks && getReviewStatus(employee)))
                            	&& (
									<ListItemSecondaryAction style={styles.listItemAction} onClick={() => listClickHandler(employee)}>
                                		<ArrowForwardIcon color="inherit" />
                            		</ListItemSecondaryAction>
							)}
							{(props.user.role === 'employee' && (employee.feedbacks && getReviewStatus(employee)))
								&& (
									<CheckCircleIcon color="inherit" />
							)}
                        </ListItem>
                    )}
                </List>
            );
        }
    }
    return (
        <Fragment>
            <SubHeader
                header={isAddView ? 'Add Employee' : 'Employees List'}
                backButtonHandler={backButtonHandler}
                addEmployeeHandler={addEmployeeHandler}
                addBtn={props.user.role === 'admin' && !isAddView}
            />
            {getEmployeeView()}
        </Fragment>
    );
};

export default withRouter(Employee);

const styles = {
    listItemAction: {
        cursor: 'pointer'
    }
};
