import React, { Fragment, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const View = (props) => {

    const getPermissionView = (user) => {
        if (user) {
            return user.permissions.map(permission => {
                return (
                    <Card key={permission._id} style={styles.card} onClick={() => viewHandler(permission._id)}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">{permission.title}</Typography>
                            <Typography variant="body2" color="textSecondary" component="p">{permission.description}</Typography>
                        </CardContent>
                    </Card>
                );
            });
        } else {
            return null;
        }
    };

    const viewHandler = (id) => {
        if (id === 'emp') {
            props.history.push('/employee');
        } else if (id === 'perfReview') {
            props.history.push('/reviews');
        } else {
            console.log('No route setup for this selection.');
        }
    };

    return (
        <Fragment>{getPermissionView(props.user)}</Fragment>
    );
};

export default withRouter(View);

// Styles For The Component.
const styles = {
    card: {
        width: '500px',
        margin: '10px',
        display: 'inline-block',
        cursor: 'pointer'
    }
};