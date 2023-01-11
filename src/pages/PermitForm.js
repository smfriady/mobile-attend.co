import { SafeAreaView } from "react-native";
import DocumentPickerExample from "../components/DocumentPicker";
import { Provider } from "react-native-paper";

const PermitForm = () => {
  return (
    <Provider>
      <SafeAreaView>
        <DocumentPickerExample />
      </SafeAreaView>
    </Provider>
  );
};

export default PermitForm;
