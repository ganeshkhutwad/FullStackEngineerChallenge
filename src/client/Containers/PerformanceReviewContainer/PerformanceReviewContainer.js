import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { PerformanceReview } from 'Components';

const mapStateToProps = (state) => {
    return {
        user: state.login.userInfo
    };
};

const mapDispatchToProps = (dispatch) => {
    return { };
};

const PerformanceReviewContainer = connect(mapStateToProps, mapDispatchToProps)(PerformanceReview);

export default PerformanceReviewContainer;