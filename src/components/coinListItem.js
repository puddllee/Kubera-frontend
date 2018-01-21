import React from 'react';
import styled from 'styled-components';
import colors from 'shared/colors';
import {
  Avatar,
  Flex,
  Box,
  Truncate
} from 'rebass';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export default class CoinListItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selected: false
    }
  }

  handleClick(){
    this.props.onClick();
    this.setState({selected: !this.state.selected});
  }

  render() {
    const {coin, history} = this.props;
    const {selected} = this.state;
    let data;
    if (history){
      data = history.map((d)=>d.price);
    } else {
      data = [];
    }

    // Red if the first price point is negative, green if positive
    const lineColor = data.length && data[0] > data[data.length-1] ? "red" : "green";

    const HoverFlex = styled(Flex)`
      ${selected ? `background-color: ${colors.moonGrey};` : ''}
      &:hover {
        cursor: pointer;
        background-color: ${selected ? colors.lightSilver : colors.moonGrey};      
      }
    `;

    return (
    <HoverFlex wrap my={2} mx={1}  p={2} align="center" onClick={this.handleClick.bind(this)}>
      <Box w={1/6} ml="auto">
        <Avatar size={32} src={coin.image} mr={2}/>
      </Box>
      <Box w={4/6} mx="auto">
        <Truncate f={[1,2,3]}>
          {coin.name}
        </Truncate>
      </Box>
      <Box w={1/6} ml="auto">
        <Sparklines data={data}>
          <SparklinesLine color={lineColor}/>
        </Sparklines>
      </Box>
    </HoverFlex>
    )
  }
}
