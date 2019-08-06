import types from './index';
import axios from 'axios';

export const initializeConvo = convoRequest => dispatch => {
  //
  dispatch({ type: types.INIT_CONVO_START });
  console.log('from redux', convoRequest);
  return axios
    .post(
      'https://empoweredconversation.herokuapp.com/conversations',
      convoRequest,
    )
    .then(res => {
      //
      dispatch({ type: types.INIT_CONVO_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: types.INIT_CONVO_FAILURE, payload: err });
    });
};
