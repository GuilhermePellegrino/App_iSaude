import React from "react";
import { ScrollView, SafeAreaView, Text, View } from "react-native";

export default function ClinicianDashboard() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 16 }}>Dashboard do Profissional</Text>

        <View style={{ marginBottom: 24 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 8 }}>👨‍⚕️ Perfil Profissional</Text>
          <Text>- CRM, especialidade, foto, clínicas associadas</Text>
        </View>

        <View style={{ marginBottom: 24 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 8 }}>📅 Agenda Interativa</Text>
          <Text>- Sincronização ao calendário nativo, drag & drop de horários, cancelamentos</Text>
        </View>

        <View style={{ marginBottom: 24 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 8 }}>✅ Consultas do Dia</Text>
          <Text>- Listagem por hora, paciente, clínica</Text>
        </View>

        <View style={{ marginBottom: 24 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 8 }}>🔎 Lista de Pacientes</Text>
          <Text>- Acesso ao histórico médico e arquivos enviados</Text>
        </View>

        <View style={{ marginBottom: 24 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 8 }}>🧾 Prescrição Digital</Text>
          <Text>- Criar e enviar receitas diretamente via sistema</Text>
        </View>

        <View style={{ marginBottom: 24 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 8 }}>🗣️ Mensagens com Pacientes</Text>
          <Text>- Mensagens pré-consulta ou pós</Text>
        </View>

        <View style={{ marginBottom: 24 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 8 }}>📈 Relatórios de Atendimentos</Text>
          <Text>- Quantidade de pacientes, retorno de consulta, especialidade mais agendada</Text>
        </View>

        <View style={{ marginBottom: 24 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 8 }}>🚀 Feed Médico</Text>
          <Text>- Visualizar e interagir com conteúdos postados na rede social</Text>
        </View>

        <View style={{ marginBottom: 24 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 8 }}>🔔 Notificações</Text>
          <Text>- Nova consulta, mensagem de paciente, feedback recebido</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
