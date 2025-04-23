import { StyleSheet } from "react-native";
import COLORS from "../../constants/colors";

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  imageContainer: {
    alignItems: "center",
    width: "100%",
    flex: 0.8,
    justifyContent: "center",
    backgroundColor: COLORS.PRIMARY_BLUE,
  },
  formContainer: {
    flex: 1,
    backgroundColor: "white",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    width: "100%",
    marginTop: -20,
    paddingHorizontal: 15,
    paddingVertical: 30,
    gap: 30,
  },
  title: {
    fontSize: 18,
    fontWeight: 700,
  },
  subTitle: {
    fontSize: 12,
    color: COLORS.PRIMARY_GRAY,
  },
  inputsWrapper: {
    gap: 30,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: "transparent",
    backgroundColor: COLORS.THIRD_GRAY,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 8,
    fontSize: 16,
    color: COLORS.GRAY_TEXT,
  },
  forgotPasswordWrapper: {
    marginTop: 10,
    alignItems: "flex-end",
  },
  signUpWrapper: {
    alignItems: "center",
  },
  decoratedText: {
    textDecorationLine: "underline",
    textDecorationColor: COLORS.PRIMARY_BLUE,
    color: COLORS.PRIMARY_BLUE,
    fontWeight: 700,
  },
});

export default styles;
