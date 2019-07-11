import types from '../actions';

const initialState = {
  isAuth: false,
  errors: null,
  isLoading: false,
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.LOGIN_START:
      return { ...state, isLoading: true };
    case types.LOGIN_SUCCESS:
      return { ...state, isLoading: false, isAuth: true };
    case types.LOGIN_FAILURE:
      return { ...state, isLoading: false, errors: payload };
    case types.LOGOUT:
      return initialState;
    default:
      return state;
  }
};
