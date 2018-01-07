import {connect} from 'react-redux';
import {push} from 'react-router-redux'
import * as constants from "shared/constants";
import Profile from 'components/profile';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogoutButtonClick: () => {
      // Delete the token from localStorage
      // and boot the user back to the login page
      window.localStorage.removeItem(constants.API_STORAGE_KEY);
      dispatch(push('/login'))
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile)
