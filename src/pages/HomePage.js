import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  StyleSheet,
} from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Table, Row } from "react-native-table-component";

export default function HomePage({ navigation }) {
  const tableHead = [
    "No",
    "Date",
    "Nik",
    "Type",
    "Description",
    "Shift",
    "Time in",
    "Time out",
  ];

  const widthArr = [100, 100, 100, 150, 150, 100, 100, 100];

  const tableData = [
    [
      "Monday, 01-20-2020",
      "EM-120988",
      "Attended",
      "-",
      "AK-401 \n(00:00 - 08:00)",
      "00:15",
      "08:15",
    ],
    [
      "Monday, 01-20-2020",
      "EM-120988",
      "Sick",
      "Cold and flue",
      "AK-401 \n(00:00 - 08:00)",
      "-",
      "-",
    ],
    [
      "Monday, 01-20-2020",
      "EM-120988",
      "Paid Leave",
      "Marry",
      "AK-401 \n(00:00 - 08:00)",
      "-",
      "-",
    ],
    [
      "Monday, 01-20-2020",
      "EM-120988",
      "Permit",
      "Accident",
      "AK-401 \n(00:00 - 08:00)",
      "-",
      "-",
    ],
    [
      "Monday, 01-20-2020",
      "EM-120988",
      "Attended",
      "-",
      "AK-401 \n(00:00 - 08:00)",
      "00:15",
      "08:15",
    ],
  ];

  const goToFormAttend = () => {
    navigation.navigate("AttendForm");
  };
  const goToFormPermit = () => {
    navigation.navigate("PermitForm");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F7F8FF" }}>
      <View style={{ margin: 30 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 15,
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
              }}
              style={{ height: 50, width: 50, marginRight: 10 }}
            />
            <View>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  letterSpacing: 2,
                  color: "#444655",
                }}
              >
                Name
              </Text>
              <Text
                style={{ fontSize: 15, letterSpacing: 2, color: "#444655" }}
              >
                Division
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            width: "100%",
            height: 200,
            backgroundColor: "#3E5BA6",
            borderRadius: 15,
            overflow: "hidden",
            padding: 10,
            paddingHorizontal: 20,
            marginBottom: 20,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16, color: "#F7F8FF" }}>
            Schedule
          </Text>
          <Text
            style={{ color: "#F7F8FF", fontStyle: "italic", marginBottom: 15 }}
          >
            AK-401 (Shift Name)
          </Text>

          <View style={{ flexDirection: "row", height: "65%" }}>
            <View
              style={{
                flex: 1,
                backgroundColor: "#878EBA",
                borderRadius: 10,
                overflow: "hidden",
                padding: 10,
                alignItems: "center",
                justifyContent: "center",
                marginRight: 10,
              }}
            >
              <Text
                style={{ fontWeight: "bold", fontSize: 20, color: "#F7F8FF" }}
              >
                In
              </Text>
              <Text
                style={{ fontWeight: "bold", fontSize: 30, color: "#F7F8FF" }}
              >
                00:00
              </Text>
            </View>

            <View
              style={{
                flex: 1,
                backgroundColor: "#878EBA",
                borderRadius: 10,
                overflow: "hidden",
                padding: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{ fontWeight: "bold", fontSize: 20, color: "#F7F8FF" }}
              >
                Out
              </Text>
              <Text
                style={{ fontWeight: "bold", fontSize: 30, color: "#F7F8FF" }}
              >
                08:00
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            width: "100%",
            height: 60,
            flexDirection: "row",
            marginBottom: 15,
          }}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#3E5BA6",
              padding: 10,
              paddingHorizontal: 20,
              borderRadius: 20,
              marginRight: 10,
            }}
            onPress={goToFormAttend}
          >
            <FontAwesome5 name="calendar-check" size={24} color="#F7F8FF" />
            <Text style={{ marginLeft: 10, color: "#F7F8FF" }}>
              Attend Work
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#3E5BA6",
              justifyContent: "center",
              padding: 10,
              paddingHorizontal: 20,
              borderRadius: 20,
            }}
            onPress={goToFormPermit}
          >
            <FontAwesome5 name="calendar-times" size={24} color="#F7F8FF" />
            <Text style={{ marginLeft: 10, color: "#F7F8FF" }}>
              Leave Permit
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: 380 }}>
          <Text
            style={{
              fontSize: 20,
              color: "#444655",
              fontWeight: "bold",
              letterSpacing: 2,
              marginBottom: 10,
            }}
          >
            History List
          </Text>
          <ScrollView horizontal={true}>
            <View>
              <Table>
                <Row
                  data={tableHead}
                  widthArr={widthArr}
                  style={{
                    height: 40,
                    backgroundColor: "#878EBA",
                    alignItems: "center",
                    borderRadius: 10,
                  }}
                  textStyle={{
                    color: "#F7F8FF",
                    fontWeight: "bold",
                    textAlign: "center",
                    fontSize: 16,
                  }}
                />
              </Table>
              <ScrollView style={{ marginTop: -1 }}>
                <Table>
                  {tableData.map((el, i) => {
                    const styleColor =
                      i % 2
                        ? { backgroundColor: "#EAEEFF" }
                        : { backgroundColor: "#F7F8FF" };

                    return (
                      <Row
                        key={i}
                        data={[i + 1, ...tableData[i]]}
                        widthArr={widthArr}
                        textStyle={{
                          textAlign: "center",
                          color: "#3E5BA6",
                          fontWeight: "bold",
                        }}
                        style={{
                          ...styleColor,
                          marginVertical: 5,
                          borderRadius: 10,
                          padding: 5,
                        }}
                      />
                    );
                  })}
                </Table>
              </ScrollView>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  row: {
    height: 40,
    backgroundColor: "#E7E6E1",
  },
});
