import {
  GET_LOGIN_FAILURE,
  GET_LOGIN_LOADING,
  GET_LOGIN_SUCCESS
} from "./action.type";

export const loginRequest = () => {
  return { type: GET_LOGIN_LOADING };
};

export const loginSuccess = () => {
  return { type: GET_LOGIN_SUCCESS };
};

export const loginFailure = () => {
  return { type: GET_LOGIN_FAILURE };
};
