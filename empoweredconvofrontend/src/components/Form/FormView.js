import React from 'react';
import { connect } from 'react-redux';
import { initializeConvo } from '../../actions/initConvoActions';
import {
  Form,
  Input,
  TextArea,
  Checkbox,
  Dropdown,
  Select,
} from 'formsy-semantic-ui-react';
import { Button, Container, Modal, Segment, Label } from 'semantic-ui-react';
import TOS from './TOS';

class FormView extends React.Component {
  state = {
    convoRequest: {
      survivorPhoneNum: '',
      ffName: '',
      ffPhoneNum: '',
    },
    isModalOpen: false,
  };

  submitHandler = e => {
    console.log('send text button hit');
    console.log('from submit', this.state.convoRequest.survivorPhoneNum);
    console.log('from submit', this.state.convoRequest.ffName);
    console.log('from submit', this.state.convoRequest.ffPhoneNum);
    this.props.initializeConvo(this.state.convoRequest);
  };

  changeHandler({ target }) {
    this.setState(
      {
        convoRequest: {
          ...this.state.convoRequest,
          [target.name]: target.value,
        },
      },
      () => console.log(this.state.convoRequest, 'from change'),
    );
  }

  handleModalOpen = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };

  render() {
    return (
      <Segment>
        <Modal
          trigger={
            <Button
              content={'click to open modal'}
              onClick={this.handleModalOpen}
            />
          }
          open={this.state.isModalOpen}
          onClose={this.handleModalOpen}
        >
          <Modal.Header>Terms of Service</Modal.Header>
          <Modal.Content>
            <TOS />
          </Modal.Content>
        </Modal>
        <Container>
          <Form onValidSubmit={() => this.submitHandler()}>
            <Form.Group>
              <Form.Input
                name="survivorPhoneNum"
                label="Your Phone Number"
                validations="isNumeric"
                required
                onChange={e => this.changeHandler(e)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Input
                name="ffName"
                label="Name of Friend, Family, or Loved One "
                validations="isWords"
                placeholder="Jane Doe"
                required
                onChange={e => this.changeHandler(e)}
              />
              <Form.Input
                name="ffPhoneNum"
                label="Phone Number of Friend, Family, or Loved One"
                validations="isNumeric"
                required
                onChange={e => this.changeHandler(e)}
              />
            </Form.Group>
            <Checkbox
              name="survivorLiability"
              label={<label>I accept the terms of service</label>}
              validations="isTrue"
            />
            <Form.Button type="submit">Send Text</Form.Button>
          </Form>
        </Container>
      </Segment>
    );
  }
}

const mapStateToProps = state => {
  return {
    isSending: state.initConvo.isSending,
    isSent: state.initConvo.isSent,
    sendingError: state.initConvo.sendingError,
  };
};

export default connect(
  mapStateToProps,
  { initializeConvo },
)(FormView);
