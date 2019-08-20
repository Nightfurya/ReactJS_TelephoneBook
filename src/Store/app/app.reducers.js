import { createReducer } from "redux-act";
import * as appActions from "./app.actions";

const DATA = require("../../Clients/clients");

const initialState = {
  allPersonsList: DATA
};

const reducer = {
  // [appActions.x]: (state, data) => ({
  //   ...state,
  //   anotherStatePos: data
  // })
};

export default createReducer(reducer, initialState);
