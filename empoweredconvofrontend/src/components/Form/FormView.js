import React from 'react';
import { connect } from 'react-redux';
import {
  Form,
  Input,
  TextArea,
  Checkbox,
  Dropdown,
  Select,
} from 'formsy-semantic-ui-react';
import { Button, Container } from 'semantic-ui-react';

class FormView extends React.Component {
  state = {
    convoRequest: {
      survivorPhoneNum: '',
      ffName: '',
      ffPhoneNum: '',
    },
  };

  render() {
    return (
      <Container>
        <Form>
          <h1>hii</h1>
          <Form.Input
            name="survivorPhoneNum"
            label="Survivor Phone Number"
          ></Form.Input>
          <Form.Button></Form.Button>
        </Form>
        {console.log('')}
      </Container>
    );
  }
}

export default FormView;
