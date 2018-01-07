import {connect} from 'react-redux';
import Home from 'components/home';
import * as coinActions from 'modules/coins/actions';

const mapStateToProps = (state) => {
  const coins = state.coins;
  return {coins};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onMount: () => {
      dispatch(coinActions.getCoins());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
