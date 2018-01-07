import React from 'react';
import {
  Provider as Rebass,
  Flex,
  Box,
} from 'rebass';
import {
  Route,
} from 'react-router-dom';

import Messages from 'containers/messagesContainer';
import RouterLink from 'components/routerLink';
import Home from 'components/home';
import Exchange from 'components/exchange';
import Groups from 'components/groups';
import ProfileContainer from 'containers/profileContainer';

export default class Base extends React.Component {
  componentWillMount(){
    const {auth, profile} = this.props;
    this.props.onMount(auth, profile);
  }

  render(){
    return (
      <Rebass>
        <Flex wrap>
          <Box width={1} mx={2}>
            <RouterLink exact to="/">Home</RouterLink>
            <RouterLink exact to="/exchange">Exchange</RouterLink>
            <RouterLink exact to="/groups">Groups</RouterLink>
            <RouterLink exact to="/profile">Profile</RouterLink>
          </Box>
          <Box width={1} m={1}>
            <Route exact path="/" component={Home}/>
            <Route exact path="/exchange" component={Exchange}/>
            <Route exact path="/groups" component={Groups}/>
            <Route exact path="/profile" component={ProfileContainer}/>
          </Box>
        </Flex>
        <Messages/>
      </Rebass>
    )
  }
}
