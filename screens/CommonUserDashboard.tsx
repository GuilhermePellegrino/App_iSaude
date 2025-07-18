import React from "react";
import { View, Text, SafeAreaView } from "react-native";

export default function CommonUserDashboard() {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Dashboard do Usuário Comum</Text>
      <Text>Bem-vindo ao painel do usuário comum.</Text>
    </SafeAreaView>
  );
}
