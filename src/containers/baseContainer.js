import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {push} from 'react-router-redux';
import Base from 'components/base';

const mapStateToProps = (state) => {
  const {routing, auth, profile} = state;
  return {routing, auth, profile};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onMount: (auth) => {
      if(!auth.profile.id){
        dispatch(push('/login'));
      }
    }
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Base));
