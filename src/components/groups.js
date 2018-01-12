import React from 'react';
import {
  Flex,
  Heading,
  Divider,
  Box,
  Lead,
  Button
} from 'rebass';
import colors from 'shared/colors';

export default class Groups extends React.Component {
  componentWillMount(){
    this.props.onMount();
  }

  render() {
    const {groups, loading} = this.props.groups;

    if (loading.groups){
      return (
        <Flex wrap m={[0, 3]} flex="1 auto">
          <Box width={1}>
            <Heading f={[3,6,9]}>Groups</Heading>
            <Divider color={colors.navy}/>
          </Box>
          <Box width={1}>
            Loading Groups...
          </Box>
        </Flex>
      )
    }

    return (
      <Flex wrap m={[0, 3]} flex="1 auto">
        <Box width={1}>
          <Heading f={[3,6,9]}>Groups</Heading>
          <Divider color={colors.navy}/>
        </Box>
        <Box width={1}>
          {groups.length === 0 && (
            <Lead ml="auto">You aren't in any groups! Would you like to create one?</Lead>
          )}
          <Button my={2} mx="auto">Create new group</Button>

        </Box>
      </Flex>
    )
  }
}
