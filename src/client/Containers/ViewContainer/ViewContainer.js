import { connect } from 'react-redux';

import { View } from 'Components';

const mapStateToProps = (state) => {
    return { user: state.login.userInfo };
};

const mapDispatchToProps = (dispatch) => {
    return { };
};

const ViewContainer = connect(mapStateToProps, mapDispatchToProps)(View);

export default ViewContainer;