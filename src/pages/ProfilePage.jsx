import {
  View,
  Text,
  Button,
  Image,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useDispatch } from "react-redux";
import { logoutEmployee } from "../store/actions/actions";

export default function ProfilePage({ navigation }) {
  const dispath = useDispatch();

  const handleLogout = () => {
    dispath(logoutEmployee())
      .then(() => navigation.navigate("LoginPage"))
      .catch((err) => console.log(err));
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#F7F8FF" }}>
      <View style={{ alignItems: "center", marginTop: 30 }}>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
          }}
          style={{ height: 150, width: 150 }}
        />
        <Text style={{ marginVertical: 10, fontSize: 20, fontWeight: "bold" }}>
          Name
        </Text>
        <Text style={{ fontSize: 16 }}>Division</Text>
      </View>
      <View
        style={{
          alignItems: "flex-start",
          marginHorizontal: 35,
          marginVertical: 25,
        }}
      >
        <Text style={styles.text}>NIK : </Text>
        <Text style={styles.text}>AGE : </Text>
        <Text style={styles.text}>EDUCATION : </Text>
        <Text style={styles.text}>ADDRESS : </Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "#3E5BA6",
          marginHorizontal: 35,
          borderRadius: 10,
          paddingVertical: 15,
        }}
        onPress={handleLogout}
      >
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          Logout
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    marginVertical: 5,
    fontSize: 16,
  },
});
