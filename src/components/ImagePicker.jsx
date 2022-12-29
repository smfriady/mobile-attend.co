import React, { useState, useEffect } from "react";
import { Button, Image, View, Platform, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);
  const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();

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

  const submit = () => {
    console.log("berhasil submit");
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
        <Button title="Submit" onPress={submit} color="#F6F8FF" />
      </TouchableOpacity>
    </View>
  );
}
