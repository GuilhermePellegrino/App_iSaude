import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

export default function Button({
  text,
  onPress,
  icon = null,
  additionalStyles = {},
  ...rest
}) {
  return (
    <TouchableOpacity
      style={{ ...styles.button, ...additionalStyles }}
      onPress={onPress}
      {...rest}
    >
      <Text style={styles.text}>{text}</Text>
      {icon}
    </TouchableOpacity>
  );
}
