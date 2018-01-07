import React from 'react';
import {
  Provider as Rebass,
  Heading,
  Flex,
  Box,
} from 'rebass';
import {Redirect} from 'react-router-dom';

export default class Login extends React.Component {
  render(){
    const {profile} = this.props;

    if (profile.id) {
      return (<Redirect to="/"/>);
    }

    return (
      <Rebass>
        <Flex wrap>
          <Box width={[1, 3/5, 2/5]} px={2}>
            <Heading f={9}>Kubera</Heading>
            log in with googs
          </Box>
          <Box width={[0, 2/5, 3/5]} bg="black">

          </Box>
        </Flex>
      </Rebass>
    );
  }
}
