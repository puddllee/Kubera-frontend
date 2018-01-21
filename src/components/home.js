import React from 'react';
import {
  Flex,
  Box,
  Button,
  Input,
  Heading,
  Divider
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

  componentWillReceiveProps(nextProps){
    if (nextProps.coins.coinList.length !== this.props.coins.coinList.length){
      this.props.onCoinListFetched(nextProps.coins.coinList);
    }
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
    this.setState({...this.state, visibleCoinLimit: this.state.visibleCoinLimit+50})
  }

  handleCoinSelect(symbol){
    return () => {
      this.props.onCoinSelect(symbol);
    }
  }

  render() {
    const {coins} = this.props;
    const {visibleCoinLimit, filteredCoins} = this.state;
    const visibleCoins = filteredCoins ? filteredCoins.slice(0, visibleCoinLimit) : coins.coinList.slice(0, visibleCoinLimit);
    const chartHeight = window.innerHeight/4;
    const chartWidth = 4*window.innerWidth/5;
    const history = (s) => coins.histories[s];
    const chartedCoins = coins.selectedCoinSymbols.map((s)=>({symbol: s, data: history(s)}));
    const showChart = chartedCoins.filter((c)=>c.data && c.data.length > 0).length > 0;

    if (coins.loading.coinList){
      return (
        <Flex wrap m={3}>
          <Box width={1}>
            <Heading is="h1" f={[3,6,9]}>Kubera</Heading>
            <Divider color={colors.navy}/>
          </Box>
          <Heading f={[1,2,3]} children="Loading Coins"/>
        </Flex>
      )
    }


    return (
      <Flex wrap m={[0,3]} flex="1 auto">
        <Box width={1}>
          <Heading is="h1" f={[3,6,9]}>Kubera</Heading>
          <Divider color={colors.navy}/>
        </Box>
        {showChart && (
          <Box width={1} mx="auto" mb={5}>
            <PriceChart coins={chartedCoins} width={chartWidth} height={chartHeight} loading={coins.loading.coinHistory}/>
          </Box>
        )}
        <Box width={1}>
          <form onSubmit={this.handleFilterCoins.bind(this)}>
            <Input name="query"
                  f={[1, 2, 3]}
                  onChange={this.handleFilterQueryChange.bind(this)}
                  placeholder='Filter Coins'
            />
          </form>
        </Box>
        {visibleCoins.map((c, idx) => (
          <Box width={[1, 1/2, 1/3, 1/4, 1/5]}  key={idx}>
            <CoinListItem coin={c} history={coins.sparklines[c.symbol]} onClick={this.handleCoinSelect(c.symbol).bind(this)}/>
          </Box>
        ))}
        {visibleCoins.length !== coins.coinList.length &&
          <Box width={1}>
            <Flex align="center">
              <Button mx="auto" mt={2} bg={colors.navy} onClick={this.handleShowMoreCoins.bind(this)}>Show More Coins</Button>
            </Flex>
          </Box>
        }
      </Flex>
    )
  }
}
