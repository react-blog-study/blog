import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import * as AuthAPI from 'lib/api/auth';
import { pender } from 'redux-pender';

const SET_LOGGED_INFO = 'user/SET_LOGGED_INFO';
const SET_VALIDATED = 'user/SET_VALIDATED';
const LOGOUT = 'user/LOGOUT';
const CHECK_STATUS = 'user/CHECK_STATUS';

export const setLoggedInfo = createAction(SET_LOGGED_INFO);
export const setValidated = createAction(SET_VALIDATED);
export const logout = createAction(LOGOUT, AuthAPI.logout);
export const checkStatus = createAction(CHECK_STATUS, AuthAPI.checkStatus);

const initialState = {
  // 현재 유저의 정보
  loggedInfo: {
    thumbnail: null,
    username: null,
  },

  logged: false, // 현재 로그인중인지 알려준다.
  validated: false, //이 값은 현재 로그인중인지 아닌지 한번 서버측에 검증했음을 의미
};

export default handleActions(
  {
    [SET_LOGGED_INFO]: (state, action) => {
      return produce(state, draft => {
        draft.loggedInfo = action.payload;
        draft.logged = true;
      });
    },

    [SET_VALIDATED]: (state, action) =>
      produce(state, draft => {
        draft.validated = action.payload;
      }),

    ...pender({
      type: CHECK_STATUS,
      onSuccess: (state, { payload: { data } }) => {
        return produce(state, draft => {
          draft.loggedInfo = data.user;
          draft.validated = true;
        });
      },

      onFailure: (state, action) => initialState,
    }),

    ...pender({
      type: LOGOUT,
      onSuccess: state => {},
    }),
  },
  initialState,
);
