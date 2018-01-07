import React from 'react';
import styled from 'styled-components';
import colors from 'shared/colors';
import {
  Avatar,
  Flex,
  Text
} from 'rebass';

export default class CoinListItem extends React.PureComponent {
  render() {
    const {coin} = this.props;
    const HoverFlex = styled(Flex)`
      &:hover {
        cursor: pointer;
        background-color: ${colors.moonGrey};      
      }
    `
    return (
    <HoverFlex wrap my={2}  py={2} align="center">
      <Avatar size={32} src={coin.image} mr={2}/>
      <Text f={3}>{coin.name}</Text>
    </HoverFlex>
    )
  }
}
