import React from 'react';
import {
  Input,
  Box,
  Flex,
  Text,
  Button
} from 'rebass';
import {
  Field,
  reduxForm
} from 'redux-form';
import {
 Link
} from 'react-router-dom';

const FormInput = (props) => (
  <Box width={[1, 1, 1/2]} p={3} my={3} mx="auto">
    <Text center>{props.label}</Text>
    <Input mt={2} type={props.type} onChange={props.input.onChange}/>
  </Box>
);

let GroupForm = props => {
  const {handleSubmit} = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field mt={2} name="name" component={FormInput} label="Name" type="text"/>
      <Field mt={2} name="buyin" component={FormInput} label="Initial Funds ($USD)" type="number"/>
      <Box width={[1, 1/2]} my={4} mx="auto">
        <Button width={1} mx={1}>Create Group</Button>
      </Box>
    </form>
  )
};
GroupForm = reduxForm({
  form: 'newGroup'
})(GroupForm);

export default class NewGroup extends React.Component {
  handleSubmit(values){
    this.props.onSubmit(values);
  }

  render(){
    return (
    <Flex wrap>
      <Box width={[1/2, 1/4]}>
        <Link to="/groups">Back to group list</Link>
      </Box>
      <Box width={1}>
        <GroupForm onSubmit={this.handleSubmit.bind(this)}/>
      </Box>
    </Flex>
    )
  }
}
