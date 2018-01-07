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
        <Box width={1}>

        </Box>
        {visibleCoins.map((c, idx) => (
          <Box width={[1, 1/2, 1/3, 1/4, 1/5]}>
            <CoinListItem coin={c} key={idx}/>
          </Box>
        ))}
      </Flex>
    )
  }
}
