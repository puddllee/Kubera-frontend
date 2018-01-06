import React from 'react';
import {
  Flex,
  Heading
} from 'rebass';

export default class Profile extends React.Component {
  render(){
    return (
      <Flex m={3}>
        <Heading f={9}>Profile</Heading>
      </Flex>
    )
  }
}
