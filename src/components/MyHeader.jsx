import {
  Text,
  SafeAreaView,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function MyHeader({ title, style }) {
  const navigate = useNavigation();
  return (
    <SafeAreaView>
      <View
        style={{
          paddingHorizontal: 40,
          paddingVertical: 12,
          borderBottomWidth: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>{title}</Text>
        
      </View>
    </SafeAreaView>
  );
}
