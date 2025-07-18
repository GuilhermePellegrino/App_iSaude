import React from "react";
import { ScrollView, SafeAreaView, Text, View } from "react-native";

export default function AdministrativeDashboard() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 16 }}>Dashboard Administrativo</Text>

        <View style={{ marginBottom: 24 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 8 }}>🧾 Visão Geral</Text>
          <Text>- N° total de usuários (pacientes e profissionais)</Text>
          <Text>- Consultas realizadas no dia/mês</Text>
          <Text>- Consultas pendentes ou canceladas</Text>
          <Text>- Médicos ativos/inativos</Text>
          <Text>- Novos cadastros no período</Text>
        </View>

        <View style={{ marginBottom: 24 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 8 }}>📊 Relatórios Gerenciais (com Recharts)</Text>
          <Text>- Gráficos de especialidades mais buscadas</Text>
          <Text>- Horários com maior demanda</Text>
          <Text>- Médicos com mais atendimentos</Text>
          <Text>- Feedbacks positivos x negativos</Text>
          <Text>- Farmácia: medicamentos mais buscados</Text>
        </View>

        <View style={{ marginBottom: 24 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 8 }}>👥 Gerenciamento de Usuários (CRUD)</Text>
          <Text>- Pacientes</Text>
          <Text>- Profissionais de saúde</Text>
          <Text>- Clínicas</Text>
          <Text>- Moderadores e suporte técnico</Text>
        </View>

        <View style={{ marginBottom: 24 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 8 }}>📝 Moderação de Conteúdo (Feed Social)</Text>
          <Text>- Aprovar/rejeitar posts</Text>
          <Text>- Gerenciar comentários e denúncias</Text>
        </View>

        <View style={{ marginBottom: 24 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 8 }}>📬 Feedbacks e Suporte</Text>
          <Text>- Central de mensagens dos usuários</Text>
          <Text>- Análise de satisfação dos pacientes</Text>
          <Text>- Resposta rápida e atribuição a agentes</Text>
        </View>

        <View style={{ marginBottom: 24 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 8 }}>🔧 Configurações Avançadas</Text>
          <Text>- Integrações com APIs externas (Farmácias, Calendário, E-mail)</Text>
          <Text>- Modelos de e-mail e notificação</Text>
          <Text>- Métodos de pagamento e repasse médico</Text>
          <Text>- Políticas da plataforma e termos de uso</Text>
        </View>

        <View style={{ marginBottom: 24 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 8 }}>📡 Monitoramento em Tempo Real</Text>
          <Text>- Usuários online</Text>
          <Text>- Agendamentos sendo feitos</Text>
          <Text>- Erros, lentidão ou falhas</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
