import {
  GET_LOGIN_FAILURE,
  GET_LOGIN_LOADING,
  GET_LOGIN_SUCCESS
} from "./action.type";

let initialState = {
  isAuth: false,
  isLoading: false,
  isError: false,
  token: ""
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_LOGIN_LOADING: {
      return { ...state, isLoading: true, isError: false };
    }
    case GET_LOGIN_SUCCESS: {
      return {
        ...state,
        token: payload,
        isLoading: false,
        isError: false,
        isAuth: true
      };
    }
    case GET_LOGIN_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }
    default:
      return state;
  }
};
