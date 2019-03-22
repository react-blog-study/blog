import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import * as AuthAPI from "lib/api/auth";
import { pender } from "redux-pender";

const CHANGE_INFO = "auth/CHANGE_INFO";
const SEND_AUTH_EMAIL = "auth/SEND_AUTH_EMAIL";
const REGISTER = "auth/REGISTER";
const SET_ERROR = "auth/SET_ERROR";

export const changeInfo = createAction(CHANGE_INFO);
export const sendAuthEamil = createAction(
  SEND_AUTH_EMAIL,
  AuthAPI.sendAuthEmail
);
export const register = createAction(REGISTER, AuthAPI.register);
export const setError = createAction(SET_ERROR);

const initialState = {
  isUser: false,
  sentEmail: false,
  registerForm: {
    username: "",
    email: "",
    id: "",
    introduce: ""
  },
  erorr: ""
};

export default handleActions(
  {
    [CHANGE_INFO]: (state, action) => {
      const { name, value } = action.payload;
      return produce(state, draft => {
        draft.registerForm[name] = value;
      });
    },

    [SET_ERROR]: (state, action) =>
      produce(state, draft => {
        draft.error = action.payload;
      }),
    ...pender({
      type: SEND_AUTH_EMAIL,
      onSuccess: (state, action) =>
        produce(state, draft => {
          const { isUser } = action.payload.data;
          draft.isUser = isUser;
          draft.sentEmail = true;
        })
    }),

    ...pender({
      type: REGISTER,
      onSuccess: (state, action) => produce(state, draft => {})
    })
  },
  initialState
);
