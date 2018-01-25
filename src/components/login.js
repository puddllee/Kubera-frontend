import React from 'react';
import {
  Provider as Rebass,
  Heading,
  Flex,
  Box,
} from 'rebass';
import Messages from 'containers/messagesContainer';
import CoinListContainer from 'containers/coinListContainer';
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
          <Box width={1} px={2} my="auto">
            <Heading f={[3,6,9]}>Kubera</Heading>
            <Box m="auto" ml={2}>
              <GoogleLoginButton onClick={this.handleLoginButtonClick.bind(this)}/>
            </Box>
            <Box width={1} mt={3}>
              <CoinListContainer/>
            </Box>
          </Box>
        </Flex>
        <Messages/>
      </Rebass>
    );
  }
}
