import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import * as AuthAPI from "lib/api/auth";
import { pender } from "redux-pender";

const CHANGE_INFO = "auth/CHANGE_EMAIL";
const SEND_AUTH_EMAIL = "auth/SEND_AUTH_EMAIL";

export const changeInfo = createAction(CHANGE_INFO);
export const sendAuthEamil = createAction(
  SEND_AUTH_EMAIL,
  AuthAPI.sendAuthEmail
);

const initialState = {
  isUser: false,
  sentEmail: false,
  registerForm: {
    username: "",
    email: "",
    id: "",
    introduce: ""
  }
};

export default handleActions(
  {
    [CHANGE_INFO]: (state, action) => {
      const { name, value } = action.payload;
      console.log(name);
      console.log(value);
      return produce(state, draft => {
        draft.registerForm[name] = value;
      });
    },

    ...pender({
      type: SEND_AUTH_EMAIL,
      onSuccess: (state, action) =>
        produce(state, draft => {
          const { isUser } = action.payload.data;
          draft.isUser = isUser;
        })
    })
  },
  initialState
);
