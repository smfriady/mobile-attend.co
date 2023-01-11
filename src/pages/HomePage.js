import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Table, Row } from "react-native-table-component";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAttendance,
  fetchEmployee,
  updateAttendance,
} from "../store/actions/actions";
import { formatterTable, formattedDate } from "../helpers/formatter";
import { useFocusEffect } from "@react-navigation/native";
import useToaster from "../helpers/toast";

export default function HomePage({ navigation }) {
  const [attendanceFormatted, setAttendanceFormatted] = useState([]);
  const dispatch = useDispatch();
  const { showToast } = useToaster();
  const attendance = useSelector((state) => state.attendance);
  const profile = useSelector((state) => state.profile);
  const longitude = useSelector((state) => state.long);
  const latidude = useSelector((state) => state.lat);

  const tableHead = ["No", "In", "Out", "Type"];
  const widthArr = [64, 86, 86, 128];

  const goToFormAttend = () => {
    navigation.navigate("AttendForm");
  };

  const handleSubmit = () => {
    dispatch(
      updateAttendance({
        longitude,
        latidude,
        attendanceType: "attendance",
        checkOutTime: new Date().toISOString(),
      })
    )
      .then(() => {
        showToast({ val: "Check out successfully! see you." });
      })
      .catch((err) => showToast({ val: "Check in first!", type: "danger" }));
  };

  useFocusEffect(
    useCallback(() => {
      dispatch(fetchAttendance());
      dispatch(fetchEmployee());
      dispatch(updateAttendance());
    }, [dispatch])
  );

  useEffect(() => {
    setAttendanceFormatted(formatterTable(attendance));
  }, [attendance]);

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
                uri: profile.imgProfile,
              }}
              style={{
                height: 50,
                width: 50,
                marginRight: 10,
                borderRadius: "50%",
              }}
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
                {profile.firstName} {profile.lastName}
              </Text>
              <Text
                style={{ fontSize: 15, letterSpacing: 2, color: "#444655" }}
              >
                {profile?.Department?.name}
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
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 16,
                color: "#F7F8FF",
                paddingBottom: 20,
                paddingTop: 12,
              }}
            >
              Time Attendance
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 12,
                color: "#F7F8FF",
                paddingBottom: 16,
                paddingTop: 8,
                marginLeft: 88,
                width: 120,
              }}
            >
              {formattedDate(new Date())}
            </Text>
          </View>
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
                Check In
              </Text>
              {attendanceFormatted.length > 0 &&
              attendanceFormatted[0][0] !== null &&
              new Date(attendance[0]?.checkInTime).getDate() ==
                new Date().getDate() ? (
                <>
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 30,
                      color: "#F7F8FF",
                    }}
                  >
                    {attendanceFormatted[0][0]}
                  </Text>
                </>
              ) : (
                <>
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 30,
                      color: "#F7F8FF",
                    }}
                  >
                    -:-
                  </Text>
                </>
              )}
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
                Check Out
              </Text>
              {attendanceFormatted.length > 0 &&
              attendanceFormatted[0][1] !== null ? (
                <>
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 30,
                      color: "#F7F8FF",
                    }}
                  >
                    {attendanceFormatted[0][1]}
                  </Text>
                </>
              ) : (
                <>
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 30,
                      color: "#F7F8FF",
                    }}
                  >
                    -:-
                  </Text>
                </>
              )}
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
            onPress={handleSubmit}
          >
            <FontAwesome5 name="calendar-times" size={24} color="#F7F8FF" />
            <Text style={{ marginLeft: 10, color: "#F7F8FF" }}>Leave Work</Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: 380 }}>
          <Text
            style={{
              fontSize: 20,
              color: "#444655",
              fontWeight: "bold",
              letterSpacing: 2,
              marginBottom: 12,
              marginTop: 16,
            }}
          >
            History
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
                  {attendanceFormatted.map((el, i) => {
                    if (i > 5) return <></>;
                    const styleColor =
                      i % 2
                        ? { backgroundColor: "#EAEEFF" }
                        : { backgroundColor: "#F7F8FF" };

                    return (
                      <Row
                        key={i}
                        data={[i + 1, ...attendanceFormatted[i]]}
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
                          paddingVertical: 10,
                          paddingHorizontal: 5,
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
