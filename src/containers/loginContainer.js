import {connect} from 'react-redux';
import Login from 'components/login';

const mapStateToProps = (state) => {
  const {profile} = state;
  return {profile};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
