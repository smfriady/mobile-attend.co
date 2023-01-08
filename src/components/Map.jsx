import React, { useEffect, useState } from "react";
import { Button, View, StyleSheet, Text, Dimensions } from "react-native";
import * as TaskManager from "expo-task-manager";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";

export default function Map() {
  const [location, setLocation] = useState(null);
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  // const [errorMsg, setErrorMsg] = useState(null);

  const { width, height } = Dimensions.get("window");

  const ASPECT_RATIO = width / height;
  const LATITUDE_DELTA = 0.0922;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

  const LOCATION_TASK_NAME = "background-location-task";

  TaskManager.defineTask(LOCATION_TASK_NAME, ({ data, error }) => {
    if (error) {
      // Error occurred - check `error.message` for more details.
      console.log(error);
      return;
    }
    
    if (data) {
      const { locations } = data;
      // do something with the locations captured in the background
      setLocation(locations);
    }
  });

  // const locationPermission = async () => {
  //   const { status: foregroundStatus } =
  //     await Location.requestForegroundPermissionsAsync();

  //   if (foregroundStatus === "granted") {
  //     const { status: backgroundStatus } =
  //       await Location.requestBackgroundPermissionsAsync();
  //     if (backgroundStatus === "granted") {
  //       await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
  //         accuracy: Location.Accuracy.Balanced,
  //       });
  //     } else {
  //       setErrorMsg("Permission to access Background location was denied");
  //     }
  //   } else {
  //     setErrorMsg("Permission to access Foreground location was denied");
  //   }
  // };

  const getPosition = async () => {
    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  };

  useEffect(() => {
    locationPermission();
  }, []);

  useEffect(() => {
    getPosition();
  }, []);

  useEffect(() => {
    if (location) {
      setPosition({
        latitude: location[0]?.coords.latitude,
        longitude: location[0]?.coords.longitude,
      });
    }
  }, [location]);

  //   console.log(location);
  // let text = "Waiting..";

  // if (errorMsg) {
  //   text = errorMsg;
  //   return (
  //     <View
  //       style={{
  //         width: "100%",
  //         justifyContent: "center",
  //         alignItems: "center",
  //       }}
  //     >
  //       <Text>{text}</Text>
  //     </View>
  //   );
  // }

  // [
  //   {
  //     coords: {
  //       accuracy: 5,
  //       altitude: 0,
  //       altitudeAccuracy: -1,
  //       heading: -1,
  //       latitude: -6.151561,
  //       longitude: 106.567459,
  //       speed: -1,
  //     },
  //     timestamp: 1673053633013.4702,
  //   }
  // ];

  if (position.latitude && position.longitude)
    return (
      <View>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: position.latitude,
            longitude: position.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
        >
          <Marker
            coordinate={{
              latitude: position.latitude,
              longitude: position.longitude,
            }}
          >
            <View style={styles.radius}>
              <View style={styles.marker} />
            </View>
          </Marker>
        </MapView>
      </View>
    );
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: 300,
  },
  radius: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    overflow: "hidden",
    backgroundColor: "rgba(0, 122, 255, 0.1)",
    borderWidth: 1,
    borderColor: "rgba(0, 112, 255, 0.3)",
    alignItems: "center",
    justifyContent: "center",
  },
  marker: {
    height: 20,
    width: 20,
    borderWidth: 3,
    borderColor: "white",
    borderRadius: 20 / 2,
    overflow: "hidden",
    backgroundColor: "#007AFF",
  },
});
