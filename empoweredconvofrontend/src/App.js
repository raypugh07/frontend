import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login, register } from './actions/authActions';
import { getUsers } from './actions/getUsers';
import { Route } from 'react-router-dom';
import './App.css';
import UsersList from './components/UsersList/UsersList';
import { Header } from 'semantic-ui-react';
import NavBar from './components/NavBar/Bar';
import Resources from './views/Resources';
import { Backdrop } from './styles/ResStyling';

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
      <Backdrop>
        <NavBar />
        <Route path='/resources' component={Resources} />
      </Backdrop>
    );
  }
}

export default connect(
  null,
  { register, login, getUsers },
)(App);
