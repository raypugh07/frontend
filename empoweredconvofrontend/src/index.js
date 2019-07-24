import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import createStore from './store';
import './index.css';

import App from './App';

const store = createStore();

const application = (
  <Provider store={store}>
    <App />
  </Provider>
);

const rootDocument = document.getElementById('root');

ReactDOM.render(application, rootDocument);
