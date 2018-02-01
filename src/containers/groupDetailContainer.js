import {connect} from 'react-redux';
import GroupDetail from 'components/groupDetail';
import * as groupActions from 'modules/groups/actions';

const mapStateToProps = (state) => {
  const groups = state.groups;
  return {groups};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onMount: () => {
      const {uid} = ownProps.match.params;
      dispatch(groupActions.getGroup(uid));
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupDetail);
