import React, { useState } from "react";
import { Button, Image, View, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useDispatch } from "react-redux";
import { createAttendance } from "../store/actions/actions";
import * as geolib from "geolib";
import { useToast } from "react-native-toast-notifications";

export default function ImagePickerExample({
  latitude,
  longitude,
  LATITUDE_COMPANY,
  LONGITUDE_COMPANY,
  navigation,
}) {
  const [image, setImage] = useState(null);
  const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();
  const dispatch = useDispatch();
  const toast = useToast();

  const pickImage = async () => {
    await requestPermission();

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleSubmit = () => {
    const distance = geolib.getDistance(
      { latitude, longitude },
      { latitude: LATITUDE_COMPANY, longitude: LONGITUDE_COMPANY }
    );
    if (distance < 100) {
      dispatch(
        createAttendance({
          latitude,
          longitude,
          attachment: image,
          attendanceType: "absent",
          checkInTime: new Date().toISOString(),
        })
      )
        .then(() => {
          toast.show(`Check in successfully`, {
            type: "success",
          });
          navigation.navigate("Home");
        })
        .catch(() =>
          toast.show(`You're already check in`, { type: "danger" })
        );
    } else {
      toast.show(`Can't check in, you're out of range!`, { type: "danger" });
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <TouchableOpacity
        style={{
          margin: 20,
          marginVertical: 30,
          backgroundColor: "#3E5BA6",
          borderRadius: 20,
          width: "80%",
        }}
      >
        <Button title="Upload Selfie" onPress={pickImage} color="#F6F8FF" />
      </TouchableOpacity>
      <View
        style={{
          height: 250,
          width: "80%",
          marginHorizontal: 20,
          overflow: "hidden",
          borderWidth: 1,
          borderRadius: 10,
          borderColor: "#878EBA",
          backgroundColor: "#A8AABC",
        }}
      >
        {image && <Image source={{ uri: image }} style={{ flex: 1 }} />}
      </View>
      <TouchableOpacity
        style={{
          width: 150,
          margin: 20,
          marginVertical: 30,
          backgroundColor: "#3E5BA6",
          borderRadius: 10,
        }}
      >
        <Button title="Submit" onPress={handleSubmit} color="#F6F8FF" />
      </TouchableOpacity>
    </View>
  );
}
