import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Steps } from "../../../components/Steps";
import { useState } from "react";
import COLORS from "../../../constants/colors";
import RNPickerSelect from "react-native-picker-select";
import Button from "../../../components/Button";
import { Feather } from "@expo/vector-icons";

const FirstStepForm = ({ setCurrentStep }) => {
  const [selectedValue, setSelectedValue] = useState("");
  const [checked, setChecked] = useState(false);

  return (
    <View style={{ gap: 20 }}>
      <Text style={{ fontSize: 12, color: COLORS.GRAY_TEXT }}>
        Primeiro, precisamos de algumas informações pessoais para fazer seu
        cadastro em nossa comunidade.
      </Text>
      <View>
        <Text style={styles.label}>Qual o seu nome completo?</Text>
        <TextInput style={styles.input} placeholder="Digite o seu nome" />
      </View>
      <View>
        <Text style={styles.label}>Qual o seu CPF?</Text>
        <TextInput style={styles.input} placeholder="Digite o seu CPF" />
        <Text
          style={{
            fontSize: 12,
            marginTop: 5,
            color: COLORS.GRAY_TEXT,
            textDecorationLine: "underline",
          }}
        >
          Por que pedimos seu CPF?
        </Text>
      </View>
      <View>
        <Text style={styles.label}>Qual opção melhor representa você?</Text>
        <RNPickerSelect
          onValueChange={setSelectedValue}
          placeholder={{ label: "Selecione uma opção...", value: null }}
          items={[
            { label: "Estudante", value: "student" },
            { label: "Professor", value: "teacher" },
            { label: "Profissional", value: "professional" },
          ]}
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
        <Text style={styles.label}>Data de nascimento</Text>
        <TextInput style={styles.input} placeholder="Digite o seu nome" />
      </View>
      <View style={{ flexDirection: "row" }}>
        <Pressable
          style={styles.checkboxContainer}
          onPress={() => setChecked(!checked)}
        >
          <View style={styles.checkbox}>
            {checked && <View style={styles.checkboxInner} />}
          </View>
          <Text style={styles.text}>
            Li e concordo com os <Text style={styles.link}>Termos de Uso</Text>{" "}
            e a <Text style={styles.link}>Política de Privacidade</Text>.
          </Text>
        </Pressable>
      </View>
      <Button
        text="Próximo"
        icon={<Feather name="arrow-right" size={18} color="white" />}
        onPress={() => setCurrentStep((prev) => prev + 1)}
      />
    </View>
  );
};

const SecondStepForm = ({ setCurrentStep }) => {
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
        onPress={() => setCurrentStep((prev) => prev + 1)}
      />
    </View>
  );
};

const ThirdStepForm = ({ setCurrentStep }) => {
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
        onPress={() => setCurrentStep((prev) => prev + 1)}
      />
    </View>
  );
};

export default function PatientRegister() {
  const [currentStep, setCurrentStep] = useState(0);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          paddingHorizontal: 15,
          paddingVertical: 40,
          gap: 20,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: 600 }}>
          Vamos criar sua conta!
        </Text>
        <Steps steps={["", "", "", ""]} currentStep={currentStep} />
      </View>
      <View
        style={{
          paddingHorizontal: 15,
        }}
      >
        {currentStep === 0 && <FirstStepForm setCurrentStep={setCurrentStep} />}
        {currentStep === 1 && (
          <SecondStepForm setCurrentStep={setCurrentStep} />
        )}
        {currentStep === 2 && <ThirdStepForm setCurrentStep={setCurrentStep} />}
      </View>
    </SafeAreaView>
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
