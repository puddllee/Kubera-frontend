import {connect} from 'react-redux';
import * as actions from 'modules/messages/actions';
import Messages from 'components/messages';

const mapStateToProps = (state) => {
  return {messages: state.messages};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRemove: (id) => {
      dispatch(actions.removeMessage(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);
