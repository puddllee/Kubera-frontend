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
      // Fetch the first 10 coins immediately and then fetch the first 50 staggered after that
      // at 2 second intervals
      const initialFetchSize = 5;

      for (let i=0; i < list.length; i++){
        if (i<=initialFetchSize){
          dispatch(coinActions.getCoinHistory(list[i].symbol));
        } else if(i<50) {
          setTimeout(()=>{
            dispatch(coinActions.getCoinHistory(list[i].symbol));
          }, (i-initialFetchSize)*1000);
        }
      }
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
