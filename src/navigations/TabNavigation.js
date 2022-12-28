import React from "react";
import HomePage from "../pages/HomePage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getHeaderTitle } from "@react-navigation/elements";
import MyHeader from "../components/MyHeader";
import { Text } from "react-native";
import { Octicons } from "@expo/vector-icons";

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

export default function TabNavigation() {
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
        name="HomePage"
        component={HomePage}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Octicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="HistoryPage"
        component={() => <Text>History</Text>}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Octicons name="history" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfilePage"
        component={() => <Text>Profile</Text>}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Octicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
