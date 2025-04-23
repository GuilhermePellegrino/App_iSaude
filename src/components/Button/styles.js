import { StyleSheet } from "react-native";
import COLORS from "../../constants/colors";

const styles = StyleSheet.create({
  button: {
    width: "100%",
    backgroundColor: COLORS.PRIMARY_BLUE,
    padding: 15,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    flexDirection: "row",
  },
  text: {
    color: "white",
  },
});

export default styles;
