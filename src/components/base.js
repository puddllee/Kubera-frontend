import React from 'react';
import {
  Provider as Rebass,
  Flex,
  Box,
} from 'rebass';
import {
  Route,
  Switch
} from 'react-router-dom';

import Messages from 'containers/messagesContainer';
import RouterLink from 'components/routerLink';
import HomeContainer from 'containers/homeContainer';
import Exchange from 'components/exchange';
import ProfileContainer from 'containers/profileContainer';
import GroupsContainer from 'containers/groupsContainer';
import GroupDetail from 'components/groupDetail';

export default class Base extends React.Component {
  componentWillMount(){
    const {auth, profile} = this.props;
    this.props.onMount(auth, profile);
  }

  render(){
    return (
      <Rebass theme={{font: '"Lato", Helvetica, sans-serif'}}>
        <Flex wrap>
          <Box width={1} mx={2}>
            <RouterLink exact to="/">Home</RouterLink>
            <RouterLink exact to="/exchange">Exchange</RouterLink>
            <RouterLink to="/groups">Groups</RouterLink>
            <RouterLink exact to="/profile">Profile</RouterLink>
          </Box>
          <Box width={1} m={1}>
            <Route exact path="/" component={HomeContainer}/>
            <Route exact path="/exchange" component={Exchange}/>
            <Switch>
              <Route path="/groups/new" component={GroupsContainer}/>
              <Route path="/groups/:uid" component={GroupDetail}/>
              <Route path="/groups" component={GroupsContainer}/>
            </Switch>
            <Route exact path="/profile" component={ProfileContainer}/>
          </Box>
        </Flex>
        <Messages/>
      </Rebass>
    )
  }
}
