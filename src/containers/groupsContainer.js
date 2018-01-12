import {connect} from 'react-redux';
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Groups);
