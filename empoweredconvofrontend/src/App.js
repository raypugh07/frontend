import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login, register } from './actions/authActions';
import { getUsers } from './actions/getUsers';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Bar from './components/NavBar/Bar';
import Footer from './components/Footer/Footer';

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
          <Bar />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default connect(
  null,
  { register, login, getUsers },
)(App);
