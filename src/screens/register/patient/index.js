import { SafeAreaView, Text, View } from "react-native";
import { Steps } from "../../../components/Steps";
import { useState } from "react";

import PersonalInformationForm from "../../../components/Register/PersonalInformationForm";
import ContactForm from "../../../components/Register/ContactForm";
import UsernameForm from "../../../components/Register/UsernameForm";
import PictureForm from "../../../components/Register/PictureForm";

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
          <PictureForm onConfirm={() => setCurrentStep((prev) => prev + 1)} />
        )}
      </View>
    </SafeAreaView>
  );
}
