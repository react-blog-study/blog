import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import produce from 'immer';
import * as UserAPI from 'lib/api/users';

const GET_PROFILE = 'settings/GET_PROFILE';

export const getProfile = createAction(GET_PROFILE, UserAPI.getProfile);

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
  },
  initialState,
);
