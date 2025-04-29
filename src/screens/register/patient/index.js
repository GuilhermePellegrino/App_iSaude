import { SafeAreaView, Text, View } from "react-native";
import { Steps } from "../../../components/Steps";

export default function PatientRegister() {
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
        <Steps steps={["", "", "", ""]} />
      </View>
    </SafeAreaView>
  );
}
