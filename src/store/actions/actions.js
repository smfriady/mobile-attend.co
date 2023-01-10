import {
  BASE_URL,
  FETCH_ATTENDANCE_SUCCESS,
  LOGIN_EMPLOYEE_SUCCESS,
} from "./types";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const loginEmployee = (payload) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "POST",
        url: `${BASE_URL}/auth/login`,
        data: payload,
      });
      dispatch({
        type: LOGIN_EMPLOYEE_SUCCESS,
        payload: data,
      });
      await AsyncStorage.setItem("employee", JSON.stringify(data));
    } catch (err) {
      if (err) {
        throw new Error("Please Login First!");
      }
    }
  };
};

export const logoutEmployee = () => {
  return async (dispatch) => {
    try {
      await AsyncStorage.removeItem("employee");
      dispatch({
        type: LOGIN_EMPLOYEE_SUCCESS,
        payload: {},
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchAttendance = () => {
  return async (dispatch) => {
    const employee = await AsyncStorage.getItem("employee");
    const { access_token } = JSON.parse(employee);
    try {
      const { data } = await axios({
        method: "GET",
        url: `${BASE_URL}/attendances`,
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      dispatch({
        type: FETCH_ATTENDANCE_SUCCESS,
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
