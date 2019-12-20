import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Employee } from 'Components';
import { employeeActions } from 'Actions';

const mapStateToProps = (state) => {
    return {
        employees: state.employee.employees,
        addOperationSuccess: state.employee.addOperationSuccess,
        user: state.login.userInfo
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(employeeActions, dispatch)
    };
};

const EmployeeContainer = connect(mapStateToProps, mapDispatchToProps)(Employee);

export default EmployeeContainer;