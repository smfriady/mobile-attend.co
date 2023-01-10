import {
  FETCH_ATTENDANCE_SUCCESS,
  LOGIN_EMPLOYEE_SUCCESS,
} from "../actions/types";

const initialState = { attendance: [], employee: {} };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_EMPLOYEE_SUCCESS:
      return {
        ...state,
        employee: action.payload,
      };
    case FETCH_ATTENDANCE_SUCCESS:
      return {
        ...state,
        attendance: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
