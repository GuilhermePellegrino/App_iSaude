import { StyleSheet, Text, TextInput, View } from "react-native";
import Button from "../../Button";
import COLORS from "../../../constants/colors";
import { Feather } from "@expo/vector-icons";

export default function ContactForm({ onConfirm }) {
  return (
    <View style={{ gap: 20 }}>
      <Text style={{ fontSize: 12, color: COLORS.GRAY_TEXT }}>
        Agora vamos definir algumas informações de contato! Insira seu melhor
        Email e um Número de Telefone para enviarmos um Código de Verificação
        para ativar sua conta.
      </Text>
      <View>
        <Text style={styles.label}>Seu melhor email?</Text>
        <TextInput style={styles.input} placeholder="Digite o seu email" />
      </View>
      <View>
        <Text style={styles.label}>Número de Telefone</Text>
        <TextInput style={styles.input} placeholder="(00) 00000-0000" />
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
