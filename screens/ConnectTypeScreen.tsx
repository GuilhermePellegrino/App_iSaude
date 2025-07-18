import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { NavigationProp } from "../types/navigation";

interface ConnectTypeScreenProps {
  navigation: NavigationProp;
}

export default function ConnectTypeScreen({ navigation }: ConnectTypeScreenProps) {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-2xl font-bold mb-8">Selecione seu tipo de usuário</Text>
      <TouchableOpacity
        className="bg-blue-500 rounded-lg p-4 mb-4 w-64"
        onPress={() => navigation.navigate("PatientDashboard")}
      >
        <Text className="text-white text-center text-lg">Paciente</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="bg-green-500 rounded-lg p-4 mb-4 w-64"
        onPress={() => navigation.navigate("ClinicianDashboard")}
      >
        <Text className="text-white text-center text-lg">Profissional de Saúde</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="bg-gray-700 rounded-lg p-4 mb-4 w-64"
        onPress={() => navigation.navigate("AdministrativeDashboard")}
      >
        <Text className="text-white text-center text-lg">Administrador</Text>
      </TouchableOpacity>
    </View>
  );
}
