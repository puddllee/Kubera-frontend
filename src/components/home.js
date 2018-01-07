import React from 'react';
import {
  Flex,
  Box,
  Button,
  Heading,
  Divider
} from 'rebass';
import CoinListItem from 'components/coinListItem';
import colors from 'shared/colors';

export default class Home extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      selectedCoins: [],
      visibleCoinLimit: 50
    }
  }

  componentWillMount(){
    this.props.onMount();
  }

  handleShowMoreCoins(){
    this.setState({...this.state, visibleCoinLimit: this.state.visibleCoinLimit+50})
  }

  handleCoinSelect(symbol){
    return () => {
      if (this.state.selectedCoins.includes(symbol)){
        // Remove if already selected
        this.setState({...this.state, selectedCoins: this.state.selectedCoins.filter((c)=>c.symbol !== symbol)});
      } else {
        // Else add to the selected coins
        this.setState({...this.state, selectedCoins: [...this.state.selectedCoins, symbol]})
      }
    }
  }

  render() {
    const {coins} = this.props;
    const {visibleCoinLimit} = this.state;
    const visibleCoins = coins.coinList.slice(0, visibleCoinLimit);

    return (
      <Flex wrap m={3}>
        <Box width={1}>
          <Heading is="h1" f={[3,6,9]}>Kubera</Heading>
          <Divider color={colors.navy}/>
        </Box>
        <Box width={1} mx="auto">
        </Box>
        {visibleCoins.map((c, idx) => (
          <Box width={[1, 1/2, 1/3, 1/4, 1/5]}  key={idx} onClick={this.handleCoinSelect(c.symbol).bind(this)}>
            <CoinListItem coin={c}/>
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
