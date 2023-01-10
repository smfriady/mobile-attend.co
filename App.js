import { Provider } from "react-redux";
import store from "./src/store";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./src/navigations/MainNavigation";
import { LogBox } from "react-native";
import * as TaskManager from "expo-task-manager";
import * as Location from "expo-location";
import { useEffect } from "react";

export default function App() {
  LogBox.ignoreLogs([
    "Warning: Failed prop type: Invalid prop `textStyle` of type `array` supplied to `Cell`, expected `object`.",
  ]);

  const locationPermission = async () => {
    const { status: foregroundStatus } =
      await Location.requestForegroundPermissionsAsync();

    if (foregroundStatus === "granted") {
      const { status: backgroundStatus } =
        await Location.requestBackgroundPermissionsAsync();
      if (backgroundStatus === "granted") {
        await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
          accuracy: Location.Accuracy.Balanced,
        });
      } else {
        // setErrorMsg("Permission to access Background location was denied");
      }
    } else {
      // setErrorMsg("Permission to access Foreground location was denied");
    }
  };

  useEffect(() => {
    locationPermission();
  }, []);

  let region = {
    identifier: 1,
    latitude: 51.5572754,
    longitude: -0.2702119,
    radius: 10,
  };
  Location.startGeofencingAsync("LOCATION_GEOFENCE", [region]);

  TaskManager.defineTask(
    "LOCATION_GEOFENCE",
    ({ data: { eventType, region }, error }) => {
      if (error) {
        // check `error.message` for more details.
        return;
      }
      if (eventType === Location.GeofencingEventType.Enter) {
        alert("enter in region!");
        console.log("You've entered region:", region);
      } else if (eventType === Location.GeofencingEventType.Exit) {
        console.log("You've left region:", region);
      }
    }
  );

  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </Provider>
  );
}
