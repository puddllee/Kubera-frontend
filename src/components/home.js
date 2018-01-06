import React from 'react';
import {
  Flex,
  Heading
} from 'rebass';

export default class Home extends React.Component {
  render() {
    return (
      <Flex m={3}>
        <Heading is="h1" f={9}>Kubera</Heading>
      </Flex>
    )
  }
}
