import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {push} from 'react-router-redux';
import Base from 'components/base';
import * as actions from "modules/auth/actions";
import * as constants from "shared/constants";

const mapStateToProps = (state) => {
  const {routing, auth, profile} = state;
  return {routing, auth, profile};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onMount: (auth) => {
      // If there is no profile loaded,
      // but there is a token, try to
      // fetch the profile with the token.
      // Otherwise, just log out
      if(!auth.profile.id){
        if (window.localStorage.getItem(constants.API_STORAGE_KEY)){
          dispatch(actions.getProfile())
        } else {
          dispatch(push('/login'));
        }
      }
    }
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Base));
