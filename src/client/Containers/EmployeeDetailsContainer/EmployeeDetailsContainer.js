import { connect } from 'react-redux';
import { EmployeeDetails } from 'Components';

const mapStateToProps = (state) => {
    return { employees: state.employee.employees };
};

const mapDispatchToProps = (dispatch) => {
    return { };
};

const EmployeeDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(EmployeeDetails);

export default EmployeeDetailsContainer;