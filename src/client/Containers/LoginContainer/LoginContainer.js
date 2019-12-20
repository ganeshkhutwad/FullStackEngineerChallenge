import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Login } from 'Components';
import { loginActions } from 'Actions';

const mapStateToProps = (state) => {
    return {
        loginStatus: state.login.loginStatus
    };
};

const mapDispatchToProps = (dispatch) => {
    return { actions: bindActionCreators(loginActions, dispatch) };
};

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;