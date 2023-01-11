import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import { Table, Row } from "react-native-table-component";
import { Picker } from "@react-native-picker/picker";
import CalendarPicker from "react-native-calendar-picker";
import { Modal, Portal, Provider } from "react-native-paper";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { formatterTable } from "../helpers/formatter";
import { fetchAttendance } from "../store/actions/actions";

const HistoryPage = () => {
  const dispatch = useDispatch();
  const [permitType, setPermitType] = useState("");
  const [date, setDate] = useState({
    selectedStartDate: null,
    selectedEndDate: null,
  });
  const [show, setShow] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);

  const showModal = () => setShow(true);
  const hideModal = () => setShow(false);
  const containerStyle = { backgroundColor: "white", padding: 20 };

  const onDateChange = (dateNow, type) => {
    if (type === "END_DATE") {
      setDate({
        ...date,
        selectedEndDate: dateNow,
      });
      setShowCalendar(false);
    } else {
      setDate({
        ...date,
        selectedStartDate: dateNow,
      });
    }
  };

  const clearFilter = () => {
    setDate({
      selectedStartDate: null,
      selectedEndDate: null,
    });
    setPermitType("");
    dispatch(fetchAttendance());
  };

  const startDate = date.selectedStartDate
    ? date.selectedStartDate.toISOString().slice(0, 10)
    : "-";

  const endDate = date.selectedEndDate
    ? date.selectedEndDate.toISOString().slice(0, 10)
    : "-";

  const attendance = useSelector((state) => state.attendance);
  // console.log("attendance", attendance);
  const attendanceFormatted = formatterTable(attendance);

  const submitFilter = () => {
    // console.log(permitType, date)
    const filter = {
      attendance_type: permitType,
      startDate: date.selectedStartDate,
      endDate: date.selectedEndDate
    };

    dispatch(fetchAttendance(filter));
  };

  const tableHead = ["No", "In", "Out", "Type", "Date"];
  const widthArr = [64, 84, 84, 150, 160];

  return (
    <Provider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#F7F8FF" }}>
        <View style={{ flex: 1, paddingVertical: 20, paddingHorizontal: 15 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                marginBottom: 15,
                color: "#3E5BA6",
              }}
            >
              History Page
            </Text>

            <View style={{ flexDirection: "row" }}>
              <Button title="Clear filter" onPress={clearFilter} />
              <Button title="Submit" onPress={submitFilter} />
            </View>
          </View>
          {/* filter type */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <Text style={{ fontSize: 16 }}>Filter Type: </Text>
            <View
              style={{
                borderWidth: 1,
                width: "63%",
                height: "70%",
                alignItems: "center",
                borderRadius: 5,
                borderColor: "#8c8c8c",
              }}
            >
              <Text>{permitType}</Text>
            </View>

            <Button title="Select" onPress={showModal} color="#3E5BA6" />
          </View>

          {/* filter date */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <Text style={{ fontSize: 16 }}>Filter Date: </Text>
            <View
              style={{
                borderWidth: 1,
                width: "63%",
                height: "70%",
                alignItems: "center",
                borderRadius: 5,
                borderColor: "#8c8c8c",
              }}
            >
              <Text>{startDate + " until " + endDate}</Text>
            </View>

            <Button
              title="Select"
              onPress={() => setShowCalendar(true)}
              color="#3E5BA6"
            />
          </View>

          {showCalendar ? (
            <CalendarPicker
              startFromMonday={true}
              allowRangeSelection={true}
              todayBackgroundColor="#f2e6ff"
              selectedDayColor="#7300e6"
              selectedDayTextColor="#FFFFFF"
              onDateChange={onDateChange}
            />
          ) : (
            ""
          )}

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
                <Picker.Item label="Paid Leave" value="paid leave" />
                <Picker.Item label="Sick" value="sick" />
                <Picker.Item label="Permit" value="permit" />
                <Picker.Item label="Attendance" value="attendance" />
              </Picker>
              <Button title="Close" onPress={hideModal}></Button>
            </Modal>
          </Portal>
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
                          paddingVertical: 8,
                        }}
                      />
                    );
                  })}
                </Table>
              </ScrollView>
            </View>
          </ScrollView>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Button title="Previous" color={"#3E5BA6"} />
            <Button title="1" color={"#3E5BA6"} />
            <Button title="2" color={"#3E5BA6"} />
            <Button title="3" color={"#3E5BA6"} />
            <Button title="Next" color={"#3E5BA6"} />
          </View>
        </View>
      </SafeAreaView>
    </Provider>
  );
};

export default HistoryPage;
