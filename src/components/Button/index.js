import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

export default function Button({ text, onPress, icon = null, ...rest }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} {...rest}>
      <Text style={styles.text}>{text}</Text>
      {icon}
    </TouchableOpacity>
  );
}
