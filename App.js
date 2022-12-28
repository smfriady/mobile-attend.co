import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./src/navigations/MainNavigation";
import { LogBox } from "react-native";

export default function App() {
  LogBox.ignoreLogs([
    "Warning: Failed prop type: Invalid prop `textStyle` of type `array` supplied to `Cell`, expected `object`.",
  ]);
  
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
}
