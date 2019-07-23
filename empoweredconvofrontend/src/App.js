import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login, register } from './actions/authActions';
import { getUsers } from './actions/getUsers';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import UsersList from './components/UsersList/UsersList';
import { Header } from 'semantic-ui-react';
import FormView from './components/Form/FormView';

class App extends Component {
  state = {
    test: '1',
    creds: {
      username: 'admin',
      password: 'password',
    },
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Header as="h1">Empowered Conversations</Header>
          <UsersList />
          <FormView />
        </div>
      </Router>
    );
  }
}

export default connect(
  null,
  { register, login, getUsers },
)(App);
