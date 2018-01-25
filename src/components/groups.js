import React from 'react';
import {
  Flex,
  Heading,
  Divider,
  Box,
  Card,
  Text,
  Lead,
  Button
} from 'rebass';
import {Route, Link}  from 'react-router-dom';
import styled from 'styled-components';
import NewGroupContainer from 'containers/newGroupContainer';
import colors from 'shared/colors';

export default class Groups extends React.Component {
  componentWillMount(){
    this.props.onMount();
  }

  handleGroupSelected(uid){
    return () => {
      this.props.onGroupSelected(uid);
    }
  }

  render() {
    const {groups, loading} = this.props.groups;
    const {pathname} = this.props.location;
    const onMainPage = pathname === '/groups';

    // Make the card appear "clickable"
    const HoverCard = styled(Card)`
      &:hover{
        cursor: pointer;
        background-color: ${colors.moonGrey};
      }
    `;

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
          {groups.length === 0 && onMainPage && (
            <Lead ml="auto">You aren't in any groups! Would you like to create one?</Lead>
          )}
          {onMainPage && (
            <Button my={2} mx="auto" is={Link} to="/groups/new">Create new group</Button>
          )}
        </Box>
        <Box width={1} pt={3}>
          <Route exact path="/groups/new" component={NewGroupContainer}/>
          <Flex wrap>
            {groups.map((group)=>(
              <HoverCard width={256} key={group.uid} p={3} m={2} onClick={this.handleGroupSelected.bind(this)(group.uid)}>
                <Text center>
                  {group.name}
                </Text>
              </HoverCard>
            ))}
          </Flex>
        </Box>
      </Flex>
    )
  }
}
