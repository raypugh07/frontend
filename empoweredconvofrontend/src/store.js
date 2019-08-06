import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducer';

const store = () => {
  if (process.env.NODE_ENV === 'development') {
    return createStore(
      rootReducer,
      composeWithDevTools(applyMiddleware(thunk, logger)),
    );
  }
  return createStore(rootReducer, applyMiddleware(thunk));
};

export default store;
