import React from 'react';
import {
  Flex,
  Box,
  Heading
} from 'rebass';
import CoinListItem from 'components/coinListItem';

export default class Home extends React.Component {
  componentWillMount(){
    this.props.onMount();
  }

  render() {
    const {coins} = this.props;
    const visibleCoins = coins.coinList.slice(0, 50);

    return (
      <Flex wrap m={3}>
        <Box width={1}>
          <Heading is="h1" f={[3,6,9]}>Kubera</Heading>
        </Box>
        <Box width={1/2}>
          {visibleCoins.map((c, idx) => (
            <CoinListItem coin={c} key={idx}/>
          ))}
        </Box>
      </Flex>
    )
  }
}
