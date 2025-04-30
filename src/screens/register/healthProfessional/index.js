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
import ProfesionalInformation from "../../../components/Register/ProfesionalInformation";

const namesDict = {
  0: "Vamos Criar sua Conta!",
  1: "Vamos manter você conectado(a)!",
  2: "Informações Profissionais",
  3: "Escolha seu nome de usuário!",
  4: "Agora vamos criar uma Senha!",
  5: "Foto de Perfil",
  6: "Cadastro Confirmado!",
};

const getNameByStep = (currentStep) => {
  return namesDict[currentStep] ?? "";
};

export default function HealtProfessionalRegister() {
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
        <Steps steps={["", "", "", "", ""]} currentStep={currentStep} />
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
          <ProfesionalInformation
            onConfirm={() => setCurrentStep((prev) => prev + 1)}
          />
        )}

        {currentStep === 3 && (
          <UsernameForm onConfirm={() => setCurrentStep((prev) => prev + 1)} />
        )}

        {currentStep === 4 && (
          <PasswordForm onConfirm={() => setCurrentStep((prev) => prev + 1)} />
        )}

        {currentStep === 5 && (
          <PictureForm onConfirm={() => setCurrentStep((prev) => prev + 1)} />
        )}

        {currentStep === 6 && (
          <ConfirmedRegistration
            onConfirm={() => navigation.navigate("Login")}
            isProfessional
          />
        )}
      </View>
    </SafeAreaView>
  );
}
