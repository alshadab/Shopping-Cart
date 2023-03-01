import { combineReducers } from "redux";

import Reducer from "./Product/Reducer";

const rootReducer = combineReducers({
  products: Reducer,
});

export default rootReducer;
