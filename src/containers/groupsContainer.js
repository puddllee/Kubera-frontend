import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Groups from 'components/groups';
import * as groupActions from 'modules/groups/actions';

const mapStateToProps = (state) => {
  const groups = state.groups;
  return {groups};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onMount: () => {
      dispatch(groupActions.getGroups());
    }
  }
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Groups));
