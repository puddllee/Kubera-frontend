import React from 'react';
import {
  Flex,
  Heading,
  Box,
  ButtonOutline
} from 'rebass';

export default class Profile extends React.Component {
  handleLogoutButtonClick(){
    this.props.onLogoutButtonClick();
  }

  render(){
    const {profile} = this.props;
    return (
      <Flex wrap m={3}>
        <Box width={1}>
          <Heading f={[3,6,9]}>{profile.name}</Heading>
        </Box>
        <Box width={1} mt={3} mx="auto">
          <ButtonOutline onClick={this.handleLogoutButtonClick.bind(this)}>Logout</ButtonOutline>
        </Box>
      </Flex>
    )
  }
}
