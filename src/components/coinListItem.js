import React from 'react';
import styled from 'styled-components';
import colors from 'shared/colors';
import {
  Avatar,
  Flex,
  Text
} from 'rebass';

export default class CoinListItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selected: false
    }
  }

  handleClick(){
    this.setState({selected: !this.state.selected});
  }

  render() {
    const {coin} = this.props;
    const {selected} = this.state;

    const HoverFlex = styled(Flex)`
      ${selected ? `background-color: ${colors.moonGrey};` : ''}
      &:hover {
        cursor: pointer;
        background-color: ${selected ? colors.lightSilver : colors.moonGrey};      
      }
    `;

    return (
    <HoverFlex wrap my={2} mx={1}  p={2} align="center" onClick={this.handleClick.bind(this)}>
      <Avatar size={32} src={coin.image} mr={2}/>
      <Text f={3}>{coin.name}</Text>
    </HoverFlex>
    )
  }
}
