import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {getProfile} from 'modules/profile/actions';
import Base from 'components/base';

const mapStateToProps = (state) => {
  return {routing: state.routing};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onMount: () => {
      dispatch(getProfile());
    }
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Base));
