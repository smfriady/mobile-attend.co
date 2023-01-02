import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  Table,
  Row,
  StyleSheet,
} from "react-native";

const HistoryPage = () => {
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
    ,
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
      "Attended",
      "-",
      "AK-401 \n(00:00 - 08:00)",
      "00:15",
      "08:15",
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
      "Attended",
      "-",
      "AK-401 \n(00:00 - 08:00)",
      "00:15",
      "08:15",
    ],
  ];
  
  return (
    <SafeAreaView>
      <Text>ini dari history page yuhuu</Text>
    </SafeAreaView>
  );
};

export default HistoryPage;
