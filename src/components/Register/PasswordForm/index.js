import { StyleSheet, Text, TextInput, View } from "react-native";
import COLORS from "../../../constants/colors";
import { Feather } from "@expo/vector-icons";
import Button from "../../Button";

export default function PasswordForm({ onConfirm }) {
  return (
    <View style={{ gap: 20 }}>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Crie uma senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha aqui"
          secureTextEntry
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Digite novamente a senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha aqui"
          secureTextEntry
        />
      </View>
      <Button
        text="Próximo"
        icon={<Feather name="arrow-right" size={18} color="white" />}
        onPress={onConfirm}
      />
    </View>
  );
}

const styles = StyleSheet.create({
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
});
