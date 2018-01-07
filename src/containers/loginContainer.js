import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import Login from 'components/login';
import * as constants from "../shared/constants";

const mapStateToProps = (state) => {
  const {auth} = state;
  return {auth};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onMount: (profile) => {
      const token = window.localStorage.getItem(constants.API_STORAGE_KEY);
      if (profile.id && token){
        dispatch(push('/'));
      }
    },
    onLoginButtonClick: () => {
      window.location.href = `${process.env.REACT_APP_API_HOST}/api/v1/auth/google`;
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
