import {
  View,
  Text,
  SafeAreaView,
  Image,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  Button,
} from "react-native";
import React, { useState } from "react";
import location from "../assets/hacktivLoc.png";
import ImagePickerExample from "../components/ImagePicker";

export default function AttendForm() {
  const [loading, setLoading] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F7F8FF" }}>
      {loading ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size={"large"} />
        </View>
      ) : null}
      <View style={{ overflow: "hidden", height: 300 }}>
        <Image
          source={location}
          style={loading ? {} : { height: "200%", width: "100%", bottom: 150 }}
          onLoadStart={() => setLoading(true)}
          onLoadEnd={() => setLoading(false)}
        />
      </View>
      <ImagePickerExample />
    </SafeAreaView>
  );
}
