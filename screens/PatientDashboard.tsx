import React from "react";
import { ScrollView, SafeAreaView, Text, View, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { User, UserPlus, Calendar, Search, Pill, FileText, ClipboardList, Bell } from "lucide-react-native";

export default function PatientDashboard() {
  const menuItems = [
    { id: 1, label: "Perfil do Paciente", icon: User },
    { id: 2, label: "Agenda de Consultas", icon: Calendar },
    { id: 3, label: "Busca por Médicos", icon: Search },
    { id: 4, label: "Busca de Medicamentos", icon: Pill },
    { id: 5, label: "Prescrições e Receitas", icon: FileText },
    { id: 6, label: "Histórico de Consultas", icon: ClipboardList },
    { id: 7, label: "Feed Social", icon: UserPlus },
    { id: 8, label: "Notificações", icon: Bell },
  ];

  const handleMenuPress = (id: number) => {
    let message = "";
    switch(id) {
      case 1:
        message = "Perfil do Paciente selecionado";
        break;
      case 2:
        message = "Agenda de Consultas selecionada";
        break;
      case 3:
        message = "Busca por Médicos selecionada";
        break;
      case 4:
        message = "Busca de Medicamentos selecionada";
        break;
      case 5:
        message = "Prescrições e Receitas selecionadas";
        break;
      case 6:
        message = "Histórico de Consultas selecionado";
        break;
      case 7:
        message = "Feed Social selecionado";
        break;
      case 8:
        message = "Notificações selecionadas";
        break;
      default:
        message = "Opção desconhecida";
    }
    Alert.alert("Menu", message);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Dashboard do Paciente</Text>
      <ScrollView contentContainerStyle={styles.menuContainer}>
        {menuItems.map(({ id, label, icon: Icon }) => (
          <TouchableOpacity key={id} style={styles.menuItem} onPress={() => handleMenuPress(id)}>
            <Icon size={32} color="#4F46E5" />
            <Text style={styles.menuLabel}>{label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  menuContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  menuItem: {
    width: "48%",
    backgroundColor: "#EEF2FF",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    alignItems: "center",
  },
  menuLabel: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: "600",
    color: "#1E40AF",
    textAlign: "center",
  },
});
