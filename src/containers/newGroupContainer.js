import {connect} from 'react-redux';
import NewGroup from 'components/newGroup';
import * as groupActions from 'modules/groups/actions';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (data) => {
      dispatch(groupActions.createGroup(data));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewGroup);
