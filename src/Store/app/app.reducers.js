import { createReducer } from "redux-act";
import * as appActions from "./app.actions";

const DATA = require("../../Clients/clients");

const initialState = {
  allPersonsList: DATA,
  cardDetail: { ...DATA[0] },
  activePersonPos: 0,
  clickCounter: 0
};

const reducer = {
  [appActions.setCardDetail]: (state, data) => ({
    ...state,
    cardDetail: data
  }),
  [appActions.setCardIndex]: (state, index) => ({
    ...state,
    activePersonPos: index
  }),
  [appActions.setClickCounter]: (state, counter) => ({
    ...state,
    clickCounter: counter
  })
};

export default createReducer(reducer, initialState);
