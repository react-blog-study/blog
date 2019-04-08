import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import produce from 'immer';

const GET_PROFILE = 'profile/GET_PROFILE';
const UPDATE_LONG_INTRO = 'profile/UPDATE_LONG_INTRO';
const SET_SIDE_VISIBILITY = 'profile/SET_SIDE_VISIBILITY';

export const getProfile = createAction(GET_PROFILE);
export const updateLongIntro = createAction(UPDATE_LONG_INTRO);
export const setSideVisibility = createAction(SET_SIDE_VISIBILITY);

const initialState = {
  profile: null,
  side: false,
};

export default handleActions(
  {
    [SET_SIDE_VISIBILITY]: (state, { payload }) => {
      return {
        ...state,
        side: payload,
      };
    },
    ...pender({
      type: GET_PROFILE,
      onSuccess: (state, { payload: { data } }) =>
        produce(state, draft => {
          draft.profile = data;
        }),
    }),

    ...pender({
      type: UPDATE_LONG_INTRO,
      onSuccess: (state, { payload: { data } }) =>
        produce(state, draft => {
          draft.profile = data;
        }),
    }),
  },
  initialState,
);