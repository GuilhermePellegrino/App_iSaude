import React from "react";
import {
  ScrollView,
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  View,
  Dimensions,
} from "react-native";
import {
  User,
  Calendar,
  CheckCircle,
  List,
  FileText,
  MessageCircle,
  BarChart2,
  UserPlus,
  Bell,
} from "lucide-react-native";

const windowWidth = Dimensions.get("window").width;

export default function ProfessionalDashboard() {
  const menuItems = [
    { id: 1, label: "Perfil", icon: User },
    { id: 2, label: "Agenda", icon: Calendar },
    { id: 3, label: "Consultas", icon: CheckCircle },
    { id: 4, label: "Pacientes", icon: List },
    { id: 5, label: "Prescrições", icon: FileText },
    { id: 6, label: "Mensagens", icon: MessageCircle },
    { id: 7, label: "Relatórios", icon: BarChart2 },
    { id: 8, label: "Feed", icon: UserPlus },
    { id: 9, label: "Notificações", icon: Bell },
  ];

  const handleMenuPress = (id: number) => {
    const messages = {
      1: "Perfil Profissional selecionado",
      2: "Agenda Interativa selecionada",
      3: "Consultas do Dia selecionadas",
      4: "Lista de Pacientes selecionada",
      5: "Prescrição Digital selecionada",
      6: "Mensagens com Pacientes selecionadas",
      7: "Relatórios de Atendimentos selecionados",
      8: "Feed Médico selecionado",
      9: "Notificações selecionadas",
    };
    Alert.alert("Menu", messages[id] || "Opção desconhecida");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Dashboard do Profissional</Text>
      <ScrollView contentContainerStyle={styles.grid}>
        {menuItems.map(({ id, label, icon: Icon }) => (
          <TouchableOpacity
            key={id}
            style={styles.menuButton}
            onPress={() => handleMenuPress(id)}
          >
            <Icon size={36} color="#4F46E5" />
            <Text style={styles.menuText}>{label}</Text>
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
    paddingTop: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#1E40AF",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    padding: 8,
  },
  menuButton: {
    width: windowWidth / 2.4,
    height: 110,
    backgroundColor: "#EEF2FF",
    marginVertical: 10,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  menuText: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: "600",
    color: "#1E40AF",
  },
});
