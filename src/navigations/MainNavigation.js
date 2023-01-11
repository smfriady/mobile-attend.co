import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "../pages/LoginPage";
import AttendForm from "../pages/AttendForm";
import TabNavigation from "./TabNavigation";
import PermitForm from "../pages/PermitForm";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { LOGIN_EMPLOYEE_SUCCESS } from "../store/actions/types";

const Stack = createNativeStackNavigator();

export default function MainNavigation() {
  const dispatch = useDispatch();
  const employee = useSelector((state) => state.employee);

  useEffect(() => {
    const getAccess = async () => {
      const employee = await AsyncStorage.getItem("employee");
      dispatch({
        type: LOGIN_EMPLOYEE_SUCCESS,
        payload: JSON.parse(employee),
      });
    };
    getAccess();
  }, []);

  return (
    <Stack.Navigator
      initialRouteName="LoginPage"
      screenOptions={{ headerShown: false }}
    >
      {employee?.access_token ? (
        <>
          <Stack.Screen name="TabNavigation" component={TabNavigation} />
          <Stack.Screen
            name="AttendForm"
            component={AttendForm}
            options={{ headerShown: true, title: "Attendance Form" }}
          />
          <Stack.Screen
            name="PermitForm"
            component={PermitForm}
            options={{ headerShown: true, title: "Permission Form" }}
          />
        </>
      ) : (
        <>
          <Stack.Screen name="LoginPage" component={LoginPage} />
        </>
      )}
    </Stack.Navigator>
  );
}
