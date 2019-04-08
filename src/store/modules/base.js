import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const SHOW_USER_MENU = 'base/SHOW_USER_MENU';
const HIDE_USER_MENU = 'base/HIDE_USER_MENU';

export const showUserMenu = createAction(SHOW_USER_MENU);
export const hideUserMenu = createAction(HIDE_USER_MENU);

const initalState = {
  showUserMenu: false,
};

export default handleActions(
  {
    [SHOW_USER_MENU]: state =>
      produce(state, draft => {
        console.log('SHOW_USER_MENU');
        draft.showUserMenu = true;
      }),

    [HIDE_USER_MENU]: state =>
      produce(state, draft => {
        console.log('HIDE_USER_MENU');
        draft.showUserMenu = false;
      }),
  },
  initalState,
);
