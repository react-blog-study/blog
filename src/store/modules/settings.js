import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import produce from 'immer';
import * as UserAPI from 'lib/api/users';
import * as MeAPI from 'lib/api/me';

const GET_PROFILE = 'settings/GET_PROFILE';
const UPDATE_PROFILE = 'settings/UPDATE_PROFILE';
const UPDATE_PROFILE_LINKS = 'settings/UPDATE_PROFILE_LINKS';

export const getProfile = createAction(GET_PROFILE, UserAPI.getProfile);
export const updateProfile = createAction(UPDATE_PROFILE, MeAPI.updateProfile);
export const updateProfileLinks = createAction(UPDATE_PROFILE_LINKS, MeAPI.updateProfileLinks);

const initialState = {
  profile: null,
  uploadInfo: null,
  unregisterToken: null,
  emailInfo: null,
};

export default handleActions(
  {
    ...pender({
      type: GET_PROFILE,
      onSuccess: (state, { payload: { data } }) =>
        produce(state, draft => {
          draft.profile = data;
        }),
    }),
    ...pender({
      type: UPDATE_PROFILE,
      onSuccess: (state, { payload: { data } }) =>
        produce(state, draft => {
          console.log(data);

          draft.profile = data;
        }),
      onFailure: (state, action) => {
        console.log(action);
      },
    }),

    ...pender({
      type: UPDATE_PROFILE_LINKS,
      onSuccess: (state, { payload: { data } }) =>
        produce(state, draft => {
          console.log(data);
          draft.profile.profile_links = data;
        }),
    }),
  },
  initialState,
);
