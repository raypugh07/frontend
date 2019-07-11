import React, {Component} from 'react';
import { connect } from 'react-redux';
import { login, register,  } from './actions/authActions';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import UsersList from './components/usersList/UsersList';

class App extends Component {
  state = {
    test : '1'
  };

  componentDidMount() {
    this.props.login('admin', 'password');
  }

  logReg(creds) {
    this.props.register(creds, () => this.props.login(`grant_type=password&username=${creds.username}&password=${creds.password}`));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <UsersList />
        </div>
      </Router>
    );
  }
}

export default connect(null,{ register, login,  })(App);
