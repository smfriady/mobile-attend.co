import { useToast } from "react-native-toast-notifications";

function useToaster() {
  const toast = useToast();

  const showToast = ({ type = "success", val = "successfully" }) => {
    toast.show(val, { type });
  };
  return { showToast };
}

export default useToaster;
