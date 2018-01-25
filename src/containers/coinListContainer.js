import {connect} from 'react-redux';
import * as coinActions from 'modules/coins/actions';
import CoinList from 'components/coinList';

const mapStateToProps = (state) => {
  const coins = state.coins;
  return {coins}
};

const mapDispatchToProps = (dispatch) => {
  return {
    onMount: () => {
      dispatch(coinActions.getCoins());
      dispatch(coinActions.getSparklines());
    },
    onCoinSelect: (symbol) => {
      dispatch(coinActions.getCoinHistory(symbol));
      dispatch(coinActions.toggleCoinSelect(symbol));
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoinList);
