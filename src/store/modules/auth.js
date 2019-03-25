import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import * as AuthAPI from 'lib/api/auth';
import { pender } from 'redux-pender';

const CHANGE_INFO = 'auth/CHANGE_INFO';
const SEND_AUTH_EMAIL = 'auth/SEND_AUTH_EMAIL';
const CHECK_EMAIL_EXISTS = 'auth/CHECK_EMAIL_EXISTS';
const CHECK_ID_EXISTS = 'auth/CHECK_USERNAME_EXISTS';

const REGISTER = 'auth/REGISTER';
const LOCAL_LOGIN = 'auth/LOCAL_LOGIN';
const SET_ERROR = 'auth/SET_ERROR';
const LOGOUT = 'auth/LOGOUT';

export const changeInfo = createAction(CHANGE_INFO);
export const sendAuthEamil = createAction(SEND_AUTH_EMAIL, AuthAPI.sendAuthEmail);
export const checkEmailExists = createAction(CHECK_EMAIL_EXISTS, AuthAPI.checkEmailExists); // email
export const checkIdameExists = createAction(CHECK_ID_EXISTS, AuthAPI.checkIdExists); // username
export const register = createAction(REGISTER, AuthAPI.register);
export const localLogin = createAction(LOCAL_LOGIN);
export const setError = createAction(SET_ERROR);
export const logout = createAction(LOGOUT);

const initialState = {
  isUser: false,
  sentEmail: false,
  registerForm: {
    username: '',
    email: '',
    id: '',
    introduce: '',
  },
  exists: {
    email: '',
    id: '',
  },
  erorr: '',
  result: {},
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
      type: CHECK_EMAIL_EXISTS,
      onSuccess: (state, action) =>
        produce(state, draft => {
          draft.exists.eamil = action.payload.data;
        }),
    }),
    ...pender({
      type: CHECK_ID_EXISTS,
      onSuccess: (state, action) =>
        produce(state, draft => {
          draft.exists.id = action.payload.data;
        }),
    }),

    ...pender({
      type: REGISTER,
      onSuccess: (state, action) => produce(state, draft => {}),
    }),

    ...pender({
      tyep: LOCAL_LOGIN,
      onSuccess: (state, action) =>
        produce(state, draft => {
          draft.result = action.payload.data;
        }),
    }),

    ...pender({}),
  },
  initialState,
);
