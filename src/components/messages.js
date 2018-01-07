import React from 'react';
import {
  Absolute,
  Message,
  ButtonTransparent
} from 'rebass';

export default class Messages extends React.PureComponent {
  handleRemove(id){
    return () => {
      this.props.onRemove(id);
    }
  }

  render(){
    const {messages} = this.props;

    const color = {
      error: 'red',
      success: 'green',
      primary: 'blue'
    };

    return (
      <Absolute bottom right>
        {messages.collection.map((m) => (
          <Message bg={color[m.type]} key={m.id}>
            {m.content} <ButtonTransparent ml="auto" onClick={this.handleRemove(m.id).bind(this)}>x</ButtonTransparent>
          </Message>
        ))}
      </Absolute>
    )
  }
}
