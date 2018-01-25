import React from 'react';
import {
  Flex,
  Box,
  Heading,
  Divider
} from 'rebass';

import colors from 'shared/colors';

export default class GroupDetail extends React.Component{
  render(){
    return (
      <Flex wrap m={[0, 3]} flex="1 auto">
        <Box width={1}>
          <Heading f={[3,6,9]}>Group Detail</Heading>
          <Divider color={colors.navy}/>
        </Box>
      </Flex>
    )
  }
}
