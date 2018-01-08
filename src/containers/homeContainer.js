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
    onCoinListFetched: (list) => {
      // Fetch the first 10 coins immediately
      const initialFetchSize = 5;

      for (let i=0; i < list.length; i++){
        if (i<=initialFetchSize) {
          dispatch(coinActions.getCoinHistory(list[i].symbol));
        }
      }
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
