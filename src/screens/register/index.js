import { Image, SafeAreaView, Text, View } from "react-native";
import COLORS from "../../constants/colors";
import Button from "../../components/Button";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Register() {
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <View style={{ paddingHorizontal: 15, paddingVertical: 20, gap: 20 }}>
        <View>
          <Text style={{ fontSize: 18, fontWeight: 700 }}>Nova conta</Text>
          <Image source={require("../../../assets/imagem-registro.png")} />
        </View>
        <View style={{ gap: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: 700 }}>
            Seja Bem vindo(a)!
          </Text>
          <Text style={{ fontSize: 12, color: COLORS.GRAY_TEXT }}>
            No i-saúde unimos Profissionais de Saúde, Clinicas, Farmácias e
            Pacientes, proporcionando uma rede social de cuidados e bem estar
            para todos.
          </Text>
          <Text style={{ fontSize: 12, color: COLORS.GRAY_TEXT }}>
            Selecione abaixo como deseja fazer parte desta comunidade:
          </Text>
        </View>
        <View style={{ gap: 10 }}>
          <Button
            text="Continuar como Paciente"
            icon={<Feather name="arrow-right" size={18} color="white" />}
            additionalStyles={{ justifyContent: "space-between" }}
            onPress={() => navigation.navigate("Registro-Paciente")}
          />
          <Button
            text="Continuar como Profissional de Saúde"
            icon={<Feather name="arrow-right" size={18} color="white" />}
            additionalStyles={{
              justifyContent: "space-between",
              backgroundColor: "#7597ED",
            }}
          />
          <Button
            text="Continuar como Unidade de Saúde"
            icon={<Feather name="arrow-right" size={18} color="white" />}
            additionalStyles={{ justifyContent: "space-between" }}
          />
          <Button
            text="Continuar como Farmácia"
            icon={<Feather name="arrow-right" size={18} color="white" />}
            additionalStyles={{
              justifyContent: "space-between",
              backgroundColor: "#7597ED",
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
