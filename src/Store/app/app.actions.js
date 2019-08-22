import { createAction, dispatch } from "redux-act";

// set current personArray
export const setCardDetail = createAction("User chose a single client.");
export const successSetCardDetail = card => dispatch => {
  dispatch(setCardDetail(card));
};

// set current index
export const setCardIndex = createAction("Write a single client's index.");
export const successSetCardIndex = index => dispatch => {
  dispatch(setCardIndex(index));
};

// set click counter
export const setClickCounter = createAction("User clicks");
export const successSetClickCounter = counter => dispatch => {
  dispatch(setClickCounter(counter));
};
