import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "../pages/LoginPage";
import AttendForm from "../pages/AttendForm";
import TabNavigation from "./TabNavigation";
import PermitForm from "../pages/PermitForm";

const Stack = createNativeStackNavigator();

export default function MainNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="LoginPage"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="LoginPage" component={LoginPage} />
      <Stack.Screen
        name="AttendForm"
        component={AttendForm}
        options={{ headerShown: true, title: "Attendance Form" }}
      />
      <Stack.Screen name="PermitForm" component={PermitForm} options={{ headerShown: true, title: "Permission Form" }}/>
      <Stack.Screen name="TabNavigation" component={TabNavigation} />
    </Stack.Navigator>
  );
}
