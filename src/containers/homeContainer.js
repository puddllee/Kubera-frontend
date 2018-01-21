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
    },
    onCoinSelect: (symbol) => {
      dispatch(coinActions.getCoinHistory(symbol));
      dispatch(coinActions.toggleCoinSelect(symbol));
    },
    onCoinListFetched: () => {
      dispatch(coinActions.getSparklines())
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
