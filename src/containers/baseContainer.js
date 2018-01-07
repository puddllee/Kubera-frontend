import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {push} from 'react-router-redux';
import {getProfile} from 'modules/profile/actions';
import Base from 'components/base';

const AUTH_KEY = '__KUBERA_AUTH_CODE__';

const mapStateToProps = (state) => {
  const {routing, auth, profile} = state;
  return {routing, auth, profile};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onMount: (auth) => {
      // If the user does not have an auth code, check
      // to see if there is one in the cookies,
      // else redirect to login;
      if (!auth.code) {
        const code = localStorage.getItem(AUTH_KEY);

        if (!code) {
          dispatch(push('/login'))
        }
      } else {
        dispatch(getProfile());
      }
    }
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Base));
