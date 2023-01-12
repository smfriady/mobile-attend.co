import { SafeAreaView, Text, View, ScrollView } from "react-native";
import { Table, Row } from "react-native-table-component";
import { Provider } from "react-native-paper";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSalaries } from "../store/actions/actions";
import { formatterTable } from "../helpers/formatter";

const HistoryPage = () => {
  const [formattedSalary, setFormattedSalary] = useState([]);
  const dispatch = useDispatch();

  const salaries = useSelector((state) => state.salaries);

  useEffect(() => {
    dispatch(fetchSalaries());
  }, [dispatch]);

  useEffect(() => {
    setFormattedSalary(formatterTable(salaries));
  }, [salaries]);

  const tableHead = ["No", "Amount", "Payment Date", "Period Salary"];
  const widthArr = [60, 140, 130, 150];

  return (
    <Provider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#F7F8FF" }}>
        <View style={{ flex: 1, paddingVertical: 20, paddingHorizontal: 24 }}>
          <View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                marginBottom: 15,
                color: "#3E5BA6",
              }}
            >
              Payroll
            </Text>
          </View>
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
                  {formattedSalary.map((el, i) => {
                    const styleColor =
                      i % 2
                        ? { backgroundColor: "#EAEEFF" }
                        : { backgroundColor: "#F7F8FF" };

                    return (
                      <Row
                        key={i}
                        data={[i + 1, ...formattedSalary[i]]}
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
      </SafeAreaView>
    </Provider>
  );
};

export default HistoryPage;
