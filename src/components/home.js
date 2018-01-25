import React from 'react';
import {
  Flex,
  Box,
  Heading,
  Divider
} from 'rebass';
import CoinListContainer from 'containers/coinListContainer';
import colors from 'shared/colors';

export default class Home extends React.Component {
  render() {
    return (
      <Flex wrap m={[0,3]} flex="1 auto">
        <Box width={1}>
          <Heading is="h1" f={[3,6,9]}>Kubera</Heading>
          <Divider color={colors.navy}/>
        </Box>
        <CoinListContainer/>
      </Flex>
    )
  }
}
