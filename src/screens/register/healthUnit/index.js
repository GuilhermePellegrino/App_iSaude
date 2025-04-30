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
import HealthUnitForm from "../../../components/Register/HealthUnitForm";
import TechnicalResponsibleForm from "../../../components/Register/TechnicalResponsible";
import LocationForm from "../../../components/Register/LocationForm";

const namesDict = {
  0: "Cadastre sua Unidade de Saúde",
  1: "Quem é o Responsável Técnico?",
  2: "Onde está sua Clínica?",
  3: "Vamos manter sua Clínica conectada!",
  4: "Escolha um nome de usuário! ",
  5: "Agora vamos criar uma Senha!",
  6: "Foto de Perfil",
  6: "Cadastro confirmado!",
};

const getNameByStep = (currentStep) => {
  return namesDict[currentStep] ?? "";
};

export default function HealthUnitRegister() {
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
        <Steps steps={["", "", "", "", "", ""]} currentStep={currentStep} />
      </View>
      <View
        style={{
          paddingHorizontal: 15,
        }}
      >
        {currentStep === 0 && (
          <HealthUnitForm
            onConfirm={() => setCurrentStep((prev) => prev + 1)}
          />
        )}

        {currentStep === 1 && (
          <TechnicalResponsibleForm
            onConfirm={() => setCurrentStep((prev) => prev + 1)}
          />
        )}

        {currentStep === 2 && (
          <LocationForm onConfirm={() => setCurrentStep((prev) => prev + 1)} />
        )}

        {currentStep === 3 && (
          <ContactForm onConfirm={() => setCurrentStep((prev) => prev + 1)} />
        )}

        {currentStep === 4 && (
          <UsernameForm onConfirm={() => setCurrentStep((prev) => prev + 1)} />
        )}

        {currentStep === 5 && (
          <PasswordForm onConfirm={() => setCurrentStep((prev) => prev + 1)} />
        )}

        {currentStep === 6 && (
          <PictureForm onConfirm={() => setCurrentStep((prev) => prev + 1)} />
        )}

        {currentStep === 7 && (
          <ConfirmedRegistration
            onConfirm={() => navigation.navigate("Login")}
            isProfessional
          />
        )}
      </View>
    </SafeAreaView>
  );
}
