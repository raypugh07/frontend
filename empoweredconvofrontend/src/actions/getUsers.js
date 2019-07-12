import types from './index';
import { axiosWithAuth } from '../utils/authRequest';

export const getUsers = () => dispatch => {
  dispatch({ type: types.GET_USERS_START });
  return axiosWithAuth()
    .get('/users/users')
    .then(res => {
      dispatch({ type: types.GET_USERS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: types.GET_USERS_FAILURE, payload: err });
    });
};
