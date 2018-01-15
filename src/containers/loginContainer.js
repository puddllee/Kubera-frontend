import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import Login from 'components/login';
import * as constants from "../shared/constants";
import { routes } from 'shared/apiRoutes';

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
      window.location.replace(routes.auth.googleRedirect());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
