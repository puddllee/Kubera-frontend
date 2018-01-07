import {connect} from 'react-redux';
import Login from 'components/login';

const mapStateToProps = (state) => {
  const {auth} = state;
  return {auth};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoginButtonClick: () => {
      window.location.href = `${process.env.REACT_APP_API_HOST}/api/v1/auth/google`;
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
