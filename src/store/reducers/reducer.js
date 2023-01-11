import {
  COORDINATE_EMPLOYEE,
  FETCH_ATTENDANCE_SUCCESS,
  FETCH_EMPLOYEE_SUCCESS,
  FETCH_SALARIES_SUCCESS,
  LOGIN_EMPLOYEE_SUCCESS,
} from "../actions/types";

const initialState = {
  attendance: [],
  salaries: [],
  employee: {},
  profile: {},
  long: 0,
  lat: 0,
};

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
    case FETCH_EMPLOYEE_SUCCESS:
      return {
        ...state,
        profile: action.payload,
      };
    case COORDINATE_EMPLOYEE:
      return {
        ...state,
        lat: action.latitude,
        long: action.longitude,
      };
    case FETCH_SALARIES_SUCCESS:
      return {
        ...state,
        salaries: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
