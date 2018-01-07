import React from 'react';
import {
  Provider as Rebass,
  Flex,
  Box,
  Heading
} from 'rebass';

export default class AuthCallback extends React.Component {
  componentDidMount(){
    this.props.onMount();
  }

  componentWillReceiveProps(nextProps){
    // If we are about to receive a profile,
    // we must have successfully logged in. So
    // route to the base page.
    if (nextProps.auth.profile.id){
      this.props.onProfileLoaded();
    }
  }

  render(){
    return (
      <Rebass>
        <Flex align="center">
          <Box width={1} mx="auto">
            <Heading f={1}>Loading</Heading>
          </Box>
        </Flex>
      </Rebass>
    )
  }
}
