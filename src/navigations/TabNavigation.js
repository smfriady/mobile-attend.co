import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getHeaderTitle } from "@react-navigation/elements";
import MyHeader from "../components/MyHeader";
import { Octicons } from "@expo/vector-icons";
import HomePage from "../pages/HomePage";
import HistoryPage from "../pages/HistoryPage";
import ProfilePage from "../pages/ProfilePage";
import SalaryPage from "../pages/SalaryPage";

const Tab = createBottomTabNavigator();

const header = ({ route, options }) => {
  let title = getHeaderTitle(options, route.name);

  switch (title) {
    case "HomePage":
      title = "Home";
      break;
    case "HistoryPage":
      title = "History";
      break;
    case "ProfilePage":
      title = "Profile";
      break;
    default:
      break;
  }

  return <MyHeader title={title} />;
};

export default function TabNavigation({ navigation }) {
  return (
    <Tab.Navigator
      initialRouteName="HomePage"
      screenOptions={{
        header,
        tabBarInactiveTintColor: "#A8AABC",
        tabBarActiveTintColor: "#3E5BA6",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Octicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryPage}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Octicons name="history" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Salary"
        component={SalaryPage}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Octicons name="credit-card" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfilePage}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Octicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
