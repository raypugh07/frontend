import types from '../actions';

const initialState = {
  user: {},
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.LOGIN_SUCCESS:
      return { user: payload };
    default:
      return state;
  }
};
