import { SafeAreaView, Text, View } from "react-native";
import { Steps } from "../../../components/Steps";
import { useState } from "react";

import PersonalInformationForm from "../../../components/Register/PersonalInformationForm";
import ContactForm from "../../../components/Register/ContactForm";
import UsernameForm from "../../../components/Register/UsernameForm";
import PictureForm from "../../../components/Register/PictureForm";
import { useNavigation } from "@react-navigation/native";
import ConfirmedRegistration from "../../../components/Register/ConfirmedRegistration";
import PasswordForm from "../../../components/Register/PasswordForm";

const namesDict = {
  0: "Vamos Criar sua Conta!",
  1: "Vamos manter você conectado(a)!",
  2: "Escolha seu nome de usuário!",
  3: "Agora vamos criar uma Senha!",
  4: "Foto de Perfil",
  5: "Cadastro Confirmado!",
};

const getNameByStep = (currentStep) => {
  return namesDict[currentStep] ?? "";
};

export default function PatientRegister() {
  const [currentStep, setCurrentStep] = useState(0);

  const navigation = useNavigation();
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
          {getNameByStep(currentStep)}
        </Text>
        <Steps steps={["", "", "", ""]} currentStep={currentStep} />
      </View>
      <View
        style={{
          paddingHorizontal: 15,
        }}
      >
        {currentStep === 0 && (
          <PersonalInformationForm
            onConfirm={() => setCurrentStep((prev) => prev + 1)}
          />
        )}
        {currentStep === 1 && (
          <ContactForm onConfirm={() => setCurrentStep((prev) => prev + 1)} />
        )}
        {currentStep === 2 && (
          <UsernameForm onConfirm={() => setCurrentStep((prev) => prev + 1)} />
        )}

        {currentStep === 3 && (
          <PasswordForm onConfirm={() => setCurrentStep((prev) => prev + 1)} />
        )}

        {currentStep === 4 && (
          <PictureForm onConfirm={() => setCurrentStep((prev) => prev + 1)} />
        )}

        {currentStep === 5 && (
          <ConfirmedRegistration
            onConfirm={() => navigation.navigate("Login")}
          />
        )}
      </View>
    </SafeAreaView>
  );
}
