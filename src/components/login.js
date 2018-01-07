import React from 'react';
import {
  Provider as Rebass,
  Heading,
  Flex,
  Box,
} from 'rebass';
import {Redirect} from 'react-router-dom';
import GoogleLoginButton from 'components/buttons/googleLoginButton';

export default class Login extends React.Component {
  componentWillMount(){
    this.props.onMount(this.props.auth.profile);
  }

  handleLoginButtonClick(){
    this.props.onLoginButtonClick();
  }

  render(){
    return (
      <Rebass>
        <Flex wrap>
          <Box width={[1, 3/5, 2/5]} px={2} my="auto">
            <Heading f={9}>Kubera</Heading>
            <Box m="auto" ml={2}>
              <GoogleLoginButton onClick={this.handleLoginButtonClick.bind(this)}/>
            </Box>
          </Box>
          <Box width={[0, 2/5, 3/5]} bg="black">

          </Box>
        </Flex>
      </Rebass>
    );
  }
}
