import { StyleSheet } from "react-native";
import COLORS from "../../constants/colors";

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "white",
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 40,
    gap: 40,
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: 40,
  },
  textContainer: {
    gap: 10,
  },
  title: {
    color: COLORS.PRIMARY_BLACK,
    fontSize: 18,
    fontWeight: "700",
  },
  description: {
    color: COLORS.PRIMARY_GRAY,
    fontSize: 12,
  },
  secondaryButton: {
    width: "100%",
    backgroundColor: COLORS.THIRD_BLUE,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  secondaryButtonText: {
    color: COLORS.PRIMARY_BLUE,
  },
});

export default styles;
