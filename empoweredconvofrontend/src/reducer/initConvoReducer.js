import types from '../actions';

const initialState = {
  isSending: false,
  isSent: false,
  sendingError: false,
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.INIT_CONVO_START:
      return { ...state, isSending: true };
    case types.INIT_CONVO_SUCCESS:
      return { ...state, isSending: false, isSent: true };
    case types.INIT_CONVO_FAILURE:
      return { ...state, isSending: false, sendingError: payload };
    default:
      return state;
  }
};
