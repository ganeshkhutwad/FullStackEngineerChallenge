import React, {Fragment} from 'react';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const SubHeader = (props) => {
    return (
        <Fragment>
            <div style={styles.subHeader}>
                <ArrowBackIcon style={styles.backButton} onClick={props.backButtonHandler} />
                <span style={styles.subHeaderText}>{props.header}</span>
            </div>
            {props.addBtn && (
                <Fab size="small" color="primary" aria-label="add"  style={styles.addBtn} onClick={props.addEmployeeHandler}>
                    <AddIcon />
                </Fab>
            )}
        </Fragment>
    );
}

export default SubHeader;

// Styles for component.
const styles = {
    backButton: {
        position: 'relative',
        top: '10px',
        cursor: 'pointer',
        fontSize: '30px'
    },
    subHeaderText: {
        marginLeft: '10px'
    },
    subHeader: {
        display: 'inline-block',
        width: '50%'
    },
    addBtn: {
        float: 'right',
        marginRight: '15px',
        marginTop: '5px'
    }
};