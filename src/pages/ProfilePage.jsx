import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { logoutEmployee } from "../store/actions/actions";
import useToaster from "../helpers/toast";

export default function ProfilePage({ navigation }) {
  const profile = useSelector((state) => state.profile);
  const dispath = useDispatch();
  const { showToast } = useToaster();

  const handleLogout = () => {
    dispath(logoutEmployee())
      .then(() => {
        showToast({ val: "Logout successfully" });
        navigation.navigate("LoginPage");
      })
      .catch((err) => showToast({ val: "You're not login", type: "danger" }));
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#EAEEFF", flex: 1}}>
      <View style={{ alignItems: "center", marginTop: 30 }}>
        <Image
          source={{
            uri: profile.imgProfile,
          }}
          style={{ height: 150, width: 150, borderRadius: "50%" }}
        />
        <Text style={{ marginVertical: 10, fontSize: 20, fontWeight: "bold" }}>
          {profile.firstName} {profile.lastName}
        </Text>
        <Text style={{ fontSize: 16 }}>{profile?.Department?.name}</Text>
      </View>
      <View
        style={{
          alignItems: "flex-start",
          marginHorizontal: 35,
          marginVertical: 24,
          borderRadius: 12,
          backgroundColor: "#878EBA",
        }}
      >
        <Text style={styles.text}>NIK : {profile.nik}</Text>
        <Text style={styles.text}>EMAIL : {profile.email}</Text>
        <Text style={styles.text}>ROLE : {profile?.Role?.name}</Text>
        <Text style={styles.text}>EDUCATION : {profile.education}</Text>
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
    marginVertical: 16,
    marginHorizontal: 16,
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold"
  },
});
