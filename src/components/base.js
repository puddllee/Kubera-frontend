import React from 'react';
import {injectGlobal} from 'styled-components';
import {
  Provider as Rebass,
  Flex,
  Box,
} from 'rebass';
import {
  Route,
  Redirect
} from 'react-router-dom';

import RouterLink from 'components/routerLink';
import Home from 'components/home';
import Exchange from 'components/exchange';
import Groups from 'components/groups';
import Profile from 'components/profile';

export default class Base extends React.Component {
  componentWillMount(){
    const {auth} = this.props;
    this.props.onMount(auth);
  }

  render(){
    injectGlobal`
      body {
        color: #001B44;
        background-color: #f4f4f4;
      }
    `;

    const {profile} = this.props;

    // If the user is not logged in, redirect to the login screen
    if(!profile.id){
      return (<Redirect to="/login"/>)
    }

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
            <Route exact path="/profile" component={Profile}/>
          </Box>
        </Flex>
      </Rebass>
    )
  }
}
