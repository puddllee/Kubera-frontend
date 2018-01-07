import React from 'react';
import {
  Avatar,
  Flex,
  Text
} from 'rebass';

export default class CoinListItem extends React.PureComponent {
  render() {
    const {coin} = this.props;
    return (
    <Flex wrap my={2}  py={2} align="center">
      <Avatar size={32} src={coin.image} mr={2}/>
      <Text f={3}>{coin.name}</Text>
    </Flex>
    )
  }
}
