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
      const initialFetchSize = 50;

      for (let i=0; i < list.length; i++){
        if (i<=initialFetchSize) {
          setTimeout(()=>dispatch(coinActions.getCoinHistory(list[i].symbol)), i*250);
        }
      }
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
