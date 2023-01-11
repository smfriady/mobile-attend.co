import { View, SafeAreaView, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import ImagePickerExample from "../components/ImagePicker";
import Map from "../components/Map";

export default function AttendForm({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const LATITUDE_COMPANY = -6.260708682144789;
  const LONGITUDE_COMPANY = 106.78154752570748;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F7F8FF" }}>
      {loading ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size={"large"} />
        </View>
      ) : null}
      <Map
        setLatitude={setLatitude}
        setLongitude={setLongitude}
        LATITUDE_COMPANY={LATITUDE_COMPANY}
        LONGITUDE_COMPANY={LONGITUDE_COMPANY}
      />
      <ImagePickerExample
        latitude={latitude}
        longitude={longitude}
        navigation={navigation}
        LATITUDE_COMPANY={LATITUDE_COMPANY}
        LONGITUDE_COMPANY={LONGITUDE_COMPANY}
      />
    </SafeAreaView>
  );
}

// seeding history
