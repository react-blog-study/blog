import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import * as AuthAPI from 'lib/api/auth';
import { pender } from 'redux-pender';

const CHANGE_INFO = 'auth/CHANGE_INFO';
const SEND_AUTH_EMAIL = 'auth/SEND_AUTH_EMAIL';
const LOCAL_LOGIN = 'auth/LOCAL_LOGIN';
const SET_ERROR = 'auth/SET_ERROR';
const GET_CODE = 'auth/GET_CODE';
const LOCAL_REGISTER = 'auth/LOCAL_REGISTER';

export const changeInfo = createAction(CHANGE_INFO);
export const sendAuthEamil = createAction(SEND_AUTH_EMAIL, AuthAPI.sendAuthEmail);
export const localLogin = createAction(LOCAL_LOGIN, AuthAPI.localLogin);
export const setError = createAction(SET_ERROR);
export const getCode = createAction(GET_CODE, AuthAPI.getCode);
export const localRegister = createAction(LOCAL_REGISTER, AuthAPI.localRegister);

const initialState = {
  isUser: false,
  sentEmail: false,
  registerForm: {
    username: '',
    email: '',
    userId: '',
    short_intro: '',
  },
  exists: {
    email: '',
    userId: '',
  },
  erorr: '',
  authResult: {},
  isSocial: false,
  registerToken: '',
  verifySocialResult: null,
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
        }),
    }),

    ...pender({
      tyep: LOCAL_LOGIN,
      onSuccess: (state, action) =>
        produce(state, draft => {
          draft.result = action.payload.data;
        }),
    }),

    ...pender({
      type: GET_CODE,
      onSuccess: (state, action) =>
        produce(state, draft => {
          const { email, registerToken } = action.payload.data;
          draft.registerForm.email = email;
          draft.registerToken = registerToken;
        }),
    }),

    ...pender({
      type: LOCAL_REGISTER,
      onSuccess: (state, { payload: { data } }) =>
        produce(state, draft => {
          const { user, token } = data;
          draft.authResult = {
            user,
            token,
          };
        }),
      onFailure: (state, { payload: { response } }) =>
        produce(state, draft => {
          draft.erorr = response.data;
        }),
    }),

    ...pender({
      type: LOCAL_LOGIN,
      onSuccess: (state, { payload: { data } }) =>
        produce(state, draft => {
          const { user, token } = data;
          draft.authResult = {
            user,
            token,
          };
        }),
      onFailure: (state, { payload: { response } }) =>
        produce(state, draft => {
          draft.error = response.data;
        }),
    }),
  },
  initialState,
);
