import types from '../actions';

const initialState = {
  user: {},
  usersList: {},
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.LOGIN_SUCCESS:
      return { ...state, user: payload };

    case types.GET_USERS_SUCCESS:
      return {
        ...state,
        usersList: payload,
      };

    default:
      return state;
  }
};
