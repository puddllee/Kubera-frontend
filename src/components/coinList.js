import React from 'react';
import {
  Flex,
  Box,
  Button,
  Input,
  Heading,
  Text
} from 'rebass';
import CoinListItem from 'components/coinListItem';
import PriceChart from 'components/priceChart';
import colors from 'shared/colors';

export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      filterQuery: '',
      filteredCoins: null,
      visibleCoinLimit: 50
    }
  }

  componentWillMount(){
    this.props.onMount();
  }

  handleFilterCoins(e){
    e.preventDefault();

    const query = this.state.filterQuery;
    const coins = this.props.coins.coinList;
    const filteredCoins = coins.filter((c) => {
      return c.symbol.toLowerCase().includes(query) || c.name.toLowerCase().includes(query);
    });
    this.setState({filteredCoins})
  }

  handleFilterQueryChange(e){
    this.setState({filterQuery: e.target.value});
  }

  handleShowMoreCoins(){
    this.setState({visibleCoinLimit: this.state.visibleCoinLimit+50});
  }

  handleCoinSelect(symbol){
    return () => {
      this.props.onCoinSelect(symbol);
    }
  }

  render(){
    const {coins} = this.props;
    const {coinList, histories, selectedCoinSymbols, loading, sparklines} = coins;
    const {filteredCoins, visibleCoinLimit} = this.state;

    const visibleCoins = filteredCoins ? filteredCoins.slice(0, visibleCoinLimit) : coinList.slice(0, visibleCoinLimit);
    const chartedCoins = selectedCoinSymbols.map((s) => ({symbol: s, data: histories[s]}));
    const showChart = chartedCoins.filter((c) => c.data && c.data.length > 0).length > 0;

    // Set the height of the coin chart to half of the window height if the browser is portrait mobile
    // If the browser is landscape mobile, set it to the 3/5 window height
    // else, one quarter of the screen height
    let height = window.innerHeight/4;
    const mqPortrait = window.matchMedia("only screen and (orientation: portrait)");
    const mqLandscape = window.matchMedia("only screen and (orientation: landscape) and (max-device-width: 812px)");

    if(mqPortrait.matches){
      height = window.innerHeight/2;
    } else if(mqLandscape.matches){
      height = 3*window.innerHeight/5;
    }

    if (loading.coinList){
      return (
        <Flex wrap m={3}>
          <Box width={1}>
            <Heading is="h1" f={[1,2,3]}>Loading Coins</Heading>
          </Box>
        </Flex>
      );
    }

    return (
      <Flex wrap m={[0,3]} flex="1 auto">
        {loading.coinHistory && (
          <Box width={1} mx="auto">
            <Text>Loading Coin History</Text>
          </Box>
        )}
        {showChart && !loading.coinHistory && (
          <Box width={1} mx="auto" mb={5}>
            <PriceChart coins={chartedCoins} loading={loading.coinHistory} height={height}/>
          </Box>
        )}
        <Box width={1}>
          <form onSubmit={this.handleFilterCoins}>
            <Input name="query"
                   f={[1,2,3]}
                   onChange={this.handleFilterCoins.bind(this)}
                   placeholder="Filter Coins"
            />
          </form>
        </Box>
        {visibleCoins.map((c, idx) => (
          <Box width={[1, 1/2, 1/3]} key={idx}>
            <CoinListItem coin={c} history={sparklines[c.symbol]} onClick={this.handleCoinSelect(c.symbol).bind(this)}/>
          </Box>
        ))}
        {visibleCoins.length !== coinList.length && (
          <Box width={1}>
            <Flex align="center">
              <Button mx="auto" mt={2} bg={colors.navy} onClick={this.handleShowMoreCoins}>Show More Coins</Button>
            </Flex>
          </Box>
        )}
      </Flex>
    )

  }
}
