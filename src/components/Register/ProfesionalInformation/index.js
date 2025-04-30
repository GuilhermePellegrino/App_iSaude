import { useState } from "react";
import Button from "../../Button";
import {
  Modal,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import COLORS from "../../../constants/colors";
import RNPickerSelect from "react-native-picker-select";
import { Feather } from "@expo/vector-icons";

export default function ProfesionalInformation({ onConfirm }) {
  const [selectedValue, setSelectedValue] = useState("");
  const [checked, setChecked] = useState(false);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  return (
    <View style={{ gap: 20 }}>
      <Text style={{ fontSize: 12, color: COLORS.GRAY_TEXT }}>
        Vamos validar sua expertise! Para assegurar a segurança e credibilidade
        na comunidade i-saúde, precisamos confirmar suas credenciais
        profissionais.
      </Text>
      <View>
        <Text style={styles.label}>Qual sua área de atuaçãop?</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite a sua área de atuação"
        />
      </View>
      <View>
        <Text style={styles.label}>Número de registro pessoal</Text>
        <TextInput style={styles.input} placeholder="12345" />
        <Text
          style={{
            fontSize: 12,
            marginTop: 5,
            color: COLORS.GRAY_TEXT,
            textDecorationLine: "underline",
          }}
          onPress={() => setModalIsVisible(true)}
        >
          Por que pedimos essa informação?
        </Text>
      </View>
      <View>
        <Text style={styles.label}>Estado de atuação</Text>
        <RNPickerSelect
          onValueChange={setSelectedValue}
          placeholder={{ label: "Selecione uma opção...", value: null }}
          items={[{ label: "Brasil", value: "brasil" }]}
          value={selectedValue}
          style={{
            inputIOS: {
              borderWidth: 1,
              borderColor: "transparent",
              backgroundColor: COLORS.THIRD_GRAY,
              borderRadius: 12,
              paddingVertical: 12,
              paddingHorizontal: 8,
              fontSize: 16,
              color: COLORS.GRAY_TEXT,
            },
            inputAndroid: {
              borderWidth: 1,
              borderColor: "transparent",
              backgroundColor: COLORS.THIRD_GRAY,
              borderRadius: 12,
              paddingVertical: 12,
              paddingHorizontal: 8,
              fontSize: 16,
              color: COLORS.GRAY_TEXT,
            },
          }}
        />
      </View>
      <View>
        <Text style={styles.label}>Qual a sua especialidade?</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite a sua especialidade"
        />
      </View>

      <Button
        text="Próximo"
        icon={<Feather name="arrow-right" size={18} color="white" />}
        onPress={onConfirm}
      />
      <Modal
        animationType="slide"
        visible={modalIsVisible}
        onRequestClose={() => setModalIsVisible(false)}
      >
        <SafeAreaView>
          <View style={{ gap: 20, paddingHorizontal: 15, paddingVertical: 40 }}>
            <Text style={{ fontSize: 18, fontWeight: 700 }}>
              Por que o meu registro profissional é importante?
            </Text>
            <Text style={{ fontSize: 12, color: COLORS.GRAY_TEXT }}>
              Seu registro no conselho da sua categoria é a sua credencial para
              atuar com segurança e ética.
            </Text>
            <Text style={{ fontSize: 12, color: COLORS.GRAY_TEXT }}>
              Ele comprova sua qualificação, protege seus pacientes e garante
              que você faça parte de uma rede de profissionais comprometidos com
              a excelência.
            </Text>
            <Text style={{ fontSize: 18, fontWeight: 700 }}>
              Qual é o registro correto para a minha profissão?
            </Text>
            <Text style={{ fontSize: 12, color: COLORS.GRAY_TEXT }}>
              - Médicos: CRM (Conselho Regional de Medicina)
            </Text>
            <Text style={{ fontSize: 12, color: COLORS.GRAY_TEXT }}>
              - Enfermeiros e Técnicos de Enfermagem: COREN (Conselho Regional
              de Enfermagem)
            </Text>
            <Text style={{ fontSize: 12, color: COLORS.GRAY_TEXT }}>
              - Psicólogos: CRP (Conselho Regional de Psicologia)
            </Text>
            <Text style={{ fontSize: 12, color: COLORS.GRAY_TEXT }}>
              - Odontólogos: CRO (Conselho Regional de Odontologia)
            </Text>
            <Text style={{ fontSize: 12, color: COLORS.GRAY_TEXT }}>
              - Farmacêuticos: CRF (Conselho Regional de Farmácia)
            </Text>
            <Text style={{ fontSize: 12, color: COLORS.GRAY_TEXT }}>
              - Nutricionistas: CRN (Conselho Regional de Nutrição)
            </Text>
            <Text style={{ fontSize: 12, color: COLORS.GRAY_TEXT }}>
              - Fisioterapeutas: CREFITO (Conselho Regional de Fisioterapia e
              Terapia Ocupacional)
            </Text>
            <Text style={{ fontSize: 12, color: COLORS.GRAY_TEXT }}>
              - Fonoaudiólogos: CRFa (Conselho Regional de Fonoaudiologia)
            </Text>
            <Text style={{ fontSize: 12, color: COLORS.GRAY_TEXT }}>
              - Veterinários: CRMV (Conselho Regional de Medicina Veterinária)
            </Text>
            <Text style={{ fontSize: 12, color: COLORS.GRAY_TEXT }}>
              Dúvidas? Consulte o site do conselho da sua categoria.
            </Text>
            <Button text="Entendi" onPress={() => setModalIsVisible(false)} />
          </View>
        </SafeAreaView>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "nowrap",
    justifyContent: "space-between",
  },
  stepContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
  circle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#D8DCE5",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  activeCircle: {
    backgroundColor: "#537EE9",
  },
  completedCircle: {
    backgroundColor: "#01AEA4",
  },
  stepText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
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
  activeLabel: {
    color: "white",
  },
  line: {
    height: 2,
    width: 40,
    backgroundColor: "#D8DCE5",
    position: "absolute",
    left: 45,
    top: 16,
    zIndex: 0,
  },
  activeLine: {
    backgroundColor: "#537EE9",
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
  text: {
    flexShrink: 1,
  },
  link: {
    color: "#007AFF",
    textDecorationLine: "underline",
  },
});
