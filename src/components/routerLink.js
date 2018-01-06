import React from 'react';
import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';
import {NavLink} from 'rebass';

export default class RouterLink extends React.PureComponent {
  render() {
    const RL = styled(NavLink)`
      &.active {
        text-decoration: wavy underline;      
      }
    `;
    return (
      <RL {...this.props} is={Link}/>
    );
  }
}
