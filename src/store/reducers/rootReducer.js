import { combineReducers } from "redux";
import attendanceReducer from "./reducer";
const rootReducer = combineReducers({ attendanceReducer });

export default rootReducer;
