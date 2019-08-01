import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login, register } from './actions/authActions';
import { getUsers } from './actions/getUsers';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Landing from "./components/LandingPage/Landing.js";
import UsersList from './components/UsersList/UsersList';
import { Header } from 'semantic-ui-react';

class App extends Component {
  state = {
    test: '1',
    creds: {
      username: 'admin',
      password: 'password',
    },
  };

  componentDidMount() {
    // this.props.login('admin', 'password');
    this.props.login(`grant_type=password&username=admin&password=password`,() => this.props.getUsers());
    // this.logReg(this.state.creds);
  }

  logReg(creds) {
    this.props.register(creds, () =>
      this.props.login(
        `grant_type=password&username=${creds.username}&password=${creds.password}`,() => this.props.getUsers()
      ),
    );
  }

  render() {
    return (
      <Router>
        <Landing/>
        {/* <div className="App">
          <Header as="h1">Empowered Conversations</Header>
          <UsersList />
        </div> */}
      </Router>
    );
  }
}

export default connect(
  null,
  { register, login, getUsers },
)(App);


//test