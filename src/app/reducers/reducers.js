import { combineReducers } from "redux";

const rootReducer = combineReducers({
  petowners: (state = [], action) => action.payload || state
});

export default rootReducer;
