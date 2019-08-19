import { createAction, dispatch } from "redux-act";

// set current personArray
export const x = createAction("user chooses client");
export const successx = card => dispatch => {
  dispatch(x(card));
};
