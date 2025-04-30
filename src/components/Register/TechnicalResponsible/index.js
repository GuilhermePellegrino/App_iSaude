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

export default function TechnicalResponsibleForm({ onConfirm }) {
  const [selectedValue, setSelectedValue] = useState("");
  const [checked, setChecked] = useState(false);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [modalResponsibleIsVisible, setModalResponsibleIsVisible] =
    useState(false);

  return (
    <View style={{ gap: 20 }}>
      <Text style={{ fontSize: 12, color: COLORS.GRAY_TEXT }}>
        Nos ajude a conhecer quem lidera essa jornada! Informe os dados do
        responsável pela unidade.
      </Text>
      <View>
        <Text style={styles.label}>Nome Completo</Text>
        <TextInput
          style={styles.input}
          placeholder="Jamile Correa de Oliveira"
        />
      </View>
      <View>
        <Text style={styles.label}>CPF do Responsável</Text>
        <TextInput style={styles.input} placeholder="000.000.000-00" />
        <Text
          style={{
            fontSize: 12,
            marginTop: 5,
            color: COLORS.GRAY_TEXT,
            textDecorationLine: "underline",
          }}
          onPress={() => setModalIsVisible(true)}
        >
          Por que pedimos o CPF do Responsável?
        </Text>
      </View>
      <View>
        <Text style={styles.label}>Número de Registro Profissional</Text>
        <TextInput style={styles.input} placeholder="12345" />
        <Text
          style={{
            fontSize: 12,
            marginTop: 5,
            color: COLORS.GRAY_TEXT,
            textDecorationLine: "underline",
          }}
          onPress={() => setModalResponsibleIsVisible(true)}
        >
          Quem pode ser Responsável pela Unidade de Saúde?
        </Text>
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
      <Modal
        animationType="slide"
        visible={modalResponsibleIsVisible}
        onRequestClose={() => setModalResponsibleIsVisible(false)}
      >
        <SafeAreaView>
          <View style={{ gap: 20, paddingHorizontal: 15, paddingVertical: 40 }}>
            <Text style={{ fontSize: 18, fontWeight: 700 }}>
              Quem pode ser Responsável pela Unidade de Saúde?
            </Text>
            <Text style={{ fontSize: 12, color: COLORS.GRAY_TEXT }}>
              - Clínicas Médicas: Médico com registro ativo no CRM e RQE em caso
              de Clínica Especializada.
            </Text>
            <Text style={{ fontSize: 12, color: COLORS.GRAY_TEXT }}>
              - Clínicas Odontológicas: Cirurgião-dentista com registro ativo no
              CRO.
            </Text>
            <Text style={{ fontSize: 12, color: COLORS.GRAY_TEXT }}>
              - Laboratórios de Análises Clínicas: Médico patologista (CRM),
              Bioquímico (CRB), Biomédico (CRBM), ou Biólogo (CRBio).
            </Text>
            <Text style={{ fontSize: 12, color: COLORS.GRAY_TEXT }}>
              - Clínicas de Nutrição: Nutricionista com registro ativo no CRN.
            </Text>
            <Text style={{ fontSize: 12, color: COLORS.GRAY_TEXT }}>
              - Consultórios de Psicologia: Psicólogo com registro ativo no CRP.
            </Text>
            <Text style={{ fontSize: 12, color: COLORS.GRAY_TEXT }}>
              - Clínicas de Fisioterapia: Fisioterapeuta com registro ativo no
              CREFITO.
            </Text>
            <Text style={{ fontSize: 12, color: COLORS.GRAY_TEXT }}>
              - Clínicas de Fonoaudiologia: Fonoaudiólogo com registro ativo no
              CRFa.
            </Text>
            <Text style={{ fontSize: 12, color: COLORS.GRAY_TEXT }}>
              Dúvidas? Consulte o site do conselho da sua categoria.
            </Text>

            <Button
              text="Entendi"
              onPress={() => setModalResponsibleIsVisible(false)}
            />
          </View>
        </SafeAreaView>
      </Modal>
      <Modal
        animationType="slide"
        visible={modalIsVisible}
        onRequestClose={() => setModalIsVisible(false)}
      >
        <SafeAreaView>
          <View style={{ gap: 20, paddingHorizontal: 15, paddingVertical: 40 }}>
            <Text style={{ fontSize: 18, fontWeight: 700 }}>
              Sua segurança em primeiro lugar!
            </Text>
            <Text style={{ fontSize: 12, color: COLORS.GRAY_TEXT }}>
              Para proteger cada etapa da sua jornada, solicitamos seu CPF por 3
              motivos muito importantes:
            </Text>
            <Text style={{ fontSize: 12, color: COLORS.GRAY_TEXT }}>
              1. Validar sua identidade com segurança durante consultas e
              procedimentos médicos.
            </Text>
            <Text style={{ fontSize: 12, color: COLORS.GRAY_TEXT }}>
              2. Garantir transparência na emissão de notas fiscais para exames,
              medicamentos e serviços.
            </Text>
            <Text style={{ fontSize: 12, color: COLORS.GRAY_TEXT }}>
              3. Assegurar a integridade das transações e dos seus dados
              pessoais.
            </Text>
            <Text style={{ fontSize: 12, color: COLORS.GRAY_TEXT }}>
              Assim, mantemos um ambiente confiável e transparente para você e
              toda nossa comunidade.
            </Text>
            <Text style={{ fontSize: 12, color: COLORS.GRAY_TEXT }}>
              Fique tranquilo(a)! Seus dados são protegidos com os mais altos
              padrões de segurança, e usaremos essas informações apenas para seu
              benefício.
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

  modalBox: {
    width: 280,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
    elevation: 6,
  },
});
