import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {push} from 'react-router-redux';
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
    },
    onGroupSelected: (uid) => {
      dispatch(push(`/groups/${uid}`))
    }
  }
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Groups));
