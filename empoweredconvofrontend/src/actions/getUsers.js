import types from './index';
import axios from 'axios';
import axiosWithAuth from '../utils';


export const getUsers = token => dispatch => {
    dispatch({type: GET_USERS_START});
    return axiosWithAuth().get('/users/users').then(res => {
        console.log(res);
    })
}