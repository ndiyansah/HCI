import { combineReducers } from "redux";

import pokemon from "./pokemon/reducer";
import types from "./types/reducer";

export const rootReducer = combineReducers({ pokemon, types });