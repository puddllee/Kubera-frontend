import {connect} from 'react-redux';
import {parse} from 'qs';
import {push} from 'react-router-redux';
import AuthCallback from 'components/authCallback';
import * as actions from 'modules/auth/actions';
import * as messageActions from 'modules/messages/actions';

const mapStateToProps = (state) => {
  const {auth} = state;
  return {auth};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onMount: () => {
      const {location} = ownProps;
      const query = parse(location.search.substr(1));

      // If the query params include a code,
      // dispatch the get profile action.
      // Else, they shouldn't be here, so
      // boot them back to login
      if(query.code){
        dispatch(actions.getToken(query.code));
      } else {
        dispatch(push('/login'))
      }
    },
    onProfileLoaded: (profile) => {
      dispatch(push('/'));
      dispatch(messageActions.addPrimaryMessage(`Welcome, ${profile.name}`))
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthCallback);

  // api/v1/auth/google/callback
