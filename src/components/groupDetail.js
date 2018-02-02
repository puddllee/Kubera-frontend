// @flow

import React from 'react';
import {
  Flex,
  Box,
  Heading,
  Divider,
  Toolbar
} from 'rebass';

import RouterLink from 'components/routerLink';

import colors from 'shared/colors';

type Props = {
  onMount: () => void,
  groups: object
}

export default class GroupDetail extends React.Component<Props>{
  componentWillMount(){
    this.props.onMount();
  }

  render(){
    const {groups} = this.props;
    const {group, loading} = groups;

    if(loading.group){
      return (
        <Flex wrap m={[0, 3]} flex="1 auto">
          <Box width={1}>
            Loading...
          </Box>
        </Flex>
      )
    }

    return (
      <Flex wrap m={[0, 3]} flex="1 auto">
        <Box width={1}>
          <Heading f={[3,6,9]}>{group.name}</Heading>
          <Divider color={colors.navy}/>
          <Toolbar bg={colors.backgroundColor} color={colors.textColor}>
            <RouterLink to={`/groups/${group.uid}/leaderboard`}>Leaderboard</RouterLink>
            <RouterLink to={`/groups/${group.uid}/portfolio`}>Your Portfolio</RouterLink>
          </Toolbar>
        </Box>
      </Flex>
    )
  }
}
