import { combineReducers } from "redux";
import eventTypeReducer from "./eventTypeReducer";
import userReducer from "./userReducer";

const reducers = combineReducers({
  eventType: eventTypeReducer,
  user: userReducer,
});

export default reducers;
