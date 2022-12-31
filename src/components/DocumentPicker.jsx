import { Button, View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import * as DocumentPicker from "expo-document-picker";
import { Modal, Portal } from "react-native-paper";

const DocumentPickerExample = () => {
  const [document, setDocument] = useState(null);
  const [show, setShow] = useState(false);
  const [permitType, setPermitType] = useState("");

  const showModal = () => setShow(true);
  const hideModal = () => setShow(false);
  const containerStyle = { backgroundColor: "white", padding: 20 };

  const pickDocument = async () => {
    const result = await DocumentPicker.getDocumentAsync({ type: "*/*" });

    if (result.type !== "cancel") {
      setDocument(result.name);
    }
  };

  const submit = () => {
    console.log("berhasil submit");
  };

  return (
    <>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          style={{
            margin: 20,
            marginTop: 30,
            backgroundColor: "#3E5BA6",
            borderRadius: 20,
            width: "80%",
          }}
        >
          <Button
            title="Upload document"
            onPress={pickDocument}
            color="#F6F8FF"
          />
        </TouchableOpacity>
        {document ? (
          <View
            style={{
              height: 32,
              width: "60%",
              marginHorizontal: 20,
              overflow: "hidden",
              borderWidth: 1,
              borderRadius: 10,
              borderColor: "#878EBA",
              backgroundColor: "#A8AABC",
            }}
          >
            <Text style={{ fontSize: 16, textAlign: "center", marginTop: 4 }}>
              {document}
            </Text>
          </View>
        ) : (
          <Text style={{ fontSize: 16 }}>
            You don't have a document to upload...
          </Text>
        )}
        <TouchableOpacity
          style={{
            margin: 20,
            marginTop: 30,
            backgroundColor: "#3E5BA6",
            borderRadius: 20,
            width: "80%",
          }}
        >
          <Button
            title="Choose your permit type"
            onPress={showModal}
            color="#F6F8FF"
          />
        </TouchableOpacity>
        {permitType ? (
          <View
            style={{
              height: 32,
              width: "40%",
              marginHorizontal: 20,
              overflow: "hidden",
              borderWidth: 1,
              borderRadius: 10,
              borderColor: "#878EBA",
              backgroundColor: "#A8AABC",
            }}
          >
            <Text style={{ fontSize: 16, textAlign: "center", marginTop: 4 }}>
              {permitType}
            </Text>
          </View>
        ) : (
          <Text style={{ fontSize: 16 }}>Choose your permit first...</Text>
        )}

        {/* for modal permit type */}
        <Portal>
          <Modal
            visible={show}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}
          >
            <Picker
              selectedValue={permitType}
              onValueChange={(itemValue) => setPermitType(itemValue)}
            >
              <Picker.Item label="Paid Leave" value="Paid Leave" />
              <Picker.Item label="Sick" value="Sick" />
              <Picker.Item label="Permit" value="Permit" />
            </Picker>
            <Button title="Close" onPress={hideModal}></Button>
          </Modal>
        </Portal>
        {/* end modal permit type */}
      </View>
      <View style={{ margin: 32 }}>
        <Text style={{ fontSize: 20 }}>Description</Text>
        <View
          style={{
            height: 240,
            marginTop: 12,
            overflow: "hidden",
            borderWidth: 1,
            borderRadius: 5,
            borderColor: "#878EBA",
            backgroundColor: "#A8AABC",
          }}
        >
          <TextInput
            multiline={true}
            numberOfLines={10}
            selectionColor="#3E5BA6"
            style={{ height: 240, textAlignVertical: "top", fontSize: 20 }}
          />
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          style={{
            width: 150,
            backgroundColor: "#3E5BA6",
            borderRadius: 10,
          }}
        >
          <Button title="Submit" onPress={submit} color="#F6F8FF" />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default DocumentPickerExample;
