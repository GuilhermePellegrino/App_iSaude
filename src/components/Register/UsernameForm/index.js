import { StyleSheet, Text, TextInput, View } from "react-native";
import COLORS from "../../../constants/colors";
import { Feather } from "@expo/vector-icons";
import Button from "../../Button";

export default function UsernameForm({ onConfirm }) {
  return (
    <View style={{ gap: 20 }}>
      <Text style={{ fontSize: 12, color: COLORS.GRAY_TEXT }}>
        Seu Nome de Usuário será sua identidade única na comunidade. Lembre-se,
        ele pode ser uma mistura de letras, números e caracteres especiais. Não
        se preocupe, você pode alterá-lo a cada 14 dias.
      </Text>
      <View>
        <Text style={styles.label}>Nome de Usuário</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o seu nome de usuário"
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
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "#999",
    marginRight: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxInner: {
    width: 12,
    height: 12,
    backgroundColor: "#007AFF",
  },
  link: {
    color: "#007AFF",
    textDecorationLine: "underline",
  },
});
