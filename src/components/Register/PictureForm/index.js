import { Image, Text, View } from "react-native";
import Button from "../../Button";
import { Feather } from "@expo/vector-icons";
import COLORS from "../../../constants/colors";

export default function PictureForm({ onConfirm }) {
  return (
    <View style={{ gap: 20, alignItems: "center" }}>
      <Image source={require("../../../../assets/foto-perfil.png")} />
      <Text style={{ fontWeight: 600 }}>@carlos.magno</Text>
      <Text style={{ fontSize: 18, fontWeight: 700 }}>
        Adicione uma foto de perfil
      </Text>
      <Text style={{ fontSize: 12, color: COLORS.GRAY_TEXT }}>(Opcional)</Text>
      <Text
        style={{ textAlign: "center", fontSize: 12, color: COLORS.GRAY_TEXT }}
      >
        Para que sua jornada aqui seja tão única quanto você, adicione uma foto
        de perfil.
      </Text>
      <Button
        text="Adicionar Foto"
        icon={<Feather name="arrow-right" size={18} color="white" />}
        onPress={onConfirm}
      />
      <Text
        style={{ fontSize: 14, color: COLORS.PRIMARY_BLUE, fontWeight: 700 }}
      >
        Deixar para depois
      </Text>
    </View>
  );
}
