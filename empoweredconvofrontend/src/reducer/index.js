import { combineReducers } from 'redux';
import auth from './authReducer';
import users from './usersReducer';
import initConvo from './initConvoReducer';

export default combineReducers({ auth, users, initConvo });
