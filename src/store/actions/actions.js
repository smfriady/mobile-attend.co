import {
  BASE_URL,
  COORDINATE_EMPLOYEE,
  FETCH_ATTENDANCE_SUCCESS,
  FETCH_EMPLOYEE_SUCCESS,
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
        throw err;
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
      throw err;
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
      throw err;
    }
  };
};

export const fetchEmployee = () => {
  return async (dispatch) => {
    const employee = await AsyncStorage.getItem("employee");
    const { access_token } = JSON.parse(employee);
    try {
      const { data } = await axios({
        method: "GET",
        url: `${BASE_URL}/employees`,
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      dispatch({
        type: FETCH_EMPLOYEE_SUCCESS,
        payload: data,
      });
    } catch (err) {
      throw err;
    }
  };
};

export const createAttendance = (payload) => {
  return async (dispatch) => {
    const employee = await AsyncStorage.getItem("employee");
    const { access_token } = JSON.parse(employee);

    const formData = new FormData();
    const { attachment, ...restPayload } = payload;

    Object.keys(restPayload).forEach((key) => {
      formData.append(key, payload[key]);
    });

    const filename = attachment.split("/").pop();
    const match = /\.(\w+)$/.exec(filename);
    const type = match ? `image/${match[1]}` : `image`;
    formData.append("attachment", { uri: attachment, name: filename, type });

    try {
      const { data } = await axios({
        method: "POST",
        url: `${BASE_URL}/attendances`,
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${access_token}`,
        },
      });
      dispatch({
        type: COORDINATE_EMPLOYEE,
        latitude: payload.latitude,
        longitude: payload.longitude,
      });
    } catch (err) {
      throw err;
    }
  };
};

export const updateAttendance = (payload) => {
  return async (dispatch) => {
    const employee = await AsyncStorage.getItem("employee");
    const { access_token } = JSON.parse(employee);
    try {
      const { data } = await axios({
        method: "PUT",
        url: `${BASE_URL}/attendances`,
        data: payload,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${access_token}`,
        },
      });
    } catch (err) {
      throw err;
    }
  };
};
