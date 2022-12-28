import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { createRef, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function LoginPage({ navigation }) {
  const [onFocus, setOnFocus] = useState("");

  const handleSubmit = () => {
    navigation.navigate("TabNavigation");
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F7F8FF",
      }}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={{
              uri: "https://w7.pngwing.com/pngs/970/916/png-transparent-man-sitting-infront-of-laptop-logo-time-and-attendance-payroll-human-resource-management-human-resources-business-paycheck-payroll-services-icon-miscellaneous-logo-project-management.png",
            }}
            style={styles.logo}
          />
          <Text style={styles.headerText}>Attend.co</Text>
        </View>
        <Text style={styles.singInText}>Sign in to Continue</Text>

        {/* Inputs */}
        <View
          style={
            onFocus !== "email"
              ? styles.input
              : { ...styles.input, borderWidth: 1, borderColor: "#3E5BA6" }
          }
        >
          <View style={{ width: "89%" }}>
            <Text
              style={
                onFocus !== "email"
                  ? { color: "#3E5BA6", fontWeight: "bold", opacity: 0.6 }
                  : { color: "#3E5BA6", fontWeight: "bold", opacity: 1 }
              }
            >
              Email
            </Text>
            <TextInput
              spellCheck={false}
              selectionColor="#3E5BA6"
              placeholder="Enter your email..."
              onFocus={() => {
                setOnFocus("email");
              }}
            />
          </View>
          <View
            style={{
              width: 1,
              height: "100%",
              backgroundColor: "#3E5BA6",
              marginHorizontal: 5,
            }}
          ></View>
          <View
            style={{
              width: "10%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MaterialIcons
              name="email"
              size={24}
              color={onFocus !== "email" ? "#878EBA" : "#3E5BA6"}
            />
          </View>
        </View>

        <View
          style={
            onFocus !== "password"
              ? styles.input
              : { ...styles.input, borderWidth: 1, borderColor: "#3E5BA6" }
          }
        >
          <View style={{ width: "89%" }}>
            <Text
              style={
                onFocus !== "password"
                  ? { color: "#3E5BA6", fontWeight: "bold", opacity: 0.6 }
                  : { color: "#3E5BA6", fontWeight: "bold", opacity: 1 }
              }
            >
              Password
            </Text>
            <TextInput
              spellCheck={false}
              selectionColor="#3E5BA6"
              placeholder="Enter your password..."
              secureTextEntry={true}
              onFocus={() => {
                setOnFocus("password");
              }}
            />
          </View>
          <View
            style={{
              width: 1,
              height: "100%",
              backgroundColor: "#3E5BA6",
              marginHorizontal: 5,
            }}
          ></View>
          <View
            style={{
              width: "10%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MaterialCommunityIcons
              name="form-textbox-password"
              size={24}
              color={onFocus !== "password" ? "#878EBA" : "#3E5BA6"}
            />
          </View>
        </View>

        <TouchableOpacity
          style={{
            width: "100%",
            backgroundColor: "#3E5BA6",
            borderRadius: 50,
            marginVertical: 20,
            paddingVertical: 20,
            alignItems: "center",
          }}
          onPress={handleSubmit}
        >
          <Text
            style={{ fontWeight: "bold", letterSpacing: 3, color: "white" }}
          >
            Login
          </Text>
        </TouchableOpacity>

        <Button title="Forgot password?" color="#3E5BA6" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "60%",
    width: "85%",
    alignItems: "center",
  },
  logo: {
    height: 50,
    width: 50,
    marginRight: 15,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 35,
    color: "#3E5BA6",
    letterSpacing: 2,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  singInText: {
    marginVertical: 30,
    fontWeight: "bold",
    fontSize: 25,
    color: "#3E5BA6",
  },
  input: {
    width: "100%",
    marginVertical: 10,
    backgroundColor: "#E3ECFF",
    padding: 20,
    borderRadius: 10,
    flexDirection: "row",
  },
});
