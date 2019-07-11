import types from './index';
import axios from 'axios';

export const login = creds => dispatch => {
    dispatch({ type: types.LOGIN_START });
    return axios    
      .post('https://empoweredconversation.herokuapp.com/oauth/token', creds, {
        headers: { Authorization: `Basic ${btoa('lambda-client:lambda-secret')}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        }
      })
      .then(res => {   
        localStorage.setItem('token', res.data.access_token);
        dispatch({ type: types.LOGIN_SUCCESS });
        return true;
      })
      .catch(err => console.log('ERROR', err));
}

export const register = (creds, cb) => dispatch => {
    dispatch({ type: types.REGISTER_START })
    return axios
      .post('https://empoweredconversation.herokuapp.com/createnewuser', creds)
      .then(res => { 
          dispatch({ type: types.REGISTER_SUCCESS });
          cb();
        })
      .catch(err => dispatch({ type: types.REGISTER_FAILURE }))
}