import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login, register } from './actions/authActions';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import UsersList from './components/UsersList/UsersList';

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
    this.props.login(`grant_type=password&username=admin&password=password`);
    // this.logReg(this.state.creds);
  }

  logReg(creds) {
    this.props.register(creds, () =>
      this.props.login(
        `grant_type=password&username=${creds.username}&password=${creds.password}`,
      ),
    );
  }

  render() {
    return (
      <Router>
        <div className="App">
          <h1>Holder App</h1>
          <UsersList />
        </div>
      </Router>
    );
  }
}

export default connect(
  null,
  { register, login },
)(App);
